import { useState } from "react";
import ProjectArt from "./ProjectArt";
import { projects } from "../data";

const filters = [
  { label: "All", test: () => true },
  { label: "AI", test: (p) => p.category.startsWith("AI") },
  { label: "Full stack & IoT", test: (p) => ["Full Stack", "IoT"].includes(p.category) },
];

export default function Works() {
  const [filter, setFilter] = useState(0);
  const [open, setOpen] = useState(projects[0].id);
  const visible = projects.filter(filters[filter].test);

  return (
    <section className="works" id="work" data-globe="work" aria-labelledby="work-title">
      <div className="works__head">
        <h2 id="work-title" className="t-xl">Selected work</h2>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f, i) => (
            <button
              key={f.label}
              type="button"
              className="filter"
              aria-pressed={filter === i}
              onClick={() => setFilter(i)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="works__list">
        {visible.map((p) => {
          const isOpen = open === p.id;
          return (
            <li key={p.id} className="work" data-open={isOpen}>
              <h3 className="work__heading">
                <button
                  type="button"
                  className="work__toggle"
                  aria-expanded={isOpen}
                  aria-controls={`work-${p.id}`}
                  onClick={() => setOpen(isOpen ? null : p.id)}
                >
                  <span className="work__title">{p.title}</span>
                  <span className="work__category muted">{p.category}</span>
                  <span className="work__icon" aria-hidden="true" />
                </button>
              </h3>
              <div className="work__panel" id={`work-${p.id}`} role="region" aria-label={p.title}>
                <div className="work__inner">
                  <div className="work__body">
                    <ProjectArt id={p.id} title={p.title} />
                    <div className="work__text">
                      <p className="t-md">{p.description}</p>
                      <ul className="tags" aria-label="Built with">
                        {p.stack.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
