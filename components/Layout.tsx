// File: components/Layout.tsx
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Événements", href: "/events" },
    { label: "Actualités", href: "/news" },
    { label: "Galerie", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];
  const logo =
    "https://yt3.googleusercontent.com/PK5WXCfRTI9v6fkDwcPGkop2lw0iHH1fg8H88wtxYpXjSH7rNTS_fGsCvaFYCjmcoRtfUhfGuQ=s160-c-k-c0x00ffffff-no-rj";

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-brand to-primary-dark/90 dark:from-primary-dark/90 dark:to-brand-dark/80 py-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <Link href="/" className="text-2xl font-heading text-white">
            Mosquée Gennevilliers
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-accent transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-gradient-to-r from-brand-light to-brand/80 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-2 text-white hover:bg-white/20 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="pt-[80px] flex-grow">{children}</main>

      <footer className="bg-primary-dark text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center font-body">
          © 2025 Mosquée de Gennevilliers — Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
