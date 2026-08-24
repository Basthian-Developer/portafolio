import { useEffect, useMemo, useState } from "react";
import { navLinks } from "@/data/NavLinks";
import { usePerfil } from "@/funcionalidades/perfil/hooks/usePerfil";

export function Navbar() {
  const { perfiles, loading } = usePerfil();
  let perfilDefault = {
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
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

      setScrollProgress(progress);

      setScrolled(scrollTop > 12);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, []);

  const perfil = useMemo(() => {
    if(loading){
      return perfilDefault
    }

    return perfiles[0] ?? perfilDefault
  }, [loading, perfiles])

  return (
    <header className={`nav relative ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="wrap nav__row">
        <a href="#top" className="nav__mark">
          {perfil?.nombre} <span className="dot">·dev</span>
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
      <div
        className="absolute bottom-0 left-0 z-[100] h-0.5 bg-red-700"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}