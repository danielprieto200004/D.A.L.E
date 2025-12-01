# DALE HUB – Ecosistema Digital de Alfabetización en Datos

DALE HUB es la plataforma central del ecosistema educativo **DALE (Datos, Análisis, Lúdica, Ejecución)**.  
Su propósito es ofrecer experiencias de aprendizaje inmersivas, accesibles y escalables para niños, jóvenes, adultos y organizaciones.

El ecosistema se inspira en la lógica de plataformas educativas modernas y en experiencias narrativas interactivas, integrando contenido, simuladores, juegos y rutas formativas dentro de una sola herramienta web.

---

## 1. Objetivo del Proyecto
Construir el núcleo digital del ecosistema DALE: una plataforma web modular que permita alojar rutas de aprendizaje, experiencias narrativas, mini-juegos, simuladores, analíticas de usuario y herramientas de administración para instituciones educativas y empresas.

---

## 2. Arquitectura General del Ecosistema DALE

### • DALE Hub (Plataforma Principal)
La entrada a todo el ecosistema. Desde aquí se accede a:
- Rutas de aprendizaje por audiencia  
- Modo narrativo interactivo  
- Mini-juegos y actividades  
- Biblioteca de contenido  
- Panel del usuario (progreso, insignias, DataScore)  
- Panel institucional (colegios/empresas)

---

## 3. Secciones Iniciales del MVP

### ✅ 1. DALE Kids
Experiencias para niños (6–12 años):
- Juegos y misiones cortas
- Narrativas sencillas con decisiones
- Actividades interactivas de lógica y patrones
- Módulos basados en el HTML inicial del proyecto

### ✅ 2. DALE Citizen
Para jóvenes y público general:
- Simulaciones sobre redes sociales, fake news y privacidad
- Microrretos de pensamiento crítico

### ✅ 3. DALE Literacy
Para empleados y equipos operativos:
- Micro-learning de KPIs
- Mini-simuladores laborales

### ✅ 4. DALE Strategy
Para mandos medios y directivos:
- Casos complejos
- Simuladores estratégicos de alto impacto

### ✅ 5. DALE Story (Modo Narrativo)
Sección inspirada en videojuegos tipo *Beyond: Two Souls*:
- Historias ramificadas
- Decisiones con consecuencias
- Escenarios inmersivos en capítulos

*(Este modo es solo UNA sección dentro del Hub)*

---

## 4. Características Técnicas del MVP

### Frontend
- React / Next.js (sugerido)
- TailwindCSS  
- Componentes reutilizables por sección

### Backend
- Node.js / Express o Next API routes
- Motor de usuarios y autenticación
- Progreso, gamificación y DataScore

### Base de Datos
- PostgreSQL / Supabase (recomendado por rapidez)
- Colecciones:
  - users  
  - institutions  
  - progress  
  - stories  
  - modules  
  - achievements  

### Integraciones Futuras
- Pasarela de pagos (Stripe / PayU)
- Panel analítico para instituciones
- Marketplace interno

---

## 5. MVP Esencial (Sprint 1)

1. Landing pública DALE Hub  
2. Sistema de usuarios + perfiles básicos  
3. Dashboard del usuario con progreso básico  
4. Módulo DALE Kids inicial (1 juego + 1 actividad)  
5. DALE Story: prototipo con 1 capítulo interactivo  
6. Arquitectura lista para escalar rutas

---

## 6. Scripts y Estructura del Proyecto

```
/src
  /app
    /dale-kids
    /dale-citizen
    /dale-literacy
    /dale-strategy
    /story
    /dashboard
  /components
  /lib
  /styles
  /data
```

---

## 7. Roadmap (Fase 1 → 3)

### Fase 1: MVP
- DALE Hub operativo
- DALE Kids funcional
- Primer capítulo del modo narrativo

### Fase 2: Expansión
- Nuevas rutas Citizen, Literacy y Strategy
- Mini-juegos
- Progreso gamificado

### Fase 3: Escala
- Panel institucional
- Marketplace de módulos
- Data-Labs virtuales

---

## 8. Licencia
Propietario: Symbiotic / Proyecto DALE  
Uso restringido para desarrollo interno.

---

## 9. Contribución
Crear issues y PRs dentro del repositorio.  
Mantener coherencia en componentes y estándares DALE.

---

## 10. Contacto
Equipo DALE  
contacto@symbiotic.co
