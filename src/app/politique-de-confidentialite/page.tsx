import styles from '../page.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function PolitiqueDeConfidentialite() {
            return (
              <main className={styles.container}>
                <Head>
                  <title>Politique de Confidentialité | Nathauric</title>
                  <meta
                    name="description"
                    content="Nathauric respecte vos données personnelles conformément au RGPD. Découvrez notre politique de confidentialité."
                  />
                </Head>
          
      
      <div className={styles.logoWrapper}>
    <Link href="/">
      <Image
        src="/logo-nathauric.png"
        alt="Logo Nathauric"
        width={90}
        height={90}
        priority
      />
    </Link>
  </div>
  <div className={styles.content}>
    <h1>Politique de Confidentialité</h1>

    <h2>1. Présentation</h2>
    <p>
      Nathauric, représenté par Nataly Gonçalves, propose des services d’auriculothérapie à Aulnay-sous-Bois (93). Ce site a pour objectif de présenter l’activité et permettre la prise de contact.
    </p>

    <h2>2. Données personnelles collectées</h2>
    <p>
      Aucune donnée n’est collectée automatiquement. Seules les informations volontairement transmises (nom, téléphone, e-mail) sont utilisées pour échanger et convenir d’un rendez-vous.
    </p>

    <h2>3. Cookies</h2>
    <p>
      Le site utilise uniquement des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire n’est déposé sans votre consentement.
    </p>

    <h2>4. Durée de conservation</h2>
    <p>
      Vos données ne sont conservées que pour la durée nécessaire à la relation client. Le consentement cookie est stocké 12 mois dans votre navigateur (localStorage).
    </p>

    <h2>5. Hébergement</h2>
    <p>
      Le site est hébergé chez : <strong>IONOS SARL</strong><br />7 Place de la Gare, 57200 Sarreguemines, France<br />
      <a href="https://www.ionos.fr" target="_blank">www.ionos.fr</a>
    </p>

    <h2>6. Vos droits</h2>
    <p>
      Vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Contact :
    </p>
    <p>
      Nataly Gonçalves – 📧 <a href="mailto:nathauric.reflexN@hotmail.com">nathauric.reflex@hotmail.com</a>
    </p>

    <h2>7. Contact</h2>
    <p>
      Pour toute question liée à vos données personnelles, utilisez les coordonnées ci-dessus ou notre formulaire de contact (si disponible).
    </p>

    <div className={styles.backLink}>
      <Link href="/">← Retour à l’accueil</Link>
    </div>
  </div>

  <footer className={styles.footer}>
    © 2025 Nathauric – <Link href="/mentions-legales">Mentions légales</Link>
  </footer>
</main>

);
}
