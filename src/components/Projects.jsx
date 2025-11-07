export default function Projects() {
  const projects = [
    {
      title: 'Parete boulder scolastica',
      description:
        'Volumi in legno modulari con finitura antiscivolo, ottimizzati per spazi didattici. Installazione in 2 giorni.',
      image:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Area functional training',
      description:
        'Struttura completa con volumi, spalliere e box, realizzata chiavi in mano. Progetto e montaggio inclusi.',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Centro arrampicata indoor',
      description:
        'Set personalizzato di volumi per pareti con angoli complessi. Finitura resistente e manutenzione facilitata.',
      image:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1400&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Progetti recenti</h2>
          <p className="mt-3 text-zinc-600">Una selezione di lavori realizzati per palestre, scuole e centri sportivi.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
