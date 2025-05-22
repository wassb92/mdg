// File: pages/contact.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Copy, Check } from "lucide-react";

function CopyButton({
  text,
  copied,
  onCopy,
}: {
  text: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <motion.button
      onClick={onCopy}
      className="relative ml-2"
      whileTap={{ scale: 0.8 }}
      animate={copied ? { rotate: [0, 20], scale: [1, 1.2] } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        repeat: 1,
        repeatType: "reverse",
      }}
    >
      <Copy
        className={`w-5 h-5 transition ${
          copied ? "text-green-600" : "text-gray-500 hover:text-brand"
        }`}
      />
      {copied && (
        <motion.div
          className="absolute bottom-4 left-4 bg-white rounded-full p-0.5 shadow"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Check className="w-4 h-4 text-green-600" />
        </motion.div>
      )}
    </motion.button>
  );
}

export default function Contact() {
  const [copiedAddr, setCopiedAddr] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (
    text: string,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <motion.section
      className="relative w-full h-screen bg-gradient-to-r from-gray-200 to-gray-400 text-gray-100 flex flex-col md:flex-row overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full md:w-1/2 flex flex-col p-8 md:p-12"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-heading font-extrabold mt-16 md:mt-20 text-brand"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Contactez-nous
        </motion.h1>

        <motion.div
          className="flex-grow flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="relative bg-white bg-opacity-90 rounded-2xl p-8 md:p-10 mt-2 w-full max-w-2xl shadow-2xl">
            <div className="space-y-4 text-gray-800 text-lg">
              <p className="flex items-center">
                <span className="font-semibold text-brand mr-2">Adresse :</span>
                81 rue Paul Vaillant Couturier, 92230 Gennevilliers
                <CopyButton
                  text="81 rue Paul Vaillant Couturier, 92230 Gennevilliers"
                  copied={copiedAddr}
                  onCopy={() =>
                    handleCopy(
                      "81 rue Paul Vaillant Couturier, 92230 Gennevilliers",
                      setCopiedAddr
                    )
                  }
                />
              </p>

              <p className="flex items-center">
                <span className="font-semibold text-brand mr-2">Email :</span>
                <a
                  href="mailto:contact@mosquee-de-gennevilliers.com"
                  className="hover:text-brand"
                >
                  contact@mosquee-de-gennevilliers.com
                </a>
                <CopyButton
                  text="contact@mosquee-de-gennevilliers.com"
                  copied={copiedEmail}
                  onCopy={() =>
                    handleCopy(
                      "contact@mosquee-de-gennevilliers.com",
                      setCopiedEmail
                    )
                  }
                />
              </p>

              <p className="flex items-center">
                <span className="font-semibold text-brand mr-2">
                  Téléphone :
                </span>
                <a href="tel:+33147999285" className="hover:text-brand">
                  01 47 99 92 85
                </a>
                <CopyButton
                  text="01 47 99 92 85"
                  copied={copiedPhone}
                  onCopy={() => handleCopy("01 47 99 92 85", setCopiedPhone)}
                />
              </p>

              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/place/81+rue+Paul+Vaillant+Couturier,+92230+Gennevilliers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-brand hover:bg-brand-dark text-white font-semibold px-4 py-2 rounded-lg transition"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Ouvrir la carte
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 relative h-full"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      >
        <iframe
          src="https://maps.google.com/maps?q=81%20rue%20Paul%20Vaillant%20Couturier,%2092230%20Gennevilliers&output=embed"
          className="absolute inset-0 w-full h-full shadow-inner"
          allowFullScreen
        />
      </motion.div>
    </motion.section>
  );
}
