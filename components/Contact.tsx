export default function Contact() {
  return (
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
              <strong>Téléphone :</strong> 01 47 99 92 85
            </p>
            <p>
              <strong>Adresse :</strong> 81 rue Paul Vaillant Couturier,
              92230 Gennevilliers
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
  );
}
