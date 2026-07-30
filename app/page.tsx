export default function Home() {
  return (
    <main className="min-h-screen bg-jet-950">
      {/* NAV */}
      <header className="border-b border-jet-800/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-display text-2xl tracking-widest2 text-ivory">
            JET<span className="text-gold">FLOW</span>
          </span>
          <nav className="hidden gap-10 font-body text-sm uppercase tracking-widest text-slate-400 md:flex">
            <a href="#come-funziona" className="transition-colors hover:text-gold">Come funziona</a>
            <a href="#tratte-vuote" className="transition-colors hover:text-gold">Tratte vuote</a>
            <a href="#flotta" className="transition-colors hover:text-gold">Flotta</a>
            <a href="#contatti" className="transition-colors hover:text-gold">Contatti</a>
          </nav>
          <a
            href="#richiedi"
            className="rounded-sm border border-gold px-5 py-2 font-body text-sm uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-jet-950"
          >
            Richiedi preventivo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-radial-glow">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="fade-up fade-up-1 mb-5 font-mono text-xs uppercase tracking-widest2 text-gold-dim">
              Noleggio jet privati &middot; multi-compagnia
            </p>
            <h1 className="fade-up fade-up-2 font-display text-5xl font-medium leading-[1.08] text-ivory md:text-6xl">
              La rotta giusta,
              <br />
              <span className="text-gradient-gold">al prezzo giusto.</span>
            </h1>
            <p className="fade-up fade-up-3 mt-6 max-w-md font-body text-base leading-relaxed text-slate-400">
              Confronta le disponibilita&apos; di piu&apos; compagnie di aviazione privata
              in un unico posto. Scegli l&apos;aereo su misura o approfitta delle
              tratte vuote a tariffa agevolata.
            </p>
            <div className="fade-up fade-up-4 mt-10 flex flex-wrap gap-4">
              <a
                href="#richiedi"
                className="rounded-sm bg-gold-gradient px-7 py-3 font-body text-sm font-medium uppercase tracking-wider text-jet-950 transition-opacity hover:opacity-90"
              >
                Cerca una tratta
              </a>
              <a
                href="#come-funziona"
                className="rounded-sm border border-jet-800 px-7 py-3 font-body text-sm uppercase tracking-wider text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                Come funziona
              </a>
            </div>
          </div>

          {/* Tracciato di volo animato - elemento distintivo */}
          <div className="fade-up fade-up-2">
            <svg viewBox="0 0 480 320" className="w-full" role="img" aria-label="Tracciato di volo animato tra due aeroporti">
              <defs>
                <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A7220" />
                  <stop offset="100%" stopColor="#E8CE7A" />
                </linearGradient>
              </defs>

              {/* meridiani/paralleli discreti sullo sfondo */}
              <g stroke="#1B1B1E" strokeWidth="1">
                <line x1="0" y1="80" x2="480" y2="80" />
                <line x1="0" y1="160" x2="480" y2="160" />
                <line x1="0" y1="240" x2="480" y2="240" />
                <line x1="120" y1="0" x2="120" y2="320" />
                <line x1="240" y1="0" x2="240" y2="320" />
                <line x1="360" y1="0" x2="360" y2="320" />
              </g>

              {/* rotta */}
              <path
                d="M 60 240 C 160 60, 320 260, 420 90"
                fill="none"
                stroke="url(#routeGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                className="route-line"
              />

              {/* punto di partenza */}
              <circle cx="60" cy="240" r="5" fill="#C9A227" />
              <text x="60" y="264" textAnchor="middle" className="fill-slate-400" fontSize="12" fontFamily="var(--font-mono)">FCO</text>

              {/* punto di arrivo */}
              <circle cx="420" cy="90" r="5" fill="#E8CE7A" />
              <text x="420" y="76" textAnchor="middle" className="fill-slate-400" fontSize="12" fontFamily="var(--font-mono)">NCE</text>
            </svg>
          </div>
        </div>
      </section>

      {/* STATS - lettura stile strumentazione di volo */}
      <section className="border-y border-jet-800/80 bg-jet-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {[
            { value: "40+", label: "Compagnie partner" },
            { value: "120+", label: "Aeroporti serviti" },
            { value: "24/7", label: "Assistenza voli" },
            { value: "€", label: "Tratte vuote scontate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-mono text-3xl text-gold">{stat.value}</p>
              <p className="mt-2 font-body text-xs uppercase tracking-wider text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COME FUNZIONA - qui la numerazione ha senso: e' un vero processo in sequenza */}
      <section id="come-funziona" className="mx-auto max-w-6xl px-6 py-28">
        <p className="font-mono text-xs uppercase tracking-widest2 text-gold-dim">Il processo</p>
        <h2 className="mt-3 font-display text-4xl text-ivory">Come funziona Jetflow</h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Cerca la tratta",
              text: "Inserisci origine, destinazione e date. Jetflow interroga le disponibilita' di piu' compagnie contemporaneamente.",
            },
            {
              n: "02",
              title: "Confronta le offerte",
              text: "Filtra per prezzo, tipo di aereo e disponibilita'. Valuta anche le tratte vuote sulla stessa rotta.",
            },
            {
              n: "03",
              title: "Prenota in sicurezza",
              text: "Conferma la prenotazione: Jetflow coordina il pagamento e i dettagli operativi con l'operatore selezionato.",
            },
          ].map((step) => (
            <div key={step.n} className="border-t border-jet-800 pt-6">
              <span className="font-display text-2xl text-gold-dim">{step.n}</span>
              <h3 className="mt-3 font-display text-2xl text-ivory">{step.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRATTE VUOTE */}
      <section id="tratte-vuote" className="border-t border-jet-800/80 bg-jet-900/40">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest2 text-gold-dim">Empty legs</p>
              <h2 className="mt-3 font-display text-4xl text-ivory">Tratte vuote, tariffe ridotte</h2>
              <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-slate-400">
                Molti jet privati tornano alla base senza passeggeri dopo un volo.
                Jetflow rende visibili queste tratte a tariffe significativamente
                piu&apos; basse, per chi ha flessibilita&apos; su data e orario.
              </p>
              <a
                href="#richiedi"
                className="mt-8 inline-block border-b border-gold pb-1 font-body text-sm uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
              >
                Vedi le tratte disponibili
              </a>
            </div>
            <div className="space-y-3">
              {[
                { from: "Milano Linate", to: "Ginevra", date: "12 Ago", off: "-45%" },
                { from: "Roma Ciampino", to: "Ibiza", date: "15 Ago", off: "-38%" },
                { from: "Napoli", to: "Olbia", date: "18 Ago", off: "-30%" },
              ].map((leg) => (
                <div
                  key={leg.from + leg.to}
                  className="flex items-center justify-between rounded-sm border border-jet-800 bg-jet-950 px-5 py-4"
                >
                  <div className="font-body text-sm text-ivory">
                    {leg.from} <span className="text-gold-dim">&rarr;</span> {leg.to}
                  </div>
                  <div className="font-mono text-xs text-slate-600">{leg.date}</div>
                  <div className="font-mono text-sm text-gold">{leg.off}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section id="richiedi" className="mx-auto max-w-6xl px-6 py-28 text-center">
        <h2 className="font-display text-4xl text-ivory md:text-5xl">
          Pronti a decollare?
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-sm text-slate-400">
          Raccontaci la tua tratta: ti mettiamo in contatto con le compagnie
          disponibili.
        </p>
        <a
          href="mailto:contatti@jetflow.it"
          className="mt-10 inline-block rounded-sm bg-gold-gradient px-8 py-3 font-body text-sm font-medium uppercase tracking-wider text-jet-950 transition-opacity hover:opacity-90"
        >
          Richiedi un preventivo
        </a>
      </section>

      {/* FOOTER */}
      <footer id="contatti" className="border-t border-jet-800/80">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <span className="font-display text-lg tracking-widest2 text-ivory">
              JET<span className="text-gold">FLOW</span>
            </span>
            <p className="font-body text-xs text-slate-600">
              contatti@jetflow.it
            </p>
          </div>
          <p className="mt-6 font-body text-xs leading-relaxed text-slate-600">
            Jetflow e&apos; una vetrina informativa. I contenuti relativi a tratte,
            prezzi e disponibilita&apos; sono a scopo dimostrativo fino
            all&apos;attivazione delle partnership operative.
          </p>
        </div>
      </footer>
    </main>
  );
}
