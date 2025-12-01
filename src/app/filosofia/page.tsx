"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Gamepad2, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pillars = [
  {
    letter: "D",
    word: "DATOS",
    subtitle: "La Materia Prima",
    description: "Todo comienza con información. Datos crudos que esperan ser interpretados. En D.A.L.E, te presentamos datos reales en contextos que puedes entender.",
    icon: Target,
  },
  {
    letter: "A",
    word: "ANÁLISIS",
    subtitle: "El Proceso",
    description: "No necesitas ser científico de datos. Te guiamos a través de dashboards intuitivos para que extraigas insights valiosos de cualquier conjunto de datos.",
    icon: Lightbulb,
  },
  {
    letter: "L",
    word: "LÚDICA",
    subtitle: "El Método",
    description: "Aprender jugando no es solo para niños. Las narrativas interactivas y simuladores hacen que conceptos complejos se vuelvan experiencias memorables.",
    icon: Gamepad2,
  },
  {
    letter: "E",
    word: "EJECUCIÓN",
    subtitle: "La Acción",
    description: "Los datos sin acción son inútiles. Cada experiencia termina con una decisión tuya, y ves las consecuencias en tiempo real. Así se aprende de verdad.",
    icon: Rocket,
  },
];

export default function FilosofiaPage() {
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
              Nuestra Filosofía
            </span>
            
            <h1 className="text-5xl sm:text-6xl font-black">
              <span className="text-white">El Ciclo </span>
              <span className="text-[#98CA3F]">D.A.L.E</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Un modelo propio que reinventa cómo se enseña la toma de decisiones basada en datos. 
              Cuatro pilares que transforman información en sabiduría práctica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DALE Pillars */}
      <section className="py-16 bg-[#161B22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.letter}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Letter Card */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-[#0D1117] border-2 border-[#98CA3F] rounded-2xl flex items-center justify-center">
                    <span className="text-6xl font-black text-[#98CA3F]">{pillar.letter}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow p-8 bg-[#0D1117] border border-[#30363D] rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <pillar.icon className="w-6 h-6 text-[#98CA3F]" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{pillar.word}</h3>
                      <span className="text-sm text-[#98CA3F]">{pillar.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Por qué somos diferentes?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl"
            >
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ El método tradicional</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Cursos teóricos de horas</li>
                <li>• Ejercicios desconectados de la realidad</li>
                <li>• Solo para "expertos en datos"</li>
                <li>• Certificados sin aplicación práctica</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-[#98CA3F]/10 border border-[#98CA3F]/30 rounded-xl"
            >
              <h3 className="text-xl font-bold text-[#98CA3F] mb-4">✓ El método D.A.L.E</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Simuladores donde TÚ decides</li>
                <li>• Escenarios de la vida real</li>
                <li>• Para cualquier persona, cualquier edad</li>
                <li>• Aprendes viendo consecuencias de tus decisiones</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#161B22]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Experimenta el ciclo D.A.L.E
            </h2>
            <p className="text-gray-400">
              La mejor forma de entender nuestra filosofía es viviéndola.
            </p>
            <Button size="lg" asChild>
              <Link href="/experiencias">
                Ver Experiencias Disponibles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

