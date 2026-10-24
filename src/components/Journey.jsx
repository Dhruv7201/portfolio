import { education, experience } from "../data";

function Timeline({ title, items }) {
  return (
    <div className="timeline">
      <h3 className="t-lg">{title}</h3>
      <ol className="timeline__list">
        {items.map((item) => (
          <li key={item.title + item.place} className="timeline__item">
            <span className="timeline__time muted">{item.time}</span>
            {item.href ? (
              <a href={item.href} className="timeline__role link" target="_blank" rel="noopener noreferrer">
                {item.title}
                <span className="sr-only"> (certificate, opens in a new tab)</span>
              </a>
            ) : (
              <span className="timeline__role">{item.title}</span>
            )}
            <span className="muted">{item.place}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Journey() {
  return (
    <section className="journey" data-globe="quiet" aria-labelledby="journey-title">
      <h2 id="journey-title" className="t-xl">Where I've been</h2>
      <div className="journey__grid">
        <Timeline title="Experience" items={experience} />
        <Timeline title="Education" items={education} />
      </div>
    </section>
  );
}
