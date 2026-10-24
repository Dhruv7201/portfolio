import Reveal from "./Reveal";
import { profile } from "../data";

export default function Hero() {
  return (
    <section className="hero" id="top" data-globe="hero">
      <div className="hero__copy">
        <div>
          <Reveal as="h1" text={profile.name} className="hero__name" />
          <Reveal text={profile.role} className="t-lg muted" delay={250} />
        </div>
        <div className="hero__side">
          <Reveal
            text="I build AI systems and the products around them: computer vision, data pipelines, APIs and the dashboards people use every day."
            className="t-lg"
            delay={500}
          />
          <a href="#work" className="link hero__cta">See my work</a>
        </div>
      </div>
    </section>
  );
}
