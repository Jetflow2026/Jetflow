const steps = [
  {
    n: "01",
    title: "Cerca il tuo volo",
    text: "Inserisci la tua rotta, la data e il numero di passeggeri. Il nostro sistema confronta in tempo reale migliaia di offerte da operatori certificati in tutto il mondo.",
  },
  {
    n: "02",
    title: "Scegli l'aeromobile",
    text: "Confronta modelli, prezzi e disponibilita'. Filtra per categoria, capienza o autonomia e trova la soluzione piu' adatta al tuo viaggio.",
  },
  {
    n: "03",
    title: "Conferma e parti",
    text: "Prenota in pochi clic con pagamento sicuro. Il tuo concierge personale gestisce ogni dettaglio: transfer, catering, hotel e permessi di sorvolo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="border-t border-jet-800/80 bg-jet-900/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest2 text-gold-dim">Come funziona</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight text-ivory">
          Volare privato non e&apos; mai stato cosi&apos; semplice
        </h2>
        <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-slate-400">
          Dalla ricerca alla partenza in meno di 4 ore. La nostra piattaforma
          connette direttamente passeggeri e operatori, eliminando intermediari
          e costi nascosti.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="border-t border-jet-800 pt-6">
              <span className="font-display text-3xl text-gold-dim">{step.n}</span>
              <h3 className="mt-3 font-display text-2xl text-ivory">{step.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
