import { useEffect, useState } from "react";
import type { Perfil } from "@/dominio/entidades/Perfil";
import { obtenerPerfil } from "@/configuracion/PerfilDependencies";
import { Reveal } from "./Motion";

export function Contact() {
  const [profile, setProfile] = useState<Perfil>();

  useEffect(() => {
    obtenerPerfil.ejecutar().then(setProfile);
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
                <a href={`mailto:${profile?.email}`} className="btn btn--primary">Escribir un correo</a>
                <a href={profile?.cvUrl} className="btn" target="_blank" rel="noreferrer">Descargar CV</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact__list">
              <div className="contact__row">
                <span className="k">Email</span>
                <a className="v" href={`mailto:${profile?.email}`}>{profile?.email}</a>
              </div>
              <div className="contact__row">
                <span className="k">GitHub</span>
                <a className="v" href={`https://${profile?.github}`} target="_blank" rel="noreferrer">{profile?.github}</a>
              </div>
              <div className="contact__row">
                <span className="k">LinkedIn</span>
                <a className="v" href={`https://${profile?.linkedin}`} target="_blank" rel="noreferrer">{profile?.linkedin}</a>
              </div>
              <div className="contact__row">
                <span className="k">Ubicación</span>
                <span className="v">{profile?.location}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}