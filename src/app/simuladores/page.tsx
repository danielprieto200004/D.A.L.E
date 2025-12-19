"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Filter,
  Play,
  Clock,
  TrendingUp,
  Target,
  Award,
  Search,
  Gamepad2,
  Users,
  BarChart3,
  TrendingDown,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { getUserProfile } from "@/lib/auth";

type DaleProfile = "kids" | "citizen" | "literacy" | "strategy";
type SimulatorCategory = "all" | DaleProfile;

interface Simulator {
  id: string;
  title: string;
  description: string;
  category: DaleProfile;
  difficulty: "fácil" | "medio" | "avanzado";
  duration: string;
  progress: number;
  thumbnail: string;
  featured: boolean;
}

const allSimulators: Simulator[] = [
  // DALE Kids
  {
    id: "kids-1",
    title: "La Fiesta Perfecta",
    description: "Usa una encuesta para decidir el mejor menú para tu cumpleaños",
    category: "kids",
    difficulty: "fácil",
    duration: "15 min",
    progress: 0,
    thumbnail: "🎉",
    featured: true,
  },
  {
    id: "kids-2",
    title: "El Detective de Datos",
    description: "Encuentra patrones en los datos para resolver un misterio",
    category: "kids",
    difficulty: "fácil",
    duration: "20 min",
    progress: 0,
    thumbnail: "🔍",
    featured: false,
  },
  {
    id: "kids-3",
    title: "Mi Primera Encuesta",
    description: "Aprende a hacer encuestas y entender los resultados",
    category: "kids",
    difficulty: "fácil",
    duration: "10 min",
    progress: 0,
    thumbnail: "📊",
    featured: false,
  },
  {
    id: "kids-4",
    title: "El Gráfico Mágico",
    description: "Crea gráficos bonitos con tus datos favoritos",
    category: "kids",
    difficulty: "medio",
    duration: "25 min",
    progress: 0,
    thumbnail: "📈",
    featured: false,
  },

  // DALE Citizen
  {
    id: "citizen-1",
    title: "El Influencer",
    description: "Decide qué publicar viendo cómo tu algoritmo afecta tu audiencia",
    category: "citizen",
    difficulty: "medio",
    duration: "30 min",
    progress: 0,
    thumbnail: "📱",
    featured: true,
  },
  {
    id: "citizen-2",
    title: "Verdad o Mentira",
    description: "Identifica fake news usando análisis de datos",
    category: "citizen",
    difficulty: "medio",
    duration: "25 min",
    progress: 0,
    thumbnail: "🔍",
    featured: false,
  },
  {
    id: "citizen-3",
    title: "Tu Algoritmo",
    description: "Entiende cómo funcionan los algoritmos de redes sociales",
    category: "citizen",
    difficulty: "medio",
    duration: "35 min",
    progress: 0,
    thumbnail: "🤖",
    featured: false,
  },
  {
    id: "citizen-4",
    title: "Privacidad Digital",
    description: "Aprende a proteger tus datos personales",
    category: "citizen",
    difficulty: "fácil",
    duration: "20 min",
    progress: 0,
    thumbnail: "🔒",
    featured: false,
  },

  // DALE Literacy
  {
    id: "literacy-1",
    title: "El Vendedor Estrella",
    description: "Prioriza clientes usando tu dashboard de ventas",
    category: "literacy",
    difficulty: "medio",
    duration: "45 min",
    progress: 0,
    thumbnail: "💼",
    featured: true,
  },
  {
    id: "literacy-2",
    title: "Optimiza tu Tienda",
    description: "Toma decisiones basadas en datos de inventario y ventas",
    category: "literacy",
    difficulty: "avanzado",
    duration: "60 min",
    progress: 0,
    thumbnail: "🏪",
    featured: false,
  },
  {
    id: "literacy-3",
    title: "KPIs en Acción",
    description: "Interpreta métricas clave para mejorar tu rendimiento",
    category: "literacy",
    difficulty: "medio",
    duration: "40 min",
    progress: 0,
    thumbnail: "📊",
    featured: false,
  },
  {
    id: "literacy-4",
    title: "Dashboard Master",
    description: "Domina el arte de crear y leer dashboards efectivos",
    category: "literacy",
    difficulty: "avanzado",
    duration: "50 min",
    progress: 0,
    thumbnail: "📈",
    featured: false,
  },

  // DALE Strategy
  {
    id: "strategy-1",
    title: "El CEO",
    description: "Decide la estrategia de inversión analizando proyecciones financieras",
    category: "strategy",
    difficulty: "avanzado",
    duration: "90 min",
    progress: 0,
    thumbnail: "👔",
    featured: true,
  },
  {
    id: "strategy-2",
    title: "Inversión Estratégica",
    description: "Analiza oportunidades de inversión con datos financieros",
    category: "strategy",
    difficulty: "avanzado",
    duration: "75 min",
    progress: 0,
    thumbnail: "💰",
    featured: false,
  },
  {
    id: "strategy-3",
    title: "Crisis y Oportunidad",
    description: "Toma decisiones estratégicas durante una crisis empresarial",
    category: "strategy",
    difficulty: "avanzado",
    duration: "85 min",
    progress: 0,
    thumbnail: "🎯",
    featured: false,
  },
  {
    id: "strategy-4",
    title: "Expansión Internacional",
    description: "Evalúa mercados internacionales usando análisis de datos",
    category: "strategy",
    difficulty: "avanzado",
    duration: "100 min",
    progress: 0,
    thumbnail: "🌍",
    featured: false,
  },
];

const categoryLabels: Record<DaleProfile, string> = {
  kids: "DALE Kids",
  citizen: "DALE Citizen",
  literacy: "DALE Literacy",
  strategy: "DALE Strategy",
};

const categoryIcons: Record<DaleProfile, any> = {
  kids: Gamepad2,
  citizen: Users,
  literacy: BarChart3,
  strategy: TrendingUp,
};

export default function SimuladoresPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<SimulatorCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getUserProfile(user.id).then((data) => {
        setProfile(data);
        if (data?.dale_profile) {
          setSelectedCategory(data.dale_profile);
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [user]);

  const filteredSimulators = allSimulators.filter((sim) => {
    const matchesCategory = selectedCategory === "all" || sim.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      sim.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sim.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredSimulators = filteredSimulators.filter((sim) => sim.featured);
  const regularSimulators = filteredSimulators.filter((sim) => !sim.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#98CA3F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Cargando simuladores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1117] pt-24">
      {/* Header */}
      <section className="bg-[#161B22] border-b border-[#30363D] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Simuladores <span className="text-[#98CA3F]">D.A.L.E</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Practica tomando decisiones reales basadas en datos. Cada simulador es una
              experiencia inmersiva.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar simuladores..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "ghost"}
                onClick={() => setSelectedCategory("all")}
                className="whitespace-nowrap"
              >
                <Filter className="w-4 h-4 mr-2" />
                Todos
              </Button>
              {(["kids", "citizen", "literacy", "strategy"] as DaleProfile[]).map((cat) => {
                const Icon = categoryIcons[cat];
                return (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "ghost"}
                    onClick={() => setSelectedCategory(cat)}
                    className="whitespace-nowrap"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {categoryLabels[cat]}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Simulators */}
      {featuredSimulators.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#98CA3F]" />
              Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSimulators.map((simulator, i) => (
                <SimulatorCard key={simulator.id} simulator={simulator} index={i} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Simulators */}
      <section className="py-12 bg-[#161B22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            {selectedCategory === "all" ? "Todos los Simuladores" : categoryLabels[selectedCategory as DaleProfile]}
          </h2>
          {regularSimulators.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularSimulators.map((simulator, i) => (
                <SimulatorCard key={simulator.id} simulator={simulator} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No se encontraron simuladores</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function SimulatorCard({
  simulator,
  index,
  featured = false,
}: {
  simulator: Simulator;
  index: number;
  featured?: boolean;
}) {
  const difficultyColors = {
    fácil: "bg-green-500/20 text-green-400 border-green-500/30",
    medio: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    avanzado: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  const categoryColors = {
    kids: "from-pink-500 to-orange-500",
    citizen: "from-cyan-500 to-blue-500",
    literacy: "from-green-500 to-emerald-500",
    strategy: "from-purple-500 to-indigo-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`
        bg-[#0D1117] border rounded-xl overflow-hidden cursor-pointer
        transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
        ${featured ? "border-[#98CA3F] shadow-lg shadow-[#98CA3F]/10" : "border-[#30363D] hover:border-[#98CA3F]/50"}
      `}
    >
      {/* Thumbnail */}
      <div className={`h-32 bg-gradient-to-br ${categoryColors[simulator.category]} flex items-center justify-center text-6xl`}>
        {simulator.thumbnail}
      </div>

      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs px-3 py-1 bg-[#161B22] rounded-full text-gray-400 border border-[#30363D]">
            {categoryLabels[simulator.category]}
          </span>
          {featured && (
            <span className="text-xs px-3 py-1 bg-[#98CA3F]/10 text-[#98CA3F] rounded-full border border-[#98CA3F]/20">
              Destacado
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">{simulator.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{simulator.description}</p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {simulator.duration}
          </div>
          <span
            className={`px-2 py-1 rounded border ${difficultyColors[simulator.difficulty]}`}
          >
            {simulator.difficulty}
          </span>
        </div>

        {/* Progress */}
        {simulator.progress > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span>Progreso</span>
              <span>{simulator.progress}%</span>
            </div>
            <div className="w-full bg-[#161B22] rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#98CA3F] to-green-500 h-2 rounded-full transition-all"
                style={{ width: `${simulator.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button className="w-full" variant={featured ? "default" : "secondary"}>
          <Play className="w-4 h-4 mr-2" />
          {simulator.progress > 0 ? "Continuar" : "Comenzar"}
        </Button>
      </div>
    </motion.div>
  );
}

