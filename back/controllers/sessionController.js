import bcrypt from 'bcrypt';
import emailValidator from 'email-validator';

import { Animal, Famille, Utilisateur, Association, Espece } from '../models/Models.js';
import { Op } from 'sequelize';

export const sessionController = {
    async displayLogin(req, res) {
        /* res.status(200).render("connexion"); */
    },

    async logIn(req,res) {    
        const {
            email, 
            mot_de_passe
        } = req.body

        if (!emailValidator.validate(email)) {
            const status = 401;
            const message = 'Identifiants incorrects. Merci de ré-essayer.';

            return res.status(status).json({ status, message });
        }

        const user = await Utilisateur.findOne({            
            where : {
                email: email
            },
            include : ['refuge','accueillant']
        })
        
        if (!user) {
            const status = 401;
            const message = 'Identifiants incorrects. Merci de ré-essayer.';

            return res.status(status).json({ status, message });
        }
        
        //* Bcrypt compare le hash du mot de passe récupéré depuis la requète avec celui en BDD
        const hasMatchingPassword = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
        
        if(!hasMatchingPassword) {
            const status = 401;
            const message = 'Identifiants incorrects. Merci de ré-essayer.';

            return res.status(status).json({ status, message });

        } else {  
            //* Check si user est association OU famille en vérifiant si les sous-champs id existent.
            //* Normalement l'include ne devrait renvoyer que l'un OU l'autre.
            //* On ajoute ensuite en session :
            //*     - loggedIn : true pour vérifier facilement si la session est celle d'un.e user logged in
            //*     - role : Pour vérifier le rôle du user et personnaliser l'affichage dans les vues accès restreint
            //*     - nom : pour afficher sur toutes les vues le nom du user
            //*     - id : Pour faciliter les futurs appels BDD pour afficher les infos des profils etc...
            let refugeId=null;
            let familleId=null;

            if (user.refuge) {
                refugeId = user.refuge.id;
                
            }
            if (user.accueillant) {
                familleId = user.accueillant.id;
            }
            
            if (refugeId != null) {
                user.loggedIn=true;
                req.session.loggedIn=true;
                user.role='association';
                req.session.role='association';
                user.nom=user.refuge.nom;
                user.userId=refugeId;
                req.session.userId=refugeId;
            }
            if (familleId != null ) {
                user.loggedIn=true;
                req.session.loggedIn=true;
                user.role='famille';
                req.session.role='famille';
                user.nom=user.accueillant.nom;
                user.prenom=user.accueillant.prenom;
                user.userId=familleId;
                req.session.userId=familleId
            }
            user.mot_de_passe = null;
        }
        return res.json(user);
    },
    
    async logOut(req,res) {
        req.session.destroy();
        /* res.redirect('/') */
    },
    
    async displayFosterSignIn(req,res) {
        res.render("inscriptionFamille")
    },
    
    async fosterSignIn(req,res) {    
        const { 
            prenom,
            nom, 
            email,
            telephone,
            hebergement,
            terrain,
            rue,
            commune,
            code_postal,
            pays, 
            mot_de_passe, 
            confirmation 
        } = req.body;

        const found = await Utilisateur.findOne( { where: {email: email} });

        if (!emailValidator.validate(email)) {
            const status = 401;
            const message = `Cet email n'est pas valide.`;

            return res.status(status).json({ status, message });
            /* req.flash('erreur', "Cet email n'est pas valide.");
            return res.redirect('/famille/inscription'); */
        }
        // verifier si password correspond à password confirm
        if (mot_de_passe !== confirmation) {
            const status = 401;
            const message = 'La confirmation du mot de passe ne correspond pas au mot de passe renseigné.';

            return res.status(status).json({ status, message });
            /* req.flash('erreur', 'La confirmation du mot de passe ne correspond pas au mot de passe renseigné.');
            return res.redirect('/famille/inscription'); */
        }
        
        if(found === null) {

            const hashedPassword = await bcrypt.hash(mot_de_passe, 8);
            console.log('HASH', hashedPassword);
            
            const newUser = await Utilisateur.create({
                email: email,
                mot_de_passe : hashedPassword,
            })
            console.log(newUser);
            await newUser.save();
            
            const newFoster = await Famille.create({
                prenom : prenom,
                nom : nom,
                telephone: telephone,
                hebergement: hebergement,
                terrain : terrain,
                rue: rue,
                commune : commune,
                code_postal: code_postal,
                pays: pays,
                utilisateur_id: newUser.id,
            });
            console.log(newFoster);
            await newFoster.save();
            /* res.redirect("/") */
            const status = 200
            const message = 'Inscription Correcte';

            return res.status(status).json({ status, message });
        } else {
            console.log(found);
            const status = 401;
            const message = 'Inscription incorrecte';

            return res.status(status).json({ status, message });
            req.flash('erreur', 'Inscription incorrecte');
            return res.redirect('/famille/inscription');
        }
    },

    async displayProfile(req, res, next){
        
        const familleId = req.session.userId;
        const famille = await Famille.findByPk(familleId, {
            include : 'identifiant_famille'
        });
        
        if( !famille) {
            next()
        };
        const especes = await Espece.findAll();

        /* res.render('profilFamilleInfos', { famille, especes }); */
        res.json(famille, especes)
    },

    async fosterUpdate(req,res, next) {
        /* const familleId = req.session.userId; */
        const familleId = req.body.id;
        console.log(familleId)
        const famille = await Famille.findByPk(familleId);
        
        if (!famille) {
            return next();
        }
        // Element à Update
        const { prenom, nom, telephone, rue, commune, code_postal, pays, hebergement, terrain } = req.body;
        const updatedFamille = await famille.update({
            prenom : prenom || famille.prenom,
            nom : nom || famille.nom,
            telephone : telephone || famille.telephone,
            rue : rue || famille.rue,
            commune : commune || famille.commune,
            code_postal : code_postal || famille.code_postal,
            pays : pays || famille.pays,
            hebergement : hebergement || famille.hebergement,
            terrain : terrain || famille.terrain,
        });
        console.log('success')
        console.log(updatedFamille);
        res.json(updatedFamille)
    }, 

    async fosterDestroy(req, res, next) {
        const familleId = req.session.userId;
        const famille = await Famille.findByPk(familleId);

        const user = await Utilisateur.findOne({
            where : { id: famille.utilisateur_id }
        })

        if (!famille || !user) {
            // Si pas entier ou pas existant dans la BDD => 404
            return next();
        };

        const fostered = Animal.findAll({
            where :  { famille_id : familleId } 
        })

        console.log('foster is' + fostered);

        if (fostered) {
            req.flash('erreur', 'Vous accueillez actuellement un animal. Merci de contacter le refuge concerné avant de supprimer votre compte !');
            return res.redirect('/famille/profil');
        }
        await famille.destroy();
        await user.destroy();
        req.session.destroy();
        res.redirect('/')
    },

    async displayRequest(req, res, next) {
        /* const familleId = req.session.userId; */
        const familleId = 2
        //! FIND THE SOURCE : FIX REQ.SESSION !//

        const famille = await Famille.findByPk(familleId, {
            include : 'identifiant_famille'
        });
        
        if( !famille) {
            next()
        };

        const requestedAnimals = await Animal.findAll({
            where : [
                { '$demandes.Demande.famille_id$' : familleId },
                { '$demandes.id$':  { [Op.not] : null }}
            ],
            include: [ "espece", "demandes", "refuge" ],
        })
        
        /* res.render('profilFamilleDemande', { famille, requestedAnimals }); */
        res.json(requestedAnimals)
    },

    async displayShelterSignIn(req,res) {
        const especes = await Espece.findAll();
        /* res.render("inscriptionAssociation", { especes }) */
        res.json(especes)
    },
    
    async shelterSignIn(req,res) {
        const { 
            nom, 
            responsable, 
            rue, 
            commune, 
            code_postal, 
            pays, 
            siret, 
            telephone, 
            email, 
            site,
            description,
            mot_de_passe, 
            confirmation 
        } = req.body;

        console.log(req.body);
        
        const found = await Utilisateur.findOne( { where: {email: email} });
        
        console.log(found);
        
        if(found === null) {
            if (!emailValidator.validate(email)) {
                req.flash('erreur', "Cet email n'est pas valide.");
                return res.redirect('/association/inscription');
            }
            // verifier si password correspond à password confirm
            if (mot_de_passe !== confirmation) {
                req.flash('erreur', 'La confirmation du mot de passe ne correspond pas au mot de passe renseigné.');
                return res.redirect('/association/inscription');
            }
            
            const hashedPassword = await bcrypt.hash(mot_de_passe, 8);
            console.log('HASH', hashedPassword);
            
            const newUser = await Utilisateur.create({
                email: email,
                mot_de_passe : hashedPassword,
            })
            console.log(newUser);
            await newUser.save();
            
            const newShelter = await Association.create({
                nom : nom,
                responsable : responsable,
                rue : rue,
                commune : commune,
                code_postal : code_postal,
                pays : pays,
                siret : siret,
                telephone : telephone,
                site: site,
                description: description,
                utilisateur_id: newUser.id,
            });
            console.log(newShelter);
            await newShelter.save();
            res.redirect("/")
        } else {
            console.log(found)
            req.flash('erreur', 'Inscription incorrecte');
            return res.redirect('/association/inscription');
        }
    },

    async shelterDestroy(req, res, next) {
/*         //*Vérification que l'utilisateur.ice connecté.e est bien cellui qui doit être supprimé.e
        //* (on ne veut pas que n'importe qui puisse supprimer un compte asso)    
        if (!(parseInt(req.session.id)===parseInt(req.params.id))){    
            res.status=401;
            return next(new Error('Unauthorized'))               
        } */
        const assoId = req.session.userId;
        const asso = await Association.findByPk(assoId);

        const user = await Utilisateur.findOne({
            where : { id: asso.utilisateur_id }
        })

        if (!asso || !user) {
            // Si pas entier ou pas existant dans la BDD => 404
            return next();
        };

        await asso.destroy();
        await user.destroy();
        req.session.destroy();
        res.redirect('/')
    },   
};