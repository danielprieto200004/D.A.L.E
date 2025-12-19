# 🔧 Configurar Variables de Entorno en Vercel

Guía rápida para configurar las variables de entorno de Supabase en Vercel.

## 📋 Variables Necesarias

Necesitas configurar estas dos variables en Vercel:

1. `NEXT_PUBLIC_SUPABASE_URL` - URL de tu proyecto Supabase
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Clave pública/anónima de Supabase

---

## 🎯 Paso a Paso

### 1. Obtener las Credenciales de Supabase

1. Ve a **https://app.supabase.com**
2. Selecciona tu proyecto D.A.L.E
3. Ve a **Settings** (⚙️) → **API**
4. Copia estos valores:
   - **Project URL** → Esta será tu `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → Esta será tu `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2. Configurar en Vercel

#### Opción A: Desde el Dashboard de Vercel (Recomendado)

1. Ve a **https://vercel.com** e inicia sesión
2. Selecciona tu proyecto **D.A.L.E**
3. Ve a **Settings** (⚙️) en el menú superior
4. Haz clic en **Environment Variables** en el menú lateral
5. Agrega cada variable:

   **Variable 1:**
   - **Name:** `NEXT_PUBLIC_SUPABASE_URL`
   - **Value:** Pega la URL de tu proyecto Supabase (ejemplo: `https://xxxxx.supabase.co`)
   - **Environments:** Selecciona las 3 (Production, Preview, Development)
   - Haz clic en **Save**

   **Variable 2:**
   - **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value:** Pega la clave anon/public de Supabase
   - **Environments:** Selecciona las 3 (Production, Preview, Development)
   - Haz clic en **Save**

6. **IMPORTANTE:** Después de agregar las variables, necesitas **redesplegar**:
   - Ve a la pestaña **Deployments**
   - Haz clic en los 3 puntos (**...**) del último deployment
   - Selecciona **Redeploy**
   - Esto aplicará las nuevas variables de entorno

#### Opción B: Durante el Deploy (Si es tu primer deploy)

1. Si estás haciendo el deploy por primera vez:
   - En la pantalla de configuración del proyecto
   - Expande la sección **"Environment Variables"**
   - Agrega las dos variables antes de hacer clic en **Deploy**

---

## ✅ Verificar que Funciona

1. Una vez redesplegado, ve a tu aplicación en Vercel
2. Intenta registrarte o iniciar sesión
3. Si funciona, ¡todo está bien configurado!

---

## 🐛 Si Sigue Fallando

1. **Verifica que las variables están bien escritas:**
   - No deben tener espacios extra
   - `NEXT_PUBLIC_SUPABASE_URL` debe empezar con `https://`
   - Las claves deben estar completas

2. **Asegúrate de haber redesplegado:**
   - Los cambios en variables de entorno solo se aplican en nuevos deployments

3. **Revisa los logs en Vercel:**
   - Ve a **Deployments** → Selecciona un deployment → **Functions** → Revisa los errores

---

## 📝 Nota Importante

Las variables con prefijo `NEXT_PUBLIC_` son **públicas** y se incluyen en el bundle del cliente. Esto es normal y seguro para las credenciales de Supabase (anon key) ya que están diseñadas para ser públicas y tienen protección con RLS (Row Level Security) en la base de datos.

