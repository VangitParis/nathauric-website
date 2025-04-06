import styles from './page.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Nathauric by Nataly Gonçalves - Aulnay-sous-Bois</title>
        <meta name="description" content="Auriculothérapie spécialisée à Aulnay-sous-Bois pour votre bien-être physique et émotionnel." />
      </Head>

      <header className={styles.header}>
        <h1>Nathauric <span>by Nataly Gonçalves</span></h1>
        <p>Votre experte en auriculothérapie à Aulnay-sous-Bois pour un équilibre parfait corps-esprit</p>
      </header>

      <section className={styles.intro}>
        <p>L’auriculothérapie est une méthode douce et naturelle issue de la médecine traditionnelle chinoise. Elle permet de traiter de nombreux troubles physiques et émotionnels par stimulation précise des points réflexes situés sur l'oreille. Nathauric vous propose un accompagnement personnalisé et bienveillant pour retrouver équilibre et sérénité.</p>
      </section>

      <section className={styles.services}>
        <h2>Mes Spécialités</h2>
        <ul>
          <li>Traitement des douleurs chroniques</li>
          <li>Réduction du stress et de l'anxiété</li>
          <li>Aide à l'arrêt du tabac</li>
          <li>Gestion du sommeil et des troubles associés</li>
          <li>Amélioration du confort digestif</li>
          <li>Accompagnement émotionnel personnalisé</li>
        </ul>
      </section>

      <section className={styles.about}>
        <h2>À propos de Nathauric</h2>
        <p>Formée et passionnée par les médecines douces, Nataly Gonçalves met à votre disposition son savoir-faire et sa sensibilité pour répondre à vos besoins spécifiques. Chaque séance est unique, adaptée à vos attentes pour des résultats concrets et durables.</p>
      </section>

      <section className={styles.testimonials}>
        <h2>Témoignages de mes clients</h2>
        <blockquote>
          "Grâce à Nataly, j'ai pu diminuer considérablement mes douleurs chroniques, je revis !" – Sophie, 45 ans
        </blockquote>
        <blockquote>
          "Une expérience apaisante et très bénéfique, je recommande vivement." – Julien, 32 ans
        </blockquote>
      </section>

      <section className={styles.contact}>
        <h2>Prendre Rendez-vous</h2>
        <p>📞 <a href="tel:0759658746">07 59 65 87 46</a></p>
        <p>✉️ <a href="mailto:nathaurieByN@hotmail.com">nathaurieByN@hotmail.com</a></p>
        <p>📍 Aulnay-sous-Bois, Île-de-France</p>
      </section>

      <footer className={styles.footer}>
        © 2025 Nathauric by Nataly Gonçalves - Tous droits réservés
      </footer>
    </main>
  );
}
