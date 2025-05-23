import React, { useState, useRef, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import sheikhs, { SheikhVideo } from "@/data/sheikhs";
import { surahs, Surah } from "@/data/surahs";

function LazyFrame({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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

  // Build recitations list
  const baseRecs = surahs.map((s: Surah, idx: number) => ({
    title: `${idx + 1} - ${s.name} (${s.arabic})`,
    url: `https://www.youtube.com/embed/${activeSheikh.youtubeIds[idx]}`,
  }));
  const recitations = [...baseRecs, ...(activeSheikh.localRecitations || [])];

  const [searchTerm, setSearchTerm] = useState("");
  // Filter by number or name (French/Arabic)
  const filteredRecs = recitations.filter((rec, idx) => {
    if (!searchTerm) return true;
    const term = searchTerm.trim().toLowerCase();
    const num = parseInt(term, 10);
    if (!isNaN(num) && num === idx + 1) return true;
    return rec.title.toLowerCase().includes(term);
  });

  return (
    <div className="min-h-screen pt-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-wd-4xl mx-auto">
        {/* Sheikh Tabs */}
        <div className="flex flex-wrap justify-center border-b border-gray-200 dark:border-gray-700">
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
        </div>

        {/* Search Bar */}
        <div className="flex justify-center my-6">
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
        </div>

        {/* Recitations Flex Wrapper */}
        <div className="w-full px-6 py-8">
          <div className="flex flex-wrap -mx-3">
            {filteredRecs.map((rec, j) => (
              <div
                key={j}
                className="px-3 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div className="overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-lg">
                  <h3 className="text-lg font-medium p-4 text-gray-800 dark:text-gray-200">
                    {rec.title}
                  </h3>
                  {rec.url.includes("youtube.com/embed") ? (
                    <LazyFrame src={rec.url} title={rec.title} />
                  ) : rec.url.endsWith(".mp3") ? (
                    <audio controls className="w-full">
                      <source src={rec.url} type="audio/mpeg" />
                    </audio>
                  ) : (
                    <video controls className="w-full rounded-b-2xl">
                      <source src={rec.url} type="video/mp4" />
                    </video>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
