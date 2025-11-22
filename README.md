# MAZK Pitch Deck

Pitch deck interactivo para MAZK construido con React y Vite.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deploy en Netlify

### Opción 1: Deploy desde Git (Recomendado)

1. **Sube tu código a GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <tu-repositorio-url>
   git push -u origin main
   ```

2. **En Netlify:**
   - Ve a [netlify.com](https://www.netlify.com) e inicia sesión
   - Click en "Add new site" → "Import an existing project"
   - Conecta tu repositorio de Git
   - Netlify detectará automáticamente la configuración:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click en "Deploy site"

3. **¡Listo!** Tu sitio estará disponible en una URL de Netlify

### Opción 2: Deploy manual (Drag & Drop)

1. **Genera el build localmente:**
   ```bash
   npm run build
   ```

2. **En Netlify:**
   - Ve a [netlify.com](https://www.netlify.com) e inicia sesión
   - Click en "Add new site" → "Deploy manually"
   - Arrastra la carpeta `dist` que se generó después del build
   - ¡Listo!

### Opción 3: Netlify CLI

1. **Instala Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Inicia sesión:**
   ```bash
   netlify login
   ```

3. **Haz el deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Configuración

El archivo `netlify.toml` ya está configurado con:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects para SPA (Single Page Application)

### Variables de entorno

Si necesitas agregar variables de entorno en el futuro:
- Ve a Site settings → Environment variables en el dashboard de Netlify

