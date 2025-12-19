# 🚀 Guía de Configuración - D.A.L.E

Guía completa para configurar y trabajar con el proyecto D.A.L.E desde cualquier computador.

---

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.17.0 ([Descargar aquí](https://nodejs.org/))
- **Git** ([Descargar aquí](https://git-scm.com/))
- **Cuenta de GitHub** (para clonar el repositorio)
- **Cuenta de Supabase** (para la base de datos)

---

## 🔧 Configuración Inicial (Primera Vez)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/danielprieto200004/D.A.L.E.git
cd D.A.L.E
```

### 2. Instalar Dependencias

```bash
npm install
```

> ⚠️ **Nota:** Si tienes problemas con conflictos de dependencias, usa:
> ```bash
> npm install --legacy-peer-deps
> ```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Windows (PowerShell)
New-Item -Path .env.local -ItemType File

# Linux/Mac
touch .env.local
```

Abre el archivo `.env.local` y agrega tus credenciales de Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anon-aqui
```

#### ¿Dónde obtener estas credenciales?

1. Ve a **https://app.supabase.com**
2. Selecciona tu proyecto D.A.L.E
3. Ve a **Settings** (⚙️) → **API**
4. Copia:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Configurar la Base de Datos

Ejecuta estos scripts SQL en Supabase (en orden):

1. **Primero:** `scripts/add-dale-profile-column.sql`
   - Agrega la columna `dale_profile` a `user_profiles`

2. **Segundo:** `scripts/add-user-demographics.sql`
   - Agrega todos los campos demográficos y de preferencias

#### Cómo ejecutar los scripts:

1. Ve a **Supabase** → Tu proyecto → **SQL Editor**
2. Abre el archivo SQL correspondiente
3. Copia y pega el contenido en el editor
4. Haz clic en **Run** (o presiona `Ctrl+Enter`)

### 5. Ejecutar el Proyecto

```bash
npm run dev
```

Abre tu navegador en: **http://localhost:3000**

---

## 🔄 Trabajar desde Otro Computador

Si ya tienes el proyecto configurado en otro computador:

### 1. Clonar el Repositorio

```bash
git clone https://github.com/danielprieto200004/D.A.L.E.git
cd D.A.L.E
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea el archivo `.env.local` con tus credenciales (ver paso 3 arriba).

### 4. ¡Listo!

```bash
npm run dev
```

---

## 📁 Estructura del Proyecto

```
D.A.L.E/
├── src/
│   ├── app/                    # Páginas Next.js
│   │   ├── auth/              # Autenticación (login, registro)
│   │   ├── dashboard/         # Dashboard del usuario
│   │   ├── simuladores/      # Página de simuladores
│   │   └── ...
│   ├── components/            # Componentes React
│   │   ├── Hub/              # Hub personalizado
│   │   └── layout/           # Navbar, Footer
│   ├── lib/                  # Utilidades
│   │   ├── supabase/        # Clientes de Supabase
│   │   └── auth.ts          # Funciones de autenticación
│   ├── hooks/               # Custom hooks
│   └── types/               # Tipos TypeScript
├── scripts/                  # Scripts SQL para la base de datos
├── .env.local               # Variables de entorno (NO subir a Git)
└── package.json
```

---

## 🛠️ Comandos Útiles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start

# Ejecutar linter
npm run lint
```

### Git

```bash
# Ver estado de cambios
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir cambios a GitHub
git push origin main

# Actualizar desde GitHub
git pull origin main
```

---

## 🔐 Gestión de Usuarios

### Crear un Usuario Administrador

1. **Regístrate normalmente** desde la app: `/auth/register`
2. **Ve a Supabase** → Authentication → Users
3. **Ejecuta este SQL** en SQL Editor:

```sql
UPDATE public.users
SET role = 'admin'
WHERE email = 'tu-email@ejemplo.com';
```

### Recuperar Contraseña

1. Ve a **Supabase** → Authentication → Users
2. Busca tu usuario
3. Haz clic en los 3 puntos (...) → **"Send password reset email"**
4. Revisa tu correo y sigue el enlace

---

## 🗄️ Base de Datos

### Scripts SQL Disponibles

- `scripts/add-dale-profile-column.sql` - Agrega columna `dale_profile`
- `scripts/add-user-demographics.sql` - Agrega campos demográficos
- `scripts/assign-admin-role.sql` - Asignar rol de admin
- `scripts/admin-utilities.sql` - Utilidades de administración

### Estructura de Tablas

- `public.users` - Usuarios del sistema
- `public.user_profiles` - Perfiles extendidos con datos demográficos

---

## 🐛 Solución de Problemas

### Error: "Module not found"

```bash
# Elimina node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Error: "Cannot find module '@supabase/...'"

```bash
npm install @supabase/supabase-js @supabase/ssr --legacy-peer-deps
```

### Error: Variables de entorno no funcionan

1. Verifica que el archivo se llame exactamente `.env.local`
2. Reinicia el servidor de desarrollo (`Ctrl+C` y luego `npm run dev`)
3. Verifica que las variables empiecen con `NEXT_PUBLIC_`

### Error: "useSearchParams() should be wrapped in Suspense"

Este error ya está resuelto en el código. Si aparece, asegúrate de tener la última versión del código.

### El servidor no inicia

```bash
# Verifica que el puerto 3000 esté libre
# O usa otro puerto:
npm run dev -- -p 3001
```

---

## 📦 Dependencias Principales

- **Next.js 16** - Framework React
- **React 19** - Biblioteca UI
- **Supabase** - Backend y autenticación
- **Framer Motion 12** - Animaciones
- **Tailwind CSS** - Estilos
- **TypeScript** - Tipado estático

---

## 🌐 Deploy en Vercel

### Configuración de Variables en Vercel

1. Ve a **https://vercel.com** → Tu proyecto → **Settings**
2. Ve a **Environment Variables**
3. Agrega:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **Redesplega** la aplicación

> 📝 Ver guía completa en: `VERCEL_ENV_SETUP.md`

---

## 📝 Notas Importantes

- ⚠️ **NUNCA** subas el archivo `.env.local` a GitHub (ya está en `.gitignore`)
- ✅ Siempre haz `git pull` antes de empezar a trabajar
- ✅ Haz `git push` antes de cambiar de computador
- 🔒 Las credenciales de Supabase son seguras de compartir (anon key es pública)

---

## 🆘 ¿Necesitas Ayuda?

- **Documentación Next.js:** https://nextjs.org/docs
- **Documentación Supabase:** https://supabase.com/docs
- **Repositorio:** https://github.com/danielprieto200004/D.A.L.E

---

## ✅ Checklist de Configuración

- [ ] Node.js instalado (>= 18.17.0)
- [ ] Repositorio clonado
- [ ] Dependencias instaladas (`npm install`)
- [ ] Archivo `.env.local` creado con credenciales
- [ ] Scripts SQL ejecutados en Supabase
- [ ] Proyecto corriendo localmente (`npm run dev`)
- [ ] Puedes acceder a http://localhost:3000

---

**¡Listo para trabajar! 🚀**

*De los Datos a las Decisiones*

