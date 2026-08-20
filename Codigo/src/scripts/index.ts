// ===== Typed role effect =====

const roles: string[] = [
  'Desarrolladora Full-Stack',
  'Ingeniera UI',
  'Solucionadora de problemas',
  'Amante del gradiente azul',
]

const typedEl = document.getElementById('typedRole') as HTMLElement

let roleIndex: number = 0
let charIndex: number = 0
let deleting: boolean = false

function typeLoop(): void {
  const current: string = roles[roleIndex]

  if (!deleting) {
    charIndex++
    typedEl.textContent = current.slice(0, charIndex)

    if (charIndex === current.length) {
      deleting = true
      setTimeout(typeLoop, 1600)
      return
    }
  } else {
    charIndex--
    typedEl.textContent = current.slice(0, charIndex)

    if (charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }

  setTimeout(typeLoop, deleting ? 35 : 65)
}

setTimeout(typeLoop, 900)

// ===== Mobile nav toggle =====

const navToggle = document.getElementById('navToggle') as HTMLButtonElement
const navLinks = document.getElementById('navLinks') as HTMLUListElement

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open')
})

navLinks.querySelectorAll('a').forEach((link: HTMLAnchorElement) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')
  })
})

// ===== Scroll reveal =====

const revealEls: NodeListOf<Element> =
  document.querySelectorAll('.reveal')

const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.15,
  }
)

revealEls.forEach((element: Element) => {
  observer.observe(element)
})

// ===== Contact form =====

const form = document.getElementById('contactForm') as HTMLFormElement
const status = document.getElementById('formStatus') as HTMLElement

form.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault()

  status.textContent =
    'Este es un prototipo — el formulario no envía datos reales. ¡Gracias por probarlo!'

  form.reset()
})