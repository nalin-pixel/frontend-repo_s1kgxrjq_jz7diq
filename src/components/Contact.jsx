import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // In un'integrazione reale, qui invieremmo i dati al backend.
    setSent(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contattaci</h2>
          <p className="mt-3 text-zinc-600">Raccontaci il tuo progetto: ti risponderemo con una proposta personalizzata.</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-xl border border-zinc-200 p-6 bg-white">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700">Messaggio</label>
                <textarea
                  name="messaggio"
                  rows="5"
                  value={form.messaggio}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
                  placeholder="Descrivi spazi, misure e necessità"
                  required
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-zinc-500">Risposta entro 24-48 ore lavorative.</p>
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white px-5 py-2.5 text-sm hover:bg-zinc-800">
                <Send className="w-4 h-4" />
                Invia richiesta
              </button>
            </div>
            {sent && (
              <p className="mt-4 text-sm text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-md">
                Grazie! La tua richiesta è stata inviata. Ti ricontatteremo al più presto.
              </p>
            )}
          </form>

          <div className="grid gap-6 content-start">
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold">Informazioni</h3>
              <p className="mt-2 text-sm text-zinc-600">Operiamo in tutta Italia. Produzione interna e installazioni certificate.</p>
              <div className="mt-4 text-sm text-zinc-700">
                <p><span className="font-medium">Email:</span> info@legnofit.it</p>
                <p className="mt-1"><span className="font-medium">Telefono:</span> +39 02 1234 5678</p>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold">Perché scegliere noi</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 list-disc pl-5">
                <li>Materiali certificati e finiture resistenti</li>
                <li>Progetti su misura per ogni ambiente</li>
                <li>Team con oltre 15 anni di esperienza</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
