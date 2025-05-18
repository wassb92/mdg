// File: components/Layout.tsx
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Calendar,
  Newspaper,
  ImageIcon,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const navItems = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Événements", href: "/events", icon: Calendar },
  { label: "Actualités", href: "/news", icon: Newspaper },
  { label: "Galerie", href: "/gallery", icon: ImageIcon },
  { label: "Contact", href: "/contact", icon: Mail },
];

const logoSrc =
  "https://yt3.googleusercontent.com/PK5WXCfRTI9v6fkDwcPGkop2lw0iHH1fg8H88wtxYpXjSH7rNTS_fGsCvaFYCjmcoRtfUhfGuQ=s160-c-k-c0x00ffffff-no-rj";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header-animated fixed inset-x-0 top-0 z-50 shadow-xl backdrop-blur-md">
      <motion.div
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={logoSrc}
          alt="Mosquée de Gennevilliers"
          className="h-12 w-auto scale-125 rounded-full hover:scale-150 transition-transform cursor-pointer"
        />

        <nav className="hidden lg:flex space-x-8">
          {navItems.map(({ label, href, icon: Icon }) => (
            <motion.div
              key={href}
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <Link
                href={href}
                className="flex items-center space-x-2 font-medium text-white uppercase tracking-wide"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
                <span className="block h-0.5 w-0 group-hover:w-full bg-yellow-300 transition-[width] duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {!mobileOpen && <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      <motion.div
        className="lg:hidden fixed inset-0 header-animated flex flex-col justify-center items-center h-screen p-6 space-y-6"
        initial={{ x: "100%" }}
        animate={{ x: mobileOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-white focus:outline-none"
          aria-label="Fermer le menu"
        >
          <X className="w-8 h-8" />
        </button>
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="w-full text-center flex items-center justify-center space-x-3 text-xl font-semibold text-white uppercase hover:text-yellow-300 transition"
          >
            <Icon className="w-6 h-6" />
            <span>{label}</span>
          </Link>
        ))}
      </motion.div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-transparent via-brand to-transparent py-6">
      <div className="max-w-7xl mx-auto text-center font-normal text-sm text-gray-200">
        © {new Date().getFullYear()} Mosquée de Gennevilliers — Tous droits
        réservés
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${poppins.variable} font-sans antialiased flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100`}
    >
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
