"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Building2, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Gratis",
    description: "Para explorar la plataforma",
    price: "0",
    period: "siempre",
    cta: "Comenzar Gratis",
    ctaVariant: "secondary" as const,
    features: [
      "1 experiencia completa",
      "Acceso a DALE Kids básico",
      "Dashboard de progreso",
      "Soporte por email",
    ],
    notIncluded: [
      "DALE Story",
      "Simuladores avanzados",
      "Certificados",
      "Data-Labs",
    ],
  },
  {
    name: "Personal",
    description: "Para aprendizaje continuo",
    price: "14.900",
    period: "/mes",
    popular: true,
    cta: "Suscribirse",
    ctaVariant: "default" as const,
    features: [
      "Todas las experiencias",
      "DALE Story completo",
      "Simuladores ilimitados",
      "Certificados digitales",
      "DataScore™ avanzado",
      "Acceso a Data-Labs",
      "Soporte prioritario",
    ],
  },
  {
    name: "Familiar",
    description: "Hasta 5 perfiles",
    price: "29.900",
    period: "/mes",
    cta: "Elegir Familiar",
    ctaVariant: "secondary" as const,
    features: [
      "Todo en Personal",
      "5 perfiles diferentes",
      "DALE Kids + Citizen + Literacy",
      "Progreso familiar",
      "Control parental",
      "Reportes de avance",
    ],
  },
];

const enterpriseFeatures = [
  "Implementación personalizada",
  "Experiencias corporativas a medida",
  "Dashboard de analytics empresarial",
  "Integración con LMS existente",
  "Soporte dedicado 24/7",
  "Onboarding y capacitación",
  "Reportes ejecutivos mensuales",
  "API de integración",
];

const faqs = [
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí, puedes cancelar tu suscripción cuando quieras. Mantendrás acceso hasta el final del período pagado.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos tarjetas de crédito/débito, PSE, y pagos en efectivo a través de Efecty y Baloto.",
  },
  {
    q: "¿El plan Familiar permite diferentes niveles?",
    a: "Sí, cada perfil puede estar en una experiencia diferente (Kids, Citizen, Literacy, Strategy).",
  },
  {
    q: "¿Hay descuentos para instituciones educativas?",
    a: "Sí, ofrecemos precios especiales para colegios y universidades. Contáctanos para más información.",
  },
];

export default function PreciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0D1117]">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#98CA3F]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-[#98CA3F]/10 border border-[#98CA3F]/20 rounded-full text-sm text-[#98CA3F] font-medium">
              Precios Simples
            </span>
            
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              Invierte en tu
              <br />
              <span className="text-[#98CA3F]">capacidad de decidir</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Planes flexibles para individuos, familias y empresas. 
              Comienza gratis y escala cuando estés listo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl ${
                  plan.popular 
                    ? "bg-[#161B22] border-2 border-[#98CA3F] shadow-xl shadow-[#98CA3F]/10" 
                    : "bg-[#161B22] border border-[#30363D]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-[#98CA3F] text-[#0D1117] text-sm font-bold rounded-full flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 mt-1">{plan.description}</p>

                  <div className="mt-6 mb-8">
                    <span className="text-5xl font-black text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>

                  <Button 
                    variant={plan.ctaVariant} 
                    className={`w-full ${plan.popular ? "" : ""}`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  <div className="mt-8 space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#98CA3F]/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#98CA3F]" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded?.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3 opacity-50">
                        <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-500 text-xs">✕</span>
                        </div>
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-24 bg-[#161B22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-[#98CA3F]" />
                <span className="text-[#98CA3F] font-semibold">Para Empresas</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                D.A.L.E Enterprise
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                Transforma la cultura de datos de tu organización. 
                Planes personalizados para equipos de cualquier tamaño.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {enterpriseFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#98CA3F] flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg">
                Contactar Ventas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-[#0D1117] border border-[#30363D] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-12 h-12 text-[#98CA3F]" />
                  <div>
                    <p className="text-3xl font-bold text-white">+50 empresas</p>
                    <p className="text-gray-400">ya confían en D.A.L.E</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-[#161B22] rounded-xl">
                    <p className="text-white font-medium">"Transformó cómo nuestro equipo de ventas interpreta los datos."</p>
                    <p className="text-sm text-gray-400 mt-2">— Director Comercial, Empresa de Tecnología</p>
                  </div>
                  <div className="p-4 bg-[#161B22] rounded-xl">
                    <p className="text-white font-medium">"Los simuladores son exactamente lo que necesitábamos para capacitar gerentes."</p>
                    <p className="text-sm text-gray-400 mt-2">— VP de RRHH, Multinacional</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Preguntas Frecuentes</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#161B22] border border-[#30363D] rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#98CA3F]/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Comienza hoy, gratis
            </h2>
            <p className="text-xl text-gray-400">
              Sin tarjeta de crédito. Sin compromisos. Solo aprendizaje.
            </p>
            <Button size="xl">
              Crear Cuenta Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

