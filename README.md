<p align="center">
  <img src="./client/public/LogoOriginal.png" alt="Rick and Morty API Explorer Logo" width="300"/>
</p>

<h1 align="center">Rick and Morty API Explorer</h1>

<p align="center">
  <a href="https://react.dev/" target="_blank">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  </a>
  <a href="https://vitejs.dev/" target="_blank">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailTailwind CSS">
  </a>
  <a href="https://tanstack.com/query/latest" target="_blank">
    <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query">
  </a>
</p>

<p align="center">
  <video controls loop muted autoplay width="600">
    <source src="./client/public/Intro.mp4" type="video/mp4">
    Tu navegador no soporta el tag de video.
  </video>
</p>

<p align="center">
  ¡Bienvenido al Explorador del Multiverso de Rick and Morty! Esta aplicación te permite navegar, buscar y descubrir todos los personajes de la famosa serie, con una experiencia visual y sonora inmersiva.
</p>

## ✨ Características Principales

-   **Galería de Personajes**: Visualiza todos los personajes en una galería limpia y ordenada.
-   **Búsqueda Dinámica**: Encuentra personajes por nombre en tiempo real.
-   **Paginación Eficiente**: Navega fácilmente a través de cientos de personajes.
-   **Vista de Detalle de Personaje**: Haz clic en un personaje para obtener información completa, incluyendo su estado, especie, origen y episodios en los que aparece, con un fondo de video dinámico.
-   **Gestión de Favoritos**: Guarda tus personajes favoritos para acceder a ellos rápidamente en una sección dedicada con un fondo de video personalizado. Los favoritos se guardan localmente en tu navegador.
-   **Música de Fondo Ambiental**: Disfruta de una banda sonora inmersiva con controles de volumen y mute.
-   **Elementos de Diseño Estéticos**: Logos de Rick and Morty y de HedrichDev estratégicamente colocados para mejorar la experiencia visual.
-   **Diseño Adaptable (Responsive)**: Disfruta de una experiencia de usuario fluida tanto en dispositivos de escritorio como en móviles.

## 📸 Vistas Previa

<p align="center">
  <img src="./client/public/home.png" alt="Home Page Screenshot" width="400"/>
</p>
<p align="center">
  <img src="./client/public/favorite.png" alt="Favorites Page Screenshot" width="400"/>
</p>
<p align="center">
  <img src="./client/public/person.png" alt="Character Detail Page Screenshot" width="400"/>
</p>

## 🚀 Tecnologías Utilizadas

Este proyecto utiliza una arquitectura moderna y eficiente para ofrecer una experiencia de usuario de alta calidad.

### Frontend (`/client`)

-   **Framework**: <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white" alt="React"> para construir la interfaz de usuario.
-   **Bundler**: <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite"> para un desarrollo rápido y un build optimizado.
-   **Lenguaje**: <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript"> para un código más robusto y escalable.
-   **Gestión de Estado del Servidor**: <img src="https://img.shields.io/badge/TanStack_Query-FF4154?logo=reactquery&logoColor=white" alt="TanStack Query"> para un fetching de datos, cacheo y sincronización eficientes.
-   **Estilos**: <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS"> para un diseño rápido y personalizable.
-   **Componentes UI**: Construido con <img src="https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white" alt="shadcn/ui">, una colección de componentes reutilizables y accesibles.
-   **Routing**: <img src="https://img.shields.io/badge/Wouter-F04E98?logo=github&logoColor=white" alt="Wouter"> para una navegación ligera y eficiente entre páginas.
-   **Animaciones**: <img src="https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white" alt="Framer Motion"> para animaciones fluidas y declarativas.

### Backend (`/server`)

-   **Node.js**: <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" alt="Node.js"> El directorio `/server` contiene una configuración de servidor Node.js/Express (via `server/index.ts`). Este servidor se utiliza principalmente para:
    *   Actuar como **proxy de desarrollo** para el servidor de Vite en entorno local, facilitando la integración.
    *   Servir los **archivos estáticos** del frontend en un entorno de producción (si se optara por un despliegue full-stack que lo requiriera).
    **Nota Importante**: Para la funcionalidad principal de este "Rick and Morty API Explorer" (obtener datos de la API de Rick and Morty), **no se requiere un backend** activo, ya que la aplicación funciona enteramente en el lado del cliente y consume la API directamente.

### Compartido (`/shared`)

-   **Esquemas de Base de Datos**: Este directorio define la estructura de datos (ej. `users` y `posts` si se utilizaran) para la base de datos (Drizzle ORM). Contiene `shared/schema.ts` y `drizzle.config.ts`.
    **⚠️ Nota Importante**: Dado que esta aplicación es puramente del lado del cliente y obtiene datos directamente de la API de Rick and Morty, **los esquemas de base de datos en `/shared` (incluyendo la tabla `users` y el campo `password`) son irrelevantes y no se utilizan** para la funcionalidad actual de la aplicación.
    **Recomendación de Seguridad**: Si no tienes planes de implementar un backend con autenticación de usuarios y una base de datos persistente, se recomienda **eliminar el directorio `/shared` y `drizzle.config.ts`**, así como cualquier script relacionado en `package.json` (`npm run db:push`). Esto simplificará el proyecto y eliminará cualquier confusión sobre la seguridad de las contraseñas.

## 🛠️ Instalación y Uso

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

-   [Node.js](https://nodejs.org/) (versión 18.x o superior)
-   [npm](https://www.npmjs.com/) (generalmente incluido con Node.js)

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/HedrichDev/RickMortyAPIExplorer
    cd RickMortyAPIExplorer
    ```

2.  **Instala las dependencias:**
    Este comando instalará todas las dependencias necesarias tanto para el cliente como para el servidor.
    ```bash
    npm install
    ```

3.  **Ejecuta el proyecto en modo de desarrollo:**
    Esto iniciará el servidor de desarrollo de Vite para el frontend y el servidor de Node.js/Express para el backend. Podrás ver la aplicación en `http://localhost:5173`.
    ```bash
    npm run dev
    ```

### Scripts Disponibles

-   `npm run dev`: Inicia los servidores de desarrollo para cliente y backend.
-   `npm run build`: Compila el cliente de React/Vite para producción en la carpeta `/dist`.
-   `npm start`: Inicia el servidor de Node.js/Express para servir el build de producción.
-   `npm run db:push`: Empuja los cambios del esquema de la base de datos (Drizzle ORM).

## ☁️ Despliegue en Netlify

Este proyecto está configurado para un despliegue sencillo en Netlify. Se incluye un archivo `netlify.toml` que define los siguientes ajustes:

-   **Build Command**: `npm run build`
-   **Publish Directory**: `dist`
-   **Fallback para SPA**: Configurado para manejar rutas de cliente (redirecciona `/*` a `/index.html`).

Para desplegar:
1.  Conecta tu repositorio a Netlify.
2.  Netlify detectará automáticamente el archivo `netlify.toml` y aplicará la configuración.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras un error o tienes una mejora, por favor abre un 'issue' o envía un 'pull request'.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

---

<p align="center">
  <a href="https://github.com/HedrichDev" target="_blank" rel="noopener noreferrer">
    <img src="./client/public/HedrichDev.png" alt="HedrichDev Logo" width="150"/>
  </a>
</p>

<p align="center">
  Hecho con ❤️ por <a href="https://github.com/HedrichDev" target="_blank" rel="noopener noreferrer">HΞDЯICHDΞV</a>
</p>

