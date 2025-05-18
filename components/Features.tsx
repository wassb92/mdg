export default function Features() {
  const items = [
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
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
      {items.map((f, i) => (
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
  );
}
