
import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Locale } from "../../translations";
import { isLocale } from "../../translations";

// Privacy policy text for the three supported languages.
const privacyContent = {
  fr: {
    title: "Politique de confidentialité",
    intro: "Cette politique explique comment T.A. Cleaning traite les données personnelles reçues par son site web et son formulaire de contact.",
    controller: "Responsable du traitement",
    company: "Nom légal de l'entreprise : [À COMPLÉTER]. Numéro d'entreprise : [À COMPLÉTER]. Adresse du siège social : [À COMPLÉTER]. Contact relatif à la vie privée : [À COMPLÉTER].",
    collected: "Données collectées",
    collectedText: "Le formulaire peut recueillir votre nom, votre adresse e-mail, votre numéro de téléphone si vous le fournissez, le service demandé et le contenu de votre message.",
    purposes: "Pourquoi utilisons-nous vos données ?",
    purposesText: "Nous utilisons ces informations pour répondre à votre demande, communiquer avec vous et préparer un devis ou les étapes nécessaires à une éventuelle prestation.",
    legalBasis: "Base juridique",
    legalBasisText: "Le traitement des demandes de devis peut être nécessaire pour prendre des mesures précontractuelles à votre demande. Toute autre utilisation doit disposer de sa propre base juridique appropriée.",
    recipients: "Destinataires et prestataires",
    recipientsText: "Les données sont accessibles uniquement aux personnes et prestataires qui en ont besoin pour traiter votre demande. Le formulaire utilise Resend pour l'envoi des e-mails. Hébergement et autres prestataires : [À COMPLÉTER ET À VÉRIFIER].",
    retention: "Durée de conservation",
    retentionText: "Durée de conservation des demandes et des e-mails : [À DÉFINIR]. Cette durée doit être justifiée par la finalité du traitement et les obligations légales applicables.",
    security: "Sécurité",
    securityText: "Nous prenons des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre l'accès non autorisé, la perte ou l'utilisation abusive.",
    rights: "Vos droits",
    rightsText: "Selon les conditions prévues par la loi, vous pouvez demander l'accès à vos données, leur rectification ou leur effacement, la limitation du traitement et, lorsque cela s'applique, vous opposer au traitement ou demander la portabilité de vos données.",
    exercise: "Pour exercer vos droits, contactez : [ADRESSE E-MAIL DE CONFIDENTIALITÉ À COMPLÉTER]. Vous pouvez également introduire une réclamation auprès de l'Autorité de protection des données en Belgique.",
    cookies: "Cookies",
    cookiesText: "Décrivez ici les cookies et technologies similaires utilisés par le site. Ajoutez les informations et le mécanisme de consentement nécessaires si des cookies non essentiels ou des outils d'analyse sont utilisés.",
    changes: "Modifications",
    changesText: "Cette politique peut être mise à jour lorsque nos pratiques ou les exigences légales évoluent. Date de dernière mise à jour : [À COMPLÉTER].",
    back: "Retour à l'accueil",
  },
  nl: {
    title: "Privacybeleid",
    intro: "Dit beleid legt uit hoe T.A. Cleaning persoonsgegevens verwerkt die via de website en het contactformulier worden ontvangen.",
    controller: "Verwerkingsverantwoordelijke",
    company: "Wettelijke bedrijfsnaam: [AAN TE VULLEN]. Ondernemingsnummer: [AAN TE VULLEN]. Maatschappelijke zetel: [AAN TE VULLEN]. Contact voor privacyvragen: [AAN TE VULLEN].",
    collected: "Verzamelde gegevens",
    collectedText: "Het formulier kan uw naam, e-mailadres, eventueel telefoonnummer, de gewenste dienst en de inhoud van uw bericht verzamelen.",
    purposes: "Waarom gebruiken we uw gegevens?",
    purposesText: "We gebruiken deze gegevens om uw aanvraag te beantwoorden, met u te communiceren en een offerte of eventuele dienstverlening voor te bereiden.",
    legalBasis: "Rechtsgrond",
    legalBasisText: "Het behandelen van een offerteaanvraag kan noodzakelijk zijn om op uw verzoek precontractuele stappen te nemen. Elk ander gebruik moet een passende eigen rechtsgrond hebben.",
    recipients: "Ontvangers en dienstverleners",
    recipientsText: "Gegevens zijn alleen toegankelijk voor personen en dienstverleners die ze nodig hebben om uw aanvraag te behandelen. Het formulier gebruikt Resend voor e-mailverzending. Hosting en andere dienstverleners: [AAN TE VULLEN EN TE CONTROLEREN].",
    retention: "Bewaartermijn",
    retentionText: "Bewaartermijn voor aanvragen en e-mails: [TE BEPALEN]. De termijn moet verantwoord zijn op basis van het doel en de toepasselijke wettelijke verplichtingen.",
    security: "Beveiliging",
    securityText: "We nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies of misbruik.",
    rights: "Uw rechten",
    rightsText: "Onder de wettelijke voorwaarden kunt u toegang tot uw gegevens, verbetering of verwijdering vragen en de verwerking laten beperken. Waar van toepassing kunt u bezwaar maken of gegevensoverdraagbaarheid aanvragen.",
    exercise: "Om uw rechten uit te oefenen, contacteer: [PRIVACY-E-MAILADRES AAN TE VULLEN]. U kunt ook een klacht indienen bij de Belgische Gegevensbeschermingsautoriteit.",
    cookies: "Cookies",
    cookiesText: "Beschrijf hier de cookies en vergelijkbare technologieën die de website gebruikt. Voeg de nodige informatie en toestemmingsfunctie toe als niet-essentiële cookies of analysetools worden gebruikt.",
    changes: "Wijzigingen",
    changesText: "Dit beleid kan worden aangepast wanneer onze werkwijze of wettelijke vereisten veranderen. Laatste bijwerkingsdatum: [AAN TE VULLEN].",
    back: "Terug naar de startpagina",
  },
  en: {
    title: "Privacy Policy",
    intro: "This policy explains how T.A. Cleaning processes personal data received through its website and contact form.",
    controller: "Data controller",
    company: "Legal company name: [TO COMPLETE]. Enterprise number: [TO COMPLETE]. Registered office: [TO COMPLETE]. Privacy contact: [TO COMPLETE].",
    collected: "Data we collect",
    collectedText: "The form may collect your name, email address, optional phone number, requested service and the contents of your message.",
    purposes: "Why we use your data",
    purposesText: "We use this information to respond to your enquiry, communicate with you and prepare a quotation or steps towards a possible service.",
    legalBasis: "Legal basis",
    legalBasisText: "Handling a quotation request may be necessary to take pre-contractual steps at your request. Any other use must have its own appropriate legal basis.",
    recipients: "Recipients and service providers",
    recipientsText: "Data is accessible only to people and providers who need it to handle your request. The form uses Resend for email delivery. Hosting and other providers: [TO COMPLETE AND VERIFY].",
    retention: "Data retention",
    retentionText: "Retention period for enquiries and emails: [TO BE DEFINED]. This period must be justified by the purpose of processing and applicable legal obligations.",
    security: "Security",
    securityText: "We take appropriate technical and organisational measures to protect personal data against unauthorised access, loss or misuse.",
    rights: "Your rights",
    rightsText: "Subject to applicable legal conditions, you may request access to your data, rectification or erasure, and restriction of processing. Where applicable, you may object to processing or request data portability.",
    exercise: "To exercise your rights, contact: [PRIVACY EMAIL ADDRESS TO COMPLETE]. You may also lodge a complaint with the Belgian Data Protection Authority.",
    cookies: "Cookies",
    cookiesText: "Describe the cookies and similar technologies used by the website here. Add the necessary information and consent mechanism if non-essential cookies or analytics tools are used.",
    changes: "Changes",
    changesText: "This policy may be updated when our practices or legal requirements change. Last updated: [TO COMPLETE].",
    back: "Back to homepage",
  },
} as const;

// The route component itself is synchronous.
export default function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <Suspense fallback={<p>Loading privacy policy...</p>}>
      <PrivacyContent params={params} />
    </Suspense>
  );
}

// Resolve the route parameters inside the Suspense boundary.
async function PrivacyContent({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = privacyContent[locale as Locale];

  // Group related sections so the same layout works in every language.
  const sections = [
    { title: t.controller, text: t.company },
    { title: t.collected, text: t.collectedText },
    { title: t.purposes, text: t.purposesText },
    { title: t.legalBasis, text: t.legalBasisText },
    { title: t.recipients, text: t.recipientsText },
    { title: t.retention, text: t.retentionText },
    { title: t.security, text: t.securityText },
    { title: t.rights, text: t.rightsText },
    { title: t.cookies, text: t.cookiesText },
    { title: t.changes, text: t.changesText },
  ];

  return (
    <main className="privacy-page">
      <article className="privacy-content">
        <h1>{t.title}</h1>
        <p>{t.intro}</p>

        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}

        <section>
          <h2>{t.rights}</h2>
          <p>{t.exercise}</p>
        </section>

        <a href={`/${locale}`}>{t.back}</a>
      </article>
    </main>
  );
}
