import Link from 'next/link';

function Plan() {
  
  return (
<main className="justify-self-stretch flex-1">
  <article className="p-12 mx-auto">
    <h2 className="font-grands text-center my-6 pb-6 text-3xl">Plan du Site</h2>
      <ul>
        <li className="font-body text-center my-6 pb-2"><Link href="/">Accueil</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/connexion">Connexion</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/famille/inscription">Inscription Famille</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/associaton/inscription">Inscription Association</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/associations">Associations Partenaires</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/animaux">Découvrez nos Animaux</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/a-propos">Qui sommes-nous ?</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/faq">Foire Aux Questions</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/devenir-famille-d-accueil">Devenir Famille d'Accueil</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/infos-legales">Informations Légales</Link></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/rgpd">Protection des données - RGPD</Link></li>
        <li className="flex font-body justify-center my-6 pb-2"><Link href="/plan">Plan du site</Link><p className="font-bold">&nbsp;&nbsp;(vous êtes ici)</p></li>
        <li className="font-body text-center my-6 pb-2"><Link href="/contact">Contact</Link></li>
      </ul>
  </article>
</main>
  )
};

export default Plan;