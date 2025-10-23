import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { subscriptionPlans } from '@/lib/constants';

const highlights = [
  'AI-built SMS, email, and social campaigns in three clicks',
  'Calendar gap detection that auto-fills unbooked hours',
  'HIPAA-ready infrastructure with GDPR expansion baked in',
];

export default function MarketingHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16 lg:px-12">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700">
              <Sparkles className="h-4 w-4" />
              Built for med spa operators
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Fill every empty treatment slot with AI-powered revenue automation.
            </h1>
            <p className="text-lg text-slate-600">
              Launch ready-to-send SMS, email, and Instagram campaigns tuned for luxury aesthetics
              without touching a marketing agency or hopping between CRMs.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-700"
              >
                Start 14-day free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:text-brand-900"
              >
                Preview the dashboard
              </Link>
            </div>
            <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-white/80 p-8 shadow-card">
            <div className="absolute inset-x-10 inset-y-6 rounded-full bg-brand-100/40 blur-3xl" />
            <div className="relative space-y-6">
              <div className="rounded-2xl border border-white/50 bg-white p-6 shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
                  Real-time gap alert
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  4 unfilled VIP slots this week
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  We recommend a Luxury-tone SMS to your Glow Club members with add-on upsell bundles.
                </p>
                <div className="mt-4 grid gap-3 text-sm">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="font-semibold text-slate-900">HydraFacial · Thursday 2:00 PM</p>
                    <p className="text-slate-500">Segment: VIP maintenance · Fill with SMS + email reminder</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="font-semibold text-slate-900">Microneedling · Friday 4:30 PM</p>
                    <p className="text-slate-500">Segment: Post-event list · Suggest 2-for-1 package</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/50 bg-white p-6 shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">Campaign preview</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">Winter Botox Party</h3>
                <p className="mt-2 text-sm text-slate-600">
                  “Wrap up the year glowing. RSVP for our private Botox party with sparkling mocktails and
                  luxe gift bags.”
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-brand-700">
                  <span className="rounded-full bg-brand-100 px-3 py-1">SMS</span>
                  <span className="rounded-full bg-brand-100 px-3 py-1">Email</span>
                  <span className="rounded-full bg-brand-100 px-3 py-1">Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-slate-900">Tiered subscriptions that scale with you</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {subscriptionPlans.map((plan) => (
              <div key={plan.name} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                  <span className="text-3xl font-bold text-brand-600">${plan.price}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-brand-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-700"
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Designed for HIPAA-ready, GDPR-friendly operations</h2>
            <p className="text-slate-600">
              Encryption, audit logs, and role-based access controls keep PHI protected. EU data residency
              options and consent capture prepare you for UK expansion.
            </p>
            <div className="space-y-4">
              {[
                'HIPAA-compliant data retention with Firebase, Twilio, and SendGrid BAAs',
                'Granular roles for providers, marketers, and owners',
                'Real-time ROI dashboard with manual booking + revenue capture',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-500" />
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">MVP roadmap</h3>
            <ol className="mt-4 space-y-4 text-sm text-slate-600">
              <li>
                <strong className="text-slate-900">Weeks 1-4:</strong> Auth, Google OAuth, Stripe tiers, and foundational HIPAA controls
              </li>
              <li>
                <strong className="text-slate-900">Weeks 5-8:</strong> Business setup wizard, Google Calendar sync, CSV imports
              </li>
              <li>
                <strong className="text-slate-900">Weeks 9-12:</strong> AI campaign studio with tone presets and segmentation
              </li>
              <li>
                <strong className="text-slate-900">Weeks 13-16:</strong> Gap detection intelligence and ROI dashboard
              </li>
              <li>
                <strong className="text-slate-900">Weeks 17-20:</strong> Admin panel, QA, GDPR uplift, Vercel launch
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
