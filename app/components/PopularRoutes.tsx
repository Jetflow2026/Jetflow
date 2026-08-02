import Image from "next/image";
import { popularRoutes } from "../data";

export default function PopularRoutes() {
  return (
    <section id="rotte" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-gold-dim">Rotte popolari</p>
          <h2 className="mt-3 font-display text-4xl text-ivory">Destinazioni piu&apos; richieste</h2>
        </div>
        <a
          href="#rotte"
          className="border-b border-gold pb-1 font-body text-sm uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
        >
          Tutte le rotte →
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {popularRoutes.map((route) => (
          <div
            key={route.code}
            className="group relative h-72 overflow-hidden rounded-sm border border-jet-800"
          >
            <Image
              src={route.image}
              alt={`${route.from} - ${route.to}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jet-950 via-jet-950/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-baseline justify-between font-display text-xl text-ivory">
                <span>{route.from}</span>
                <span className="mx-2 h-px flex-1 bg-gold-dim" />
                <span>{route.to}</span>
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>{route.code} · {route.duration}</span>
                <span className="text-gold">
                  a partire da € {route.priceFrom.toLocaleString("it-IT")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
