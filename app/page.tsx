import ContactForm from "./contact-form";

export default function Home() {
  return (
    <main>
      <header>
        <a href="/" className="logo">
          Clean<span>Space</span>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="header-button">
          Demander un devis
        </a>
      </header>

      <section className="hero">
        <p className="eyebrow">VOTRE ESPACE, NOTRE PRIORITÉ</p>

        <h1>
          Un espace propre.
          <br />
          Un esprit tranquille.
        </h1>

        <p className="hero-description">
          Des services de nettoyage professionnels adaptés
          à vos besoins, pour les particuliers et les entreprises.
        </p>

        <a href="#contact" className="primary-button">
          Demander un devis gratuit ↗
        </a>

        <p className="hero-note">
          Service professionnel · Devis sans engagement
        </p>
      </section>

      <section id="services" className="services">
        <p className="eyebrow">CE QUE NOUS FAISONS</p>
        <h2>Un service adapté à vos besoins.</h2>

        <div className="service-grid">
          <article className="service-card">
            <span>01</span>
            <h3>Nettoyage résidentiel</h3>
            <p>Un intérieur propre et agréable, jusque dans les détails.</p>
          </article>

          <article className="service-card">
            <span>02</span>
            <h3>Nettoyage professionnel</h3>
            <p>Des bureaux et espaces de travail propres et accueillants.</p>
          </article>

          <article className="service-card">
            <span>03</span>
            <h3>Nettoyage en profondeur</h3>
            <p>Un nettoyage ciblé pour retrouver un espace impeccable.</p>
          </article>
        </div>
      </section>

      <section id="about" className="about">
        <p className="eyebrow">SIMPLE ET TRANSPARENT</p>
        <h2>La propreté, sans complications.</h2>
        <p>
          Nous adaptons nos prestations à votre espace,
          à vos attentes et à votre planning.
        </p>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">PARLONS DE VOTRE PROJET</p>
        <h2>Besoin d'un devis ?</h2>
        <p>
        Décrivez-nous vos besoins en nettoyage.
        Nous vous contacterons pour préparer un devis adapté.
        </p>

        <ContactForm />
      </section>

      <footer>
        <a href="/" className="logo">
          Clean<span>Space</span>
        </a>
        <p>© 2026 CleanSpace. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
