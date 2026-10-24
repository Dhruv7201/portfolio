import { useEffect, useRef, useState } from "react";
import { profile } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [user, domain] = profile.email.split("@");
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="contact" id="contact" data-globe="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="t-lg muted">Have a project or a role in mind?</h2>
      <a href={`mailto:${profile.email}`} className="contact__email">
        {user}
        <wbr />@{domain}
      </a>
      <button type="button" className="link contact__copy" onClick={copy}>
        <span aria-live="polite">{copied ? "Copied to clipboard" : "Copy email address"}</span>
      </button>
      <p className="contact__more muted">
        or find me on{" "}
        {profile.socials.map((s, i) => (
          <span key={s.label}>
            <a href={s.href} className="link" target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
            {i < profile.socials.length - 2 ? ", " : i === profile.socials.length - 2 ? " and " : ""}
          </span>
        ))}
      </p>
    </section>
  );
}
