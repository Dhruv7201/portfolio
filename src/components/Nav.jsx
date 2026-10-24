import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function istTime() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

export default function Nav() {
  const [time, setTime] = useState(istTime);

  useEffect(() => {
    let id = 0;
    const schedule = () => {
      id = setTimeout(() => {
        setTime(istTime());
        schedule();
      }, 60000 - (Date.now() % 60000) + 50);
    };
    schedule();
    return () => clearTimeout(id);
  }, []);

  return (
    <header className="nav">
      <a href="#top" className="nav__mark" aria-label="Dhruv Modi, back to top">
        dm<span className="accent">.</span>
      </a>
      <span className="nav__time muted">{time} in Vadodara</span>
      <nav aria-label="Primary">
        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
