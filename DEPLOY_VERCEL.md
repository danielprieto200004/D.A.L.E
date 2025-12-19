# 🚀 Guía de Deploy en Vercel - D.A.L.E

Esta guía te llevará paso a paso para desplegar la plataforma D.A.L.E en Vercel.

---

## 📋 Prerrequisitos

- ✅ Cuenta de GitHub con el repositorio D.A.L.E
- ✅ Cuenta de Vercel (gratis en [vercel.com](https://vercel.com))

---

## 🌐 Opción 1: Deploy desde la Web (Recomendado)

### Paso 1: Crear cuenta en Vercel

1. Ve a **https://vercel.com**
2. Haz clic en **"Sign Up"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tu cuenta de GitHub

![Vercel Sign Up](https://vercel.com/docs-proxy/static/docs/get-started/sign-up.png)

---

### Paso 2: Importar el Proyecto

1. Una vez dentro del dashboard, haz clic en **"Add New..."**
2. Selecciona **"Project"**
3. Verás la lista de tus repositorios de GitHub
4. Busca **"D.A.L.E"** en la lista
5. Haz clic en el botón **"Import"** junto al repositorio

---

### Paso 3: Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto **Next.js**. Verifica esta configuración:

| Campo | Valor |
|-------|-------|
| **Framework Preset** | Next.js |
| **Root Directory** | `./` |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` |
| **Install Command** | `npm install` |

> 💡 **Nota:** Normalmente no necesitas cambiar nada, Vercel detecta todo automáticamente.

---

### Paso 4: Variables de Entorno (⚠️ IMPORTANTE)

D.A.L.E necesita las variables de entorno de Supabase para funcionar:

1. Expande la sección **"Environment Variables"**
2. Agrega estas dos variables:

   **Variable 1:**
   - **Name:** `NEXT_PUBLIC_SUPABASE_URL`
   - **Value:** Tu URL de proyecto Supabase (ejemplo: `https://xxxxx.supabase.co`)
   - Selecciona todas las opciones (Production, Preview, Development)

   **Variable 2:**
   - **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value:** Tu clave anon/public de Supabase
   - Selecciona todas las opciones (Production, Preview, Development)

> 📝 **Para obtener estas credenciales:**
> 1. Ve a https://app.supabase.com
> 2. Selecciona tu proyecto → Settings → API
> 3. Copia "Project URL" y "anon/public key"

> ⚠️ **IMPORTANTE:** Si agregas las variables después del primer deploy, necesitarás **redesplegar** la aplicación para que surtan efecto (Settings → Environment Variables → Redeploy).

---

### Paso 5: Deploy

1. Haz clic en el botón **"Deploy"**
2. Espera mientras Vercel:
   - Clona tu repositorio
   - Instala dependencias (`npm install`)
   - Construye el proyecto (`npm run build`)
   - Despliega la aplicación

⏱️ **Tiempo estimado:** 1-3 minutos

---

### Paso 6: ¡Listo!

Una vez completado el deploy:

1. Verás un mensaje de **"Congratulations!"** 🎉
2. Tu sitio estará disponible en una URL como:
   ```
   https://d-a-l-e.vercel.app
   ```
   o
   ```
   https://d-a-l-e-[tu-usuario].vercel.app
   ```

3. Haz clic en **"Visit"** para ver tu sitio en vivo

---

## 🖥️ Opción 2: Deploy desde la Terminal (CLI)

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Iniciar Sesión

```bash
vercel login
```

Se abrirá tu navegador para autenticarte con tu cuenta de Vercel.

### Paso 3: Deploy

Navega a la carpeta del proyecto y ejecuta:

```bash
cd "C:\Users\daniel.prieto.r.UMD\OneDrive - uniminuto.edu\Escritorio\D.A.L.E"
vercel
```

### Paso 4: Responder las Preguntas

```
? Set up and deploy? [Y/n] → Y
? Which scope? → Selecciona tu cuenta
? Link to existing project? [y/N] → N
? What's your project's name? → d-a-l-e
? In which directory is your code located? → ./
? Want to modify these settings? [y/N] → N
```

### Paso 5: Deploy a Producción

Para hacer deploy a producción (con tu dominio final):

```bash
vercel --prod
```

---

## 🔄 Deploys Automáticos

Una vez conectado, Vercel desplegará automáticamente cada vez que:

- ✅ Hagas **push** a la rama `main`
- ✅ Crees un **Pull Request** (deploy de preview)
- ✅ Hagas **merge** de un PR

---

## 🌍 Configurar Dominio Personalizado (Opcional)

### Agregar tu propio dominio:

1. Ve a tu proyecto en Vercel
2. Haz clic en **"Settings"** → **"Domains"**
3. Escribe tu dominio (ej: `dale.tudominio.com`)
4. Haz clic en **"Add"**
5. Configura los DNS según las instrucciones de Vercel

### Configuración DNS típica:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

---

## 🔧 Solución de Problemas

### Error: "Build Failed"

1. Verifica que `npm run build` funcione localmente
2. Revisa los logs en Vercel para ver el error específico
3. Asegúrate de que todas las dependencias estén en `package.json`

### Error: "Module not found"

1. Verifica que los imports usen las rutas correctas (`@/` para src)
2. Asegúrate de que `tsconfig.json` tenga los paths configurados

### La página se ve diferente

1. Limpia la caché del navegador
2. Verifica que los estilos de Tailwind estén compilando

---

## 📱 URLs de tu Proyecto

Una vez desplegado, tendrás:

| Tipo | URL |
|------|-----|
| **Producción** | `https://d-a-l-e.vercel.app` |
| **Preview** | `https://d-a-l-e-[branch]-[user].vercel.app` |
| **Dashboard** | `https://vercel.com/[tu-usuario]/d-a-l-e` |

---

## 📞 Soporte

- **Documentación Vercel:** https://vercel.com/docs
- **Estado de Vercel:** https://www.vercel-status.com
- **Comunidad:** https://github.com/vercel/vercel/discussions

---

## ✅ Checklist Final

- [ ] Cuenta de Vercel creada
- [ ] Repositorio importado
- [ ] Build exitoso
- [ ] Sitio funcionando en la URL de Vercel
- [ ] (Opcional) Dominio personalizado configurado

---

**¡Felicidades! 🎉 Tu plataforma D.A.L.E está en línea.**

*De los Datos a las Decisiones* 🚀

