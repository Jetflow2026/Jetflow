# Jetflow — starter tema nero/oro

Starter Next.js 14 (App Router) + Tailwind con l'estetica nero/oro per Jetflow.

## Palette
- `jet-950` #08080A — sfondo principale
- `jet-900` #101012 — pannelli/sezioni
- `jet-800` #1B1B1E — bordi
- `gold` #C9A227 — colore primario di accento
- `gold-light` #E8CE7A — hover / evidenze
- `gold-dim` #8A7220 — testo dorato secondario
- `ivory` #F4F1E8 — testo principale

## Font
- Display (titoli): Cormorant Garamond
- Corpo: Inter
- Dati/numeri (stile strumentazione di volo): IBM Plex Mono

## Come avviarlo in locale
```
npm install
npm run dev
```
Poi apri http://localhost:3000

## Come unirlo al tuo progetto Jetflow esistente
Se hai gia' un progetto con Supabase/Stripe configurati:
1. Copia `tailwind.config.ts` (o incolla i colori nella sezione `theme.extend.colors`
   del tuo file esistente).
2. Copia il contenuto di `app/globals.css` in fondo al tuo `globals.css`.
3. Copia i font in `app/layout.tsx` nel tuo layout esistente.
4. Riusa i blocchi di `app/page.tsx` (hero, stats, come funziona, tratte vuote)
   dentro le tue pagine, mantenendo la logica Supabase/Stripe che hai gia'.

## Elemento distintivo
Il tracciato di volo animato nell'hero (SVG con `stroke-dashoffset`) e' pensato
come firma visiva del brand: si ridisegna ogni volta che la pagina si apre,
evocando una rotta che si traccia in tempo reale.
