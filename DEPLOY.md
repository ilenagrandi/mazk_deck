# Solución de problemas de deploy en Netlify

## Si tu sitio no muestra nada después del deploy:

### Paso 1: Verificar configuración en Netlify Dashboard

1. Ve a tu sitio en Netlify → **Site settings** → **Build & deploy**

2. Verifica que la configuración sea:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18` (o superior)

### Paso 2: Trigger un nuevo deploy

1. En el dashboard de Netlify, ve a **Deploys**
2. Click en **Trigger deploy** → **Deploy site**
3. Esto forzará un nuevo build con la configuración actualizada

### Paso 3: Verificar los logs del build

1. En **Deploys**, click en el último deploy
2. Revisa los logs para ver si hay errores
3. Busca mensajes como:
   - ✅ "Build script success"
   - ❌ Errores de dependencias o build

### Paso 4: Verificar que los archivos estén en el repo

Asegúrate de que estos archivos estén en tu repositorio:
- ✅ `package.json`
- ✅ `vite.config.js`
- ✅ `netlify.toml`
- ✅ `src/App.jsx`
- ✅ `src/index.jsx`
- ✅ `public/index.html`
- ✅ `tailwind.config.js`
- ✅ `postcss.config.js`

### Paso 5: Si sigue sin funcionar

1. **Limpia el cache de Netlify:**
   - Site settings → Build & deploy → Clear cache and retry deploy

2. **Verifica que no haya un index.html en la raíz:**
   - Solo debe haber `public/index.html`
   - Si hay un `index.html` en la raíz, elimínalo

3. **Prueba el build localmente:**
   ```bash
   npm install
   npm run build
   ```
   - Si funciona localmente, el problema es de configuración en Netlify
   - Si falla localmente, hay un problema con el código

### Comandos útiles para debug

```bash
# Verificar que el build funciona localmente
npm install
npm run build

# Ver el resultado del build
ls -la dist/

# Probar el build localmente
npm run preview
```

