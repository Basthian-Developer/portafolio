import { Reveal } from "./Motion";
import { useEffect, useState } from "react";
import type { Experiencia } from "@/dominio/entidades/Experiencia";
import { obtenerExperiencias } from "@/configuracion/ExperienciaDependencies";
import type { Formacion } from "@/dominio/entidades/Formacion";
import { obtenerFormaciones } from "@/configuracion/FormacionDependencies";

export function Experience() {
  const [experiences, setExperiences] = useState<Experiencia[]>([]);
  const [formations, setFormations] = useState<Formacion[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const experiences = await obtenerExperiencias.ejecutar();
      setExperiences(experiences);
    };

    const fetchFormations = async () => {
      const formations = await obtenerFormaciones.ejecutar();
      setFormations(formations);
    };

    fetchExperiences();
    fetchFormations();
  }, []);

  return (
    <section className="section section--dim">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow"><span className="folio">§ 04</span> Trayectoria</span>
        </Reveal>
        <div className="info__grid">
          <Reveal>
            <div className="timeline">
              {experiences.map((e) => (
                <div className="timeline__item" key={e.role}>
                  <div className="timeline__year mono">{e.year}</div>
                  <div>
                    <div className="timeline__role">{e.role}</div>
                    <div className="timeline__org mono">{e.org}</div>
                    <ul className="mt-3 max-w-[45ch] space-y-1">
                      {e.description.map((activity) => (
                        <li
                          key={activity}
                          className="text-sm leading-relaxed text-[#58514A]"
                        >
                          · {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="credentials">
              {formations.map((c) => (
                <div className="credential" key={c.title}>
                  <span className="credential__label mono">{c.label}</span>
                  <div className="credential__title">{c.title}</div>
                  <div className="credential__meta mono">{c.meta}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}