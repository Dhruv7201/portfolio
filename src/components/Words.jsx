import { testimonials } from "../data";

export default function Words() {
  return (
    <section className="words" data-globe="quiet" aria-labelledby="words-title">
      <h2 id="words-title" className="t-xl">What colleagues say</h2>
      <div className="words__grid">
        {testimonials.map((t) => (
          <figure key={t.name} className="quote">
            <blockquote className="t-md">“{t.quote}”</blockquote>
            <figcaption className="muted">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
