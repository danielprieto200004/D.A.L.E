"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock,
  User,
  Loader2,
  Calendar,
  MapPin,
  Briefcase,
  Heart,
  Check,
  Sparkles,
  Gamepad2,
  Users,
  TrendingUp,
  BarChart3,
  Target,
} from "lucide-react";

type DaleProfile = "kids" | "citizen" | "literacy" | "strategy" | null;

const daleProfiles = [
  {
    id: "kids" as const,
    title: "DALE Kids",
    subtitle: "Para los más pequeños",
    age: "6-12 años",
    icon: Gamepad2,
    color: "from-pink-500 to-orange-500",
    description: "Aprende jugando. Actividades divertidas que desarrollan el pensamiento lógico.",
    features: ["Juegos interactivos", "Narrativas simples", "Actividades de patrones"],
  },
  {
    id: "citizen" as const,
    title: "DALE Citizen",
    subtitle: "Para el ciudadano digital",
    age: "Jóvenes y adultos",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
    description: "Pensamiento crítico en la era de la información. Detecta fake news y protege tu privacidad.",
    features: ["Simuladores sociales", "Detección de fake news", "Privacidad digital"],
  },
  {
    id: "literacy" as const,
    title: "DALE Literacy",
    subtitle: "Para el profesional",
    age: "Empleados y equipos",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    description: "Interpreta dashboards, KPIs y métricas laborales. Toma mejores decisiones operativas.",
    features: ["Interpretación de KPIs", "Dashboards laborales", "Casos empresariales"],
  },
  {
    id: "strategy" as const,
    title: "DALE Strategy",
    subtitle: "Para el líder",
    age: "Directivos y gerentes",
    icon: TrendingUp,
    color: "from-purple-500 to-indigo-500",
    description: "Decisiones estratégicas de alto impacto. Simuladores complejos con múltiples variables.",
    features: ["Simuladores estratégicos", "Análisis financiero", "Gestión de riesgos"],
  },
];

interface FormData {
  // Paso 1: Información básica
  fullName: string;
  email: string;
  password: string;
  // Paso 2: Demografía
  age: string;
  gender: "male" | "female" | "other" | "prefer_not_to_say" | "";
  country: string;
  city: string;
  // Paso 3: Perfil profesional
  occupation: string;
  educationLevel: "" | "primary" | "secondary" | "bachelor" | "master" | "phd" | "other";
  companySize: "" | "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+" | "not_applicable";
  industry: string;
  dataExperience: "" | "none" | "beginner" | "intermediate" | "advanced" | "expert";
  // Paso 4: Intereses
  interests: string[];
}

const availableInterests = [
  "Tecnología",
  "Análisis de datos",
  "Machine Learning",
  "Visualización",
  "Negocios",
  "Marketing",
  "Finanzas",
  "Educación",
  "Salud",
  "Entretenimiento",
  "Deportes",
  "Ciencia",
  "Innovación",
  "Emprendimiento",
  "Diseño",
  "Programación",
];

const countries = [
  "Colombia",
  "México",
  "Argentina",
  "Chile",
  "Perú",
  "España",
  "Estados Unidos",
  "Otro",
];

function RegisterPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [daleProfile, setDaleProfile] = useState<DaleProfile>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    country: "",
    city: "",
    occupation: "",
    educationLevel: "",
    companySize: "",
    industry: "",
    dataExperience: "",
    interests: [],
  });

  useEffect(() => {
    // Si vienen de onboarding, usar ese perfil
    const profileFromUrl = searchParams.get("profile") as DaleProfile;
    const profileFromStorage = sessionStorage.getItem("selectedDaleProfile") as DaleProfile;
    if (profileFromUrl || profileFromStorage) {
      setDaleProfile(profileFromUrl || profileFromStorage);
      sessionStorage.removeItem("selectedDaleProfile");
    }
  }, [searchParams]);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!daleProfile;
      case 2:
        return !!(formData.fullName && formData.email && formData.password && formData.password.length >= 6);
      case 3:
        return !!(formData.age && formData.gender && formData.country);
      case 4:
        return !!(formData.occupation && formData.educationLevel && formData.dataExperience);
      case 5:
        return formData.interests.length > 0;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
      setError(null);
    } else {
      setError("Por favor completa todos los campos requeridos");
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setError(null);
  };

    const handleSubmit = async () => {
    if (!validateStep(5) || !daleProfile) {
      setError("Por favor completa todos los pasos");
      return;
    }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    
    // Crear cuenta de autenticación
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // Esperar a que se cree el perfil automáticamente
    if (data.user) {
      // Esperar un poco más para que el trigger cree el perfil
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Intentar actualizar el perfil con todos los campos
      // Los campos demográficos pueden no existir si no se ejecutaron los scripts SQL
      try {
        const { error: profileError } = await supabase
          .from("user_profiles")
          .update({
            dale_profile: daleProfile,
            age: parseInt(formData.age),
            gender: formData.gender as any,
            country: formData.country,
            city: formData.city || null,
            occupation: formData.occupation,
            education_level: formData.educationLevel as any,
            company_size: formData.companySize || null,
            industry: formData.industry || null,
            data_experience: formData.dataExperience as any,
            interests: formData.interests,
          })
          .eq("user_id", data.user!.id);

        if (profileError) {
          console.error("Error updating full profile:", profileError);
          
          // Intentar solo con dale_profile si falla la actualización completa
          const { error: basicError } = await supabase
            .from("user_profiles")
            .update({ dale_profile: daleProfile })
            .eq("user_id", data.user!.id);

          if (basicError) {
            console.error("Error updating basic profile:", basicError);
          }
          
          // Mostrar advertencia pero continuar
          console.warn("Algunos datos del perfil no se pudieron guardar. Ejecuta los scripts SQL en Supabase.");
        }
      } catch (err) {
        console.error("Error en actualización de perfil:", err);
      }

      sessionStorage.removeItem("selectedDaleProfile");
      router.push("/dashboard");
      router.refresh();
    }
  };


  const steps = [
    { number: 1, title: "Perfil DALE" },
    { number: 2, title: "Información Básica" },
    { number: 3, title: "Demografía" },
    { number: 4, title: "Perfil Profesional" },
    { number: 5, title: "Intereses" },
    { number: 6, title: "Confirmación" },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] py-12 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#98CA3F]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#98CA3F]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="text-3xl font-black text-[#98CA3F]">D.A.L.E</span>
          </Link>
          {daleProfile && currentStep > 1 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#98CA3F]/10 border border-[#98CA3F]/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#98CA3F]" />
              <span className="text-sm text-[#98CA3F] font-medium">
                Perfil: DALE {daleProfile.charAt(0).toUpperCase() + daleProfile.slice(1)}
              </span>
            </div>
          )}
          <h1 className="text-3xl font-bold text-white mb-2">Únete a D.A.L.E</h1>
          <p className="text-gray-400">Completa tu perfil para una experiencia personalizada</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all
                      ${
                        currentStep > step.number
                          ? "bg-[#98CA3F] text-white"
                          : currentStep === step.number
                          ? "bg-[#98CA3F] text-white ring-4 ring-[#98CA3F]/20"
                          : "bg-[#161B22] text-gray-500 border-2 border-[#30363D]"
                      }
                    `}
                  >
                    {currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
                  </div>
                  <span
                    className={`text-xs mt-2 text-center ${
                      currentStep >= step.number ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      currentStep > step.number ? "bg-[#98CA3F]" : "bg-[#30363D]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-8 shadow-2xl">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm mb-6"
            >
              {error}
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {/* Paso 1: Selección de Perfil DALE */}
            {currentStep === 1 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-2">Elige tu Perfil DALE</h2>
                <p className="text-gray-400 mb-6">
                  Selecciona el perfil que mejor se adapte a ti. Esto personalizará tu experiencia.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {daleProfiles.map((profile) => {
                    const isSelected = daleProfile === profile.id;
                    return (
                      <motion.div
                        key={profile.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setDaleProfile(profile.id)}
                        className={`
                          relative bg-[#0D1117] border-2 rounded-xl p-6 cursor-pointer
                          transition-all duration-300
                          ${isSelected 
                            ? "border-[#98CA3F] shadow-lg shadow-[#98CA3F]/20" 
                            : "border-[#30363D] hover:border-[#98CA3F]/50"
                          }
                        `}
                      >
                        {/* Selected Indicator */}
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-[#98CA3F] rounded-full flex items-center justify-center shadow-lg"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}

                        {/* Gradient Top */}
                        <div className={`h-1 bg-gradient-to-r ${profile.color} rounded-t-xl -mx-6 -mt-6 mb-4`} />

                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center mb-4`}>
                          <profile.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-white">{profile.title}</h3>
                            <p className="text-[#98CA3F] font-medium text-sm">{profile.subtitle}</p>
                          </div>
                          <span className="px-2 py-1 bg-[#161B22] rounded-full text-xs text-gray-400 border border-[#30363D]">
                            {profile.age}
                          </span>
                        </div>

                        <p className="text-gray-400 text-sm mb-3">{profile.description}</p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {profile.features.map((feature, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-[#161B22] rounded-full text-xs text-gray-400 border border-[#30363D]"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Paso 2: Información Básica */}
            {currentStep === 2 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Información Básica</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateFormData("fullName", e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                      placeholder="Juan Pérez"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Contraseña *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => updateFormData("password", e.target.value)}
                      required
                      minLength={6}
                      className="w-full pl-10 pr-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                      placeholder="Mínimo 6 caracteres"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Paso 3: Demografía */}
            {currentStep === 3 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Información Demográfica</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Edad *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="number"
                        min="6"
                        max="120"
                        value={formData.age}
                        onChange={(e) => updateFormData("age", e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                        placeholder="25"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Género *</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => updateFormData("gender", e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                    >
                      <option value="">Selecciona</option>
                      <option value="male">Masculino</option>
                      <option value="female">Femenino</option>
                      <option value="other">Otro</option>
                      <option value="prefer_not_to_say">Prefiero no decir</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">País *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select
                      value={formData.country}
                      onChange={(e) => updateFormData("country", e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                    >
                      <option value="">Selecciona tu país</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ciudad</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => updateFormData("city", e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                    placeholder="Bogotá"
                  />
                </div>
              </motion.div>
            )}

            {/* Paso 4: Perfil Profesional */}
            {currentStep === 4 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Perfil Profesional</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ocupación / Profesión *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={formData.occupation}
                      onChange={(e) => updateFormData("occupation", e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                      placeholder="Ej: Analista de datos, Estudiante, Gerente..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nivel educativo *
                    </label>
                    <select
                      value={formData.educationLevel}
                      onChange={(e) => updateFormData("educationLevel", e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                    >
                      <option value="">Selecciona</option>
                      <option value="primary">Primaria</option>
                      <option value="secondary">Secundaria</option>
                      <option value="bachelor">Pregrado</option>
                      <option value="master">Maestría</option>
                      <option value="phd">Doctorado</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tamaño de empresa
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => updateFormData("companySize", e.target.value)}
                      className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                    >
                      <option value="">Selecciona</option>
                      <option value="1-10">1-10 empleados</option>
                      <option value="11-50">11-50 empleados</option>
                      <option value="51-200">51-200 empleados</option>
                      <option value="201-500">201-500 empleados</option>
                      <option value="501-1000">501-1000 empleados</option>
                      <option value="1000+">Más de 1000 empleados</option>
                      <option value="not_applicable">No aplica</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Industria</label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => updateFormData("industry", e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                    placeholder="Ej: Tecnología, Finanzas, Educación..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Experiencia con datos *
                  </label>
                  <select
                    value={formData.dataExperience}
                    onChange={(e) => updateFormData("dataExperience", e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#98CA3F] focus:border-transparent"
                  >
                    <option value="">Selecciona tu nivel</option>
                    <option value="none">Ninguna</option>
                    <option value="beginner">Principiante</option>
                    <option value="intermediate">Intermedio</option>
                    <option value="advanced">Avanzado</option>
                    <option value="expert">Experto</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Paso 5: Intereses */}
            {currentStep === 5 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Tus Intereses</h2>
                <p className="text-gray-400 mb-6">
                  Selecciona tus áreas de interés para personalizar tu experiencia (mínimo 1)
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {availableInterests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`
                        px-4 py-3 rounded-lg border-2 transition-all
                        ${
                          formData.interests.includes(interest)
                            ? "bg-[#98CA3F]/20 border-[#98CA3F] text-[#98CA3F]"
                            : "bg-[#0D1117] border-[#30363D] text-gray-300 hover:border-[#98CA3F]/50"
                        }
                      `}
                    >
                      {interest}
                    </button>
                  ))}
                </div>

                {formData.interests.length > 0 && (
                  <div className="mt-4 p-4 bg-[#98CA3F]/10 border border-[#98CA3F]/20 rounded-lg">
                    <p className="text-sm text-gray-300">
                      Seleccionados: <span className="text-[#98CA3F] font-medium">{formData.interests.length}</span>
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Paso 6: Confirmación */}
            {currentStep === 6 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Resumen</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 p-4 bg-[#0D1117] rounded-lg">
                    <div>
                      <p className="text-xs text-gray-500">Nombre</p>
                      <p className="text-white font-medium">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-white font-medium">{formData.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-4 bg-[#0D1117] rounded-lg">
                    <div>
                      <p className="text-xs text-gray-500">Edad</p>
                      <p className="text-white font-medium">{formData.age} años</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">País</p>
                      <p className="text-white font-medium">{formData.country}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0D1117] rounded-lg">
                    <p className="text-xs text-gray-500 mb-2">Intereses</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 bg-[#98CA3F]/20 text-[#98CA3F] rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-[#0D1117] rounded-lg">
                    <p className="text-xs text-gray-500 mb-2">Perfil DALE</p>
                    <div className="flex items-center gap-3">
                      {daleProfile && (() => {
                        const selectedProfile = daleProfiles.find(p => p.id === daleProfile);
                        if (!selectedProfile) return null;
                        const Icon = selectedProfile.icon;
                        return (
                          <>
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedProfile.color} flex items-center justify-center`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-white font-medium">
                              {selectedProfile.title}
                            </p>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#30363D]">
            <Button
              type="button"
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>

            {currentStep < 6 ? (
              <Button onClick={nextStep}>
                Siguiente
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creando cuenta...
                  </>
                ) : (
                  <>
                    Crear Cuenta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="text-[#98CA3F] hover:underline font-medium">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#98CA3F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Cargando...</p>
          </div>
        </div>
      }
    >
      <RegisterPageContent />
    </Suspense>
  );
}
