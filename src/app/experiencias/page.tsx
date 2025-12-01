"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const experiences = [
  {
    id: "kids",
    emoji: "🎉",
    title: "DALE Kids",
    subtitle: "Para los más pequeños",
    age: "6-12 años",
    description: "Introducción lúdica al mundo de los datos. Juegos y actividades que desarrollan el pensamiento lógico y la capacidad de identificar patrones.",
    example: "\"La Fiesta Perfecta\": Usa una encuesta para decidir el mejor menú para tu cumpleaños.",
    color: "from-pink-500 to-orange-500",
    features: ["Juegos interactivos", "Narrativas simples", "Actividades de patrones", "Recompensas visuales"],
  },
  {
    id: "citizen",
    emoji: "📱",
    title: "DALE Citizen",
    subtitle: "Para el ciudadano digital",
    age: "Jóvenes y adultos",
    description: "Pensamiento crítico en la era de la información. Aprende a detectar fake news, entender algoritmos y proteger tu privacidad basándote en datos.",
    example: "\"El Influencer\": Decide qué publicar viendo cómo tu algoritmo afecta tu audiencia.",
    color: "from-cyan-500 to-blue-500",
    features: ["Simuladores sociales", "Detección de fake news", "Privacidad digital", "Pensamiento crítico"],
  },
  {
    id: "literacy",
    emoji: "📈",
    title: "DALE Literacy",
    subtitle: "Para el profesional",
    age: "Empleados y equipos",
    description: "Interpreta dashboards, KPIs y métricas del día a día laboral. Toma mejores decisiones operativas basándote en los datos que ya tienes.",
    example: "\"El Vendedor Estrella\": Prioriza clientes usando tu dashboard de ventas.",
    color: "from-green-500 to-emerald-500",
    features: ["Interpretación de KPIs", "Dashboards laborales", "Casos empresariales", "Micro-learning"],
  },
  {
    id: "strategy",
    emoji: "♟️",
    title: "DALE Strategy",
    subtitle: "Para el líder",
    age: "Directivos y gerentes",
    description: "Decisiones estratégicas de alto impacto. Simuladores complejos donde cada elección afecta múltiples variables y el futuro de la organización.",
    example: "\"El CEO\": Decide la estrategia de inversión analizando proyecciones financieras.",
    color: "from-purple-500 to-indigo-500",
    features: ["Simuladores estratégicos", "Análisis financiero", "Gestión de riesgos", "Casos ejecutivos"],
  },
];

export default function ExperienciasPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0D1117]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#98CA3F]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-[#98CA3F]/10 border border-[#98CA3F]/20 rounded-full text-sm text-[#98CA3F] font-medium">
              Experiencias Segmentadas
            </span>
            
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              Una experiencia para
              <br />
              <span className="text-[#98CA3F]">cada etapa de tu vida</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No importa si tienes 8 o 58 años. Hay una experiencia D.A.L.E diseñada 
              específicamente para tus necesidades y nivel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#161B22] border border-[#30363D] rounded-2xl overflow-hidden hover:border-[#98CA3F]/50 transition-all"
              >
                {/* Gradient Top */}
                <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-5xl">{exp.emoji}</span>
                      <h2 className="text-2xl font-bold text-white mt-4">{exp.title}</h2>
                      <p className="text-[#98CA3F] font-medium">{exp.subtitle}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#0D1117] rounded-full text-xs text-gray-400 border border-[#30363D]">
                      {exp.age}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Example */}
                  <div className="p-4 bg-[#0D1117] rounded-xl border border-[#30363D] mb-6">
                    <span className="text-xs text-[#98CA3F] font-medium">EJEMPLO</span>
                    <p className="text-gray-300 mt-1 text-sm">{exp.example}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.features.map((feature, j) => (
                      <span key={j} className="px-3 py-1 bg-[#0D1117] rounded-full text-xs text-gray-400">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="secondary" className="w-full group-hover:border-[#98CA3F] transition-colors">
                    Explorar {exp.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Mode */}
      <section className="py-24 bg-[#161B22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 font-medium mb-4">
                Modo Especial
              </span>
              <h2 className="text-4xl font-bold text-white mb-4">
                DALE Story
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                Narrativas interactivas estilo videojuego donde cada decisión 
                cambia el rumbo de la historia. Inspirado en experiencias como 
                "Detroit: Become Human" y "Beyond: Two Souls", pero con datos reales.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Historias ramificadas con múltiples finales",
                  "Decisiones basadas en análisis de datos",
                  "Consecuencias que impactan la narrativa",
                  "Capítulos desbloqueables según tu progreso",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button size="lg">
                Descubrir DALE Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl border border-[#30363D] flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🎮</span>
                  <p className="text-gray-400 mt-4">Vista previa del modo Story</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              ¿Cuál es tu experiencia ideal?
            </h2>
            <p className="text-gray-400">
              Comienza gratis y descubre cuál se adapta mejor a ti.
            </p>
            <Button size="xl" asChild>
              <Link href="/precios">
                Ver Planes y Precios
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

