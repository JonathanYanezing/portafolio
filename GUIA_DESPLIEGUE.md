# 🚀 Guía para Subir tu Portafolio en Línea

## ✅ Tu proyecto está listo para producción

El build se completó exitosamente. Ahora puedes subirlo para que tu cliente vea las páginas en funcionamiento.

---

## 📋 Opción 1: Vercel (RECOMENDADO - Más Fácil y Gratis)

Vercel es la plataforma creada por los mismos desarrolladores de Next.js. Es la opción más fácil.

### Paso 1: Crear cuenta en GitHub (si no tienes)
1. Ve a https://github.com
2. Crea una cuenta gratuita
3. Confirma tu email

### Paso 2: Subir tu proyecto a GitHub
1. Abre PowerShell o Terminal en la carpeta `port12`
2. Ejecuta estos comandos:

```bash
git init
git add .
git commit -m "Portafolio profesional listo"
git branch -M main
```

3. En GitHub, crea un nuevo repositorio:
   - Ve a https://github.com/new
   - Nombre: `portafolio-profesional` (o el que quieras)
   - Marca "Public" o "Private"
   - NO marques "Add README"
   - Click en "Create repository"

4. Copia la URL de tu repositorio (algo como: `https://github.com/tu-usuario/portafolio-profesional.git`)

5. Ejecuta estos comandos (reemplaza TU_URL con la URL que copiaste):

```bash
git remote add origin TU_URL
git push -u origin main
```

### Paso 3: Desplegar en Vercel
1. Ve a https://vercel.com
2. Click en "Sign Up" y elige "Continue with GitHub"
3. Autoriza Vercel a acceder a tu GitHub
4. Click en "Add New Project"
5. Selecciona tu repositorio `portafolio-profesional`
6. Vercel detectará automáticamente que es Next.js
7. **NO cambies ninguna configuración**
8. Click en "Deploy"
9. Espera 2-3 minutos
10. ¡Listo! Tu sitio estará en línea

### Tu URL será algo como:
- `https://portafolio-profesional.vercel.app`
- O puedes configurar un dominio personalizado después

---

## 📋 Opción 2: Netlify (Alternativa Gratis)

### Paso 1: Sube a GitHub (igual que arriba)

### Paso 2: Desplegar en Netlify
1. Ve a https://netlify.com
2. Click en "Sign up" y elige "GitHub"
3. Click en "Add new site" > "Import an existing project"
4. Selecciona tu repositorio
5. Configuración:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click en "Deploy site"
7. ¡Listo!

---

## 📋 Opción 3: Render (Alternativa Gratis)

### Paso 1: Sube a GitHub (igual que arriba)

### Paso 2: Desplegar en Render
1. Ve a https://render.com
2. Crea cuenta con GitHub
3. Click en "New" > "Web Service"
4. Conecta tu repositorio
5. Configuración:
   - Name: `portafolio-profesional`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
6. Click en "Create Web Service"
7. ¡Listo!

---

## 🎯 Opción Rápida: Vercel CLI (Sin GitHub)

Si no quieres usar GitHub, puedes desplegar directamente:

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. En la carpeta del proyecto, ejecuta:
```bash
vercel
```

3. Sigue las instrucciones:
   - ¿Set up and deploy? → **Y**
   - ¿Which scope? → Tu cuenta
   - ¿Link to existing project? → **N**
   - ¿What's your project's name? → `portafolio-profesional`
   - ¿In which directory is your code located? → **./** (presiona Enter)
   - ¿Want to override the settings? → **N**

4. ¡Listo! Tu sitio estará en línea

---

## ✅ Verificar que Funciona

Una vez desplegado, visita tu URL y verifica:
- ✅ Página de inicio carga
- ✅ Navegación funciona
- ✅ Portafolio muestra proyectos
- ✅ Páginas de servicios funcionan
- ✅ Formulario de contacto funciona
- ✅ Todas las imágenes se ven

---

## 📧 Compartir con el Cliente

Una vez desplegado, simplemente envía la URL a tu cliente:
- Ejemplo: `https://portafolio-profesional.vercel.app`

El cliente podrá:
- Ver todas las páginas
- Navegar por el sitio
- Ver los demos interactivos
- Probar el formulario de contacto
- Ver todos los proyectos

---

## 🔄 Actualizar el Sitio

Cada vez que hagas cambios:

1. Si usas GitHub + Vercel:
   - Haz tus cambios
   - Ejecuta: `git add .`
   - Ejecuta: `git commit -m "Descripción de cambios"`
   - Ejecuta: `git push`
   - Vercel actualizará automáticamente en 2-3 minutos

2. Si usas Vercel CLI:
   - Ejecuta: `vercel --prod`
   - Se actualizará automáticamente

---

## 💡 Consejos

- **Vercel es GRATIS** para proyectos personales
- **No necesitas tarjeta de crédito**
- **El sitio se actualiza automáticamente** cuando haces cambios
- **Puedes agregar un dominio personalizado** después (opcional)

---

## ❓ ¿Problemas?

Si tienes algún error:
1. Verifica que el build funcione localmente: `npm run build`
2. Revisa los logs en Vercel/Netlify/Render
3. Asegúrate de que todas las dependencias estén en `package.json`

---

## 🎉 ¡Listo!

Tu portafolio profesional está listo para impresionar a tus clientes.



