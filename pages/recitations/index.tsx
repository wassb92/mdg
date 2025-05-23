import React, { useState, useRef, useEffect, useMemo } from "react";
import { SearchIcon } from "lucide-react";
import sheikhs, { SheikhVideo } from "@/data/sheikhs";
import { surahs, Surah } from "@/data/surahs";
import { motion } from "framer-motion";
import Fuse from "fuse.js";

// Helper to remove diacritics and strip the prefix "Sourate"
function normalizeString(str: string) {
  return str
    .normalize("NFD")
    .replace(/[̀-\u036f]/g, "") // remove accents
    .replace(/sourate\s*/gi, ""); // remove the word "Sourate"
}

function LazyFrame({
  src,
  title,
  loaded,
  onLoad,
}: {
  src: string;
  title: string;
  loaded: boolean;
  onLoad: () => void;
}) {
  // If already loaded previously, skip observer and render immediately
  if (loaded) {
    return (
      <iframe
        src={src}
        title={title}
        allowFullScreen
        className="w-full h-full rounded-b-2xl"
      />
    );
  }
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          onLoad(); // mark as loaded
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="w-full">
      {visible ? (
        <iframe
          src={src}
          title={title}
          allowFullScreen
          className="w-full h-full rounded-b-2xl"
        />
      ) : (
        <div
          className="w-full bg-gray-800 animate-pulse"
          style={{ paddingTop: "56.25%" }}
        />
      )}
    </div>
  );
}

export default function Recitations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSheikh: SheikhVideo = sheikhs[activeIndex];

  // Track which URLs have been loaded to avoid reloading on search
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});

  // Build recitations list
  const baseRecs = surahs.map((s: Surah, idx: number) => ({
    id: idx + 1,
    title: `${idx + 1} - ${s.name} (${s.arabic})`,
    url: `https://www.youtube.com/embed/${activeSheikh.youtubeIds[idx]}`,
  }));
  // Add id to localRecitations if missing
  const localRecs = (activeSheikh.localRecitations || []).map((rec, i) => ({
    id: baseRecs.length + i + 1,
    ...rec,
  }));
  const recitations = [...baseRecs, ...localRecs];
  // Add normalizedTitle for fuzzy search
  const recitationsWithNorm = recitations.map((rec) => ({
    ...rec,
    normalizedTitle: normalizeString(rec.title).toLowerCase(),
  }));

  const [searchTerm, setSearchTerm] = useState("");

  // Set up Fuse.js for fuzzy searching titles
  const fuse = useMemo(
    () =>
      new Fuse(recitationsWithNorm, {
        keys: ["normalizedTitle"],
        threshold: 0.4,
      }),
    [recitationsWithNorm]
  );

  // Determine matched URLs for searchTerm (if any)
  const trimmed = searchTerm.trim();
  const num = parseInt(trimmed, 10);
  const normalizeTerm = normalizeString(trimmed).toLowerCase();
  const matchedUrls = trimmed
    ? new Set(fuse.search(normalizeTerm).map((result) => result.item.url))
    : null;

  return (
    <motion.div
      className="min-h-screen pt-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-wd-4xl mx-auto">
        {/* Sheikh Tabs */}
        <motion.div
          className="flex flex-wrap justify-center border-b border-gray-200 dark:border-gray-700"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {sheikhs.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 -mb-px font-medium mx-2 outline-none focus:outline-none transition
                ${
                  activeIndex === i
                    ? "border-b-2 border-brand text-brand"
                    : "text-gray-600 dark:text-gray-400 hover:text-brand"
                }`}
            >
              {s.name}
            </button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="flex justify-center my-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Rechercher numéro ou nom de sourate..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition"
            />
          </div>
        </motion.div>

        {/* Recitations Flex Wrapper */}
        <div className="w-full px-6 pt-4">
          <div className="flex flex-wrap -mx-3">
            {recitations.map((rec, j) => {
              // Determine if this recitation matches the search (fuzzy by title or exact by number)
              const matches =
                !trimmed ||
                (!isNaN(num) && rec.id === num) ||
                (matchedUrls ? matchedUrls.has(rec.url) : false) ||
                normalizeString(rec.title)
                  .toLowerCase()
                  .includes(normalizeTerm);
              return (
                <div
                  key={rec.url}
                  className={`px-3 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${
                    matches ? "" : "hidden"
                  }`}
                >
                  <motion.div
                    className="overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: j * 0.05, duration: 0.5 }}
                  >
                    <h3 className="text-lg font-medium p-4 text-gray-800 dark:text-gray-200">
                      {rec.title}
                    </h3>
                    {rec.url.includes("youtube.com/embed") ? (
                      <LazyFrame
                        src={rec.url}
                        title={rec.title}
                        loaded={!!loadedMap[rec.url]}
                        onLoad={() =>
                          setLoadedMap((prev) => ({ ...prev, [rec.url]: true }))
                        }
                      />
                    ) : rec.url.endsWith(".mp3") ? (
                      <audio controls className="w-full">
                        <source src={rec.url} type="audio/mpeg" />
                      </audio>
                    ) : (
                      <video controls className="w-full rounded-b-2xl">
                        <source src={rec.url} type="video/mp4" />
                      </video>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
