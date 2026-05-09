# Business Brief
## OSM Query Platform — Working Title: *MapQuery* (or your preferred brand name)

**Document Type:** Internal Business Brief  
**Date:** May 2026  
**Status:** Draft for Review

---

## Executive Summary

We are building a **no-code geospatial intelligence platform** on top of OpenStreetMap — the world's largest open geographic database. Our product transforms complex geographic query capabilities (historically available only to GIS specialists and developers) into an accessible, AI-augmented interface for analysts, planners, and decision-makers at organizations of all sizes.

The business model combines a **free public tier** (to drive adoption and brand awareness) with **paid SaaS and white-label licensing** targeting municipalities, NGOs, and enterprise organizations who need branded, controlled, and analytics-backed access to geospatial intelligence.

---

## The Problem

OpenStreetMap contains **billions of geographic data points** — streets, hospitals, restaurants, infrastructure, natural features — updated continuously by a global community. This data is freely available through the Overpass API but is practically inaccessible without:

- Knowledge of the Overpass Query Language (OverpassQL) — a niche technical skill
- Understanding of GIS concepts (nodes, ways, relations, geometry types)
- Infrastructure to run and visualize queries
- The ability to interpret raw geographic data as actionable insights

**The result**: Organizations that would greatly benefit from open geographic data — urban planners, NGOs, logistics companies, academic researchers, government agencies — either pay for expensive proprietary GIS tools (ArcGIS, Esri) or don't use the data at all.

---

## Our Solution

A platform with three layers:

### Layer 1: Accessible Query Interface (Visual Query Builder)
A form-driven, no-code interface that lets non-technical users build precise geographic queries through dropdowns, location selectors, and condition builders — automatically generating the underlying OverpassQL without the user needing to see or understand it.

### Layer 2: AI-Augmented Insights (Gemini Integration)
After visualizing data on the map, users can engage in a natural language conversation with an AI analyst that contextualizes the results: identifying patterns, suggesting follow-up queries, comparing data to known benchmarks, and generating plain-language summaries suitable for reports or presentations.

### Layer 3: Controlled, Branded Platform (White Label / SaaS)
Enterprise and government customers receive a fully branded deployment with user management, activity logging, permission control, custom domain, and optionally a private Overpass API server for proprietary data overlays.

---

## Market Opportunity

### Total Addressable Market (TAM)
The global GIS software market was valued at **~$12.5B in 2023** and is growing at ~12% CAGR. The open geospatial tools segment (tools built on OSM, open data) is a fast-growing subset.

### Serviceable Addressable Market (SAM)
Organizations that:
- Currently use or want to use OpenStreetMap data operationally
- Cannot afford or don't want Esri/ArcGIS ($1,500–$10,000+/seat/year)
- Have non-technical users who need access to geographic analysis

Estimate: **50,000–200,000 organizations globally** across our target segments.

### Serviceable Obtainable Market (SOM) — Year 1–2
- 500–2,000 paid individual/team accounts (Pro tier)
- 10–50 white-label/enterprise contracts
- Target ARR: **$150K–$600K by end of Year 2**

---

## Target Customer Segments

### Segment 1: Municipal & Government Bodies ⭐ Highest value
- City planning departments, infrastructure authorities, transport agencies
- Pain: Need geographic analysis without expensive GIS licenses
- Buyer: Department head / IT procurement
- Value: Compliance, data sovereignty, branded internal tool
- ACV: $6,000–$24,000/year

### Segment 2: NGOs & Humanitarian Organizations
- Development organizations, health programs, disaster response teams
- Pain: Need to map coverage gaps, facilities, and infrastructure in developing regions
- Buyer: Program manager / country director
- Value: Affordable, works in data-scarce regions (OSM is best data in many countries)
- ACV: $2,400–$12,000/year (grant-funded, needs flexible pricing)

### Segment 3: Urban Planning & GIS Consulting Firms
- Firms that sell geographic analysis as a service to their clients
- Pain: Need to produce deliverables faster, without manually writing queries
- Buyer: Principal consultant / practice lead
- Value: Speed, reusability, white-labeling to their own clients
- ACV: $3,600–$18,000/year

### Segment 4: Academic & Research Institutions
- Universities, research groups, think tanks
- Pain: Students and researchers need OSM data without developer skills
- Buyer: Professor / department / IT
- Value: Low-friction data access, AI-assisted interpretation
- ACV: $1,200–$6,000/year (education pricing)

### Segment 5: Real Estate & Logistics (Emerging)
- Property developers, logistics/routing companies, retail site selection firms
- Pain: Need proximity analysis (hospitals near site, competitors in area, road access)
- Buyer: Analyst / operations manager
- Value: Speed to insight, export to GeoJSON/KML for their own tools
- ACV: $2,400–$12,000/year

---

## Competitive Landscape

| Competitor | Strength | Weakness | Our Advantage |
|---|---|---|---|
| **Overpass-turbo.eu** (original) | Free, well-known, developer community | Code-only, no AI, no auth, no business model | Non-tech UX, AI layer, commercial offering |
| **Esri / ArcGIS** | Enterprise-grade, full GIS suite | Expensive ($1,500–10K/seat), complex, proprietary data | Affordable, OSM-based, no install |
| **QGIS + QuickOSM** | Free, powerful | Desktop-only, still requires technical skills | Browser-based, no install, collaborative |
| **Mapbox / Google Maps Platform** | Polished APIs | Paid per tile/request, no open query layer | Open data (no per-query cost), AI insights |
| **Felt.com** | Modern map collaboration | No Overpass integration, not open data focused | OSM depth, VQB, AI analysis |
| **Placemark** | GIS editor in browser | Editing focused, not query/analysis focused | Query + analysis + AI as core use case |

**Key differentiation**: We are the only platform combining **no-code OSM querying + AI-powered insights + white-label commercial delivery**.

---

## Product Vision (12–18 Months)

```
Today (v0.1)              →   v1.0 (3 months)        →   v2.0 (12 months)
─────────────────────────────────────────────────────────────────────────
VQB with bugs             →   VQB fixed + robust      →   Full platform
No auth                   →   Firebase auth            →   Multi-tenant
No AI                     →   Gemini chat panel        →   AI query builder
No business model         →   Free + Pro tiers         →   White label ready
No analytics              →   Query logging            →   Admin dashboard
```

---

## Key Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| OSM data quality issues in some regions | Medium | Medium | Educate users, allow private data overlay |
| Overpass API public servers go down | Medium | High | Allow custom server config; eventually own a server |
| Gemini API cost at scale | Low (early) | High (later) | Per-user rate limits; pass cost to Pro tier |
| Original project (MIT) forks & copies us | Medium | Medium | Differentiate on service, brand, and AI; not just code |
| Enterprise sales cycle is long | High | Medium | Start with self-serve Pro to generate revenue while pursuing enterprise |
| Low willingness to pay for OSM tools (community ethos) | Medium | Medium | Target organizations, not individual OSM mappers |

---

## Team Requirements (Current Gaps)

| Role | Priority | Notes |
|---|---|---|
| Full-stack developer | ✅ (you) | Core product |
| Product designer | High | UX is a core differentiator — need someone visual |
| Business development / sales | Medium (later) | For enterprise/white-label sales |
| DevOps / infrastructure | Low (early) | Firebase covers this initially |

---

## Immediate Next Steps

1. Complete the technical roadmap (Phases 1–4) to reach a demo-ready v1
2. Identify 3–5 pilot organizations for early access (ideally 1 from each segment)
3. Define the brand name and domain (not "overpass-turbo" — needs its own identity)
4. Set up a landing page to capture interest before launch
5. Define pricing tiers concretely (see Monetization Strategy document)
