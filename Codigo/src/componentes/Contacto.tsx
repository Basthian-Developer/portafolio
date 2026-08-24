import { useEffect, useState } from "react";
import type { Perfil } from "@/funcionalidades/perfil/types";
import { obtenerPerfil } from "@/funcionalidades/perfil/servicios/PerfilServices";
import { Reveal } from "./Motion";

export function Contacto() {
  const [perfil, setPerfil] = useState<Perfil>();

  useEffect(() => {
    setPerfil(obtenerPerfil())
  }, []);

  return (
    <section
      id="contact"
      className="scroll-mt-[72px]"
    >
      <div className="wrap">
        <div className="contact">
          <Reveal>
            <div>
              <span className="eyebrow"><span className="folio">§ 05</span> Contacto</span>
              <h2 className="contact__title">
                ¿Un proyecto en mente?<br /><em>Hablemos.</em>
              </h2>
              <div className="hero__cta" style={{ marginTop: "2rem" }}>
                <a href={`mailto:${perfil?.email}`} className="btn btn--primary">Escribir un correo</a>
                <a href={perfil?.cvUrl} className="btn" target="_blank" rel="noreferrer">Descargar CV</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact__list">
              <div className="contact__row">
                <span className="k">Email</span>
                <a className="v" href={`mailto:${perfil?.email}`}>{perfil?.email}</a>
              </div>
              <div className="contact__row">
                <span className="k">GitHub</span>
                <a className="v" href={`https://${perfil?.github}`} target="_blank" rel="noreferrer">{perfil?.github}</a>
              </div>
              <div className="contact__row">
                <span className="k">LinkedIn</span>
                <a className="v" href={`https://${perfil?.linkedin}`} target="_blank" rel="noreferrer">{perfil?.linkedin}</a>
              </div>
              <div className="contact__row">
                <span className="k">Ubicación</span>
                <span className="v">{perfil?.location}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}