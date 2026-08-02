# Jetflow — sito completo (ricreato dal design Figma)

Sito Next.js 14 completo con tutte le sezioni viste nel video del design
generato su Figma Make: hero con motore di ricerca, flotta filtrabile,
come funziona, rotte popolari, testimonianze, membership e footer.

## Avvio in locale
```
npm install
npm run dev
```
Apri http://localhost:3000

## Come sostituire il sito attuale su GitHub/Vercel

Il modo piu' pulito e veloce:

1. Sul tuo PC, apri la cartella del progetto attuale (quella collegata a
   GitHub, con dentro `.git`).
2. **Cancella tutto il contenuto** tranne la cartella nascosta `.git`
   (quella mantiene la connessione col repository e con Vercel).
3. Copia dentro tutti i file e le cartelle di questo pacchetto
   (`app/`, `package.json`, `tailwind.config.ts`, ecc.).
4. Da terminale, nella stessa cartella:
   ```
   git add .
   git commit -m "nuovo design sito Jetflow"
   git push
   ```
5. Vercel rifa' automaticamente il deploy in 1-2 minuti — nessuna
   configurazione aggiuntiva necessaria, dominio e variabili d'ambiente
   restano quelli gia' impostati.

## Cosa e' cambiato rispetto alla versione precedente
- Homepage completa con motore di ricerca funzionante (tab andata/ritorno,
  selettore passeggeri)
- Sezione flotta con filtri per categoria (Light Jet, Midsize, Long Range,
  Ultra Long Range, VIP Airliner)
- Sezione "Come funziona" con 3 step
- Rotte popolari con card fotografiche
- Testimonianze con carosello e statistiche
- Sezione membership "Jetflow Black Card"
- Footer esteso con newsletter e link

## Personalizzare i contenuti
Tutti i dati (aeromobili, rotte, testimonianze, statistiche) sono in un
unico file: `app/data.ts` — modifica quello per aggiornare prezzi, nomi o
numeri senza toccare il resto del codice.
