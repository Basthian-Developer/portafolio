import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "@/data/NavLinks";
import { usePerfil } from "@/funcionalidades/perfil/hooks/usePerfil"; 

export function Footer() {
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
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="footer__brand">{perfil?.nombre}</div>
            <p className="footer__desc">
              Ingeniero informático especializado en el desarrollo de soluciones web.
            </p>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Navegación</div>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Enlaces</div>
            <a href={`https://${perfil?.github}`} target="_blank" rel="noreferrer">
              <FaGithub />
              GitHub
            </a>
            <a href={`https://${perfil?.linkedin}`} target="_blank" rel="noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
            <a href={`mailto:${perfil?.email}`}>
              <FaEnvelope />
              {perfil?.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}