import { useEffect } from "react";

export default function Home() {
  const events = [
    { title: "Concours de Coran", date: "10 mai 2025" },
    { title: "Conférence Parcoursup", date: "4 janvier 2025" },
    { title: "Iftar Collectif", date: "22 avril 2025" },
  ];

  const backgroundVideo =
    "https://videos.pexels.com/video-files/19288757/19288757-uhd_2560_1440_30fps.mp4";

  return (
    <div className="space-y-20">
      {/* Hero: Video Background + Live Prayer Times */}
      <section className="relative -mt-20 h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content & Prayer Times */}

        <div className="relative z-10 px-6 flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white drop-shadow-lg animate-fadeIn">
            السلام عليكم ورحمة الله وبركاته
          </h1>
          <p className="my-4 text-base sm:text-lg text-white/90 animate-fadeIn delay-200">
            ٱدْخُلُوهَا بِسَلَٰمٍ ءَامِنِينَ
          </p>
          {/* Prayer Times prominently displayed on mobile */}
          {/* add white shadow centered */}
          <div className="mt-8 w-11/12 rounded-xl overflow-hidden animate-slideUp delay-400 shadow-white shadow-[0px_0px_25px_15px]">
            <iframe
              src="https://mawaqit.net/fr/m/ennour"
              className="w-full h-[600px] md:h-[800px] border-none"
              allowFullScreen
              scrolling="no"
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
        {[
          {
            icon: "🕌",
            title: "Prière",
            desc: "Horaires précis et rappels quotidiens.",
          },
          {
            icon: "📚",
            title: "Éducation",
            desc: "Cours d’arabe, conférences, ateliers.",
          },
          {
            icon: "🤝",
            title: "Communauté",
            desc: "Iftars, rencontres, solidarité.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="text-center p-6 bg-white dark:bg-bg-dark rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <div className="text-5xl mb-4 text-brand">{f.icon}</div>
            <h3 className="text-2xl font-heading font-bold mb-2 text-brand dark:text-white">
              {f.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-6 py-16 animate-fadeIn">
        <h2 className="text-3xl font-heading font-bold text-brand mb-8 text-center">
          Événements à venir
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((e, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-bg-dark p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-heading font-bold text-brand mb-1 dark:text-white">
                {e.title}
              </h3>
              <time className="block text-sm text-gray-500 dark:text-gray-400 mb-4">
                {e.date}
              </time>
              <button className="text-accent hover:text-accent-dark font-medium transition">
                En savoir plus →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-bg-light dark:bg-bg-dark animate-fadeIn">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-brand mb-8 text-center">
            Contactez-nous
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p>
                <strong>Email :</strong> contact@mosquee-de-gennevilliers.com
              </p>
              <p>
                <strong>Téléphone :</strong> 01 47 99 92 85
              </p>
              <p>
                <strong>Adresse :</strong> 81 rue Paul Vaillant Couturier, 92230
                Gennevilliers
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=81%20rue%20Paul%20Vaillant%20Couturier,%2092230%20Gennevilliers&output=embed"
                className="w-full h-64"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
