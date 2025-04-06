import styles from './page.module.scss';
import Head from 'next/head';
import Image from 'next/image';


export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Nathauric by Nataly Gonçalves - Aulnay-sous-Bois</title>
        <meta name="description" content="Auriculothérapie spécialisée à Aulnay-sous-Bois pour votre bien-être physique et émotionnel." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={styles.header}>
        <h1>Nathauric <span>by Nataly Gonçalves</span></h1>
        <div className={styles.logoWrapper}>
        <Image
          src="/logo.jpg"
          alt="Logo Nathauric"
          width={100}
          height={100}
          priority
        />
      </div>
        <p>Je suis votre experte en auriculothérapie à Aulnay-sous-Bois, dédiée à rétablir votre équilibre corps-esprit.</p>
      </header>

      <section className={styles.intro}>
        <p>L&apos;auriculothérapie est une méthode douce et naturelle issue de la médecine traditionnelle chinoise. J&apos;utilise la stimulation précise des points réflexes situés sur l&apos;oreille pour traiter divers troubles physiques et émotionnels. Mon approche personnalisée vous aide à retrouver équilibre et sérénité.</p>
      </section>

      <section className={styles.services}>
        <h2>Mes Spécialités</h2>
        <ul>
          <li>Traitement des douleurs chroniques</li>
          <li>Réduction du stress et de l&apos;anxiété</li>
          <li>Aide à l&apos;arrêt du tabac</li>
          <li>Aide à la perte de poids grâce à l&apos;arrêt du sucre</li>
          <li>Gestion du sommeil et des troubles associés</li>
          <li>Amélioration du confort digestif</li>
          <li>Accompagnement émotionnel personnalisé</li>
        </ul>
      </section>

      <section className={styles.about}>
        <h2>À propos de moi</h2>
        <p>Passionnée par les médecines douces, je mets à votre disposition mon savoir-faire et mon écoute attentive pour répondre précisément à vos besoins. Chaque séance est unique, adaptée à vos attentes afin d&apos;obtenir des résultats concrets et durables.</p>
      </section>

      <section className={styles.testimonials}>
        <h2>Témoignages de mes clients</h2>
        <blockquote>
          &quot;Grâce à Nataly, j&apos;ai pu diminuer considérablement mes douleurs chroniques, je revis !&quot; – Sophie, 45 ans
        </blockquote>
        <blockquote>
          &quot;Une expérience apaisante et très bénéfique, je recommande vivement.&quot; – Julien, 32 ans
        </blockquote>
      </section>

      <section className={styles.contact}>
        <h2>Prendre Rendez-vous</h2>
        <p>📞 <a href="tel:0759658746">07 59 65 83 65</a></p>
        <p>✉️ <a href="mailto:nathauric.reflex@hotmail.com">nathauric.reflex@hotmail.com</a></p>
        <p>📍 Aulnay-sous-Bois, Île-de-France</p>
      </section>

      <footer className={styles.footer}>
        © 2025 Nathauric by Nataly Gonçalves - Tous droits réservés
      </footer>
    </main>
  );
}