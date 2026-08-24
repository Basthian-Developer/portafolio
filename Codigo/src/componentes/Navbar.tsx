import { useEffect, useState } from "react";
import type { Perfil } from "@/funcionalidades/perfil/types";
import { obtenerPerfil } from "@/funcionalidades/perfil/servicios/PerfilServices";
import { navLinks } from "@/data/NavLinks";

export function Navbar() {
  const [perfil, setPerfil] = useState<Perfil>();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPerfil(obtenerPerfil())
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="wrap nav__row">
        <a href="#top" className="nav__mark">
          {perfil?.name} <span className="dot">·dev</span>
        </a>

        <nav className="nav__links" aria-label="Navegación principal">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__ext">
          <a href={`https://${perfil?.github}`} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`https://${perfil?.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={perfil?.cvUrl} className="text-link" target="_blank" rel="noreferrer">Ver CV</a>
        </div>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="wrap nav__mobile">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="nav__ext">
            <a href={`https://${perfil?.github}`} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`https://${perfil?.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={perfil?.cvUrl} target="_blank" rel="noreferrer">Ver CV</a>
          </div>
        </div>
      )}
    </header>
  );
}