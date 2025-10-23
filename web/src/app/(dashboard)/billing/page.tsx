import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { subscriptionPlans } from '@/lib/constants';

export default function BillingPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Billing & usage</h1>
            <p className="text-sm text-slate-500">
              Manage Stripe subscriptions, usage add-ons, and invoices.
            </p>
          </div>
          <Button>Open Stripe customer portal</Button>
        </div>
        <Card heading="Current plan" description="You are on the Pro plan billed monthly.">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Pro</p>
              <p>3 seats · 5,000 SMS/email credits · 50 social posts</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold text-slate-900">$249/mo</p>
              <p>Next invoice: Nov 1</p>
            </div>
          </div>
        </Card>
        <Card heading="Upgrade or downgrade" description="Switch plans instantly. Proration handled automatically.">
          <div className="grid gap-4 md:grid-cols-3">
            {subscriptionPlans.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{plan.name}</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">${plan.price}/mo</p>
                <ul className="mt-3 space-y-1 text-xs text-slate-500">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <Button variant="ghost" className="mt-3 px-0 text-brand-600">
                  {plan.name === 'Pro' ? 'Current plan' : 'Select plan'}
                </Button>
              </div>
            ))}
          </div>
        </Card>
        <Card heading="Usage breakdown" description="Track messaging volume and overages.">
          <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">SMS credits</p>
              <p className="text-2xl font-semibold text-brand-600">4,120 / 5,000</p>
              <p className="text-xs">Auto top-up at 80% usage</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Email sends</p>
              <p className="text-2xl font-semibold text-brand-600">3,780 / 5,000</p>
              <p className="text-xs">Deliverability score: 99%</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Instagram posts</p>
              <p className="text-2xl font-semibold text-brand-600">28 / 50</p>
              <p className="text-xs">Meta Graph API linked</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
