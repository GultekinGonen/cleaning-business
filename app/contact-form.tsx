
"use client";

import { useState } from "react";
import type { Locale } from "./translations";

// Keep the service values in English because the existing API expects them.
const services = [
  {
    value: "Carpet cleaning",
    fr: "Nettoyage de tapis et moquettes",
    nl: "Tapijt- en vloerkleedreiniging",
    en: "Carpet cleaning",
  },
  {
    value: "Commercial cleaning",
    fr: "Nettoyage professionnel",
    nl: "Professionele schoonmaak",
    en: "Commercial cleaning",
  },
  {
    value: "Deep cleaning",
    fr: "Nettoyage en profondeur",
    nl: "Grondige schoonmaak",
    en: "Deep cleaning",
  },
  {
    value: "Window cleaning",
    fr: "Nettoyage de vitres",
    nl: "Ramen wassen",
    en: "Window cleaning",
  },
] as const;

// Translate all form text according to the selected language.
const formText = {
  fr: {
    name: "Nom complet",
    email: "Adresse e-mail",
    phone: "Téléphone (facultatif)",
    service: "Service souhaité",
    choose: "Choisissez un service",
    message: "Décrivez votre demande",
    submit: "Envoyer ma demande",
    sending: "Envoi en cours…",
    success: "Votre demande a bien été envoyée.",
    error: "L'envoi a échoué. Veuillez réessayer.",
    privacy: "Vos données seront utilisées pour répondre à votre demande.",
    privacyLink: "Lire notre politique de confidentialité",
  },
  nl: {
    name: "Volledige naam",
    email: "E-mailadres",
    phone: "Telefoon (optioneel)",
    service: "Gewenste dienst",
    choose: "Kies een dienst",
    message: "Beschrijf uw aanvraag",
    submit: "Aanvraag verzenden",
    sending: "Bezig met verzenden…",
    success: "Uw aanvraag is succesvol verzonden.",
    error: "Verzenden is mislukt. Probeer het opnieuw.",
    privacy: "Uw gegevens worden gebruikt om uw aanvraag te beantwoorden.",
    privacyLink: "Lees ons privacybeleid",
  },
  en: {
    name: "Full name",
    email: "Email address",
    phone: "Phone (optional)",
    service: "Service required",
    choose: "Choose a service",
    message: "Describe your request",
    submit: "Send my request",
    sending: "Sending…",
    success: "Your request was sent successfully.",
    error: "Sending failed. Please try again.",
    privacy: "Your data will be used to respond to your request.",
    privacyLink: "Read our privacy policy",
  },
} as const;

// Receive the language from the page URL: /fr, /nl, or /en.
export default function ContactForm({ locale }: { locale: Locale }) {
  const t = formText[locale];

  // Store the current form values.
  const [name, setName] = useState("");
  const [company, setCompany] = useState(""); // Optional company name.
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // Track submission status and display feedback to the visitor.
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  // Send the form to the existing Next.js API route.
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company, // Include the optional company name in the request.
          email,
          phone,
          service,
          message,

          // Keep the hidden spam-trap field empty.
          website: "",
        }),
      });

      if (!response.ok) {
        throw new Error("The contact request failed.");
      }

      // Clear the form only after the API accepts the request.
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setStatus("success");
    } catch {
      // Show an error without exposing technical details to visitors.
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Full name */}
      <div className="form-field">
        <label htmlFor="contact-name">{t.name}</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          maxLength={100}
        />
      </div>
      {/* Optional company name for business customers. */}
      <div className="form-field">
        <label htmlFor="contact-company">
          {locale === "fr"
            ? "Nom de l’entreprise (facultatif)"
            : locale === "nl"
              ? "Bedrijfsnaam (optioneel)"
              : "Company name (optional)"}
        </label>

        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          maxLength={150}
          placeholder={
            locale === "fr"
              ? "Nom de votre entreprise"
              : locale === "nl"
                ? "Naam van uw bedrijf"
                : "Your company name"
          }
        />
      </div>
      {/* Email address */}
      <div className="form-field">
        <label htmlFor="contact-email">{t.email}</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          maxLength={254}
        />
      </div>

      {/* Optional phone number */}
      <div className="form-field">
        <label htmlFor="contact-phone">{t.phone}</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          maxLength={30}
        />
      </div>

      {/* The displayed labels change, but the submitted values do not. */}
      <div className="form-field">
        <label htmlFor="contact-service">{t.service}</label>
        <select
          id="contact-service"
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          required
        >
          <option value="">{t.choose}</option>

          {services.map((item) => (
            <option key={item.value} value={item.value}>
              {item[locale]}
            </option>
          ))}
        </select>
      </div>

      {/* Details of the requested cleaning service */}
      <div className="form-field">
        <label htmlFor="contact-message">{t.message}</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          maxLength={5000}
        />
      </div>

      {/* Privacy information and link */}
      <p className="privacy-note">
        {t.privacy}{" "}
        <a href={`/${locale}/privacy`}>{t.privacyLink}</a>
      </p>

    {/* Prominent green button for submitting the contact request. */}
    <button
        type="submit"
        className="primary-button"
        disabled={isSending}
        >
        {isSending ? t.sending : t.submit}
    </button>

      {/* Announce submission results accessibly */}
      {status === "success" && (
        <p role="status">{t.success}</p>
      )}

      {status === "error" && (
        <p role="alert">{t.error}</p>
      )}
    </form>
  );
}
