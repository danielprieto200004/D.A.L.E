import Link from "next/link";

const footerLinks = {
  producto: [
    { label: "Experiencias", href: "/experiencias" },
    { label: "Ecosistema", href: "/ecosistema" },
    { label: "Precios", href: "/precios" },
    { label: "Para Empresas", href: "/empresas" },
  ],
  recursos: [
    { label: "Blog", href: "/blog" },
    { label: "Casos de Éxito", href: "/casos" },
    { label: "Documentación", href: "/docs" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Filosofía", href: "/filosofia" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Términos", href: "/terminos" },
    { label: "Privacidad", href: "/privacidad" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black text-[#98CA3F]">D.A.L.E</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              De los Datos a las Decisiones. La plataforma de alfabetización en datos para Latinoamérica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#98CA3F] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#98CA3F] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#98CA3F] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#98CA3F] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#30363D] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} D.A.L.E by Symbiotic. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">contacto@symbiotic.co</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

