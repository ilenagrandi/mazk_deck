# Deploy del Pitch Deck en Netlify

## Opción 1: Deploy separado (Recomendado)

Para tener el pitch en una URL separada:

1. **En Netlify Dashboard:**
   - Ve a "Add new site" → "Import an existing project"
   - Conecta el mismo repositorio: `ilenagrandi/mazk_deck`
   - En la configuración de build, especifica:
     - **Base directory:** `pitch`
     - **Build command:** `npm install && npm run build`
     - **Publish directory:** `pitch/dist`
   - Click en "Deploy site"

2. **Resultado:**
   - Tendrás dos sitios en Netlify:
     - Uno para `mazk_deck` (el pitch deck principal)
     - Otro para `pitch` (el investor pitch)

## Opción 2: Usar el mismo sitio con subdirectorio

Si quieres que el pitch esté en una ruta como `tusitio.netlify.app/pitch`, necesitarías configurar el proyecto principal para servir ambos.

