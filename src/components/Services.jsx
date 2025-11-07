import { Package, Boxes, Ruler, Wrench } from 'lucide-react';

const services = [
  {
    icon: Boxes,
    title: 'Volumi in legno su misura',
    description:
      "Produzione di volumi in legno per palestre e boulder, progettati su misura per dimensioni, angoli e finiture specifiche.",
  },
  {
    icon: Ruler,
    title: 'Progettazione e consulenza',
    description:
      "Supporto tecnico dalla fase di idea al progetto esecutivo, con rilievi in loco e rendering su richiesta.",
  },
  {
    icon: Wrench,
    title: 'Installazione e montaggio',
    description:
      "Squadre certificate per il montaggio in sicurezza, nel rispetto delle normative vigenti.",
  },
  {
    icon: Package,
    title: 'Chiavi in mano',
    description:
      "Realizzazione completa della struttura: carpenteria, finiture, ferramenta e consegna in tempi certi.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Servizi</h2>
          <p className="mt-3 text-zinc-600">
            Soluzioni complete per palestre, scuole e centri sportivi. Lavoriamo con legno certificato e componenti di qualità.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group rounded-xl border border-zinc-200 p-6 hover:shadow-md transition-shadow bg-white">
              <div className="h-12 w-12 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
