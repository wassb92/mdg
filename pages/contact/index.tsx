// File: pages/contact.tsx
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      className="relative w-full h-screen bg-gradient-to-r bg-gray-200 text-gray-100 flex flex-col md:flex-row overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Panel: Title + Info Card */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col p-8 md:p-12"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
      >
        {/* Title top-left */}
        <motion.h1
          className="text-4xl sm:text-5xl font-heading font-extrabold mt-16 md:mt-20 text-brand"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Contactez-nous
        </motion.h1>

        {/* Info Card */}
        <motion.div
          className="flex-grow flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="bg-white bg-opacity-90 rounded-2xl p-8 md:p-10 mt-2 w-full max-w-2xl shadow-2xl">
            <div className="space-y-4 text-gray-800 text-lg">
              <p>
                <span className="font-semibold text-brand">Email :</span>{" "}
                <a
                  href="mailto:contact@mosquee-de-gennevilliers.com"
                  className="hover:text-brand"
                >
                  contact@mosquee-de-gennevilliers.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand">Téléphone :</span>{" "}
                <a href="tel:+33147999285" className="hover:text-brand">
                  01 47 99 92 85
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand">Adresse :</span> 81
                rue Paul Vaillant Couturier, 92230 Gennevilliers
              </p>
              {/* Maps Icon Link */}
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/place/81+rue+Paul+Vaillant+Couturier,+92230+Gennevilliers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-brand hover:bg-brand-dark
                   text-white font-semibold px-4 py-2 rounded-lg transition"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Ouvrir la carte
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Panel: Map */}
      <motion.div
        className="w-full md:w-1/2 relative h-64 md:h-full"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      >
        <iframe
          src="https://maps.google.com/maps?q=81%20rue%20Paul%20Vaillant%20Couturier,%2092230%20Gennevilliers&output=embed"
          className="absolute inset-0 w-full h-full rounded-l-3xl shadow-inner"
          allowFullScreen
        />
      </motion.div>
    </motion.section>
  );
}
