import { Reveal } from "./Motion";
import { usePerfil } from "@/funcionalidades/perfil/hooks/usePerfil";

export function Contacto() {
  const {perfiles, loading} = usePerfil();
  const perfilDefault = {
    nombre: "...Cargando",
    rol: "...Cargando",
    especialidad: "...Cargando",
    ciudad: "...Cargando",
    pais: "...Cargando",
    disponibilidad: "...Cargando",
    email: "...Cargando",
    github: "...Cargando",
    linkedin: "...Cargando",
    cvUrl: "...Cargando"
  }
  
  const perfil = loading ? perfilDefault : perfiles[0] ?? perfilDefault

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
                <span className="v">{perfil?.ciudad}, {perfil?.pais}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}