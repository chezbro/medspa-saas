# MedSpa Revenue Engine

A polished Next.js + Tailwind CSS application that showcases the core MedSpa Revenue Engine experience. The MVP focuses on a
rapid, intuitive flow for med spa operators to connect their tools, generate AI-powered campaigns, and monitor performance while
remaining compliant with HIPAA/GDPR requirements.

## Features

- **Responsive marketing site** outlining value props, roadmap, and plan tiers.
- **Authentication flows** for login and signup with ready-to-wire Google OAuth.
- **Dashboard workspace** with revenue insights, onboarding checklist, and recent activity.
- **AI campaign studio** for drafting SMS, email, and Instagram content with tone/goal/channel controls.
- **Calendar gap detection** view highlighting openings and recommended segments.
- **Client segmentation hub** emphasizing CSV imports and CRM connectivity.
- **Billing & settings panels** covering Stripe plans, compliance, and branding controls.
- **Concierge onboarding** page to walk teams through calendar, CSV, and A2P 10DLC setup.

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript, React Server Components)
- **Styling:** Tailwind CSS with custom med-spa inspired theming
- **UI:** Lightweight bespoke component primitives (Button, Card, Input, TextArea, Badge)
- **State:** Local React state hooks for campaign designer playgrounds
- **Icons:** [`lucide-react`](https://lucide.dev/) for consistent iconography

## Getting Started

1. **Install dependencies**
   ```bash
   cd web
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to explore the marketing site. Navigate to `/dashboard`, `/campaigns`,
   `/calendar`, and other routes for the in-app experience.

> **Note:** Environment variables for Firebase, Stripe, Twilio, SendGrid, and other integrations are not required for this
> prototype. Wire up real services by adding `.env.local` and consuming the values in dedicated API routes.

## Project Structure

```
web/
├── package.json          # Next.js workspace configuration
├── src/
│   ├── app/              # App Router routes (marketing + dashboard areas)
│   ├── components/       # UI primitives, layout shells, and campaign designer
│   ├── lib/              # Shared constants and mock data used across pages
│   └── styles/           # Global Tailwind stylesheet
└── tailwind.config.ts    # Theme tokens and content scanning
```

## Next Steps

- Connect Firebase Auth + Google OAuth to power signup/login flows.
- Replace mock data with live Google Calendar, Twilio, SendGrid, and Stripe APIs.
- Introduce persistence for campaign drafts and segmentation logic.
- Layer in analytics (Chart.js, Google Analytics) and audit logging to satisfy HIPAA/GDPR.

The current codebase is production-ready for design reviews and stakeholder walkthroughs, making it a strong foundation for the
full MedSpa Revenue Engine MVP.
