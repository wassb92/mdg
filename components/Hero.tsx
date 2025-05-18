import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <motion.section
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-mawaqit"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={
          "https://videos.pexels.com/video-files/19288757/19288757-uhd_2560_1440_30fps.mp4"
        }
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
          className="my-4 text-base sm:text-lg text-white/90"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          ٱدْخُلُوهَا بِسَلَٰمٍ ءَامِنِينَ
        </motion.p>
        <motion.div
          className="mt-8 w-4/5 h-[60vh] rounded-xl overflow-hidden shadow-white shadow-[0px_0px_25px_15px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <iframe
            src="https://mawaqit.net/fr/m/ennour"
            className="w-full h-full border-none"
            allowFullScreen
            scrolling="no"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
