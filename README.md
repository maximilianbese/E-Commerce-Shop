# Wohlfühlatmosphäre – Online-Shop

Ein Online-Shop für handgemachte Deko aus Raysin, bedruckte Kerzen und Plotter-Artikel. Kundinnen stöbern nach Kategorien, sehen jedes Produkt im Detail und sammeln es im Warenkorb.

> **Status:** Vorführ-Version in Arbeit (Ziel: Weihnachten 2026). Backend, Admin-Bereich und Bezahlung folgen danach.

## Funktionen

- [x] Produktübersicht mit 173 Produkten im responsiven Raster
- [x] Filter nach Kategorie (Kerzen, Raysin, Plotter), auch per Link (`/shop?kategorie=kerzen`)
- [x] Produkt-Detailseite unter `/produkt/:id`
- [x] Warenkorb mit Mengen (+ / −), Entfernen, Gesamtpreis und Anzeige im Header
- [x] Produkte werden aus einer JSON-Datei geladen (später: vom Server)
- [x] „Preis auf Anfrage“ für Produkte ohne Preis
- [x] Checkout-Formular mit Prüfung der Eingaben (Name, E-Mail, Adresse)
- [x] Startseite mit Begrüßung und Kategorie-Kacheln (führen gefiltert in den Shop)
- [x] Fußzeile mit Impressum und Datenschutz (Inhalte folgen)
- [x] Für Handys optimiert (2-Spalten-Raster, wischbare Filter, handyfreundliche Kasse)
- [ ] Online-Demo
- [ ] Backend (Node.js / Express + PostgreSQL)
- [ ] Admin-Bereich zum Anlegen und Bearbeiten von Produkten
- [ ] Bezahlung und Rechtstexte

## Technik

| Bereich | Werkzeug |
| --- | --- |
| Frontend | Angular 22 (Standalone-Komponenten, Signals, zoneless) |
| Sprache | TypeScript 6 |
| Styling | Tailwind CSS 4, selbst gehostete Schriften (Fraunces, Nunito Sans) |
| Daten (aktuell) | `client/public/data/products.json` über `httpResource` |
| Backend (geplant) | Node.js / Express + PostgreSQL |

## Projekt starten

Voraussetzung: [Node.js](https://nodejs.org) (LTS) und die Angular CLI.

```bash
cd client
npm install
ng serve -o
```

Die Seite öffnet sich unter `http://localhost:4200`.

## Ordnerstruktur

```
client/src/app/
├── shared/                 # wird an vielen Stellen gebraucht
│   ├── layout/             # Kopfzeile (header) und Fußzeile (footer)
│   ├── ui/button/          # Knopf-Baustein (primary / secondary)
│   ├── models/             # Baupläne: Product, CartItem, Category
│   └── services/           # CartService (Warenkorb), ProductService (Produkte laden)
└── features/               # gehört zu genau einem Bereich
    ├── home/               # Startseite
    ├── shop/               # Shop-Seite, Produktkarte, Detailseite
    ├── cart/               # Warenkorb-Seite
    ├── checkout/           # Kasse mit Bestellformular
    └── legal/              # Impressum, Datenschutz

client/public/
├── data/products.json      # alle Produkte
└── images/products/        # Produktfotos (WebP, max. 1200 px)
```

## Produktdaten

`client/public/data/products.json` wurde aus den Produktübersichten der Kundin und den Produktfotos erzeugt. Produkte ohne bekannten Preis haben `"price": null`. Die offenen Punkte (fehlende Preise, Sets, Größen) stehen in `_material/_uebersicht/preise-pruefen.csv` und werden mit der Kundin geklärt.

Der Ordner `_material/` enthält die Originaldateien der Kundin und ist per `.gitignore` aus dem Repository ausgeschlossen.

## Konventionen

- Code-Namen auf Englisch, Texte für Kundinnen auf Deutsch
- Kleine Dateien mit genau einer Aufgabe
- Commit-Nachrichten: `feat:` (neu), `fix:` (Bug), `refactor:` (Umbau), `chore:` (Aufräumen)
