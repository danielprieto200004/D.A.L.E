"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Target, Zap, BarChart3, Database, Lightbulb, Gamepad2, Rocket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import UserHub from "@/components/Hub/UserHub";

const stats = [
  { value: "4", label: "Experiencias", suffix: "" },
  { value: "100", label: "Simuladores", suffix: "+" },
  { value: "∞", label: "Decisiones", suffix: "" },
];

const features = [
  {
    icon: Target,
    title: "Simuladores de Decisiones",
    description: "Escenarios reales donde cada elección tiene consecuencias medibles.",
  },
  {
    icon: BarChart3,
    title: "Dashboards Interactivos",
    description: "Visualiza datos como un profesional, sin necesidad de ser experto.",
  },
  {
    icon: Users,
    title: "Para Todos los Niveles",
    description: "Desde niños hasta directivos. Cada quien su experiencia personalizada.",
  },
  {
    icon: Zap,
    title: "Narrativas Inmersivas",
    description: "Historias interactivas donde tú decides el rumbo basándote en datos.",
  },
];

const daleLetters = [
  {
    letter: "D",
    word: "DATOS",
    icon: Database,
    teaching: "Los datos son el nuevo petróleo del siglo XXI. Pero sin refinar, no sirven de nada.",
    tip: "Aprende a identificar qué datos importan y cuáles son solo ruido.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    letter: "A",
    word: "ANÁLISIS",
    icon: Lightbulb,
    teaching: "Analizar no es solo ver números. Es encontrar las historias que los datos cuentan.",
    tip: "La pregunta correcta vale más que mil gráficos sin propósito.",
    color: "from-purple-500 to-pink-500",
  },
  {
    letter: "L",
    word: "LÚDICA",
    icon: Gamepad2,
    teaching: "Jugando se aprende mejor. El error en un juego es una lección, no un fracaso.",
    tip: "La mejor manera de entender algo complejo es experimentarlo sin miedo.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    letter: "E",
    word: "EJECUCIÓN",
    icon: Rocket,
    teaching: "Un insight sin acción es solo una buena idea desperdiciada. Decide y actúa.",
    tip: "La diferencia entre saber y hacer es lo que separa a los que hablan de los que transforman.",
    color: "from-green-500 to-emerald-500",
  },
];

// Partículas flotantes de fondo
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#98CA3F]/30 rounded-full"
          initial={{
            x: Math.random() * 400,
            y: Math.random() * 400,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const { user, loading } = useAuth();

  // Si el usuario está autenticado, mostrar el Hub personalizado
  if (!loading && user) {
    return <UserHub />;
  }

  // Si no está autenticado o está cargando, mostrar landing pública
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#98CA3F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0D1117]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#98CA3F]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#98CA3F]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#98CA3F]/10 border border-[#98CA3F]/20 rounded-full">
                <span className="w-2 h-2 bg-[#98CA3F] rounded-full animate-pulse" />
                <span className="text-sm text-[#98CA3F] font-medium">Plataforma de Educación en Data</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1]">
                <span className="text-white">De los Datos</span>
                <br />
                <span className="text-[#98CA3F]">a las Decisiones</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                El ecosistema que transforma la manera en que entiendes y usas los datos. 
                Experiencias inmersivas para cada etapa de tu vida.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="xl" asChild>
                  <Link href="/experiencias">
                    Explorar Experiencias
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="secondary" size="xl" asChild>
                  <Link href="/ecosistema">
                    <Play className="w-5 h-5 mr-2" />
                    Ver cómo funciona
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-[#30363D]">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-white">
                      {stat.value}<span className="text-[#98CA3F]">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DALE Visual - Cubo con animación de flotación */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[550px]">
              
              {/* Partículas flotantes */}
              <FloatingParticles />

              {/* Anillos orbitando */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="absolute w-[400px] h-[400px] border border-[#98CA3F]/10 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-[450px] h-[450px] border border-[#98CA3F]/5 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Cubo Principal con flotación */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative"
              >
                {/* Glow pulsante de fondo */}
                <motion.div 
                  className="absolute inset-0 bg-[#98CA3F]/20 rounded-3xl blur-3xl scale-125"
                  animate={{
                    scale: [1.2, 1.4, 1.2],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Contenedor del Cubo */}
                <div className="relative p-8 rounded-3xl bg-[#0D1117]/80 border border-[#30363D]/50 backdrop-blur-sm shadow-2xl overflow-visible">
                  
                  {/* Brillo superior */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#98CA3F]/50 to-transparent" />
                  
                  {/* DALE Grid */}
                  <div className="relative grid grid-cols-2 gap-5 overflow-visible">
                    {daleLetters.map((item, i) => (
                      <motion.div
                        key={item.letter}
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 0.3 + i * 0.15, 
                          type: "spring",
                          stiffness: 200,
                        }}
                        onMouseEnter={() => setHoveredLetter(i)}
                        onMouseLeave={() => setHoveredLetter(null)}
                        className="relative group"
                        style={{ zIndex: hoveredLetter === i ? 50 : 1 }}
                      >
                        {/* Letter Card */}
                        <motion.div
                          whileHover={{ 
                            scale: 1.08,
                            rotate: [0, -2, 2, 0],
                            transition: { rotate: { duration: 0.3 } }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            w-40 h-40 bg-[#161B22] border-2 rounded-2xl 
                            flex flex-col items-center justify-center cursor-pointer
                            transition-all duration-300 relative overflow-hidden
                            ${hoveredLetter === i 
                              ? "border-[#98CA3F] shadow-2xl shadow-[#98CA3F]/40" 
                              : "border-[#30363D] hover:border-[#98CA3F]/50"
                            }
                          `}
                        >
                          {/* Efecto de brillo que se mueve al hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                            animate={hoveredLetter === i ? { translateX: "200%" } : {}}
                            transition={{ duration: 0.6 }}
                          />
                          
                          {/* Gradiente de fondo al hover */}
                          <motion.div 
                            className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredLetter === i ? 0.15 : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Brillo superior de la card */}
                          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl" />
                          
                          {/* Letra */}
                          <motion.span 
                            className="text-7xl font-black text-[#98CA3F] relative z-10"
                            animate={{ 
                              scale: hoveredLetter === i ? 1.15 : 1,
                              textShadow: hoveredLetter === i 
                                ? "0 0 40px rgba(152, 202, 63, 0.6)" 
                                : "0 0 0px rgba(152, 202, 63, 0)"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.letter}
                          </motion.span>
                          
                          {/* Palabra */}
                          <motion.span 
                            className="text-xs text-gray-400 mt-2 font-semibold tracking-widest relative z-10"
                            animate={{
                              color: hoveredLetter === i ? "#98CA3F" : "#9CA3AF"
                            }}
                          >
                            {item.word}
                          </motion.span>

                          {/* Indicador de interacción */}
                          <motion.div
                            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredLetter === i ? 0 : 0.5 }}
                          >
                            <span className="w-1 h-1 bg-gray-500 rounded-full" />
                            <span className="w-1 h-1 bg-gray-500 rounded-full" />
                            <span className="w-1 h-1 bg-gray-500 rounded-full" />
                          </motion.div>
                        </motion.div>

                        {/* Tooltip/Popup */}
                        <AnimatePresence>
                          {hoveredLetter === i && (
                            <motion.div
                              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, scale: 0.9 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              exit={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, scale: 0.9 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className={`
                                absolute z-50 w-80 p-5 rounded-xl
                                bg-[#0D1117]/95 border border-[#30363D]
                                shadow-2xl backdrop-blur-md
                                ${i % 2 === 0 ? "left-full ml-6" : "right-full mr-6"}
                                ${i < 2 ? "top-0" : "bottom-0"}
                              `}
                            >
                              {/* Línea de color superior */}
                              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${item.color}`} />
                              
                              {/* Header */}
                              <div className="flex items-center gap-3 mb-4 mt-2">
                                <motion.div 
                                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                                  initial={{ rotate: -10 }}
                                  animate={{ rotate: 0 }}
                                  transition={{ type: "spring" }}
                                >
                                  <item.icon className="w-7 h-7 text-white" />
                                </motion.div>
                                <div>
                                  <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-[#98CA3F]">{item.letter}</span>
                                    <span className="text-lg text-white font-bold">{item.word}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Teaching */}
                              <p className="text-white font-medium mb-4 leading-relaxed text-base">
                                "{item.teaching}"
                              </p>
                              
                              {/* Tip */}
                              <motion.div 
                                className="flex items-start gap-3 p-4 bg-[#98CA3F]/10 rounded-xl border border-[#98CA3F]/20"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                              >
                                <Lightbulb className="w-5 h-5 text-[#98CA3F] flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-300 leading-relaxed">
                                  {item.tip}
                                </p>
                              </motion.div>

                              {/* Arrow indicator */}
                              <div 
                                className={`
                                  absolute w-4 h-4 bg-[#0D1117]/95 border-[#30363D] rotate-45
                                  ${i % 2 === 0 ? "-left-2 border-l border-b" : "-right-2 border-r border-t"}
                                  ${i < 2 ? "top-10" : "bottom-10"}
                                `}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  {/* Sombra inferior */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#98CA3F]/10 blur-2xl rounded-full" />
                </div>
              </motion.div>

              {/* Floating instruction */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-500 whitespace-nowrap"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#98CA3F] rounded-full animate-pulse" />
                  Haz clic en cada letra para descubrir su significado
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile DALE Section */}
      <section className="py-16 lg:hidden bg-[#161B22]">
        <div className="max-w-md mx-auto px-4">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            El Ciclo <span className="text-[#98CA3F]">D.A.L.E</span>
          </h3>
          <div className="space-y-4">
            {daleLetters.map((item, i) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-[#0D1117] border border-[#30363D] rounded-xl"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <span className="text-2xl font-black text-white">{item.letter}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{item.word}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">"{item.teaching}"</p>
                <div className="flex items-start gap-2 p-3 bg-[#98CA3F]/10 rounded-lg">
                  <Lightbulb className="w-4 h-4 text-[#98CA3F] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-300">{item.tip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#161B22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Un nuevo paradigma en educación de datos
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No enseñamos herramientas. Desarrollamos el criterio para tomar mejores decisiones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#0D1117] border border-[#30363D] rounded-xl hover:border-[#98CA3F]/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#98CA3F]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#98CA3F]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#98CA3F]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#98CA3F]/10 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              ¿Listo para transformar tu relación con los datos?
            </h2>
            <p className="text-xl text-gray-400">
              Únete a miles de personas que ya están tomando mejores decisiones.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" asChild>
                <Link href="/precios">
                  Ver Planes y Precios
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
