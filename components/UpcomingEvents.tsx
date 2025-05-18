export default function UpcomingEvents() {
  const events = [
    { title: "Concours de Coran", date: "10 mai 2025" },
    { title: "Conférence Parcoursup", date: "4 janvier 2025" },
    { title: "Iftar Collectif", date: "22 avril 2025" },
  ];
  return (
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
  );
}
