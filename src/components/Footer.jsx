import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#top" className="footer__mark link">
        dm<span className="accent">.</span> back to top
      </a>
      <p className="muted">
        {profile.name}, {new Date().getFullYear()}
      </p>
      <p className="muted">Compiled in Vadodara, powered by curiosity.</p>
    </footer>
  );
}
