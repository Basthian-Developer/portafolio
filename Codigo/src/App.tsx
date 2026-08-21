import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { initInteractions } from "./scripts/index";

/* =============================================================================
   DATOS DE DEMOSTRACIÓN
   -----------------------------------------------------------------------------
   Todo el contenido de este bloque es FICTICIO y sirve únicamente para poder
   visualizar el diseño. Sustituye cada campo por tu información real antes
   de publicar el sitio. Los tipos (interfaces) describen la forma que debe
   mantener cada dato reemplazado.
   ============================================================================= */

interface Profile {
  name: string;
  role: string;
  location: string;
  availability: string;
  version: string; // TODO: sustituir por fecha real del último despliegue
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
}

// TODO: reemplazar con los datos reales del perfil
const profile: Profile = {
  name: "Basthian Flores",
  role: "Ingeniero Informático · Full Stack Developer",
  location: "Penco, Chile",
  availability: "Disponible desde Sep 2026",
  version: "v.2026.3 — último despliegue 14 ago",
  email: "basthianfmillan@gmail.com",
  github: "github.com/Basthian-Developer",
  linkedin: "linkedin.com/in/basthian-f-1b895b2a3",
  cvUrl: "/documentos/basthian_flores_CV.pdf",
};

interface SkillGroup {
  category: string;
  code: string; // identificador tipo mono, p.ej. "LANG"
  items: { name: string; core?: boolean }[];
}

// TODO: reemplazar con las tecnologías reales, agrupadas por dominio
const skillGroups: SkillGroup[] = [
  {
    category: "Lenguajes",
    code: "LANG",
    items: [
      { name: "TypeScript"},
      { name: "Python", core: true },
      { name: "SQL"},
    ],
  },
  {
    category: "Frontend",
    code: "FE",
    items: [
      { name: "React", core: true },
      { name: "Next.js", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "Vite" },
      { name: "CSS moderno" },
    ],
  },
  {
    category: "Backend",
    code: "BE",
    items: [
      { name: "Node.js", core: true },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Datos",
    code: "DATA",
    items: [
      { name: "PostgreSQL"},
      { name: "Redis", core: true },
      { name: "MariaDB", core: true },
      { name: "SQL Server" },
    ],
  },
  {
    category: "Infra & Cloud",
    code: "OPS",
    items: [
      { name: "Docker", core: true },
      { name: "GitHub Actions" },
    ],
  },
];

interface Project {
  id: string;
  title: string;
  kicker: string; // tipo de proyecto / categoría corta
  description: string;
  problem: string;
  technologies: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  size: "feature" | "b" | "c" | "d" | "e";
  pattern: number; // variante visual del placeholder (1-5)
}

// TODO: reemplazar con proyectos reales. Mantén la estructura para no romper el layout.
const projects: Project[] = [
  {
    id: "01",
    title: "Sistema De Gestión de Equipos TIC",
    kicker: "Sistema distribuido",
    description:
      "Solución web que permite gestionar la información tecnica de los dispositivos (PC, Impresoras) y llevar una trazabilidad de los mismos.",
    problem:
      "El equipo de TI del Cesfam de Penco solicito implementar una mejora respecto a la manera en la que gestionaban la información de sus equipos.",
    technologies: ["Vue", "Node.js", "MariaDB", "Redis", "Docker"],
    year: "2025",
    liveUrl: "https://ledger-demo.alexnavarro.dev",
    githubUrl: "https://github.com/Basthian-Developer/Proyecto-SIGETIC",
    size: "feature",
    pattern: 1,
  },
];

interface ExperienceItem {
  year: string;
  role: string;
  org: string;
  description: string[];
}

// TODO: reemplazar con experiencia real
const experience: ExperienceItem[] = [
  {
    year: "2025",
    role: "Estudiante en practica TIC",
    org: "Hospital Lirquén · Presencial",
    description: [
      "· Trabaje modificando paginas webs existentes y implementado nuevas funcionalidades conforme a las necesidades del equipo.",
      "· Aprendi a trabajar utilizando GIT para el control de versiones.",
    ]
  },
];

interface CredentialItem {
  label: string;
  title: string;
  meta: string;
}

// TODO: reemplazar con formación y certificaciones reales
const credentials: CredentialItem[] = [
  {
    label: "Formación",
    title: "Ingeniería en Ejecución Informática",
    meta: "Instituto Profesional Santo Tomás — 2022 / 2026",
  },
];

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

/* =============================================================================
   COMPONENTES DE UI
   ============================================================================= */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="wrap nav__row">
        <a href="#top" className="nav__mark">
          {profile.name} <span className="dot">·dev</span>
        </a>

        <nav className="nav__links" aria-label="Navegación principal">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__ext">
          <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.cvUrl} className="text-link" target="_blank" rel="noreferrer">Ver CV</a>
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
            <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.cvUrl} target="_blank" rel="noreferrer">Ver CV</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__top">
          <span className="hero__status">
            <span className="pulse" aria-hidden="true" />
            {profile.availability}
          </span>
          <span className="hero__meta mono">{profile.version}</span>
        </div>

        <h1 className="hero__title">
          Construyo software <em>que funciona</em> en producción, no solo en la demo.
        </h1>

        <div className="hero__bottom">
          <div>
            <p className="hero__desc">
              Soy {profile.name}, {profile.role.toLowerCase()}. Diseño y construyo soluciones web robustas y bien diseñadas, con atención a la arquitectura, el rendimiento y la experiencia del usuario.
            </p>
            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary">Ver proyectos →</a>
              <a href="#contact" className="btn">Hablemos</a>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <b>{profile.location.split(",")[0]}</b>
              <span>Ubicación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">

        <div className="grid grid-cols-1 min-[861px]:grid-cols-[1.1fr_0.9fr] gap-8">
          <Reveal className="min-[861px]:col-start-1">
            <span className="eyebrow">
              <span className="folio">§ 01</span> Sobre mí
            </span>
          </Reveal>

          <Reveal className="min-[861px]:col-start-1">
            <div className="about__body">
              <p>
                Lo que me motivó a entrar al mundo de la programación fue la posibilidad de
                desarrollar distintos tipos de software y convertir necesidades reales en
                soluciones útiles para las empresas. Mi objetivo es seguir creciendo hasta
                convertirme en un profesional capaz de aportar valor y ser un elemento
                indispensable dentro de un equipo.
              </p>

              <p className="about__quote">
                "Pensar en todas las posibilidades para evitar todo error posible."
              </p>

              <p>
                Estoy comenzando mi camino profesional en el desarrollo de software, pero
                tengo claro que los errores forman parte del aprendizaje. Me caracterizo
                por la persistencia y por seguir aprendiendo a partir de mis fallos. Valoro
                especialmente la simplicidad, el trabajo en equipo y la calidad en cada
                entrega, buscando siempre mejorar tanto mis conocimientos como la forma en
                que trabajo.
              </p>

              <dl className="about__facts">
                <div className="about__fact">
                  <dt>Enfoque</dt>
                  <dd>Full-Stack & DevOps</dd>
                </div>

                <div className="about__fact">
                  <dt>Modalidad</dt>
                  <dd>Presencial · Remoto · Híbrido</dd>
                </div>

                <div className="about__fact">
                  <dt>Idiomas</dt>
                  <dd>Español (nativo) · Inglés (A2)</dd>
                </div>

                <div className="about__fact">
                  <dt>Stack principal</dt>
                  <dd>Python · React · Node.js · Docker · MariaDB</dd>
                </div>
              </dl>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section--dim" id="skills">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow"><span className="folio">§ 02</span> Habilidades técnicas</span>
        </Reveal>
        <Reveal>
          <div className="skills__table">
            {skillGroups.map((group) => (
              <div className="skills__row" key={group.code}>
                <div className="skills__cat">
                  {group.category}
                  <span>{group.code}</span>
                </div>
                <ul className="skills__items">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className={`skills__item mono ${item.core ? "is-core" : ""}`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isFeature = project.size === "feature";
  return (
    <article className={`project project--${project.size}`}>
      <div className="project__body">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__desc">{isFeature ? project.problem : project.description}</p>
        {isFeature && <p className="project__desc">{project.description}</p>}
        <div className="project__tags">
          {project.technologies.map((t) => (
            <span className="project__tag" key={t}>{t}</span>
          ))}
        </div>
        {isFeature}
        <div className="project__links">
          {project.githubUrl && (
            <a href={project.githubUrl} className="text-link" target="_blank" rel="noreferrer">Ver el proyecto ↗</a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section__head">
          <div>
            <Reveal>
              <span className="eyebrow"><span className="folio">§ 03</span> Proyectos seleccionados</span>
            </Reveal>
            <Reveal>
              <h2 className="section-title">Trabajo que impulso<br />mi crecimiento.</h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="lede">
              Una selección de proyectos personales o profesionales que muestran mi enfoque en la construcción de software robusto y bien diseñado, con atención a la arquitectura, el rendimiento y la experiencia del usuario.
            </p>
          </Reveal>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <Reveal key={p.id} className={`project--${p.size}-wrap`}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section--dim">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow"><span className="folio">§ 04</span> Trayectoria</span>
        </Reveal>
        <div className="info__grid">
          <Reveal>
            <div className="timeline">
              {experience.map((e) => (
                <div className="timeline__item" key={e.role}>
                  <div className="timeline__year mono">{e.year}</div>
                  <div>
                    <div className="timeline__role">{e.role}</div>
                    <div className="timeline__org mono">{e.org}</div>
                    <p className="timeline__desc">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="credentials">
              {credentials.map((c) => (
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

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact">
          <Reveal>
            <div>
              <span className="eyebrow"><span className="folio">§ 05</span> Contacto</span>
              <h2 className="contact__title">
                ¿Un proyecto en mente?<br /><em>Hablemos.</em>
              </h2>
              <div className="hero__cta" style={{ marginTop: "2rem" }}>
                <a href={`mailto:${profile.email}`} className="btn btn--primary">Escribir un correo</a>
                <a href={profile.cvUrl} className="btn" target="_blank" rel="noreferrer">Descargar CV</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact__list">
              <div className="contact__row">
                <span className="k">Email</span>
                <a className="v" href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact__row">
                <span className="k">GitHub</span>
                <a className="v" href={`https://${profile.github}`} target="_blank" rel="noreferrer">{profile.github}</a>
              </div>
              <div className="contact__row">
                <span className="k">LinkedIn</span>
                <a className="v" href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">{profile.linkedin}</a>
              </div>
              <div className="contact__row">
                <span className="k">Ubicación</span>
                <span className="v">{profile.location}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="footer__brand">{profile.name}</div>
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
            <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} {profile.name}. Todos los derechos reservados.</span>
          <span>{profile.version}</span>
        </div>
      </div>
    </footer>
  );
}

/* =============================================================================
   APP
   ============================================================================= */

export default function App() {
  useEffect(() => {
    const cleanup = initInteractions();
    return cleanup;
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}