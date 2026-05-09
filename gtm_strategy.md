# Go-To-Market Strategy
## OSM Query Platform

**Document Type:** GTM Strategy  
**Date:** May 2026  
**Status:** Draft

---

## GTM Philosophy

This is a **Product-Led Growth (PLG)** strategy with a bottom-up enterprise motion.

- **Free product** does the top-of-funnel work (awareness, trial, adoption)
- **Individual users** discover and use it → bring it into their organizations
- **Organizations** eventually need admin, branding, and team features → upgrade to paid
- **Enterprise deals** are closed through relationship and demonstration of existing adoption inside the org

We do NOT lead with sales. We lead with an exceptional free product.

---

## Positioning

### Primary Positioning (for marketing)
> "The no-code geographic intelligence platform — explore and understand the world's open map data without writing a single line of code."

### Secondary Positioning (for enterprise/white-label conversations)
> "A configurable, white-label geospatial analytics tool your team can deploy under your own brand, with enterprise controls and AI-powered insights."

### What We Are NOT
- Not a mapping platform (we don't host tiles or maps — we use OSM's)
- Not a GIS editing tool (we query and analyze, not create)
- Not ArcGIS (we're deliberately simpler, cheaper, and open-data-first)

---

## Launch Phases

### Phase 0: Pre-Launch (Now → Month 2)
**Goal:** Reach a demo-worthy v1 and validate with real users before public announcement.

**Actions:**
- [ ] Complete technical roadmap Phases 1–4 (VQB fix + Auth + AI)
- [ ] Define brand name, purchase domain, set up a landing page with email capture
- [ ] Recruit 5–10 **pilot users** from target segments (ideally personal/professional contacts)
  - 2 municipal/government contacts
  - 2 NGO or humanitarian org contacts
  - 1–2 GIS consulting firms
- [ ] Run weekly feedback sessions with pilots → prioritize fixes
- [ ] Set up basic analytics (page views, query runs, session length)

**Success Criteria:**
- 10+ pilot users actively using the tool
- NPS > 40 from pilot group
- At least 2 pilots willing to be a case study or reference

---

### Phase 1: Public Beta (Month 2–4)
**Goal:** Public launch, initial user base, first paying users.

**Channels:**
1. **OSM / Open Data Community** (primary)
   - Post on the [OpenStreetMap Community Forum](https://community.openstreetmap.org/)
   - Submit to the OSM Weekly newsletter (weekly digest read by 10,000+ mappers globally)
   - Post to OSM subreddit (`r/openstreetmap`)
   - Tweet/post on Mastodon to OSM contributors
   - Submit to HOT OSM community (Humanitarian OpenStreetMap Team)

2. **Developer & Tech Communities** (secondary)
   - Product Hunt launch (prepare well — timing matters)
   - Hacker News "Show HN" post
   - Dev.to / Hashnode article: "How I built a no-code Overpass query builder"
   - GitHub: make repo public, keep overpass-turbo attribution, add good README

3. **GIS Professional Communities**
   - GIS StackExchange — answer questions, mention tool where relevant
   - LinkedIn posts targeting urban planners, GIS professionals
   - GeoHipster, GeoMob (GIS community events/newsletters)

**Content for Launch:**
- [ ] Demo video (2–3 min screen recording): build a query, run it, analyze with AI
- [ ] Blog post: "How to explore OpenStreetMap data without writing code"
- [ ] Tutorial: "5 things you can discover about your city in 5 minutes"
- [ ] Landing page with clear value proposition, screenshots, free sign-up CTA

**Success Criteria:**
- 500+ registered users in first 30 days
- 50+ daily active users by end of Phase 1
- First 5–10 paid Pro subscribers (even at discounted beta pricing)
- Mentioned in at least 2 external newsletters or blogs

---

### Phase 2: Growth (Month 4–8)
**Goal:** Sustainable organic growth, first enterprise pilots, content engine running.

**Channels:**

#### Content Marketing (Primary growth channel)
Create content that ranks for search terms GIS professionals and analysts actually search:
- "How to find hospitals near me using OpenStreetMap"
- "OpenStreetMap data analysis tutorial"
- "Free GIS tools for urban planning"
- "Overpass API tutorial for beginners"
- "How to export OSM data to GeoJSON"

Content formats:
- Use-case blog posts (one per segment: municipalities, NGOs, real estate, logistics)
- Tutorial videos on YouTube
- "Map of the week" social posts showing interesting OSM data visualizations made with the tool

#### Community Building
- [ ] Start a Discord or Slack community for users
- [ ] Monthly virtual "map session" — live demo building a query and discussing the results
- [ ] Feature interesting user-created queries/maps on the website

#### Partnership Outreach
| Partner Type | Target | Value Exchange |
|---|---|---|
| HOT OSM | Humanitarian mapping programs | They get a free tool; we get credibility + users |
| University GIS departments | Offer free Pro accounts for students | We get use in courses = trained future users |
| GIS consulting firms | Reseller / implementation partner program | They get white-label; we get enterprise deals |
| Open data portals | Government portals (city, national) | Integration and co-marketing |

**Success Criteria:**
- 5,000+ registered users
- 200+ daily active users
- 3–5 enterprise pilot conversations underway
- Monthly organic traffic growing 20%+ MoM
- MRR: $2,000–5,000 (from Pro subscribers)

---

### Phase 3: Enterprise & White Label (Month 8–18)
**Goal:** Land and expand enterprise/government accounts, build white-label pipeline.

**Motion:**

1. **Inbound from content**: Organizations find us through content → free trial → upgrade request
2. **Bottom-up enterprise**: Individual users at org use Pro → bring to their manager → org signs enterprise deal
3. **Outbound for government**: Targeted outreach to municipal planning departments in target geographies (MENA, Europe, Africa — where OSM data is particularly strong)

**Enterprise Sales Process:**
```
Discovery call (30 min)
    → Custom demo using their geography/use-case
    → Pilot (30–60 day free enterprise trial with 5 users)
    → Contract negotiation
    → Onboarding + CSM check-ins
    → Expansion (more users, more features)
```

**Key enterprise enablers to build:**
- [ ] Tenant admin dashboard (manage users, see usage)
- [ ] SSO / SAML support (large orgs require this)
- [ ] Custom domain setup (automated)
- [ ] Data residency options (for government compliance)
- [ ] SLA documentation and support tier

**Success Criteria:**
- 3+ signed white-label/enterprise contracts
- ARR > $100,000
- NPS > 50 (overall platform)
- 20,000+ total registered users

---

## Geographic Focus

### Tier 1 (Launch): MENA + Europe
- **MENA**: Strong urban planning activity, government digitization push, OSM data quality good in major cities. Your local market — network advantage.
- **Europe**: High OSM data density, strong civic tech culture, GDPR-aware government buyers

### Tier 2 (Growth): Africa + South/Southeast Asia
- HOT OSM community is very active here
- NGO and humanitarian demand is high
- Government digital transformation is accelerating

### Tier 3 (Mature): North America
- Dominated by ArcGIS/Esri — harder to penetrate
- But academic and NGO segment is viable

---

## Key Marketing Messages by Segment

| Segment | Primary Message |
|---|---|
| Urban planners | "Analyze your city's infrastructure in minutes — no GIS license required" |
| NGOs | "Map where services are needed most, using the world's best open data" |
| GIS consultants | "10x your analysis speed. White-label it to your clients." |
| Researchers | "From OSM data to insight in minutes — no OverpassQL knowledge needed" |
| Real estate | "Is there a hospital within 2km? A school? A bus stop? Find out instantly." |

---

## 12-Month GTM Calendar

| Month | Focus | Key Actions |
|---|---|---|
| 1–2 | Pre-launch | Pilots, technical MVP, landing page, email list |
| 3 | Beta launch | Product Hunt, OSM community, HN Show |
| 4 | Content start | First 4 blog posts, demo video, social presence |
| 5–6 | Community | Discord launch, map sessions, university outreach |
| 7–8 | Partnerships | HOT OSM, consulting firm program, GIS conferences |
| 9–10 | Enterprise outreach | Government pilot program, custom demos |
| 11–12 | Case studies | Publish pilot results, double down on what's working |

---

## Budget Allocation (Lean Phase)

| Category | Monthly | Notes |
|---|---|---|
| Infrastructure (Firebase, hosting) | $50–200 | Scales with usage |
| Gemini API | $100–500 | Depends on usage; rate-limited initially |
| Domain + Email + Tools | $50 | |
| Content creation | $0–500 | Self-produced first; freelancers later |
| Ads (optional later) | $0 initially | Organic-first strategy |
| **Total** | **$200–1,200/mo** | Very lean until revenue covers costs |
