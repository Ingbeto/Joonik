# Joonik FrontEnd

## Descripción

Esta es la aplicación FrontEnd de Joonik. Proporciona una interfaz de usuario para interactuar con los servicios de backend de Joonik.

## Requisitos

- Node.js
- npm (Node Package Manager)
- XAMPP (para el servidor Apache y MySQL)

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/joonikFrontEnd.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd joonikFrontEnd
   ```
3. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

## Ejecución

1. Asegúrate de que XAMPP esté ejecutando Apache y MySQL.
2. Inicia la aplicación FrontEnd:
   ```bash
   npm start
   ```
3. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Inicia la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`. Empaqueta correctamente React en modo de producción y optimiza la compilación para el mejor rendimiento.

## Estructura del Proyecto

- `public/`: Archivos públicos estáticos.
- `src/`: Código fuente de la aplicación.
  - `components/`: Componentes React.
  - `pages/`: Páginas de la aplicación.
  - `services/`: Servicios para interactuar con el backend.
  - `styles/`: Archivos de estilos CSS.
