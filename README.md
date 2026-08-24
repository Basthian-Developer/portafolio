# 💻 Portafolio — Basthian Developer

Portafolio web personal desarrollado con **React** para presentar mis proyectos, habilidades y experiencia como desarrollador.

El proyecto fue construido utilizando una arquitectura **Feature-Based**, enfocada en organizar el código por funcionalidades o características de la aplicación. Además, incorpora **Docker** y un conjunto de herramientas modernas para el desarrollo de interfaces web.

---

## 🚀 Demo

🌐 **Portafolio:**

[portafoliobasthianf.vercel.app](https://portafoliobasthianf.vercel.app)

📦 **Repositorio:**

[GitHub — Basthian-Developer/portafolio](https://github.com/Basthian-Developer/portafolio)

---

## 🛠️ Tecnologías

### Frontend

* **React** — Construcción de la interfaz y componentes reutilizables.
* **Tailwind CSS** — Diseño y estilos de la aplicación.
* **Motion** — Animaciones y transiciones de la interfaz.
* **React Icons** — Iconografía de la aplicación.
* **Node.js** — Entorno de ejecución y gestión del proyecto.

### Arquitectura

* **Feature-Based Architecture**
* Organización del código por funcionalidades.
* Separación de responsabilidades dentro de cada feature.
* Componentes reutilizables.
* Estructura modular y escalable.

### DevOps / Deployment

* **Docker** — Contenerización del proyecto.
* **Docker Compose** — Configuración y ejecución del entorno mediante contenedores.
* **Vercel** — Deployment y hosting del portafolio.

---

## 🏗️ Arquitectura

El proyecto utiliza una **arquitectura Feature-Based**, donde el código se organiza principalmente de acuerdo con las funcionalidades de la aplicación en lugar de agrupar todos los componentes, servicios o archivos por tipo.

Este enfoque permite que cada funcionalidad tenga sus propios componentes, lógica, estilos y recursos relacionados, facilitando el mantenimiento y la escalabilidad del proyecto.

Una representación simplificada de la estructura es:

```text
Codigo/
├── features/
│   ├── ...
│   ├── ...
│   └── ...
│
├── components/
├── ...
└── ...
```

Cada **feature** busca mantener agrupado el código relacionado con una funcionalidad específica, reduciendo el acoplamiento entre diferentes partes de la aplicación y facilitando futuras modificaciones.

> La estructura puede evolucionar a medida que el proyecto crezca, manteniendo como prioridad la modularidad, separación de responsabilidades y reutilización de componentes.

---

## ✨ Características

* 🎨 Diseño responsive.
* ⚛️ Interfaz desarrollada con React.
* 🧩 Componentes reutilizables.
* 🎬 Animaciones utilizando Motion.
* 🎯 Iconos mediante React Icons.
* 🎨 Estilos implementados con Tailwind CSS.
* 🏗️ Organización basada en **Feature-Based Architecture**.
* 📦 Código organizado por funcionalidades.
* 🐳 Entorno de desarrollo mediante Docker.
* 📦 Configuración mediante Docker Compose.
* ☁️ Preparado para deployment mediante Vercel.

---

## 🐳 Ejecución con Docker

Para ejecutar el proyecto utilizando Docker, primero clona el repositorio:

```bash
git clone https://github.com/Basthian-Developer/portafolio.git
```

Ingresa al proyecto:

```bash
cd portafolio
```

Luego puedes levantar el entorno utilizando Docker Compose:

```bash
docker compose up --build
```

Una vez iniciado el contenedor, accede a la aplicación desde el puerto configurado en `docker-compose.yml`.

Para detener los contenedores:

```bash
docker compose down
```

---

## 💻 Ejecución local

Si prefieres ejecutar el proyecto directamente con Node.js:

```bash
git clone https://github.com/Basthian-Developer/portafolio.git

cd portafolio
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en la dirección indicada por Vite al iniciar el proyecto.

---

## 📁 Estructura del repositorio

```text
portafolio/
│
├── Codigo/              # Código fuente de la aplicación
│
├── Explicacion.md       # Documentación y explicación del proyecto
│
├── docker-compose.yml   # Configuración de Docker Compose
│
└── README.md            # Documentación principal
```

### Estructura basada en Features

Dentro de `Codigo/`, las funcionalidades se organizan siguiendo el enfoque **Feature-Based**:

```text
Codigo/
│
├── features/
│   ├── feature-1/
│   │   ├── components/
│   │   ├── ...
│   │   └── ...
│   │
│   ├── feature-2/
│   │   ├── components/
│   │   ├── ...
│   │   └── ...
│   │
│   └── ...
│
├── components/          # Componentes compartidos
├── ...
└── ...
```

La estructura exacta puede variar según las necesidades de cada funcionalidad.

---

## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado como mi **portafolio profesional**, pero también como una oportunidad para aplicar buenas prácticas de desarrollo de software y trabajar con tecnologías utilizadas actualmente en el desarrollo web.

Más allá de construir una interfaz visual, el objetivo fue aplicar conceptos como:

* Arquitectura de software.
* Organización basada en funcionalidades.
* Separación de responsabilidades.
* Componentización.
* Reutilización de código.
* Modularidad.
* Contenerización.
* Desarrollo de interfaces responsive.
* Animaciones e interacción.
* Deployment de aplicaciones web.

---

## 📚 Aprendizajes

Durante el desarrollo del proyecto reforcé conocimientos en:

* Desarrollo de aplicaciones con React.
* Diseño de componentes reutilizables.
* Implementación de interfaces con Tailwind CSS.
* Animaciones con Motion.
* Organización del código mediante **Feature-Based Architecture**.
* Diseño de estructuras modulares.
* Separación de responsabilidades dentro de las funcionalidades.
* Uso de Docker y Docker Compose.
* Gestión de dependencias con Node.js.
* Preparación de aplicaciones para deployment.

---

## 👨‍💻 Autor

**Basthian Developer**

Desarrollador enfocado en la creación de aplicaciones web y en el aprendizaje continuo de nuevas tecnologías y buenas prácticas de desarrollo.

📌 **GitHub:**

[Basthian-Developer](https://github.com/Basthian-Developer)

🌐 **Portafolio:**

[portafoliobasthianf.vercel.app](https://portafoliobasthianf.vercel.app)

---

⭐ Si este proyecto te resulta interesante, puedes visitar el repositorio y conocer más sobre su implementación.
