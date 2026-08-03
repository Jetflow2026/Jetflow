"use client";

import { useState } from "react";
import Image from "next/image";
import { aircraft, AircraftCategory, airports } from "../data";
import { useSearch } from "./SearchContext";

const categories: (AircraftCategory | "Tutti")[] = [
  "Tutti",
  "Light Jet",
  "Midsize",
  "Long Range",
  "Ultra Long Range",
  "VIP Airliner",
];

export default function Fleet() {
  const [active, setActive] = useState<(typeof categories)[number]>("Tutti");
  const { hasSearched, from, to, date, passengers, reset } = useSearch();

  let filtered = active === "Tutti" ? aircraft : aircraft.filter((a) => a.category === active);
  if (hasSearched) {
    filtered = filtered.filter((a) => a.pax >= passengers);
  }

  const fromLabel = airports.find((a) => a.code === from)?.label ?? from;
  const toLabel = airports.find((a) => a.code === to)?.label ?? to;

  return (
    <section id="flotta" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-gold-dim">La nostra flotta</p>
          <h2 className="mt-3 font-display text-4xl text-ivory">Aeromobili d&apos;eccellenza</h2>
        </div>
        <a
          href="#flotta"
          className="border-b border-gold pb-1 font-body text-sm uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
        >
          Vedi tutti gli aeromobili →
        </a>
      </div>

      {/* Riepilogo ricerca, visibile solo dopo aver cercato */}
      {hasSearched && (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-sm border border-gold-dim/50 bg-jet-900/60 px-5 py-4">
          <p className="font-body text-sm text-ivory">
            Risultati per <span className="text-gold">{fromLabel}</span> →{" "}
            <span className="text-gold">{toLabel}</span>
            {date && <> · {new Date(date).toLocaleDateString("it-IT")}</>} · {passengers}{" "}
            {passengers === 1 ? "passeggero" : "passeggeri"} —{" "}
            <span className="text-gold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "aeromobile disponibile" : "aeromobili disponibili"}
          </p>
          <button
            type="button"
            onClick={reset}
            className="font-mono text-xs uppercase tracking-widest text-slate-400 underline-offset-4 hover:text-gold hover:underline"
          >
            Azzera ricerca
          </button>
        </div>
      )}

      {/* Filtri categoria */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-sm border px-4 py-2 font-body text-sm transition-colors ${
              active === cat
                ? "border-gold bg-gold-gradient text-jet-950"
                : "border-jet-700 text-slate-400 hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Griglia aeromobili */}
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-sm border border-jet-800 bg-jet-900/40 p-10 text-center">
          <p className="font-body text-sm text-slate-400">
            Nessun aeromobile disponibile con questi filtri. Prova a ridurre il numero di
            passeggeri o a cambiare categoria.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((plane) => (
            <article
              key={plane.id}
              className="group overflow-hidden rounded-sm border border-jet-800 bg-jet-900/40 transition-colors hover:border-gold-dim"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={plane.image}
                  alt={plane.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {plane.badge && (
                  <span className="absolute left-3 top-3 rounded-sm bg-gold-gradient px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-jet-950">
                    {plane.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold-dim">
                  {plane.category}
                </p>
                <h3 className="mt-1 font-display text-2xl text-ivory">{plane.name}</h3>

                <div className="mt-3 flex items-center gap-4 font-mono text-xs text-slate-400">
                  <span>👤 {plane.pax} pax</span>
                  <span>🌐 {plane.rangeKm.toLocaleString("it-IT")} km</span>
                  <span>⚡ {plane.speedKmh} km/h</span>
                </div>

                <div className="mt-3 space-y-1 border-t border-jet-800 pt-3 font-body text-xs text-slate-600">
                  {plane.routes.map((r) => (
                    <p key={r}>— {r}</p>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">Da</p>
                    <p className="font-display text-xl text-ivory">
                      € {plane.pricePerHour.toLocaleString("it-IT")}
                      <span className="font-body text-xs text-slate-600"> / ora</span>
                    </p>
                  </div>
                  <p className="font-body text-sm text-gold">
                    ★ {plane.rating} <span className="text-slate-600">({plane.reviews})</span>
                  </p>
                </div>

                <a
                  href="#richiedi"
                  className="mt-4 block rounded-sm border border-gold py-2.5 text-center font-body text-sm uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-jet-950"
                >
                  Richiedi preventivo →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
