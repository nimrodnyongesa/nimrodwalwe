<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=28&duration=3000&pause=1000&color=0A84FF&center=true&vCenter=true&multiline=true&repeat=true&width=650&height=80&lines=%7BNN%7D+Portfolio;Nimrod+Nyongesa" alt="Typing SVG" />

  <br/>

  A dark-themed, terminal-inspired developer portfolio.<br/>
  Built with zero frameworks — vanilla HTML, CSS & JavaScript.

  <br/><br/>

  ![HTML](https://img.shields.io/badge/HTML-0D1117?style=flat-square&logo=html5&logoColor=0A84FF)
  ![CSS](https://img.shields.io/badge/CSS-0D1117?style=flat-square&logo=css3&logoColor=0A84FF)
  ![JavaScript](https://img.shields.io/badge/JS-0D1117?style=flat-square&logo=javascript&logoColor=0A84FF)
  ![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-0A84FF?style=flat-square)

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">

### `> overview`

Personal portfolio site for **Nimrod Nyongesa** — Fullstack Engineer & AI Systems Builder based in Nairobi, Kenya.

Designed to mirror the aesthetic of a GitHub dark-mode profile: `#0D1117` backgrounds, `#0A84FF` accent blue, JetBrains Mono typography, and terminal-inspired UI patterns throughout.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">

### `> features`

<table>
<tr>
<td width="50%" valign="top">

**Visual & Interaction**

- Dark GitHub-themed design (`#0D1117`, `#161B22`)
- Interactive dot-grid canvas background with mouse tracking
- Typing animation cycling through roles
- Scroll-triggered reveal animations
- Hover-lift cards with blue glow effect
- Gradient aqua dividers between sections

</td>
<td width="50%" valign="top">

**Technical**

- Zero dependencies — no React, no Tailwind, no build step
- Single-page architecture with smooth scroll navigation
- Responsive down to 320px (mobile-first breakpoints)
- Sticky nav with scroll state detection
- Intersection Observer for performant scroll animations
- `requestAnimationFrame` canvas rendering

</td>
</tr>
</table>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">

### `> structure`

```
portfolio-v2/
├── index.html       # Single-page markup — nav, hero, about, skills,
│                    #   projects, experience, contact, footer
├── style.css        # Complete stylesheet — dark theme, responsive,
│                    #   animations, all component styles
├── script.js        # Typing effect, scroll observer, canvas grid,
│                    #   mobile menu, active nav tracking
└── README.md
```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">

### `> sections`

| Section | Description |
|---------|-------------|
| **Hero** | Typing animation, bio, social links, interactive dot-grid canvas |
| **About** | Bio + terminal widget rendering `cat about.json` with syntax highlighting |
| **Skills** | 6 category cards matching GitHub README layout — AI, Backend, Frontend, DevOps, Data, Systems |
| **Projects** | Featured spotlight (Computer Deconstructed) + project card grid |
| **Experience** | Timeline with 4 roles + education |
| **Contact** | Email CTA, contact info, social links |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">

### `> design system`

```css
/* Colors */
--bg:       #0D1117    /* GitHub dark background      */
--surface:  #161B22    /* Cards, elevated surfaces     */
--border:   #30363D    /* Dividers, card borders       */
--accent:   #0A84FF    /* Primary blue — links, CTAs   */
--text:     #C9D1D9    /* Body text                    */
--text-dim: #8B949E    /* Secondary, muted text        */
--bright:   #F0F6FC    /* Headings, emphasis           */
--green:    #3FB950    /* Terminal prompts, success     */
--red:      #F85149    /* Terminal dots                 */
--yellow:   #D29922    /* Terminal dots                 */

/* Typography */
--mono: 'JetBrains Mono', monospace   /* Headings, code, nav, tags */
--sans: 'Inter', sans-serif           /* Body text, descriptions   */

/* Layout */
--max-width: 1100px
--card-radius: 12px
--base-unit: 8px
```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">

### `> run locally`

```bash
# No build step needed — just open it
open index.html

# Or serve with any static server
npx serve .
python3 -m http.server 3000
```

### `> deploy`

Works on any static hosting with zero configuration:

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --dir=. --prod

# Or drag-and-drop at vercel.com/new or app.netlify.com/drop
```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">

### `> tech choices`

| Decision | Reasoning |
|----------|-----------|
| **Vanilla JS** | No framework overhead for a single-page portfolio. Total JS is ~4KB. |
| **No build step** | Deploy anywhere instantly. No `node_modules`, no bundler config, no CI pipeline needed. |
| **Canvas for background** | GPU-accelerated dot grid with mouse interaction. Degrades gracefully if JS is disabled. |
| **Google Fonts (CDN)** | JetBrains Mono + Inter loaded from Google Fonts for zero self-hosting overhead. |
| **CSS custom properties** | Entire theme is configurable by changing 10 variables. Dark/light mode swap is trivial. |
| **IntersectionObserver** | Scroll animations without scroll event listeners. Better performance, no jank. |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="line" width="100%">

<div align="center">

  ```
  $ echo "Built with vanilla HTML, CSS & JS"
  ```

  <br/>

  **Nimrod Nyongesa** &middot; Nairobi, Kenya

  <a href="https://linkedin.com/in/nimrod-nyongesa-walwe"><img src="https://img.shields.io/badge/%20-0A66C2?style=flat-square&logo=linkedin&logoColor=white" height="22" /></a>&nbsp;&nbsp;
  <a href="https://github.com/nyongesa637"><img src="https://img.shields.io/badge/%20-181717?style=flat-square&logo=github&logoColor=white" height="22" /></a>&nbsp;&nbsp;
  <a href="https://medium.com/@nimrodnyongesa7"><img src="https://img.shields.io/badge/%20-000000?style=flat-square&logo=medium&logoColor=white" height="22" /></a>&nbsp;&nbsp;
  <a href="mailto:nimrodnyongesa7@gmail.com"><img src="https://img.shields.io/badge/%20-EA4335?style=flat-square&logo=gmail&logoColor=white" height="22" /></a>

</div>
