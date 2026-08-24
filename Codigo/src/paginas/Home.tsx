import { Navbar } from "@/componentes/Navbar";
import { Perfil as Hero } from "@/funcionalidades/perfil/componentes/Perfil";
import { About } from "@/componentes/About"
import { Habilidades } from "@/funcionalidades/habilidad/componentes/Habilidades";
import { Experiencia } from "@/componentes/Experiencia";
import { Proyectos } from "@/funcionalidades/proyectos/componentes/Proyectos";
import { Contacto } from "@/componentes/Contacto";
import { Footer } from "@/componentes/Footer";

/* =============================================================================
   APP
   ============================================================================= */

export function Home() {
  return (
    <div className="app scroll-smooth">
      <Navbar />
      <main>
        <Hero/>
        <About />
        <Habilidades />
        <Proyectos />
        <Experiencia />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}