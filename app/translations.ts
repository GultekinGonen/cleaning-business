
/*
 * T.A. Cleaning — website translations
 *
 * Keep the text for all supported languages in this file.
 * Stable service IDs will be used by the contact form and API,
 * so changing a translated label won't break email delivery.
 */

// The three languages supported by the website.
export type Locale = "fr" | "nl" | "en";

// Text displayed on the website in each language.
export const translations = {
    fr: {
        languageName: "Français",
        nav: {
            services: "Services",
            about: "À propos",
            contact: "Contact",
            quote: "Demander un devis",
        },
        // French homepage hero content.
        hero: {
            title: "Un intérieur propre, un esprit tranquille",
            description: "Des services de nettoyage professionnels pour les particuliers et les entreprises, adaptés à vos besoins partout en Belgique.",
            cta: "Demander un devis gratuit",
        },
        services: {
            title: "Nos services",
            carpet: "Nettoyage de tapis et moquettes",
            commercial: "Nettoyage professionnel",
            deep: "Nettoyage en profondeur",
            windows: "Nettoyage de vitres",
        },
        about: {
            title: "À propos de T.A. Cleaning",
            description:
                "Nous proposons des solutions de nettoyage adaptées aux particuliers et aux professionnels.",
        },
        contact: {
            title: "Contactez-nous",
            description:
                "Décrivez votre projet et nous vous contacterons pour discuter de vos besoins.",
            name: "Nom complet",
            email: "Adresse e-mail",
            phone: "Téléphone (facultatif)",
            service: "Service souhaité",
            chooseService: "Choisissez un service",
            message: "Décrivez votre demande",
            submit: "Envoyer ma demande",
            sending: "Envoi en cours…",
            success: "Votre demande a bien été envoyée.",
            error: "L'envoi a échoué. Veuillez réessayer.",
            privacyIntro: "Vos données seront utilisées pour répondre à votre demande.",
            privacyLink: "Lire notre politique de confidentialité",
        },
        footer: {
            description:
                "Des espaces propres, un service professionnel et des prestations adaptées à vos besoins.",
            navigation: "Navigation",
            project: "Un projet de nettoyage ?",
            projectDescription:
                "Contactez-nous pour demander un devis sans engagement.",
            rights: "Tous droits réservés.",
        },
        privacy: {
            title: "Politique de confidentialité",
            placeholder:
                "Les informations relatives à l'entreprise, à l'utilisation des données et à leur conservation seront précisées ici.",
        },
    },

    nl: {
        languageName: "Nederlands",
        nav: {
            services: "Diensten",
            about: "Over ons",
            contact: "Contact",
            quote: "Offerte aanvragen",
        },
        // Dutch homepage hero content.
        hero: {
            title: "Een schone ruimte, een gerust gevoel",
            description:
                "Professionele schoonmaak voor particulieren en bedrijven, afgestemd op uw behoeften in heel België.",
            cta: "Gratis offerte aanvragen",
        },
        services: {
            title: "Onze diensten",
            carpet: "Tapijt- en vloerbekledingsreiniging",
            commercial: "Professionele schoonmaak",
            deep: "Grondige schoonmaak",
            windows: "Ramen wassen",
        },
        about: {
            title: "Over T.A. Cleaning",
            description:
                "Wij bieden schoonmaakoplossingen op maat voor particulieren en bedrijven.",
        },
        contact: {
            title: "Contacteer ons",
            description:
                "Beschrijf uw project. We nemen contact met u op om uw behoeften te bespreken.",
            name: "Volledige naam",
            email: "E-mailadres",
            phone: "Telefoon (optioneel)",
            service: "Gewenste dienst",
            chooseService: "Kies een dienst",
            message: "Beschrijf uw aanvraag",
            submit: "Aanvraag verzenden",
            sending: "Bezig met verzenden…",
            success: "Uw aanvraag is succesvol verzonden.",
            error: "Verzenden is mislukt. Probeer het opnieuw.",
            privacyIntro:
                "Uw gegevens worden gebruikt om op uw aanvraag te antwoorden.",
            privacyLink: "Lees ons privacybeleid",
        },
        footer: {
            description:
                "Schone ruimtes, professionele service en schoonmaak op maat.",
            navigation: "Navigatie",
            project: "Een schoonmaakproject?",
            projectDescription:
                "Vraag vrijblijvend een offerte aan.",
            rights: "Alle rechten voorbehouden.",
        },
        privacy: {
            title: "Privacybeleid",
            placeholder:
                "De bedrijfsgegevens en informatie over het gebruik en de bewaartermijn van gegevens worden hier toegevoegd.",
        },
    },

    en: {
        languageName: "English",
        nav: {
            services: "Services",
            about: "About us",
            contact: "Contact",
            quote: "Request a quote",
        },
        // English homepage hero content.
        hero: {
            title: "A cleaner space, peace of mind",
            description:
                "Professional cleaning services for homes and businesses, tailored to your needs across Belgium.",
            cta: "Request a free quote",
        },
        services: {
            title: "Our services",
            carpet: "Carpet cleaning",
            commercial: "Commercial cleaning",
            deep: "Deep cleaning",
            windows: "Window cleaning",
        },
        about: {
            title: "About T.A. Cleaning",
            description:
                "We provide tailored cleaning solutions for homes and businesses.",
        },
        contact: {
            title: "Contact us",
            description:
                "Tell us about your project and we will contact you to discuss your needs.",
            name: "Full name",
            email: "Email address",
            phone: "Phone number (optional)",
            service: "Service required",
            chooseService: "Choose a service",
            message: "Describe your request",
            submit: "Send my request",
            sending: "Sending…",
            success: "Your request has been sent successfully.",
            error: "Sending failed. Please try again.",
            privacyIntro:
                "Your information will be used to respond to your enquiry.",
            privacyLink: "Read our privacy policy",
        },
        footer: {
            description:
                "Clean spaces, professional service and cleaning tailored to your needs.",
            navigation: "Navigation",
            project: "Planning a cleaning project?",
            projectDescription:
                "Contact us for a no-obligation quote.",
            rights: "All rights reserved.",
        },
        privacy: {
            title: "Privacy policy",
            placeholder:
                "Company details and information about data use and retention will be added here.",
        },
    },
} as const;

// A helper to check whether a URL contains a supported language.
export function isLocale(value: string): value is Locale {
    return value === "fr" || value === "nl" || value === "en";
}
