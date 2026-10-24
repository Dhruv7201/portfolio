import { useEffect, useRef, useState } from "react";
import { skillGroups } from "../data";

// A pinned scroll sequence: the ring turns one group at a time into the focus
// point facing the copy, the group's name takes over, and the orb in the middle
// morphs into that group's shape.
const RADIUS = 300;
const LABEL_RADIUS = 326;
const GAP = 10;
const SPAN = 360 / skillGroups.length;
const CIRC = 2 * Math.PI * RADIUS;

const labels = skillGroups.flatMap((group, g) =>
  group.items.map((name, k) => ({
    name,
    group: g,
    angle: g * SPAN + GAP / 2 + ((k + 0.5) * (SPAN - GAP)) / group.items.length,
  })),
);

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (t) => t * t * (3 - 2 * t);

export default function SkillRing() {
  const sectionRef = useRef(null);
  const ticksRef = useRef(null);
  const innerRef = useRef(null);
  const labelRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [focus, setFocus] = useState(180);
  const n = skillGroups.length;

  useEffect(() => {
    const portraitQuery = window.matchMedia("(max-width: 860px), (orientation: portrait)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = false;
    let current = null;

    // Scroll position mapped onto the groups: 0 = first group, n - 1 = last.
    // Every scroll tick moves the ring; a mild pull settles it on each group.
    const target = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const linear = total > 0 ? clamp(-rect.top / total, 0, 1) * (n - 1) : 0;
      const base = Math.floor(linear);
      const snapped = base + smooth(linear - base);
      return linear * 0.55 + snapped * 0.45;
    };

    const render = (f) => {
      const focusAngle = portraitQuery.matches ? 90 : 180;
      const rotation = focusAngle - (f * SPAN + SPAN / 2);
      const nearest = Math.round(f);

      ticksRef.current.setAttribute("transform", `rotate(${rotation})`);
      innerRef.current.setAttribute("transform", `rotate(${-rotation * 1.6})`);
      labels.forEach((label, idx) => {
        const node = labelRefs.current[idx];
        const eff = label.angle + rotation;
        const flip = Math.cos((eff * Math.PI) / 180) < 0;
        node.setAttribute(
          "transform",
          `rotate(${eff}) translate(${LABEL_RADIUS} 0)${flip ? " rotate(180)" : ""}`,
        );
        node.setAttribute("text-anchor", flip ? "end" : "start");
        // Labels brighten as they approach the focus point.
        const distance = Math.abs(((eff - focusAngle + 540) % 360) - 180);
        node.style.opacity = 0.22 + 0.78 * clamp(1 - distance / 75, 0, 1);
      });

      sectionRef.current.style.setProperty("--fill", clamp(f - nearest + 0.5, 0, 1).toFixed(3));
      setActive(nearest);
      setFocus(focusAngle);
    };

    const tick = () => {
      const goal = target();
      current = current === null || reduced ? goal : current + (goal - current) * 0.16;
      render(current);
      if (Math.abs(goal - current) > 0.0005) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    current = target();
    render(current);
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [n]);

  const jumpTo = (i) => {
    const el = sectionRef.current;
    const total = Math.max(el.offsetHeight - window.innerHeight, 0);
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (i / (n - 1)) * total, behavior: "smooth" });
  };

  const group = skillGroups[active];
  const arcLength = (CIRC * (SPAN - GAP)) / 360;

  return (
    <section
      ref={sectionRef}
      className="toolbox"
      data-globe="skills"
      data-shape={group.shape}
      style={{ "--steps": n }}
      aria-labelledby="toolbox-title"
    >
      <div className="toolbox__stage">
        <div className="toolbox__copy">
          <h2 id="toolbox-title" className="toolbox__title muted">
            What I work with
          </h2>
          <div className="toolbox__current">
            <p key={active} className="toolbox__name">
              {group.name}
            </p>
            <p key={`b${active}`} className="toolbox__blurb t-md muted">
              {group.blurb}
            </p>
          </div>
          <ol className="toolbox__index">
            {skillGroups.map((g, i) => (
              <li key={g.name}>
                <button
                  type="button"
                  className="toolbox__step"
                  aria-current={i === active ? "step" : undefined}
                  onClick={() => jumpTo(i)}
                >
                  <span className="toolbox__step-bar" aria-hidden="true" />
                  {g.name}
                  <span className="sr-only">: {g.items.join(", ")}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="toolbox__ring">
          <svg viewBox="-560 -560 1120 1120" aria-hidden="true">
            <circle r={RADIUS} className="toolbox__track" />
            <g ref={innerRef}>
              <circle r={RADIUS - 64} className="toolbox__inner" />
            </g>
            <g ref={ticksRef}>
              {Array.from({ length: 120 }, (_, i) => (
                <line
                  key={i}
                  x1={RADIUS - (i % 10 === 0 ? 18 : 8)}
                  x2={RADIUS}
                  transform={`rotate(${i * 3})`}
                  className="toolbox__tick"
                />
              ))}
            </g>
            <circle
              r={RADIUS}
              className="toolbox__arc"
              strokeDasharray={`${arcLength} ${CIRC}`}
              transform={`rotate(${focus - (SPAN - GAP) / 2})`}
            />
            <g transform={`rotate(${focus})`}>
              <circle cx={RADIUS} r="7" className="toolbox__dot" />
            </g>
            {labels.map((label, idx) => (
              <text
                key={label.name}
                ref={(node) => (labelRefs.current[idx] = node)}
                className="toolbox__skill"
                data-active={label.group === active}
                dominantBaseline="middle"
              >
                {label.name}
              </text>
            ))}
          </svg>
          <div className="toolbox__orb" data-globe-anchor />
        </div>
      </div>
    </section>
  );
}
