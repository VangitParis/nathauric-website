import styles from '../page.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Mentions légales | Nathauric</title>
        <meta
          name="description"
          content="Mentions légales du site Nathauric, praticienne en auriculothérapie à Aulnay-sous-Bois. Informations légales et hébergement."
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
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          <strong>Nathauric</strong><br />
          Représentée par : Nataly Gonçalves<br />
          Activité : Auriculothérapie<br />
          Statut : Auto-entrepreneur<br />
          Adresse : Aulnay-sous-Bois (93), Île-de-France<br />
          E-mail : <a href="mailto:nathauric.reflex@hotmail.com">nathauric.reflex@hotmail.com</a><br />
          Téléphone : <a href="tel:0759658365">07 59 65 83 65</a>
        </p>

        <h2>Hébergement</h2>
        <p>
          Le site www.nathauric.com est hébergé par :<br />
          <strong>IONOS SARL</strong><br />
          7 Place de la Gare<br />
          57200 Sarreguemines, France<br />
          Site web : <a href="https://www.ionos.fr" target="_blank">www.ionos.fr</a>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu présent sur ce site (textes, images, logos, etc.) est la propriété exclusive de Nathauric,
          sauf mention contraire. Toute reproduction, distribution ou utilisation non autorisée est interdite.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Les informations fournies sur ce site sont données à titre informatif. Elles ne constituent pas un avis médical.
          Nathauric ne saurait être tenue responsable d’une mauvaise interprétation ou utilisation des contenus publiés.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Pour consulter la politique de confidentialité, rendez-vous sur notre page :
          <br />
          <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
        </p>

        <div className={styles.backLink}>
          <Link href="/">← Retour à l’accueil</Link>
        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 Nathauric – <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
      </footer>
    </main>
  );
}