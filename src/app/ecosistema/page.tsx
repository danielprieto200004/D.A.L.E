"use client";

import { motion } from "framer-motion";
import { Monitor, Layers, FlaskConical, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const components = [
  {
    icon: Monitor,
    title: "La Plataforma",
    subtitle: "El centro de comando",
    description: "Tu punto de entrada al ecosistema. Un hub centralizado donde accedes a todas las experiencias, tracked tu progreso, ganas insignias y ves tu evolución como tomador de decisiones.",
    features: [
      "Dashboard personalizado",
      "Sistema de progresión y logros",
      "DataScore™ - tu puntaje de decisiones",
      "Acceso multiplataforma",
    ],
    color: "bg-[#98CA3F]",
  },
  {
    icon: Layers,
    title: "Los Módulos",
    subtitle: "El contenido inmersivo",
    description: "Desde micro-cápsulas de 5 minutos hasta narrativas completas de múltiples capítulos. Cada módulo está diseñado para una experiencia específica y un nivel de profundidad.",
    features: [
      "Narrativas interactivas",
      "Mini-juegos de decisión",
      "Casos de estudio reales",
      "Simuladores empresariales",
    ],
    color: "bg-blue-500",
  },
  {
    icon: FlaskConical,
    title: "Los Data-Labs",
    subtitle: "El campo de práctica",
    description: "Espacios virtuales (y próximamente físicos) donde experimentas sin riesgo. Como un laboratorio donde puedes \"romper cosas\" y aprender de los errores sin consecuencias reales.",
    features: [
      "Simuladores en tiempo real",
      "Sandboxes de datos",
      "Escenarios de práctica libre",
      "Labs físicos (próximamente)",
    ],
    color: "bg-purple-500",
  },
];

export default function EcosistemaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0D1117]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#98CA3F]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-[#98CA3F]/10 border border-[#98CA3F]/20 rounded-full text-sm text-[#98CA3F] font-medium">
              El Ecosistema
            </span>
            
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              Tres componentes,
              <br />
              <span className="text-[#98CA3F]">una experiencia integral</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              D.A.L.E no es solo una plataforma. Es un ecosistema completo diseñado 
              para transformar cómo las personas entienden y utilizan los datos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Components */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {components.map((component, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Visual */}
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative">
                    <div className={`w-full aspect-video ${component.color}/10 rounded-2xl border border-[#30363D] flex items-center justify-center`}>
                      <component.icon className={`w-24 h-24 ${component.color === "bg-[#98CA3F]" ? "text-[#98CA3F]" : component.color === "bg-blue-500" ? "text-blue-500" : "text-purple-500"}`} />
                    </div>
                    <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${component.color} rounded-xl flex items-center justify-center text-3xl font-black text-[#0D1117]`}>
                      {i + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className={`text-sm font-medium ${component.color === "bg-[#98CA3F]" ? "text-[#98CA3F]" : component.color === "bg-blue-500" ? "text-blue-500" : "text-purple-500"}`}>
                    {component.subtitle}
                  </span>
                  <h2 className="text-3xl font-bold text-white mt-2 mb-4">{component.title}</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">{component.description}</p>
                  
                  <ul className="space-y-3">
                    {component.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full ${component.color}/20 flex items-center justify-center`}>
                          <Check className={`w-3 h-3 ${component.color === "bg-[#98CA3F]" ? "text-[#98CA3F]" : component.color === "bg-blue-500" ? "text-blue-500" : "text-purple-500"}`} />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#161B22]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-400">
              Un flujo simple que te lleva de novato a experto en decisiones
            </p>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#30363D] hidden md:block" />
            
            <div className="space-y-12">
              {[
                { step: "01", title: "Elige tu experiencia", desc: "Selecciona el nivel y tema que más te interese o necesites." },
                { step: "02", title: "Vive el escenario", desc: "Sumérgete en una situación realista con datos reales." },
                { step: "03", title: "Toma decisiones", desc: "Analiza los datos y elige tu camino. Cada decisión cuenta." },
                { step: "04", title: "Ve las consecuencias", desc: "Observa cómo tu decisión impacta la historia y los resultados." },
                { step: "05", title: "Aprende y mejora", desc: "Revisa tu DataScore, obtén feedback y vuelve a intentarlo." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-center gap-8"
                >
                  <div className="hidden md:flex w-1/2 justify-end pr-8">
                    {i % 2 === 0 && (
                      <div className="text-right">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-gray-400 mt-1">{item.desc}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative z-10 w-12 h-12 bg-[#98CA3F] rounded-full flex items-center justify-center text-[#0D1117] font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  
                  <div className="md:w-1/2 md:pl-8">
                    {i % 2 === 1 ? (
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-gray-400 mt-1">{item.desc}</p>
                      </div>
                    ) : (
                      <div className="md:hidden">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-gray-400 mt-1">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
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
              ¿Listo para explorar el ecosistema?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/experiencias">
                  Ver Experiencias
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/precios">
                  Ver Precios
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

