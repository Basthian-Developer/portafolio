import { Reveal } from "./Motion";

export function About() {
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