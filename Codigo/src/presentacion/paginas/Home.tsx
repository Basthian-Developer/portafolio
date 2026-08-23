import { Navbar } from "../componentes/Navbar";
import { Hero } from "../componentes/Hero";
import { About } from "../componentes/About";
import { Skills } from "../componentes/Skills";
import { Experience } from "../componentes/Experience";
import { Projects } from "../componentes/Projects";
import { Contact } from "../componentes/Contact";
import { Footer } from "../componentes/Footer";

/* =============================================================================
   APP
   ============================================================================= */

export function Home() {
  return (
    <div className="app scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}