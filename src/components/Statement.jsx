import { profile, stats } from "../data";

export default function Statement() {
  return (
    <section className="statement" id="about" data-globe="about">
      <div className="statement__copy">
        <h2 className="t-xl">
          I started as a Python developer and now deliver strong, fast AI solutions that hold up
          on real data and real machines.
        </h2>
        <p className="t-md muted">
          Based in {profile.location}, I now work as an AI/ML engineer. On any given week I might
          train a detector, write an async scraper, design a FastAPI service or ship a React front
          end, and I want every piece to be fast and dependable.
        </p>
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="stats__value">{s.value}</dt>
              <dd className="muted">{s.label}</dd>
            </div>
          ))}
        </dl>
        <a href={profile.cv} download="Dhruv-Modi-CV.pdf" className="link">
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}
