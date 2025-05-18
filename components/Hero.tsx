import { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={
          "https://videos.pexels.com/video-files/19288757/19288757-uhd_2560_1440_30fps.mp4"
        }
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-6 flex flex-col items-center w-full max-w-md">
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white drop-shadow-lg animate-fadeIn">
          السلام عليكم ورحمة الله وبركاته
        </h1>
        <p className="my-4 text-base sm:text-lg text-white/90 animate-fadeIn delay-200">
          ٱدْخُلُوهَا بِسَلَٰمٍ ءَامِنِينَ
        </p>
        <div className="mt-8 w-11/12 rounded-xl overflow-hidden animate-slideUp delay-400 shadow-white shadow-[0px_0px_25px_15px] border-4 border-accent">
          <div className="bg-accent px-4 py-2 text-center font-heading text-bg-dark">
            Horaires de prière en direct
          </div>
          <iframe
            src="https://mawaqit.net/fr/m/ennour"
            className="w-full h-96 md:h-[600px] border-none"
            allowFullScreen
            scrolling="no"
          />
        </div>
      </div>
    </section>
  );
}
