import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollBottom = () => {
  return (
    <div
      className="animate-bounce bg-white w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center mx-auto hover:cursor-pointer"
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight - 80,
          behavior: "smooth",
        });
      }}
    >
      <svg
        className="w-6 h-6 text-brand stroke-brand"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  );
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <motion.section
      className="w-full min-h-screen text-center overflow-hidden bg-brand"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={"/video/mosquee_overview.mov"}
        autoPlay
        loop
        muted
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div
        className="relative z-10 px-6 flex flex-col items-center w-full mt-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-heading font-extrabold text-white drop-shadow-lg"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          السلام عليكم ورحمة الله وبركاته
        </motion.h1>
        <motion.p
          className="mt-4 mb-2 text-base sm:text-lg text-white/90"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          ٱدْخُلُوهَا بِسَلَٰمٍ ءَامِنِينَ
        </motion.p>
        <motion.div
          className="mt-4 w-4/5 h-[59vh] rounded-xl overflow-hidden"
          style={{ boxShadow: "0px 0px 40px 25px rgba(255,255,255,0.3)" }}
          animate={{
            boxShadow: [
              "0px 0px 40px 25px rgba(255,255,255,0.3)",
              "0px 0px 40px 25px rgba(255,255,255,1)",
            ],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        >
          <iframe
            src="https://mawaqit.net/fr/m/ennour"
            className="w-full h-full border-none"
            allowFullScreen
            scrolling="no"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center mb-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <ScrollBottom />
      </motion.div>
    </motion.section>
  );
}
