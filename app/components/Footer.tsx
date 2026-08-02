const columns = [
  {
    title: "Piattaforma",
    links: ["Flotta", "Rotte", "Tratte vuote", "Come funziona"],
  },
  {
    title: "Azienda",
    links: ["Chi siamo", "Diventa operatore partner", "Carriere", "Contatti"],
  },
  {
    title: "Supporto",
    links: ["Centro assistenza", "Termini di servizio", "Privacy policy"],
  },
];

export default function Footer() {
  return (
    <footer id="contatti" className="border-t border-jet-800/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr]">
          <div>
            <span className="font-display text-2xl tracking-widest2 text-ivory">
              JET<span className="text-gold">FLOW</span>
            </span>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-slate-600">
              La piattaforma che connette passeggeri e operatori di aviazione
              privata certificati, in tutto il mondo.
            </p>

            <div className="mt-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-gold-dim">
                Newsletter
              </p>
              <div className="mt-2 flex max-w-xs border-b border-jet-700 focus-within:border-gold">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="w-full bg-transparent py-2 font-body text-sm text-ivory placeholder:text-slate-600 outline-none"
                />
                <button
                  type="button"
                  className="font-body text-sm uppercase tracking-wider text-gold"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold-dim">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-body text-sm text-slate-400 transition-colors hover:text-gold"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-jet-800 pt-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jetflow. Tutti i diritti riservati.</p>
          <p className="max-w-xl">
            Jetflow e&apos; una vetrina informativa. Contenuti relativi a tratte,
            prezzi e disponibilita&apos; a scopo dimostrativo fino all&apos;attivazione
            delle partnership operative.
          </p>
        </div>
      </div>
    </footer>
  );
}
