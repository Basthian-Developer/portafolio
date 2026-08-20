import './App.css'

function App() {
  return (
    <>
      <div className="background">
        <div className="bg-mesh" />
        <div className="bg-grain" />
      </div>

      <header className="header">
        <nav className="nav container">
          <a href="#top" className="logo">
            B<span>.</span>Flores
          </a>

          <div className="nav-links">
            <a href="#about">Sobre mí</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Proyectos</a>
            <a href="#experience">Experiencia</a>
            <a href="#contact">Contacto</a>
          </div>

          <a href="#contact" className="nav-cta">
            Hablemos
          </a>
        </nav>
      </header>

      <main id="top">

        {/* HERO */}
        <section className="hero section">
          <div className="container hero-grid">

            <div className="hero-content">
              <span className="eyebrow">
                Disponible para nuevos proyectos
              </span>

              <h1>
                Basthian Renato
                <br />
                Flores Millán
                <span className="gradient-text">.</span>
              </h1>

              <div className="hero-role">
                Desarrollador <span>Full-Stack</span>
              </div>

              <p className="hero-description">
                Desarrollo aplicaciones web modernas, rápidas y
                mantenibles. Me interesa convertir ideas en productos
                digitales funcionales, accesibles y con una buena
                experiencia de usuario.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  Ver proyectos
                </a>

                <a href="#contact" className="button button-secondary">
                  Contactarme
                </a>
              </div>

              <div className="hero-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Docker</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="code-card">
                <div className="code-header">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="code-content">
                  <p>
                    <span className="code-purple">const</span>{' '}
                    developer = {'{'}
                  </p>

                  <p className="indent">
                    <span className="code-blue">name:</span>{' '}
                    <span className="code-green">'Basthian'</span>,
                  </p>

                  <p className="indent">
                    <span className="code-blue">role:</span>{' '}
                    <span className="code-green">
                      'Full-Stack Developer'
                    </span>,
                  </p>

                  <p className="indent">
                    <span className="code-blue">passion:</span>{' '}
                    <span className="code-green">
                      'Building'
                    </span>,
                  </p>

                  <p className="indent">
                    <span className="code-blue">stack:</span>{' '}
                    <span className="code-green">
                      'React + Node'
                    </span>,
                  </p>

                  <p>{'}'}</p>
                </div>

                <div className="code-cursor" />
              </div>

              <div className="floating-card card-react">
                <span>⚛</span>
                React
              </div>

              <div className="floating-card card-docker">
                <span>◈</span>
                Docker
              </div>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">

            <div className="section-heading">
              <span className="eyebrow">Sobre mí</span>

              <h2>
                Código y aprendizaje en{' '}
                <span className="gradient-text">
                  constante evolución
                </span>
              </h2>
            </div>

            <div className="about-grid">

              <div className="stats-grid">

                <div className="stat-card">
                  <strong>4+</strong>
                  <span>Proyectos personales</span>
                </div>

                <div className="stat-card">
                  <strong>∞</strong>
                  <span>Cosas por aprender</span>
                </div>

                <div className="stat-card">
                  <strong>24/7</strong>
                  <span>Curiosidad técnica</span>
                </div>

                <div className="stat-card">
                  <strong>100%</strong>
                  <span>Compromiso</span>
                </div>

              </div>

              <div className="about-content">
                <p>
                  Soy desarrollador de software enfocado en la creación
                  de <strong>aplicaciones web modernas</strong> utilizando
                  tecnologías actuales del ecosistema JavaScript y
                  TypeScript.
                </p>

                <p>
                  Actualmente estoy fortaleciendo mis conocimientos en
                  desarrollo frontend y backend, trabajando con React,
                  TypeScript, Node.js, Docker y herramientas del
                  ecosistema web.
                </p>

                <p>
                  Me interesa especialmente comprender cómo funcionan
                  las aplicaciones desde sus interfaces hasta su
                  infraestructura, buscando escribir código limpio,
                  mantenible y fácil de entender.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-alt">
          <div className="container">

            <div className="section-heading">
              <span className="eyebrow">Habilidades</span>
              <h2>Stack de trabajo</h2>
            </div>

            <div className="skills-grid">

              <div className="skill-card">
                <div className="skill-number">01</div>

                <h3>Frontend</h3>

                <p>
                  Desarrollo de interfaces modernas, componentes
                  reutilizables y experiencias responsive.
                </p>

                <div className="tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Vite</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-number">02</div>

                <h3>Backend</h3>

                <p>
                  Desarrollo de APIs, servicios y estructuras necesarias
                  para aplicaciones web.
                </p>

                <div className="tags">
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>REST</span>
                  <span>PostgreSQL</span>
                  <span>Python</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-number">03</div>

                <h3>DevOps & Tools</h3>

                <p>
                  Entornos de desarrollo, contenedores, control de
                  versiones y herramientas para mejorar el flujo de trabajo.
                </p>

                <div className="tags">
                  <span>Docker</span>
                  <span>Docker Compose</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Linux</span>
                  <span>CI/CD</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">

            <div className="section-heading project-heading">
              <div>
                <span className="eyebrow">Proyectos</span>
                <h2>Trabajo seleccionado</h2>
              </div>

              <p>
                Proyectos personales y experimentales creados para
                practicar diferentes tecnologías y resolver problemas
                concretos.
              </p>
            </div>

            <div className="projects-grid">

              <article className="project-card">
                <div className="project-image project-blue">
                  <span>01</span>
                </div>

                <div className="project-content">
                  <span className="project-type">
                    Full-Stack
                  </span>

                  <h3>Nimbus Analytics</h3>

                  <p>
                    Dashboard para visualizar métricas de una aplicación
                    mediante gráficos interactivos y datos en tiempo real.
                  </p>

                  <div className="tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>WebSockets</span>
                  </div>

                  <a href="#contact" className="project-link">
                    Ver proyecto →
                  </a>
                </div>
              </article>

              <article className="project-card">
                <div className="project-image project-purple">
                  <span>02</span>
                </div>

                <div className="project-content">
                  <span className="project-type">
                    E-commerce
                  </span>

                  <h3>Orbita Market</h3>

                  <p>
                    Plataforma de comercio electrónico enfocada en una
                    experiencia de compra sencilla y responsive.
                  </p>

                  <div className="tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>PostgreSQL</span>
                  </div>

                  <a href="#contact" className="project-link">
                    Ver proyecto →
                  </a>
                </div>
              </article>

              <article className="project-card">
                <div className="project-image project-cyan">
                  <span>03</span>
                </div>

                <div className="project-content">
                  <span className="project-type">
                    Web App
                  </span>

                  <h3>Deep Blue CMS</h3>

                  <p>
                    Sistema de gestión de contenidos pensado para
                    administrar publicaciones mediante una interfaz web.
                  </p>

                  <div className="tags">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Docker</span>
                  </div>

                  <a href="#contact" className="project-link">
                    Ver proyecto →
                  </a>
                </div>
              </article>

              <article className="project-card">
                <div className="project-image project-pink">
                  <span>04</span>
                </div>

                <div className="project-content">
                  <span className="project-type">
                    PWA
                  </span>

                  <h3>Pulse Fitness</h3>

                  <p>
                    Aplicación web progresiva para registrar
                    entrenamientos, objetivos y progreso personal.
                  </p>

                  <div className="tags">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>PWA</span>
                  </div>

                  <a href="#contact" className="project-link">
                    Ver proyecto →
                  </a>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section section-alt">
          <div className="container">

            <div className="section-heading">
              <span className="eyebrow">Experiencia</span>
              <h2>Trayectoria</h2>
            </div>

            <div className="timeline">

              <div className="timeline-item">
                <span className="timeline-date">
                  2026 — Presente
                </span>

                <div>
                  <h3>Desarrollo independiente</h3>

                  <strong>
                    Desarrollador Full-Stack
                  </strong>

                  <p>
                    Desarrollo de proyectos personales para fortalecer
                    conocimientos de frontend, backend, Docker,
                    TypeScript y arquitectura de aplicaciones web.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">
                  2025 — 2026
                </span>

                <div>
                  <h3>Formación y proyectos</h3>

                  <strong>
                    Desarrollo Web
                  </strong>

                  <p>
                    Construcción de proyectos prácticos utilizando
                    tecnologías modernas y buenas prácticas de desarrollo.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-date">
                  Actualmente
                </span>

                <div>
                  <h3>Aprendizaje continuo</h3>

                  <strong>
                    Software Development
                  </strong>

                  <p>
                    Exploración constante de nuevas tecnologías,
                    herramientas y metodologías para mejorar como
                    desarrollador.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">

            <div className="contact-card">

              <div className="contact-info">
                <span className="eyebrow">
                  Contacto
                </span>

                <h2>
                  Construyamos algo
                  <span className="gradient-text">
                    {' '}juntos.
                  </span>
                </h2>

                <p>
                  ¿Tienes una idea, proyecto o simplemente quieres
                  conversar sobre desarrollo web?
                </p>

                <div className="contact-links">
                  <a href="mailto:basthian@example.com">
                    basthian@example.com
                  </a>

                  <a href="#top">
                    LinkedIn
                  </a>

                  <a href="#top">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="contact-decoration">
                <span>&lt;</span>
                <strong>/</strong>
                <span>&gt;</span>
              </div>

            </div>

          </div>
        </section>

      </main>

      <footer>
        <div className="container footer-content">
          <span>
            © 2026 Basthian Flores
          </span>

          <span>
            Diseñado & desarrollado con React + TypeScript
          </span>
        </div>
      </footer>
    </>
  )
}

export default App