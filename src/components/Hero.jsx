import { Rocket, Hammer, Mountain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 mb-6">
              <Mountain className="w-4 h-4" />
              Made in Italy • Legno certificato
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Volumi in legno per palestre e pareti d'arrampicata
            </h1>
            <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Progettiamo e realizziamo volumi in legno su misura per l'allenamento, climbing e ginnastica artistica. Offriamo anche strutture complete chiavi in mano: dalla progettazione all'installazione.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contatti" className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white px-5 py-3 text-sm hover:bg-zinc-800">
                <Hammer className="w-4 h-4" />
                Richiedi un progetto
              </a>
              <a href="#progetti" className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-3 text-sm hover:bg-zinc-100">
                <Rocket className="w-4 h-4" />
                Guarda i progetti
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-zinc-600">
              <div>
                <span className="font-semibold text-zinc-900">15+ anni</span> di esperienza
              </div>
              <div className="hidden sm:block">•</div>
              <div>
                <span className="font-semibold text-zinc-900">100%</span> produzione italiana
              </div>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1400&auto=format&fit=crop"
                alt="Struttura in legno per palestra"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
