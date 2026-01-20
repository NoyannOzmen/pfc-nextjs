import { Router } from "express";

import { animalController } from "../controllers/animalController.js";
import { catchErrors } from "../middlewares/catchErrors.js";
import { auth } from "../middlewares/auth.js";
import { isRole } from "../middlewares/isRole.js";
import { upload } from "../middlewares/upload.js";

const animalRouter = Router();

//* Rendu de la page avec tout les animaux disponibles
animalRouter.get('/animaux', catchErrors(animalController.availableAnimalsList));

//* Un animal en particulier
animalRouter.get('/animaux/:id(\\d+)', catchErrors(animalController.getSingleAnimal));

//* Liste toutes les especes
animalRouter.get('/especes', catchErrors(animalController.getSpeciesList));

//* Liste tous les tags
animalRouter.get('/tags', catchErrors(animalController.getTagsList));

//! Liste tous les accueillants
animalRouter.get('/famille/:id(\\d+)', [auth,isRole.association], catchErrors(animalController.getFoster));

//! Liste toutes les demandes
animalRouter.get('/demandes', catchErrors(animalController.getRequestsList));
//! Une demande en particulier
animalRouter.get('/demandes/:id(\\d+)', [auth,isRole.association], catchErrors(animalController.getOneRequest));

//* Rendu de la page avec les animaux correspondant à la recherche
/* animalRouter.post('/animaux', catchErrors(animalController.getSearched)); */

//* Route de demande d'accueil d'un animal par un.e user
animalRouter.post('/animaux/:id(\\d+)/faire-une-demande',[auth,isRole.famille], catchErrors(animalController.hostRequest));

//* Ajouter un animal à l'asssociation
animalRouter.post('/animaux/nouveau-profil', [auth,isRole.association], catchErrors(animalController.addAnimal));

//* Ajouter une image à un animal
animalRouter.post("/upload/photo", [auth,isRole.association], upload, catchErrors(animalController.uploadPhoto));

export { animalRouter };
