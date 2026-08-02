export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-jet-800/80 bg-jet-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2 font-display text-2xl tracking-widest2 text-ivory">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gold">
            <path
              d="M2 16.5 21 12 2 7.5v4L14 12 2 12.5v4Z"
              fill="currentColor"
            />
          </svg>
          JET<span className="text-gold">FLOW</span>
        </a>

        <nav className="hidden items-center gap-9 font-body text-sm text-slate-400 md:flex">
          <a href="#flotta" className="transition-colors hover:text-gold">Flotta</a>
          <a href="#rotte" className="transition-colors hover:text-gold">Rotte</a>
          <a href="#come-funziona" className="transition-colors hover:text-gold">Come funziona</a>
          <a href="#membership" className="transition-colors hover:text-gold">Membership</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#accedi" className="hidden font-body text-sm text-slate-400 transition-colors hover:text-ivory md:block">
            Accedi
          </a>
          <a
            href="#richiedi"
            className="rounded-sm bg-gold-gradient px-5 py-2.5 font-body text-sm font-medium uppercase tracking-wider text-jet-950 transition-opacity hover:opacity-90"
          >
            Richiedi preventivo
          </a>
        </div>
      </div>
    </header>
  );
}
