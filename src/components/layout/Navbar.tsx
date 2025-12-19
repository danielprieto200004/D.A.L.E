"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "@/lib/auth";

const publicNavLinks = [
  { href: "/", label: "Inicio" },
  { href: "/filosofia", label: "Filosofía" },
  { href: "/ecosistema", label: "Ecosistema" },
  { href: "/experiencias", label: "Experiencias" },
  { href: "/precios", label: "Precios" },
];

const authNavLinks = [
  { href: "/", label: "Hub" },
  { href: "/simuladores", label: "Simuladores" },
  { href: "/experiencias", label: "Experiencias" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();

  const navLinks = user ? authNavLinks : publicNavLinks;

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/90 backdrop-blur-md border-b border-[#30363D]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#98CA3F]">D.A.L.E</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#98CA3F] bg-[#98CA3F]/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button / User Menu */}
          <div className="hidden md:flex items-center gap-3">
            {!loading && (
              <>
                {user ? (
                  <>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/dashboard">
                        <User className="w-4 h-4 mr-2" />
                        Mi Perfil
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleSignOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Salir
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/auth/login">Iniciar Sesión</Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/auth/register">Comenzar Gratis</Link>
                    </Button>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#30363D]"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-[#98CA3F] bg-[#98CA3F]/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {!loading && (
                  <div className="pt-4 px-4 space-y-2">
                    {user ? (
                      <>
                        <Button variant="secondary" className="w-full" asChild>
                          <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                            <User className="w-4 h-4 mr-2" />
                            Mi Perfil
                          </Link>
                        </Button>
                        <Button className="w-full" onClick={() => { setIsOpen(false); handleSignOut(); }}>
                          <LogOut className="w-4 h-4 mr-2" />
                          Cerrar Sesión
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="secondary" className="w-full" asChild>
                          <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                            Iniciar Sesión
                          </Link>
                        </Button>
                  <Button className="w-full" asChild>
                    <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                      Comenzar Gratis
                    </Link>
                  </Button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

