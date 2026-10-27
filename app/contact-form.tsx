"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (isSending) return;

        setIsSending(true);
        setStatus("Envoi de votre demande...");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            service: formData.get("service"),
            message: formData.get("message"),
            website: formData.get("website"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Impossible d'envoyer la demande.");
            }

            setStatus("Merci ! Votre demande a bien été envoyée.");
            form.reset();
        } catch {
            setStatus(
                "Votre demande n'a pas pu être envoyée. Veuillez réessayer plus tard."
            );
        } finally {
            setIsSending(false);
        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    border: 0,
                }}
            >
                <label htmlFor="website">Leave this field empty</label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>
            <div className="form-field">
                <label htmlFor="name">Nom complet</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Votre nom"
                />
            </div>

            <div className="form-field">
                <label htmlFor="email">Adresse e-mail</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="vous@exemple.com"
                />
            </div>

            <div className="form-field">
                <label htmlFor="phone">Numéro de téléphone</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    placeholder="Votre numéro de téléphone"
                />
            </div>

            ```tsx
            {/* Let the customer choose the cleaning service they need. */}
            <div className="form-field">
                {/* Display the question above the dropdown. */}
                <label htmlFor="service">Quel service souhaitez-vous ?</label>  

                {/* The selected value is sent to the contact API as "service". */}
                <select id="service" name="service" required defaultValue="">
                    {/* Require the customer to choose a service. */}
                    <option value="" disabled>
                        Choisissez un service
                    </option>

                    {/* Carpet cleaning replaces residential cleaning. */}
                    <option value="Carpet cleaning">
                        Nettoyage de tapis et moquettes
                    </option>

                    {/* Keep commercial cleaning. */}
                    <option value="Commercial cleaning">
                        Bureaux et locaux professionnels
                    </option>

                    {/* Keep deep cleaning. */}
                    <option value="Deep cleaning">
                        Nettoyage en profondeur
                    </option>

                    {/* Add window cleaning as a new service. */}
                    <option value="Window cleaning">
                        Nettoyage de vitres
                    </option>
                </select>
            </div>
            ```

            <div className="form-field">
                <label htmlFor="message">Décrivez votre projet</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={3000}
                    rows={5}
                    placeholder="Décrivez le bien et le nettoyage souhaité..."
                />
            </div>

            <button
                type="submit"
                className="primary-button"
                disabled={isSending}
            >
                {isSending ? "Envoi en cours..." : "Demander un devis gratuit ↗"}
            </button>

            <p className="form-status" role="status" aria-live="polite">
                {status}
            </p>
        </form>
    );
}