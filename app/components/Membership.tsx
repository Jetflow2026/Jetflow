const perks = [
  "Disponibilita' garantita entro 4 ore, ovunque nel mondo",
  "Tariffe riservate sulle tratte piu' richieste",
  "Concierge dedicato attivo 24 ore su 24",
  "Accesso prioritario alle tratte vuote in tempo reale",
];

export default function Membership() {
  return (
    <section id="membership" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-14 rounded-md border border-gold-dim/40 bg-gradient-to-br from-jet-900 to-jet-950 p-10 md:grid-cols-2 md:items-center md:p-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-gold-dim">Membership esclusiva</p>
          <h2 className="mt-3 font-display text-4xl text-ivory">
            La <span className="text-gradient-gold">Jetflow Black Card</span>
          </h2>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-slate-400">
            Un accesso privilegiato pensato per chi vola con regolarita': tariffe
            dedicate, priorita' sulle richieste e un servizio concierge che
            conosce le tue preferenze fin dal primo volo.
          </p>

          <ul className="mt-8 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 font-body text-sm text-slate-400">
                <span className="mt-1 text-gold">✓</span>
                {perk}
              </li>
            ))}
          </ul>

          <a
            href="#richiedi"
            className="mt-8 inline-block rounded-sm bg-gold-gradient px-7 py-3 font-body text-sm font-medium uppercase tracking-wider text-jet-950 transition-opacity hover:opacity-90"
          >
            Richiedi informazioni
          </a>
        </div>

        {/* Render stilizzato della carta */}
        <div className="relative mx-auto aspect-[1.6/1] w-full max-w-sm">
          <div className="absolute inset-0 rounded-xl border border-gold-dim/60 bg-gradient-to-br from-jet-800 via-jet-950 to-black p-6 shadow-2xl shadow-black/50">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg tracking-widest2 text-ivory">
                  JET<span className="text-gold">FLOW</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold-dim">
                  Black
                </span>
              </div>
              <div>
                <p className="font-mono text-lg tracking-[0.2em] text-ivory/80">
                  •••• •••• •••• 0724
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-slate-600">
                    Member since 2026
                  </p>
                  <span className="text-gold">✈</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
