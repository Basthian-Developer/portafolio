import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "@/data/NavLinks";
import { usePerfil } from "@/funcionalidades/perfil/hooks/usePerfil"; 

export function Footer() {
  const {perfiles, loading} = usePerfil();
  const perfil = perfiles[0]

  if(loading){
    return <p>...Cargando</p>
  }

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