import { useEffect, useState } from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import type { Perfil } from "@/dominio/entidades/Perfil";
import { obtenerPerfil } from "@/configuracion/PerfilDependencies";
import { navLinks } from "@/configuracion/NavLinks";

export function Footer() {
  const year = new Date().getFullYear();
  const [profile, setProfile] = useState<Perfil>();

  useEffect(() => {
    obtenerPerfil.ejecutar().then(setProfile);
  }, []);
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="footer__brand">{profile?.name}</div>
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
            <a href={`https://${profile?.github}`} target="_blank" rel="noreferrer">
              <FaGithub />
              GitHub
            </a>
            <a href={`https://${profile?.linkedin}`} target="_blank" rel="noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
            <a href={`mailto:${profile?.email}`}>
              <FaEnvelope />
              {profile?.email}
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} {profile?.name}. Todos los derechos reservados.</span>
          <span>{profile?.version}</span>
        </div>
      </div>
    </footer>
  );
}