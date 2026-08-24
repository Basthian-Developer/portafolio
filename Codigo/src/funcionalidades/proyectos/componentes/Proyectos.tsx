import { useEffect, useState } from "react";
import type { Proyecto } from "@/funcionalidades/proyectos/types";
import { obtenerProyectos } from "@/funcionalidades/proyectos/servicios/ProyectoServices";
import { ProyectoCard } from "./ProyectoCard";
import { Reveal } from "@/componentes/Motion";

export function Proyectos() {
  const [projects, setProjects] = useState<Proyecto[]>([]);

  useEffect(() => {
    setProjects(obtenerProyectos());
  }, []);

  return (
    <section
      id="projects"
      className="scroll-mt-[72px] border-b border-black/15 py-28"
    >
      <div className="mx-auto max-w-[1320px] px-8 max-md:px-6">
        <div className="mb-20 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
            <div className="md:flex-1">
              <Reveal>
                <span className="mb-6 flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[#58514A]">
                  <span className="h-0.5 w-[22px] shrink-0 bg-[#B4232C]" />
                  <span className="font-semibold text-[#B4232C]">§ 03</span>
                  Proyectos seleccionados
                </span>
              </Reveal>

              <Reveal>
                <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.01em]">
                  Trabajo que impulso
                  <br />
                  mi crecimiento.
                </h2>
              </Reveal>
            </div>

            <Reveal>
              <p className="max-w-[46ch] text-[1.1875rem] leading-[1.6] text-[#58514A] md:flex-1">
                Una selección de proyectos personales o profesionales que muestran mi
                enfoque en la construcción de software robusto y bien diseñado, con
                atención a la arquitectura, el rendimiento y la experiencia del usuario.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.id} className="h-full">
              <ProyectoCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}