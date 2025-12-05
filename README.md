
# Rick and Morty API Explorer
![](https://github.com/HedrichDev/RickMorty-API-Explorer/blob/main/client/public/opengraph.jpg?raw=true)

¡Bienvenido al Explorador del Universo de Rick and Morty! Esta aplicación web te permite navegar, buscar y descubrir todos los personajes de la famosa serie, utilizando la [API pública de Rick and Morty](https://rickandmortyapi.com/).

## ✨ Características Principales

- **Galería de Personajes**: Visualiza todos los personajes en una galería limpia y ordenada.
- **Búsqueda Dinámica**: Encuentra personajes por nombre en tiempo real.
- **Paginación Eficiente**: Navega fácilmente a través de cientos de personajes sin sobrecargar la aplicación.
- **Vista de Detalle**: Haz clic en un personaje para obtener información completa, incluyendo su estado, especie, origen y episodios en los que aparece.
- **Gestión de Favoritos**: Guarda tus personajes favoritos para acceder a ellos rápidamente en una sección dedicada. Los favoritos se guardan localmente en tu navegador.
- **Diseño Adaptable (Responsive)**: Disfruta de una experiencia de usuario fluida tanto en dispositivos de escritorio como en móviles.

## 🚀 Tecnologías Utilizadas

Este proyecto es un monorepo que utiliza una arquitectura cliente-servidor, aprovechando herramientas modernas para ofrecer una experiencia de desarrollo y de usuario de alta calidad.

### Frontend (`/client`)

- **Framework**: [React](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Gestión de Estado del Servidor**: [TanStack Query](https://tanstack.com/query) para un fetching de datos, cacheo y sincronización eficientes.
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) para un diseño rápido y personalizable.
- **Componentes UI**: Construido con [shadcn/ui](https://ui.shadcn.com/), una colección de componentes reutilizables y accesibles.
- **Routing**: [React Router](https://reactrouter.com/) para la navegación entre páginas.

### Backend (`/server`)

- **Framework**: [Hono](https://hono.dev/) sobre [Node.js](https://nodejs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Función Principal**: Servir los archivos estáticos del frontend en un entorno de producción y gestionar rutas del lado del servidor.

### Compartido (`/shared`)

- **Validación de Esquemas**: [Zod](https://zod.dev/) para garantizar la consistencia de los tipos de datos entre el cliente y el servidor (si aplica).

## 🛠️ Instalación y Uso

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18.x o superior)
- [npm](https://www.npmjs.com/) (generalmente incluido con Node.js)

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/HedrichDev/RickMorty-API-Explorer
    cd RickMortyAPIExplorer
    ```

2.  **Instala las dependencias:**
    Este comando instalará todas las dependencias necesarias tanto para el cliente como para el servidor.
    ```bash
    npm install
    ```

3.  **Ejecuta el proyecto en modo de desarrollo:**
    Esto iniciará el servidor de desarrollo de Vite para el frontend y el servidor de Hono para el backend. Podrás ver la aplicación en `http://localhost:5173`.
    ```bash
    npm run dev
    ```

### Scripts Disponibles

-   `npm run dev`: Inicia los servidores de desarrollo para cliente y backend.
-   `npm run build`: Compila el cliente de React/Vite para producción en la carpeta `/dist`.
-   `npm start`: Inicia el servidor de Node.js/Hono para servir el build de producción.

## 📁 Estructura del Proyecto

```
RickMortyAPIExplorer/
├── client/              # Código fuente del frontend (React + Vite)
│   ├── src/
│   │   ├── components/  # Componentes reutilizables de la UI
│   │   ├── hooks/       # Hooks personalizados de React
│   │   ├── lib/         # Lógica de API, utils, etc.
│   │   ├── pages/       # Vistas principales de la aplicación
│   │   └── App.tsx      # Componente raíz y enrutador
│   └── index.html       # Punto de entrada HTML
├── server/              # Código fuente del backend (Hono)
│   └── index.ts         # Punto de entrada del servidor
├── shared/              # Código compartido (ej. esquemas Zod)
│   └── schema.ts
├── package.json         # Dependencias y scripts del proyecto
└── README.md            # Este archivo
```

## ⚖️ Licencia

Este proyecto está bajo la Licencia MIT.

---

<div align="center" style="transition: transform 0.2s; display: inline-block;">
  <img height="250" src="https://cdn.discordapp.com/attachments/1416487311587147787/1446304736465915934/Copilot_20251113_134613.png?ex=69337fc0&is=69322e40&hm=28f9e323b3f6c5456ddca218a2026fee2e1ab5c9c63f27fb803f0ad6df4425bc" 
       style="border-radius: 15px; transition: transform 0.2s;" 
       onmouseover="this.style.transform='scale(1.1)'" 
       onmouseout="this.style.transform='scale(1)'"/>

</div>
<div align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=glocf.glocf&"  />
</div>

<h4 align="center"> Copyright (c) 2025 HΞDЯICHDΞV </h4>
