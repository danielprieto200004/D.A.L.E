# DALE HUB - Ecosistema Digital de Alfabetización en Datos

Plataforma SaaS de educación en data con experiencias inmersivas tipo videojuego.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
D.A.L.E/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página de inicio
│   │   ├── globals.css        # Estilos globales
│   │   ├── dale-kids/         # Sección DALE Kids
│   │   ├── dale-citizen/      # Sección DALE Citizen
│   │   ├── dale-literacy/     # Sección DALE Literacy
│   │   ├── dale-strategy/     # Sección DALE Strategy
│   │   ├── story/             # Modo narrativo interactivo
│   │   └── dashboard/         # Panel de usuario
│   ├── components/
│   │   ├── ui/                # Componentes UI base (Shadcn)
│   │   ├── Hero.tsx           # Componente Hero principal
│   │   └── ...                # Otros componentes
│   ├── lib/
│   │   └── utils.ts           # Utilidades (cn, etc.)
│   ├── types/
│   │   └── game.ts            # Tipos TypeScript para niveles
│   └── data/
│       ├── schemas/           # JSON Schemas
│       └── examples/          # Ejemplos de niveles
├── public/                     # Assets estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 Características de Diseño

- **Dark Mode por defecto** - Tema oscuro inspirado en HUDs de videojuegos
- **Glassmorphism** - Efectos de vidrio esmerilado en tarjetas
- **Gradientes Animados** - Fondos tipo Aurora Borealis
- **Micro-interacciones** - Botones con física y efectos magnéticos
- **Bento Grids** - Layouts asimétricos modernos
- **Framer Motion** - Animaciones fluidas y transiciones

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 14+ (App Router)
- **Estilos:** Tailwind CSS
- **Componentes UI:** Shadcn/ui (customizado)
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Gráficos:** Recharts
- **TypeScript:** Tipado completo

## 📊 JSON Schema para Niveles

Los niveles del juego siguen una estructura JSON definida en:
- `src/types/game.ts` - Tipos TypeScript
- `src/data/schemas/level-schema.example.json` - Schema JSON
- `src/data/examples/level-example.json` - Ejemplo completo

### Estructura de un Nivel:

```typescript
{
  id: string;
  chapter: number;
  title: string;
  context: { scenario, role, objective };
  data: { dashboard: { dataPoints } };
  options: Option[];
  consequences: { [optionId]: Consequence };
  config: { difficulty, timeLimit };
  metadata: { learningObjectives, tags };
}
```

## 📝 Próximos Pasos

1. ✅ Landing Page con Hero Section
2. ⏳ Sistema de autenticación
3. ⏳ Dashboard de usuario
4. ⏳ Motor de narrativa interactiva
5. ⏳ Módulo DALE Kids
6. ⏳ DALE Story (primer capítulo)

## 📄 Licencia

Propietario: Symbiotic / Proyecto DALE  
Uso restringido para desarrollo interno.

