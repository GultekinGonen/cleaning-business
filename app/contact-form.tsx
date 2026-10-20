
"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending your request...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Unable to send the request.");
      }

      setStatus("Thank you! Your request has been sent.");
      form.reset();
    } catch {
      setStatus(
        "Your request could not be sent. Please try again later."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          placeholder="Your name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="you@example.com"
        />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={30}
          placeholder="Your phone number"
        />
      </div>

      <div className="form-field">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service" required defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          <option value="Residential cleaning">
            Homes and apartments
          </option>
          <option value="Commercial cleaning">
            Offices and businesses
          </option>
          <option value="Deep cleaning">Deep cleaning</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={3000}
          rows={5}
          placeholder="Describe the property and the cleaning you need..."
        />
      </div>

      <button type="submit" className="primary-button">
        Request a free quote ↗
      </button>

      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
