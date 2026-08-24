import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import type { Perfil } from "@/funcionalidades/perfil/types";
import { obtenerPerfil } from "@/funcionalidades/perfil/servicios/PerfilServices";
import { navLinks } from "@/data/NavLinks";

export function Footer() {
  const year = new Date().getFullYear();
  const [perfil, setPerfil] = useState<Perfil>();

  useEffect(() => {
    setPerfil(obtenerPerfil())
  }, []);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="footer__brand">{perfil?.name}</div>
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
        <div className="footer__bottom">
          <span>© {year} {perfil?.name}. Todos los derechos reservados.</span>
          <span>{perfil?.version}</span>
        </div>
      </div>
    </footer>
  );
}