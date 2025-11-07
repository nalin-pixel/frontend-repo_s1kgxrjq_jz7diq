import { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      {/* Simple top bar navigation */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">LegnoFit</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#servizi" className="hover:text-zinc-700">Servizi</a>
            <a href="#progetti" className="hover:text-zinc-700">Progetti</a>
            <a href="#contatti" className="hover:text-zinc-700">Contatti</a>
          </nav>
          <a href="#contatti" className="inline-flex items-center justify-center rounded-md bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800">Richiedi preventivo</a>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="servizi">
          <Services />
        </section>
        <section id="progetti">
          <Projects />
        </section>
        <section id="contatti">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LegnoFit — Volumi in legno per palestre</p>
          <div className="flex items-center gap-6">
            <a href="#servizi" className="hover:text-zinc-800">Servizi</a>
            <a href="#progetti" className="hover:text-zinc-800">Progetti</a>
            <a href="#contatti" className="hover:text-zinc-800">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
