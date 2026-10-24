import ParticleGlobe from "./components/ParticleGlobe";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Statement from "./components/Statement";
import SkillRing from "./components/SkillRing";
import Journey from "./components/Journey";
import Words from "./components/Words";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#work" className="skip">Skip to work</a>
      <ParticleGlobe />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main className="content">
        <Hero />
        <Works />
        <Statement />
        <SkillRing />
        <Journey />
        <Words />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
