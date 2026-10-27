
import ContactForm from "./contact-form";

export default function Home() {
  return (
    <main>

{/* Header: desktop navigation and a collapsible mobile menu */}
<header>
  {/* Business logo */}
  <a href="/" className="logo">
    T.A.<span>Cleaning</span>
  </a>

  {/* Regular navigation shown on desktop */}
  <nav className="desktop-nav" aria-label="Navigation principale">
    <a href="#services">Services</a>
    <a href="#about">À propos</a>
    <a href="#contact">Contact</a>
  </nav>

  {/* Native dropdown menu shown on mobile; no JavaScript required */}
  <details className="mobile-menu">
    <summary aria-label="Ouvrir le menu de navigation">
      Menu <span aria-hidden="true">☰</span>
    </summary>

    <nav aria-label="Navigation mobile">
      <a href="#services">Services</a>
      <a href="#about">À propos</a>
      <a href="#contact">Contact</a>
      <a href="#contact" className="mobile-quote-link">
        Demander un devis
      </a>
    </nav>
  </details>

  {/* Desktop quote button */}
  <a href="#contact" className="header-button">
    Demander un devis
  </a>
</header>


      {/* Hero section: the first thing visitors see */}
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

        {/* Main call to action */}
        <a href="#contact" className="primary-button">
          Demander un devis gratuit ↗
        </a>

        <p className="hero-note">
          Service professionnel · Devis sans engagement
        </p>
      </section>

      {/* Services section: each card describes one service */}
      <section id="services" className="services">
        <p className="eyebrow">CE QUE NOUS FAISONS</p>
        <h2>Un service adapté à vos besoins.</h2>

        <div className="service-grid">
          {/* Service 1: carpet cleaning */}
          <article className="service-card">
            <span>01</span>
            <h3>Nettoyage de tapis et moquettes</h3>
            <p>
              Retrouvez des tapis et moquettes plus propres
              grâce à un nettoyage adapté aux surfaces textiles.
            </p>
            <a href="#contact" className="service-link">
              Demander un devis ↗
            </a>
          </article>

          {/* Service 2: commercial cleaning */}
          <article className="service-card">
            <span>02</span>
            <h3>Nettoyage professionnel</h3>
            <p>
              Des bureaux et locaux professionnels propres,
              agréables et accueillants.
            </p>
            <a href="#contact" className="service-link">
              Demander un devis ↗
            </a>
          </article>

          {/* Service 3: deep cleaning */}
          <article className="service-card">
            <span>03</span>
            <h3>Nettoyage en profondeur</h3>
            <p>
              Un nettoyage minutieux des surfaces et des zones
              qui nécessitent une attention particulière.
            </p>
            <a href="#contact" className="service-link">
              Demander un devis ↗
            </a>
          </article>

          {/* Service 4: window cleaning */}
          <article className="service-card">
            <span>04</span>
            <h3>Nettoyage de vitres</h3>
            <p>
              Des vitres propres pour laisser entrer davantage
              de lumière et améliorer l'apparence de vos espaces.
            </p>
            <a href="#contact" className="service-link">
              Demander un devis ↗
            </a>
          </article>
        </div>
      </section>

      {/* About section: explain the business approach */}
      <section id="about" className="about">
        <p className="eyebrow">SIMPLE ET TRANSPARENT</p>
        <h2>La propreté, sans complications.</h2>
        <p>
          Nous adaptons nos prestations à votre espace,
          à vos attentes et à votre planning.
        </p>
      </section>

      {/* Contact section: display the existing working form */}
      <section id="contact" className="contact">
        <p className="eyebrow">PARLONS DE VOTRE PROJET</p>
        <h2>Besoin d'un devis ?</h2>
        <p>
          Décrivez-nous vos besoins en nettoyage.
          Nous vous contacterons pour préparer un devis adapté.
        </p>

        <ContactForm />
      </section>

      
{/* Footer: business branding, navigation, and contact information */}
<footer className="site-footer">
  {/* Business name and short description */}
  <div className="footer-brand">
    <a href="/" className="logo">
      T.A.<span>Cleaning</span>
    </a>

    <p>
      Des espaces propres, un service professionnel
      et des prestations adaptées à vos besoins.
    </p>
  </div>

  {/* Quick links to the main sections of the website */}
  <div className="footer-links">
    <h3>Navigation</h3>
    <a href="#services">Nos services</a>
    <a href="#about">À propos</a>
    <a href="#contact">Contact</a>
  </div>

  {/* Encourage visitors to request a quote */}
  <div className="footer-contact">
    <h3>Un projet de nettoyage ?</h3>
    <p>Contactez-nous pour demander un devis sans engagement.</p>
    <a href="#contact" className="footer-cta">
      Demander un devis ↗
    </a>
  </div>

  {/* Copyright notice */}
  <div className="footer-bottom">
    {/* Copyright year is fixed to avoid unstable values during prerendering. */}
    <p>© 2026 T.A. Cleaning. Tous droits réservés.</p>  </div>
</footer>

    </main>
  );
}
