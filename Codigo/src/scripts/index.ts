/**
 * script.ts
 * -----------------------------------------------------------------------
 * Interactividad ligera que no depende del ciclo de vida de React:
 *  1) Compensa el offset del navbar fijo al hacer scroll a un ancla.
 *  2) Inserta un indicador de progreso de lectura en el navbar (una regla
 *     roja de 2px que crece con el scroll), coherente con la identidad
 *     "tecnológica" del sitio: es un dato real (progreso), no decoración.
 *
 * initInteractions() se llama una vez desde App (ver app.tsx) dentro de un
 * useEffect y devuelve una función de limpieza.
 */

const NAV_OFFSET = 72; // alto aproximado del navbar fijo, en px

function setupAnchorOffset(): () => void {
  const handler = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;

    const el = document.querySelector(id);
    if (!el) return;

    event.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });

    // Mantiene la navegación accesible por teclado: mueve el foco al destino.
    (el as HTMLElement).setAttribute("tabindex", "-1");
    (el as HTMLElement).focus({ preventScroll: true });
  };

  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}

function setupScrollProgress(): () => void {
  const nav = document.querySelector(".nav");
  if (!nav) return () => {};

  let bar = nav.querySelector<HTMLDivElement>(".nav__progress");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "nav__progress";
    bar.setAttribute("aria-hidden", "true");
    nav.appendChild(bar);
  }

  const update = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar!.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);

  return () => {
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  };
}

function setupEscapeToCloseMobileNav(): () => void {
  const handler = (event: KeyboardEvent) => {
    if (event.key !== "Escape") return;
    const nav = document.querySelector(".nav.is-open");
    const toggle = document.querySelector<HTMLButtonElement>(".nav__toggle");
    if (nav && toggle) toggle.click();
  };
  document.addEventListener("keydown", handler);
  return () => document.removeEventListener("keydown", handler);
}

export function initInteractions(): () => void {
  const cleanups = [
    setupAnchorOffset(),
    setupScrollProgress(),
    setupEscapeToCloseMobileNav(),
  ];

  return () => cleanups.forEach((fn) => fn());
}