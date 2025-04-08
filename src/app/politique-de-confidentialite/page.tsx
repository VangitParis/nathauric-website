import Head from 'next/head';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité | Nathauric</title>
        <meta
          name="description"
          content="Découvrez comment Nathauric protège vos données personnelles et respecte votre vie privée conformément au RGPD."
        />
      </Head>

      <main style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
        <h1>Politique de Confidentialité – Nathauric</h1>

        <h2>1. Présentation</h2>
        <p>
          Nathauric, représenté par Nataly Gonçalves, est un site proposant des services d’auriculothérapie situés à Aulnay-sous-Bois (93).
          Le site a pour vocation de présenter l’activité et permettre la prise de contact avec la praticienne.
        </p>

        <h2>2. Données personnelles collectées</h2>
        <p>
          Le site ne collecte aucune donnée personnelle automatiquement à l’exception des informations que vous fournissez volontairement
          (ex. : via appel, e-mail ou formulaire de contact si ajouté ultérieurement).
        </p>
        <p>Données susceptibles d’être traitées :</p>
        <ul>
          <li>Prénom et nom (si fournis)</li>
          <li>Adresse e-mail ou numéro de téléphone (si transmis)</li>
        </ul>
        <p>Ces données sont utilisées uniquement dans le cadre d’échanges liés à la prise de rendez-vous ou de contact.</p>

        <h2>3. Cookies</h2>
        <p>
          Le site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking
          (Google Analytics, Facebook Pixel, etc.) n’est installé sans consentement explicite.
        </p>
        <p>Un bandeau vous permet d’accepter l’usage de ces cookies lors de votre première visite.</p>

        <h2>4. Durée de conservation</h2>
        <p>
          Les données que vous transmettez ne sont pas conservées au-delà de ce qui est strictement nécessaire à l’échange ou au rendez-vous
          en cours.
        </p>
        <p>
          Les données liées au consentement des cookies sont stockées dans votre navigateur local (localStorage) pour une durée maximale de
          12 mois.
        </p>

        <h2>5. Hébergement</h2>
        <p>
        Le site www.nathauric.com est hébergé par :<br />
  <strong>IONOS SARL</strong><br />
  7 Place de la Gare<br />
  57200 Sarreguemines, France<br />
        </p>

        <h2>6. Vos droits</h2>
        <p>
          Conformément à la législation RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données.
          Pour exercer ces droits, contactez :
        </p>
        <p>
          <strong>Nataly Gonçalves</strong><br />
          📧 <a href="mailto:nathauric.reflex@hotmail.com">nathauric.reflex@hotmail.com</a><br />
          📍 Aulnay-sous-Bois, France
        </p>

        <h2>7. Contact</h2>
        <p>
          Pour toute question relative à la protection des données personnelles, vous pouvez écrire à l’adresse ci-dessus ou envoyer un
          message via les coordonnées de la section contact du site.
        </p>
      </main>
    </>
  );
}
