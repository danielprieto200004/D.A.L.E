"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import { getUserProfile } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth";
import { 
  User, 
  LogOut, 
  Trophy, 
  TrendingUp, 
  BookOpen, 
  Target,
  Loader2 
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const supabase = createClient();
      const {
        data: { user: currentUser },
      } = await supabase.auth.getUser();

      if (!currentUser) {
        router.push("/auth/login");
        return;
      }

      setUser(currentUser);
      const userProfile = await getUserProfile(currentUser.id);
      setProfile(userProfile);
      setLoading(false);
    }

    loadUser();
  }, [router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
        <Loader2 className="w-8 h-8 text-[#98CA3F] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Header */}
      <div className="bg-[#161B22] border-b border-[#30363D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Mi Dashboard</h1>
              <p className="text-gray-400 mt-1">
                Bienvenido, {user?.email || "Usuario"}
              </p>
            </div>
            <Button variant="ghost" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#161B22] border border-[#30363D] rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Trophy className="w-8 h-8 text-[#98CA3F]" />
              <span className="text-3xl font-bold text-white">
                {profile?.data_score || 0}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">Data Score</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#161B22] border border-[#30363D] rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <span className="text-3xl font-bold text-white">0</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">Módulos Completados</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#161B22] border border-[#30363D] rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-purple-500" />
              <span className="text-3xl font-bold text-white">0%</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">Progreso General</h3>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Accesos Rápidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/experiencias">
              <Button variant="secondary" className="w-full justify-start">
                <Target className="w-5 h-5 mr-2" />
                Experiencias
              </Button>
            </Link>
            <Link href="/ecosistema">
              <Button variant="secondary" className="w-full justify-start">
                <BookOpen className="w-5 h-5 mr-2" />
                Ecosistema
              </Button>
            </Link>
            <Link href="/filosofia">
              <Button variant="secondary" className="w-full justify-start">
                <User className="w-5 h-5 mr-2" />
                Filosofía
              </Button>
            </Link>
            <Link href="/precios">
              <Button variant="secondary" className="w-full justify-start">
                <TrendingUp className="w-5 h-5 mr-2" />
                Planes
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Profile Section */}
        {profile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#161B22] border border-[#30363D] rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-4">Tu Perfil</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <p className="text-white mt-1">{user?.email}</p>
              </div>
              {profile.bio && (
                <div>
                  <label className="text-sm text-gray-400">Biografía</label>
                  <p className="text-white mt-1">{profile.bio}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

