# 🎯 Testimonial Slider - Leone Master School

Componente testimonial grid con modal popup, progettato in stile Mindvalley per Leone Master School.

## 📌 Info Progetto

- **Repository:** https://github.com/brukandy/testimonial-slider
- **Live Demo:** https://brukandy.github.io/testimonial-slider/
- **Account GitHub:** brukandy
- **Progetto Locale:** `/Users/brunolorenzon/CascadeProjects/testimonial-slider/`

## 🚀 Live Demo

**GitHub Pages URL:** `https://brukandy.github.io/testimonial-slider/`  
**Local Preview:** http://localhost:8080

## 📦 Caratteristiche

- ✨ **Griglia 4 Card:** Layout responsive con 4 testimonianze visibili
- 🎨 **Design Mindvalley:** Gradiente blu navy (#1e3a8a → #0f172a)
- 📱 **Responsive:** Desktop (4 col) → Tablet (2 col) → Mobile (1 col)
- 🔍 **Modal Popup:** Click su card apre popup con storia completa
- 🎬 **Media Support:** Placeholder per video e foto (da personalizzare)
- ⚡ **Smooth Animations:** Hover effects e transizioni fluide

## 📋 Contenuti

### 4 Testimonianze:

1. **Fabio** - Imprenditore e Franchise Owner
   - Da 250K a DECINE di milioni €
   - 3 anni di mentoring

2. **Gilberto Vespignani** - Imprenditore settore servizi
   - +150% fatturato in 12 mesi
   - Da 600K a 1.5M €
   - Team da 20 a 55 persone

3. **Sandra N.** - Primo investimento immobiliare
   - ROI 30,64% prima del completamento
   - €64.000 guadagno netto
   - REM (Real Estate Master)

4. **Alice Grandcolas** - Interior Designer
   - Da 1.100€/mese a Hilton London
   - 12 mesi di trasformazione
   - Master Evoluzione Personale

## 🔧 Installazione WordPress Elementor

### Metodo 1: Iframe Embed (Consigliato)

1. **Crea nuova sezione** in Elementor
2. **Imposta sezione:**
   - Layout → Content Width: **Full Width**
   - Layout → Column Gap: **No Gap**
   - Advanced → Padding: **0** su tutti i lati
   - Advanced → Margin: **0** su tutti i lati

3. **Aggiungi widget HTML**
4. **Incolla questo codice:**

```html
<style>
/* Rimuove padding dal widget Elementor */
.elementor-widget-html {
    margin: 0 !important;
    padding: 0 !important;
}
.elementor-widget-container {
    margin: 0 !important;
    padding: 0 !important;
}
</style>

<iframe 
    src="https://brukandy.github.io/testimonial-slider/" 
    width="100%" 
    height="900" 
    frameborder="0"
    allowfullscreen
    allow="fullscreen"
    style="border: none; display: block; margin: 0; padding: 0;">
</iframe>
```

5. **Imposta widget HTML:**
   - Advanced → Padding: **0** su tutti i lati
   - Advanced → Margin: **0** su tutti i lati

**Nota:** Altezza ottimizzata `900px` (aggiornata Nov 2025). Usa `1200px` se serve più spazio per il CTA button.

### Metodo 2: Codice Diretto

1. Aggiungi widget **HTML** in Elementor
2. Copia tutto il contenuto di `index.html`
3. Modifica i path CSS/JS per usare GitHub Pages:
   - `href="https://brukandy.github.io/testimonial-slider/style.css"`
   - `src="https://brukandy.github.io/testimonial-slider/script.js"`

## 🎬 Media Integrati

### Video YouTube:
- **Fabio:** https://www.youtube.com/watch?v=f3lBU52wDPQ
- **Gilberto:** https://www.youtube.com/watch?v=pmbVLQppfgc

### Immagini Locali:
- **Fabio:** `images/fabio-testimonial.png`
- **Gilberto:** `images/gilberto-tetimonial.png`
- **Sandra:** `images/sandra-testimonial.png`
- **Alice:** `images/alice-testimonial.png`

### Come Aggiungere Nuovi Media

Nel file `script.js`, modifica l'oggetto `testimonials`:

```javascript
const testimonials = {
    fabio: {
        name: "Fabio",
        mediaType: "video",
        mediaUrl: "https://www.youtube.com/embed/VIDEO_ID", // YouTube embed URL
        thumbnailUrl: "images/fabio-testimonial.png", // Thumbnail card
        sections: [...]
    },
    alice: {
        name: "Alice",
        mediaType: "photo",
        mediaUrl: "images/alice-testimonial.png", // Foto locale o URL
        sections: [...]
    }
};
```

### Formati Supportati:
- **Video:** YouTube embed, MP4, WebM
- **Foto:** JPG, PNG, WebP

## 🎨 Personalizzazione

### Cambiare CTA Link

Nel file `index.html`, cerca:

```html
<a href="#" class="cta-button" id="ctaButton">
```

Sostituisci `#` con il tuo URL.

### Modificare Colori

Nel file `style.css`, cerca:

```css
background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
```

Cambia i codici colore hex.

### Aggiungere/Rimuovere Card

1. **HTML:** Duplica/rimuovi blocco `.testimonial-card`
2. **JS:** Aggiungi/rimuovi oggetto in `testimonials`
3. **CSS Grid:** Modifica `grid-template-columns` se necessario

## 📱 Responsive Breakpoints

- **Desktop (> 1200px):** 4 colonne
- **Tablet (768px - 1200px):** 2 colonne
- **Mobile (< 768px):** 1 colonna

## 🎯 Funzionalità Modal

- **Apertura:** Click su qualsiasi card
- **Chiusura:** 
  - Click su X in alto a destra
  - Click fuori dal modal (overlay)
  - Tasto ESC
- **Scroll:** Contenuto scrollabile se troppo lungo
- **Animazioni:** Fade in/out smooth

## 📁 Struttura File

```
testimonial-slider/
├── index.html          # Struttura HTML con 4 card
├── style.css           # Stili grid + modal
├── script.js           # Logica modal + dati
├── .gitignore          # File da ignorare
└── README.md           # Questa documentazione
```

## 🚀 Deploy su GitHub Pages

```bash
# 1. Crea repository su GitHub
# Nome: testimonial-slider

# 2. Inizializza Git (già fatto)
cd /Users/brunolorenzon/CascadeProjects/testimonial-slider

# 3. Collega a GitHub
git remote add origin https://github.com/brukandy/testimonial-slider.git
git branch -M main
git push -u origin main

# 4. Abilita GitHub Pages
# Settings → Pages → Source: main branch → Save
```

## 🎨 Design System

### Colori
- **Gradiente Card:** `#1e3a8a → #0f172a`
- **Gradiente Background:** `#0f172a → #1e293b`
- **Testo Primario:** `#ffffff`
- **Testo Secondario:** `rgba(255, 255, 255, 0.6)`

### Tipografia
- **Font:** Inter (Google Fonts)
- **Title:** 48px / 800 weight
- **Card Name:** 20px / 700 weight
- **Modal Name:** 36px / 800 weight
- **Body:** 16px / 400 weight

### Spacing
- **Card Gap:** 24px
- **Card Padding:** 24px
- **Modal Padding:** 48px
- **Border Radius:** 12-24px

## 🔄 Workflow Aggiornamenti

### Per modificare contenuti:

1. Modifica `script.js` (dati testimonial)
2. Testa in locale: `python3 -m http.server 8080`
3. Commit e push:
```bash
git add .
git commit -m "Update testimonial content"
git push origin main
```
4. GitHub Pages si aggiorna in 1-2 minuti

### Per modificare stile:

1. Modifica `style.css`
2. Testa in locale
3. Commit e push

## 🐛 Troubleshooting

### Modal non si apre
- Verifica che `script.js` sia caricato
- Controlla console browser per errori
- Assicurati che `data-testimonial` nelle card corrisponda alle chiavi in JS

### Card non responsive
- Verifica media queries in CSS
- Testa con DevTools in modalità mobile
- Controlla che viewport meta tag sia presente

### Video/Foto non caricano
- Verifica URL nel `mediaUrl`
- Controlla CORS policy del server
- Usa URL assoluti, non relativi

### Iframe troppo alto/basso
- Modifica `height` dell'iframe
- Considera usare `height: auto` con JS resize listener

## 📝 Note Tecniche

- **No jQuery:** Vanilla JavaScript puro
- **No Dipendenze:** Tutto self-contained
- **Accessibilità:** Keyboard navigation (ESC per chiudere)
- **Performance:** CSS animations con GPU acceleration
- **SEO Friendly:** Semantic HTML5
- **Scrollbar Custom:** Stile blu navy abbinato al design
- **Mobile Slider:** Scroll orizzontale con snap su mobile (<768px)
- **Video Fullscreen:** Supporto fullscreen per video YouTube

## 🎯 Caratteristiche Implementate

✅ **Griglia responsive** (4 col → 2 col → slider mobile)  
✅ **Modal popup** con video YouTube e foto  
✅ **Thumbnail reali** su tutte le card  
✅ **Play button discreto** (bianco trasparente)  
✅ **Badge video** (nero trasparente con blur)  
✅ **Scrollbar personalizzata** (blu navy)  
✅ **Mobile dots indicator** per navigazione  
✅ **Fullscreen video** supportato  
✅ **Deploy GitHub Pages** completato  
✅ **Embed WordPress** testato e funzionante  

## 🔄 Comandi Utili

### Server Locale
```bash
cd /Users/brunolorenzon/CascadeProjects/testimonial-slider
python3 -m http.server 8081
# Apri: http://localhost:8081
```

### Git Push
```bash
git add .
git commit -m "Update content"
git push origin main
# GitHub Pages si aggiorna in 1-2 minuti
```

### Creare Nuovo Repo GitHub
```bash
gh repo create brukandy/NOME-REPO --public --source=. --remote=origin --push
```

## 📅 Versione

**v2.0** - 24 Novembre 2025  
**Tipo:** Grid + Modal (non più slider)

---

**Made with ❤️ for Leone Master School**
