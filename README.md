# Somos Boo Studio

Sitio web hecho con React y Vite. La página pública es estática y se puede ejecutar localmente sin iniciar sesión en Base44 ni levantar un backend.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Ejecutar en localhost

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre en el navegador la dirección que muestra Vite, normalmente `http://localhost:5173`.

Para generar y previsualizar la versión de producción:

```bash
npm run build
npm run preview
```

La web pública no utiliza autenticación ni datos de Base44. Las pantallas de acceso que permanecen en `src/pages` son código heredado y no están conectadas a las rutas de la web. Las llamadas de formularios o datos que requieran un backend deberán conectarse a un servicio propio si se agregan en el futuro.
