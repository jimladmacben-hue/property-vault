# Property Vault 🏠

Nigeria's most trusted property discovery and investment platform — connecting verified buyers, investors, and agents.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Font | Nunito Sans (`next/font/google`) |
| Maps | Leaflet (vanilla via `useEffect`) |
| Icons | Lucide React + inline SVGs |
| Deployment | Vercel |

---

## Getting Started

```bash
npm install
npm install lucide-react   # required — not auto-installed
npm run dev                # http://localhost:3000
```

---

## Project Structure

```
app/
├── page.tsx                    # Homepage
├── about/page.tsx
├── contact/page.tsx
├── invest/page.tsx
├── agents/page.tsx
├── properties/page.tsx
├── properties/[id]/page.tsx
├── list-property/page.tsx
├── dashboard/                  # Agent Dashboard
│   ├── layout.tsx
│   ├── page.tsx                # Overview
│   ├── listings/page.tsx
│   ├── enquiries/page.tsx
│   ├── analytics/page.tsx
│   ├── reviews/page.tsx
│   ├── subscription/page.tsx
│   └── settings/page.tsx
└── buyer-dashboard/            # Buyer Dashboard
    ├── layout.tsx
    ├── page.tsx                # Overview
    ├── saved/page.tsx
    ├── alerts/page.tsx
    └── enquiries/page.tsx

components/
├── layout/         # Navbar, Footer
├── home/           # Hero, WhyChooseUs, FeaturedProperties, Testimonials, Pricing...
├── about/          # AboutHero, OurStory, OurMission, WhatWeOffer, AboutCTA
├── contact/        # ContactHero, ContactHelp, ContactMap, ContactFAQ
├── invest/         # InvestHero, WhyChooseUs, FeaturedInvestments, MarketInsights, DiasporaSection
├── agents/         # AgentsHero, FeaturedAgentsSection, AllVerifiedAgents, AgentCTA
├── properties/     # PropertiesHero, PropertiesFilter, PropertiesGrid, PropertyMap...
├── list-property/  # ListPropertyForm + steps/ (GetStarted, Step1–4)
├── dashboard/      # DashboardSidebar
└── buyer-dashboard/ # BuyerDashboardSidebar

public/images/      # All image assets (see Image Assets section below)
```

---

## Design System

### Colours
| Token | Hex |
|---|---|
| Primary Navy | `#1a1f3c` |
| Accent Amber | `#F5A623` |
| Background Cream | `#f5f5f0` |
| Dark Sidebar | `#080d28` |

### Key Patterns
- **Cards:** `rounded-2xl shadow-sm`
- **Buttons:** `rounded-full` pills
- **Inputs:** `rounded-xl border-gray-200 focus:border-[#F5A623]`
- **Section labels:** amber line + `text-xs font-bold tracking-widest uppercase text-[#F5A623]`

---

## Important Rules

### ⚠️ Leaflet Maps
Always use vanilla Leaflet — **never** `react-leaflet`. Every map component must:
1. Be loaded with `dynamic(() => import(...), { ssr: false })` at the parent
2. Use `useEffect` + `L.map()` inside a `"use client"` component
3. Load Leaflet CSS via `<link>` tag inside the component
4. Clean up with `map.remove()` on unmount

```tsx
// Parent
const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

// MapComponent.tsx
"use client";
useEffect(() => {
  import("leaflet").then((L) => {
    const map = L.map(mapRef.current!, { center: [lat, lng], zoom: 12 });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    mapInstanceRef.current = map;
  });
  return () => { (mapInstanceRef.current as any)?.remove(); };
}, []);
```

### Navbar
- Absolute positioned — does **not** push content
- Standard pages need `pt-20` on first section
- Full-viewport heroes need `pt-28`–`pt-32`
- **Dashboard pages** must never include Navbar or Footer

### Component Rules
- One component per file
- `@/` aliases for all imports — no relative `../../` paths
- Tailwind only — no CSS modules or styled-components
- `"use client"` required for any hooks, event handlers, or browser APIs

---

## Pages Overview

### Public Pages

| Page | Route | Key Sections |
|---|---|---|
| Homepage | `/` | Hero, WhyChooseUs, FeaturedProperties, BrowseByCity, LatestListings, FeaturedAgents, Testimonials, Pricing |
| About | `/about` | Hero, OurStory + stats, OurMission, WhatWeOffer, Testimonials, CTA |
| Contact | `/contact` | Hero, Contact form + Leaflet map + business hours, FAQ accordion |
| Invest | `/invest` | Full-viewport hero, 4 value cards, investment listings, market insights chart, diaspora guide |
| Agents | `/agents` | Hero + search bar, featured cards, filterable agent grid, CTA |
| Properties | `/properties` | Filter bar, listing cards, Leaflet map |
| Property Detail | `/properties/[id]` | Gallery, specs, amenities, map, agent card |
| List Property | `/list-property` | 4-step form (GetStarted → Info → Location → Media → Review) |

### List Property Form

`ListPropertyForm.tsx` manages all step state. Steps communicate via exported TypeScript interfaces.

| Step | Component | Fields |
|---|---|---|
| 0 | `GetStarted` | Listing type |
| 1 | `Step1` | Purpose, headline, property type |
| 2 | `Step2` | State, LGA, city, address, landmark |
| 3 | `Step3` | Photos (min 3, drag-drop, cover photo) |
| 4 | `Step4` | Full review + submit |

---

## Dashboards

### Agent Dashboard (`/dashboard`)

Full sidebar layout — no Navbar/Footer. Sidebar has active state highlighting via `usePathname`.

| Page | Features |
|---|---|
| Overview | Stat cards, alert banner, recent enquiries, viewing schedule |
| My Listings | Search + filters + sortable table + actions menu |
| Enquiries | Split-pane messenger with quick replies |
| Analytics | Period toggle, per-listing bars, Views vs Enquiries chart |
| Reviews | Star breakdown, sort, agent response blocks |
| Subscription | Plan comparison cards, billing history, payment method |
| Settings | 6 tabs: Profile, Notifications, Verification, Areas, Security, Danger zone |

### Buyer Dashboard (`/buyer-dashboard`)

| Page | Features |
|---|---|
| Overview | Agent reply alerts, stat cards, saved properties panel, search alert toggles |
| Saved Properties | Filter + sort, 3-col grid, price drop badges, remove functionality |
| Search Alerts | Alert rows with tag pills, pause/resume toggles, new match count, matches grid |
| My Enquiries | *(pending)* |
| Profile | *(pending)* |
| Settings | *(pending)* |

---

## Image Assets

All images live in `public/images/` and are referenced as `/images/filename.jpg`.

| File | Used In |
|---|---|
| `logo.png` | Navbar |
| `about-hero.jpg` | About + Contact hero |
| `about-story-1.jpg` / `about-story-2.jpg` | OurStory stacked cards |
| `about-mission.jpg` | OurMission |
| `about-offer.jpg` | WhatWeOffer |
| `about-cta.jpg` | AboutCTA banner |
| `agents-hero.jpg` | AgentsHero |
| `agents-cta.jpg` | AgentCTA banner |
| `invest-hero.jpg` | InvestHero |
| `invest-verified/roi/agents/secure.jpg` | InvestWhyChooseUs cards |
| `invest-prop-1/2/3.jpg` | Investment cards + dashboards |
| `diaspora-video-thumb.jpg` | DiasporaSection video |
| `agent-adewale/chidi/fatima.jpg` | Agent cards + sidebar |
| `investor-avatar-1` to `4.jpg` | InvestHero stacked avatars |
| `buyer-tunde.jpg` | Buyer dashboard sidebar |

---

## Pending Work

- [ ] `buyer-dashboard/enquiries` — buyer-side messaging page
- [ ] `buyer-dashboard/profile` — buyer profile editor
- [ ] `buyer-dashboard/settings` — buyer settings page
- [ ] Authentication — login/signup + route protection for dashboards
- [ ] Backend API integration — listings, enquiries, alerts, profiles
- [ ] Form submission — List Property form, Contact form wire-up
- [ ] Search functionality — live property search across the platform

---

## Deployment

Auto-deploys to Vercel on push to `main`.
No environment variables required yet (backend integration pending).

---

*Built with Next.js 15 · TypeScript · Tailwind CSS · Deployed on Vercel*
