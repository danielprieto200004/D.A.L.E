"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Gamepad2,
  Users,
  TrendingUp,
  BookOpen,
  Play,
  Trophy,
  Target,
  BarChart3,
  Zap,
  ArrowRight,
  Sparkles,
  Rocket,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { getUserProfile } from "@/lib/auth";

const quickAccess = [
  {
    id: "kids",
    title: "DALE Kids",
    description: "Juegos y actividades para los más pequeños",
    icon: Gamepad2,
    color: "from-pink-500 to-orange-500",
    href: "/experiencias",
    badge: "6-12 años",
  },
  {
    id: "citizen",
    title: "DALE Citizen",
    description: "Pensamiento crítico en la era digital",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
    href: "/experiencias",
    badge: "Jóvenes y adultos",
  },
  {
    id: "literacy",
    title: "DALE Literacy",
    description: "Interpreta dashboards y KPIs profesionales",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    href: "/experiencias",
    badge: "Empleados",
  },
  {
    id: "strategy",
    title: "DALE Strategy",
    description: "Decisiones estratégicas de alto impacto",
    icon: TrendingUp,
    color: "from-purple-500 to-indigo-500",
    href: "/experiencias",
    badge: "Directivos",
  },
];

const featuredSimulators = [
  {
    title: "El Vendedor Estrella",
    description: "Prioriza clientes usando tu dashboard de ventas",
    category: "Literacy",
    progress: 0,
  },
  {
    title: "El Influencer",
    description: "Decide qué publicar viendo cómo afecta tu audiencia",
    category: "Citizen",
    progress: 0,
  },
  {
    title: "El CEO",
    description: "Estrategia de inversión con proyecciones financieras",
    category: "Strategy",
    progress: 0,
  },
];

export default function UserHub() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getUserProfile(user.id).then((data) => {
        setProfile(data);
        setLoading(false);
      });
    }
  }, [user]);

  const userProfile = profile?.dale_profile as "kids" | "citizen" | "literacy" | "strategy" | null;
  
  // Filtrar experiencias según el perfil del usuario
  const recommendedExperiences = userProfile 
    ? quickAccess.filter(exp => exp.id === userProfile)
    : quickAccess;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#98CA3F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Cargando tu Hub...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#98CA3F]/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#98CA3F]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#98CA3F]/10 border border-[#98CA3F]/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#98CA3F]" />
              <span className="text-sm text-[#98CA3F] font-medium">
                Bienvenido de vuelta, {user?.email?.split("@")[0] || "Explorador"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Tu Ecosistema</span>
              <br />
              <span className="text-[#98CA3F]">D.A.L.E</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Continúa donde lo dejaste. Explora simuladores, completa desafíos y aumenta tu
              Data Score.
            </p>
            {userProfile && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#161B22] border border-[#30363D] rounded-full">
                <Target className="w-4 h-4 text-[#98CA3F]" />
                <span className="text-sm text-gray-300">
                  Tu perfil: <span className="text-[#98CA3F] font-medium">{quickAccess.find(e => e.id === userProfile)?.title}</span>
                </span>
              </div>
            )}

            {/* Stats */}
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="bg-[#161B22] border border-[#30363D] rounded-xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-[#98CA3F]" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{profile?.data_score || 0}</div>
                    <div className="text-xs text-gray-500">Data Score</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#161B22] border border-[#30363D] rounded-xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">0</div>
                    <div className="text-xs text-gray-500">Completados</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#161B22] border border-[#30363D] rounded-xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-purple-500" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">0%</div>
                    <div className="text-xs text-gray-500">Progreso</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access - Experiencias */}
      <section className="py-12 bg-[#161B22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Acceso Rápido</h2>
              <p className="text-gray-400">Elige tu experiencia y comienza ahora</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/experiencias">
                Ver todas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedExperiences.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Link href={item.href}>
                  <div className="bg-[#0D1117] border border-[#30363D] rounded-xl p-6 h-full hover:border-[#98CA3F]/50 transition-all cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <span className="text-xs px-2 py-1 bg-[#161B22] rounded-full text-gray-400">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                    <Link href={`/simuladores?category=${item.id}`} className="mt-4 flex items-center text-[#98CA3F] text-sm font-medium hover:underline">
                      Explorar
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Simulators */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Simuladores Destacados</h2>
              <p className="text-gray-400">Comienza con estos desafíos recomendados</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/simuladores">
                Ver todos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSimulators.map((simulator, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 hover:border-[#98CA3F]/50 transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-3 py-1 bg-[#98CA3F]/10 text-[#98CA3F] rounded-full font-medium">
                    {simulator.category}
                  </span>
                  <Play className="w-5 h-5 text-gray-400 group-hover:text-[#98CA3F] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{simulator.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{simulator.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-[#0D1117] rounded-full h-2 mr-4">
                    <div
                      className="bg-gradient-to-r from-[#98CA3F] to-green-500 h-2 rounded-full"
                      style={{ width: `${simulator.progress}%` }}
                    />
                  </div>
                  <Button size="sm" variant="ghost">
                    Comenzar
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#98CA3F]/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#98CA3F] to-green-500 rounded-2xl flex items-center justify-center mx-auto">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              ¿Listo para tu siguiente desafío?
            </h2>
            <p className="text-gray-400">
              Explora todas las experiencias y encuentra la que mejor se adapte a ti.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/simuladores">
                  Ver Simuladores
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/experiencias">
                  Explorar Experiencias
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

