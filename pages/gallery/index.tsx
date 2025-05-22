import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample images (replace src with your real image URLs)
const galleryImages = [
  {
    src: "/images/gallery1.jpg",
    alt: "Mosque interior",
    category: "Architecture",
  },
  {
    src: "/images/gallery2.jpg",
    alt: "Community event",
    category: "Événements",
  },
  { src: "/images/gallery3.jpg", alt: "Prayer hall", category: "Architecture" },
  {
    src: "/images/gallery4.jpg",
    alt: "Ramadan celebration",
    category: "Temps forts",
  },
  {
    src: "/images/gallery5.jpg",
    alt: "Education class",
    category: "Communauté",
  },
  {
    src: "/images/gallery6.jpg",
    alt: "Eid gathering",
    category: "Temps forts",
  },
];

const categories = [
  "Tous",
  "Architecture",
  "Événements",
  "Communauté",
  "Temps forts",
];

export default function Gallery() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <motion.section
      className="w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-3 py-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full font-medium transition 
              ${
                active === cat
                  ? "bg-brand text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="font-medium text-brand dark:text-accent">
                  {img.category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
