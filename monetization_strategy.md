# Monetization Strategy
## OSM Query Platform

**Document Type:** Monetization Strategy  
**Date:** May 2026  
**Status:** Draft

---

## Revenue Model Overview

**Three distinct revenue streams:**

1. **SaaS Subscriptions** — Individual and team accounts (Pro tier)
2. **White-Label Licensing** — Monthly/annual license per tenant organization
3. **Professional Services** — Setup, onboarding, custom integrations (later stage)

We intentionally avoid:
- Per-query pricing (creates anxiety, limits exploration)
- Advertising (damages trust and product quality perception)
- Data selling (we don't own OSM data — and our users must trust us with their query data)

---

## Pricing Tiers

### Tier 0 — Anonymous (No Login)
**Price:** Free forever  
**Purpose:** Zero-friction entry point, awareness, community goodwill

| Feature | Included |
|---|---|
| Visual Query Builder | ✅ |
| Code editor (OverpassQL) | ✅ |
| Map visualization | ✅ |
| Data export (GeoJSON, GPX, KML) | ✅ |
| Saved queries | ❌ (local browser only) |
| AI analysis | ❌ |
| Query history (cloud) | ❌ |
| Daily query limit | 20 runs/day |

---

### Tier 1 — Free Account
**Price:** Free (email required)  
**Purpose:** Capture user identity for analytics and upsell pipeline

| Feature | Included |
|---|---|
| Everything in Anonymous | ✅ |
| Cloud-saved queries (up to 10) | ✅ |
| Query history (30 days) | ✅ |
| AI analysis | ✅ (5 AI sessions/month) |
| Daily query limit | 50 runs/day |
| Export formats | All |
| Community support | ✅ |

---

### Tier 2 — Pro
**Price:** **$19/month** or **$190/year** ($15.83/mo — save 17%)  
**Target:** Power users, freelance analysts, researchers, small NGOs

| Feature | Included |
|---|---|
| Everything in Free | ✅ |
| Unlimited saved queries | ✅ |
| Query history (1 year) | ✅ |
| AI analysis | Unlimited sessions |
| Pre-run result size estimation | ✅ |
| Advanced export (PNG with attribution, bulk export) | ✅ |
| Priority query routing | ✅ (faster Overpass server) |
| Daily query limit | Unlimited |
| Email support | ✅ |

**Rationale for $19:** Below the "decision threshold" for individuals ($20–25 feels like a significant commitment; $19 feels trivial). Comparable to Notion, Figma, or similar productivity tools.

---

### Tier 3 — Team
**Price:** **$49/month** (up to 5 users) or **$9/user/month** (6+ users)  
**Target:** GIS consulting teams, research groups, small agency teams

| Feature | Included |
|---|---|
| Everything in Pro | ✅ |
| Shared saved query library | ✅ |
| Team query history | ✅ |
| User management (admin role) | ✅ |
| Shared presets & templates | ✅ |
| Priority support | ✅ |
| Usage dashboard (team-level) | ✅ |

---

### Tier 4 — Enterprise / White Label
**Price:** Custom — starting at **$500/month** (annual contract)  
**Target:** Municipalities, NGOs, government agencies, GIS firms deploying to their own clients

#### White Label Package Includes:
| Feature | Included |
|---|---|
| Everything in Team (unlimited users) | ✅ |
| Custom subdomain (`maps.yourcity.gov`) | ✅ |
| Custom branding (logo, colors, name) | ✅ |
| Dedicated Overpass API server (optional add-on) | ➕ |
| SSO / SAML integration | ✅ |
| User management admin dashboard | ✅ |
| Query audit log (compliance) | ✅ |
| Custom feature flags | ✅ |
| Dedicated support + SLA (99.9% uptime guarantee) | ✅ |
| Onboarding session (3 hours) | ✅ |
| Quarterly business review | ✅ |

#### Enterprise Pricing Bands:
| Org Size | Monthly (Annual Contract) | Annual |
|---|---|---|
| Small org (< 25 users) | $500/mo | $5,400 |
| Medium org (25–100 users) | $1,200/mo | $13,000 |
| Large org / municipality (100+ users) | $2,500+/mo | $27,000+ |
| Custom Overpass server add-on | +$300–800/mo | — |

> [!NOTE]
> NGO / humanitarian pricing: 40% discount on all tiers with proof of non-profit status. HOT OSM partner organizations may qualify for free enterprise access in exchange for case study rights.

---

## Revenue Projections

### Year 1 (Conservative)
| Source | Volume | ACV | ARR |
|---|---|---|---|
| Pro subscriptions | 80 | $190 | $15,200 |
| Team subscriptions | 15 | $588 | $8,820 |
| Enterprise contracts | 3 | $7,200 | $21,600 |
| **Total ARR** | | | **~$45,600** |

### Year 2 (Moderate Growth)
| Source | Volume | ACV | ARR |
|---|---|---|---|
| Pro subscriptions | 350 | $190 | $66,500 |
| Team subscriptions | 60 | $588 | $35,280 |
| Enterprise contracts | 12 | $10,000 avg | $120,000 |
| **Total ARR** | | | **~$221,780** |

### Year 3 (Scaled)
| Source | Volume | ACV | ARR |
|---|---|---|---|
| Pro subscriptions | 1,000 | $190 | $190,000 |
| Team subscriptions | 150 | $588 | $88,200 |
| Enterprise contracts | 30 | $12,000 avg | $360,000 |
| **Total ARR** | | | **~$638,200** |

> These projections assume: strong OSM community adoption, successful Product Hunt launch, and 2–3 enterprise case studies published by end of Year 1.

---

## Unit Economics

### Cost Per User (Variable)
| Cost Item | Per Active User/Month | Notes |
|---|---|---|
| Firebase hosting + DB | ~$0.10 | Scales with usage |
| Gemini API (Pro users) | ~$0.50–2.00 | Biggest variable cost |
| Overpass API | $0 | Public servers (free tier) |
| Support | ~$0.50 (avg) | Lower for self-serve Pro |
| **Total variable cost** | **~$1–3/user/month** | |

### At $19/month Pro:
- **Gross margin**: ~$16–18/user/month (~85–95%)
- Break-even on customer acquisition cost (CAC): if CAC < $100, payback < 6 months at Pro tier

### At Enterprise $1,200/month:
- Variable cost for enterprise: ~$50–200/month (custom server, support)
- **Gross margin**: ~85%
- CAC for enterprise: $2,000–5,000 (sales time) → payback < 4 months

---

## Feature Packaging Decisions

### Why AI is gated at Free and above (not Anonymous)
- AI is the highest-value differentiator — it's what converts curiosity into "I need to pay for this"
- 5 sessions/month on Free tier is enough to experience the value, not enough for professional use
- Cost is manageable at Free tier (5 sessions × small context = cents per user/month)

### Why query limits exist at Anonymous tier
- Protects Overpass API public servers from abuse
- Creates a natural friction point that motivates registration
- 20 runs/day is plenty for casual exploration

### Why we DON'T gate the Visual Query Builder
- VQB is our core differentiator for non-technical users
- Gating it would kill top-of-funnel adoption
- The VQB drives users to generate and run queries → hit limits → upgrade

### Why we DON'T offer a per-seat Pro plan (only monthly flat)
- Simplicity: one price, one decision
- Removes the "should I add another seat?" anxiety for individual users
- Team tier handles the multi-user case explicitly

---

## Pricing Psychology

- **Anchoring**: Always show Annual pricing first; it makes monthly seem like a fair option
- **Free tier is generous enough to be genuinely useful** — this builds trust and word-of-mouth
- **Enterprise pricing is not public** — "Contact us" allows custom negotiation based on org size and value
- **NGO discount is prominently displayed** — signals our values and attracts the humanitarian segment we want for case studies
- **Annual discount is 17%** — meaningful enough to convert (~2 months free) without destroying MRR

---

## Monetization Rollout Sequence

```
Month 1–3 (Beta)
  → Free + Pro tiers only
  → Stripe integration for Pro billing
  → Basic usage limits enforced

Month 3–6 (Growth)
  → Team tier launched
  → Enterprise "Contact Us" page + manual onboarding
  → First 3–5 enterprise contracts at discounted pilot pricing

Month 6–12 (Scale)
  → White-label admin dashboard self-serve
  → Custom domain automation
  → Enterprise pricing published (starting price visible)
  → NGO discount program formalized
  
Month 12+ (Mature)
  → Professional services offering (custom integrations, training)
  → Reseller / partner program for GIS consulting firms
  → Potential marketplace for user-created query templates
```

---

## Pricing Anti-Patterns to Avoid

| ❌ Don't Do This | Why |
|---|---|
| Charge per query | Creates anxiety; users won't explore freely; OSM community will reject this |
| Freemium that's too restrictive | If Free tier isn't useful, no one will evangelize the product |
| Too many tiers | Decision paralysis; stick to 3 visible tiers (Free / Pro / Enterprise) |
| Grandfathering complexity | Don't promise "beta pricing locked forever" — set expectations upfront |
| Annual-only plans | Some users need monthly flexibility; offer both |
| Per-AI-message pricing | Micro-transactions kill engagement; use session or monthly limits |

---

## Payment Infrastructure

- **Billing**: Stripe (simplest, best docs, supports subscriptions + one-time + invoicing)
- **Tax compliance**: Stripe Tax for automatic VAT/sales tax handling globally
- **Invoicing**: Stripe for Pro/Team; manual PDF invoices for Enterprise contracts
- **Currency**: USD primary; EUR secondary (auto-converted by Stripe)
- **Enterprise contracts**: Annual invoicing via bank transfer preferred by government buyers
