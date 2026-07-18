# Cipher SMC Website — Design Ideas

## Three Stylistic Approaches

### Approach A — "Terminal Alpha"
Dark, code-meets-trading aesthetic. Monospace accents, neon green on deep charcoal, matrix-inspired grid lines. Feels like a Bloomberg terminal crossed with a hacker's workstation.
**Probability: 0.04**

### Approach B — "Institutional Edge" ✅ CHOSEN
A premium, dark-mode financial brand identity. Deep navy/slate backgrounds, electric cyan-green accents (matching the brand's existing green), sharp typography mixing a bold display font with a clean sans-serif. Feels like a hedge fund's public-facing site — authoritative, precise, and modern.
**Probability: 0.07**

### Approach C — "Crypto Neon Pulse"
Vibrant gradient-heavy design with purple-to-cyan gradients, glowing card borders, and heavy use of glassmorphism. High energy, crypto-native aesthetic.
**Probability: 0.03**

---

## Chosen Approach: "Institutional Edge"

### Design Movement
Dark-mode Financial Premium — inspired by Bloomberg Terminal UI, Binance Pro, and modern fintech brands like Robinhood and Coinbase Pro.

### Core Principles
1. **Dark authority** — deep slate/navy backgrounds signal professionalism and reduce eye strain for traders
2. **Precision typography** — sharp, deliberate type hierarchy with no decorative fluff
3. **Signal over noise** — content-first layout; every element earns its place
4. **Kinetic data energy** — subtle animations that feel like live market data, not decorative motion

### Color Philosophy
- **Background**: Deep slate `#0a0f1e` (near-black navy) — evokes trading terminal depth
- **Surface**: `#111827` / `#1a2235` — card and section backgrounds
- **Primary Accent**: Electric Cyan-Green `#00d4aa` — matches existing Cipher SMC brand green
- **Secondary Accent**: Bright Cyan `#00b4d8` — for links and secondary highlights
- **Text Primary**: `#f0f4ff` — off-white with slight blue tint
- **Text Secondary**: `#8892a4` — muted slate for subtitles
- **Border**: `rgba(0, 212, 170, 0.15)` — subtle brand-colored borders

### Layout Paradigm
Asymmetric column-based layout. Hero section uses a split composition (text left, avatar/visual right). Sections alternate between full-bleed and contained widths. Navigation is a slim top bar with transparent-to-solid scroll behavior.

### Signature Elements
1. **Cipher Bull Mascot** — the 3D bull character appears prominently in hero and as favicon
2. **Trading Motif Lines** — subtle candlestick/chart line decorations as section dividers
3. **Glowing Accent Cards** — cards with a faint cyan-green glow on hover, like lit trading screens

### Interaction Philosophy
Interactions feel precise and intentional — like executing a trade. Hover states are immediate (no delay), transitions are snappy (150-200ms), and scroll-triggered reveals feel like data loading in.

### Animation
- Hero text: staggered fade-in-up (30ms delay per word group)
- Cards: subtle scale(1.02) on hover with glow intensification
- Nav: smooth background transition from transparent to dark on scroll
- Section reveals: fade-in-up with IntersectionObserver, 60ms stagger per item
- No looping animations except a subtle pulse on the "live" indicator

### Typography System
- **Display/Headlines**: `Space Grotesk` — geometric, technical, bold
- **Body**: `Inter` — clean, readable at small sizes
- **Monospace/Code**: `JetBrains Mono` — for ticker symbols, code snippets
- H1: 64px / 700 weight / Space Grotesk
- H2: 40px / 600 weight / Space Grotesk
- H3: 24px / 600 weight / Space Grotesk
- Body: 16px / 400 weight / Inter
- Caption: 13px / 400 weight / Inter, muted color

### Brand Essence
**Cipher SMC** — Institutional-grade market intelligence for the independent trader. Precision over prediction.

**Personality**: Authoritative · Precise · Relentless

### Brand Voice
Headlines sound like a seasoned trader who has seen every cycle — confident, direct, no hype.
- "Master the structure. Trade the edge."
- "Where Smart Money meets sharper execution."
- No "Welcome to our website" or "Get started today" filler.

### Wordmark & Logo
The Cipher SMC bull mascot (3D bull in hoodie with glasses) serves as the primary brand icon. The wordmark uses Space Grotesk Bold with "CIPHER" in white and "SMC" in the brand cyan-green.

### Signature Brand Color
**Electric Cyan-Green `#00d4aa`** — the unmistakable Cipher SMC accent, used in the existing banner and mascot hoodie.

---

## Style Decisions

### Style Review Amendments (Applied)
- Section headlines must read like concise trader assertions — every major heading should imply market structure, execution, intelligence, or edge.
- Cards use one trading-terminal panel language: deep slate surfaces, thin cyan-green rules, monospace tags/numerals, minimal glow, and precise data-panel framing.
- Candlestick, order-flow, or market-structure linework is the recurring signature motif across every major section as subtle structural texture or dividers.
- Platform colors (YouTube red, GitHub grey) are secondary; Cipher SMC's electric cyan-green remains the primary CTA and emphasis color throughout.
- Community/links sections must have editorial hierarchy — featured panels, not equal-weight tile grids.
- Use dark theme (`defaultTheme="dark"`) throughout
- Avatar/mascot always appears with a subtle glow ring in brand cyan-green
- All CTA buttons use the brand cyan-green with dark text
- Section backgrounds alternate between `#0a0f1e` and `#111827`
- Candlestick chart decorative SVG used as hero background texture
