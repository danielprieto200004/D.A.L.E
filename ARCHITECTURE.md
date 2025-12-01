# Arquitectura del Proyecto DALE HUB

## Estructura de Carpetas Detallada

```
D.A.L.E/
├── src/
│   ├── app/                          # Next.js 14 App Router
│   │   ├── layout.tsx               # Layout raíz con metadata y fuentes
│   │   ├── page.tsx                 # Landing page (usa Hero component)
│   │   ├── globals.css              # Estilos globales + utilidades Tailwind
│   │   │
│   │   ├── dale-kids/               # Sección para niños (6-12 años)
│   │   │   ├── page.tsx
│   │   │   └── [game]/
│   │   │
│   │   ├── dale-citizen/            # Sección para jóvenes/público general
│   │   │   ├── page.tsx
│   │   │   └── [simulation]/
│   │   │
│   │   ├── dale-literacy/           # Sección para empleados/equipos
│   │   │   ├── page.tsx
│   │   │   └── [module]/
│   │   │
│   │   ├── dale-strategy/           # Sección para mandos medios/directivos
│   │   │   ├── page.tsx
│   │   │   └── [case]/
│   │   │
│   │   ├── story/                   # Modo narrativo interactivo
│   │   │   ├── page.tsx            # Lista de historias
│   │   │   └── [storyId]/
│   │   │       ├── page.tsx        # Vista de historia
│   │   │       └── [levelId]/
│   │   │           └── page.tsx    # Nivel individual
│   │   │
│   │   ├── dashboard/               # Panel de usuario
│   │   │   ├── page.tsx
│   │   │   ├── progress/
│   │   │   └── achievements/
│   │   │
│   │   └── api/                     # API Routes (futuro)
│   │       ├── auth/
│   │       ├── progress/
│   │       └── stories/
│   │
│   ├── components/
│   │   ├── ui/                      # Componentes base (Shadcn/ui customizados)
│   │   │   ├── button.tsx          # Botón con variantes (glow, glass, etc.)
│   │   │   ├── card.tsx            # (futuro)
│   │   │   └── ...
│   │   │
│   │   ├── Hero.tsx                # Hero section principal (Landing)
│   │   ├── Navigation.tsx          # (futuro)
│   │   ├── StoryEngine.tsx         # Motor de narrativa (futuro)
│   │   └── DataDashboard.tsx       # Dashboard de datos en niveles (futuro)
│   │
│   ├── lib/
│   │   ├── utils.ts                # Utilidades (cn, formatters, etc.)
│   │   ├── auth.ts                 # (futuro) Autenticación
│   │   └── db.ts                   # (futuro) Conexión a base de datos
│   │
│   ├── types/
│   │   ├── game.ts                 # Tipos TypeScript para niveles/stories
│   │   ├── user.ts                 # (futuro) Tipos de usuario
│   │   └── progress.ts             # (futuro) Tipos de progreso
│   │
│   └── data/
│       ├── schemas/                # JSON Schemas
│       │   └── level-schema.example.json
│       └── examples/               # Ejemplos de contenido
│           └── level-example.json
│
├── public/                          # Assets estáticos
│   ├── images/
│   ├── avatars/
│   └── icons/
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
└── README.md
```

## Flujo de Datos en un Nivel Narrativo

```
1. Usuario accede a /story/[storyId]/[levelId]
2. Se carga el JSON del nivel desde la base de datos o archivo
3. StoryEngine renderiza:
   - Contexto narrativo
   - Dashboard de datos (DataDashboard component)
   - Opciones de decisión
4. Usuario selecciona una opción
5. Se muestra la consecuencia correspondiente
6. Se actualiza el progreso del usuario
7. Se navega al siguiente nivel o final
```

## Sistema de Diseño

### Colores (Dark Mode por defecto)
- **Background:** `hsl(222.2, 84%, 4.9%)` - Azul muy oscuro
- **Foreground:** `hsl(210, 40%, 98%)` - Casi blanco
- **Primary:** `hsl(217.2, 91.2%, 59.8%)` - Azul brillante
- **Secondary:** `hsl(217.2, 32.6%, 17.5%)` - Azul oscuro

### Tipografía
- **Font:** Inter (Google Fonts)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Efectos Visuales
- **Glassmorphism:** `bg-white/5 backdrop-blur-md border border-white/10`
- **Gradientes Aurora:** Animación de gradiente multicolor
- **Glow Effects:** Sombras con colores primarios
- **Micro-interacciones:** Transformaciones en hover con Framer Motion

## Próximos Componentes a Desarrollar

1. **StoryEngine** - Motor que renderiza niveles desde JSON
2. **DataDashboard** - Visualización de datos dentro de niveles
3. **Navigation** - Navegación principal con glassmorphism
4. **ProgressTracker** - Seguimiento de progreso y DataScore
5. **AchievementBadge** - Sistema de insignias

