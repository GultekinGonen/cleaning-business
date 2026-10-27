
// Provides a fallback while Next.js resolves the language URL.
import { Suspense } from "react";
// Import the translations and language validation helper.
import { isLocale, translations } from "../translations";

// Show a 404 page for unsupported languages.
import { notFound } from "next/navigation";

// Reuse the existing contact form.
import ContactForm from "../contact-form";

export function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "nl" },
    { locale: "en" },
  ];
}
// Render a fallback while the language-specific page loads.
export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <LocalizedHome params={params} />
    </Suspense>
  );
}

// Resolve the language inside Suspense.
async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Read the selected language from /fr, /nl, or /en.
  const { locale } = await params;

  // Reject unsupported language URLs.
  if (!isLocale(locale)) {
    notFound();
  }

  // Load translations for the selected language.
  const t = translations[locale];
  return (
    <main>
      {/* Header: logo, navigation, and language selector. */}
      <header>
        {/* Link the logo to the current language's homepage. */}
        <a href={`/${locale}`} className="logo">
          T.A.<span>Cleaning</span>
        </a>

        {/* Desktop navigation. */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">{t.nav.services}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        {/* Mobile navigation. */}
        <details className="mobile-menu">
          <summary aria-label={t.nav.contact}>
            Menu <span aria-hidden="true">☰</span>
          </summary>

          <nav aria-label="Mobile navigation">
            <a href="#services">{t.nav.services}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
            <a href="#contact" className="mobile-quote-link">
              {t.nav.quote}
            </a>
          </nav>
        </details>

        {/* Language selector. */}
        <nav className="language-switcher" aria-label="Choose language">
          <a
            href="/fr"
            lang="fr"
            aria-current={locale === "fr" ? "page" : undefined}
          >
            FR
          </a>
          <span aria-hidden="true"> | </span>
          <a
            href="/nl"
            lang="nl"
            aria-current={locale === "nl" ? "page" : undefined}
          >
            NL
          </a>
          <span aria-hidden="true"> | </span>
          <a
            href="/en"
            lang="en"
            aria-current={locale === "en" ? "page" : undefined}
          >
            EN
          </a>
        </nav>

        {/* Desktop quote button. */}
        <a href="#contact" className="header-button">
          {t.nav.quote}
        </a>
      </header>

      {/* Hero section. */}
      <section className="hero">
        <p className="eyebrow">{t.hero.title.toUpperCase()}</p>

        <h1>{t.hero.title}</h1>

        <p className="hero-description">{t.hero.description}</p>

        <a href="#contact" className="primary-button">
          {t.hero.cta} ↗
        </a>

        <p className="hero-note">
          {locale === "fr"
            ? "Service professionnel · Devis sans engagement"
            : locale === "nl"
              ? "Professionele service · Vrijblijvende offerte"
              : "Professional service · No-obligation quote"}
        </p>
      </section>

      {/* Services section. */}
      <section id="services" className="services">
        <p className="eyebrow">{t.services.title.toUpperCase()}</p>
        <h2>{t.services.title}</h2>

        <div className="service-grid">
          {/* Service 1: carpet cleaning. */}
          <article className="service-card">
            <span>01</span>
            <h3>{t.services.carpet}</h3>
            <p>
              {locale === "fr"
                ? "Retrouvez des tapis et moquettes plus propres grâce à un nettoyage adapté aux surfaces textiles."
                : locale === "nl"
                  ? "Geniet van schonere tapijten dankzij een reiniging aangepast aan textieloppervlakken."
                  : "Enjoy cleaner carpets with cleaning methods suited to textile surfaces."}
            </p>
            <a href="#contact" className="service-link">
              {t.nav.quote} ↗
            </a>
          </article>

          {/* Service 2: commercial cleaning. */}
          <article className="service-card">
            <span>02</span>
            <h3>{t.services.commercial}</h3>
            <p>
              {locale === "fr"
                ? "Des bureaux et locaux professionnels propres, agréables et accueillants."
                : locale === "nl"
                  ? "Schone, aangename en gastvrije kantoren en bedrijfsruimtes."
                  : "Clean, pleasant and welcoming offices and commercial premises."}
            </p>
            <a href="#contact" className="service-link">
              {t.nav.quote} ↗
            </a>
          </article>

          {/* Service 3: deep cleaning. */}
          <article className="service-card">
            <span>03</span>
            <h3>{t.services.deep}</h3>
            <p>
              {locale === "fr"
                ? "Un nettoyage minutieux des surfaces et des zones qui nécessitent une attention particulière."
                : locale === "nl"
                  ? "Een grondige reiniging van oppervlakken en plaatsen die extra aandacht nodig hebben."
                  : "Thorough cleaning of surfaces and areas that need extra attention."}
            </p>
            <a href="#contact" className="service-link">
              {t.nav.quote} ↗
            </a>
          </article>

          {/* Service 4: window cleaning. */}
          <article className="service-card">
            <span>04</span>
            <h3>{t.services.windows}</h3>
            <p>
              {locale === "fr"
                ? "Des vitres propres pour laisser entrer davantage de lumière."
                : locale === "nl"
                  ? "Schone ramen die meer licht binnenlaten."
                  : "Clean windows that let more natural light into your space."}
            </p>
            <a href="#contact" className="service-link">
              {t.nav.quote} ↗
            </a>
          </article>
        </div>
      </section>

      {/* About section. */}
      <section id="about" className="about">
        <p className="eyebrow">{t.about.title.toUpperCase()}</p>
        <h2>{t.about.title}</h2>
        <p>{t.about.description}</p>
      </section>

      {/* Contact section: keep the existing working form. */}
      <section id="contact" className="contact">
        <p className="eyebrow">{t.contact.title.toUpperCase()}</p>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.description}</p>

        {/* We will pass the selected language to this form next. */}
        <ContactForm />

        {/* Explain the purpose of data collection and link to the privacy notice. */}
        <p className="privacy-notice">
          {t.contact.privacyIntro}{" "}
          <a href={`/${locale}/privacy`}>
            {t.contact.privacyLink}
          </a>
        </p>
      </section>

      {/* Footer. */}
      <footer className="site-footer">
        <div className="footer-brand">
          <a href={`/${locale}`} className="logo">
            T.A.<span>Cleaning</span>
          </a>
          <p>{t.footer.description}</p>
        </div>

        <div className="footer-links">
          <h3>{t.footer.navigation}</h3>
          <a href="#services">{t.nav.services}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
          <a href={`/${locale}/privacy`}>
            {t.contact.privacyLink}
          </a>
        </div>

        <div className="footer-contact">
          <h3>{t.footer.project}</h3>
          <p>{t.footer.projectDescription}</p>
          <a href="#contact" className="footer-cta">
            {t.nav.quote} ↗
          </a>
        </div>

        <div className="footer-bottom">
          {/* Keep the year fixed to avoid unstable prerendering values. */}
          <p>© 2026 T.A. Cleaning. {t.footer.rights}</p>
        </div>
      </footer>
    </main>
  );
}