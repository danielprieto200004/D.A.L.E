"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Esta página ahora redirige al registro que incluye la selección de perfil
export default function OnboardingPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/auth/register");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#98CA3F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Redirigiendo...</p>
      </div>
    </div>
  );
}

