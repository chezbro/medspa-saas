import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const steps = [
  {
    title: 'Connect Google Calendar',
    description: 'We scan for empty slots and sync bookings automatically.',
    action: 'Launch OAuth flow',
  },
  {
    title: 'Upload client CSV',
    description: 'Import contacts with tags, consent status, and spend history.',
    action: 'Select file',
  },
  {
    title: 'Complete A2P 10DLC',
    description: 'Register your brand and campaigns directly in-app.',
    action: 'Start verification',
  },
  {
    title: 'Customize branding',
    description: 'Upload your logo, fonts, and Instagram presets.',
    action: 'Open branding settings',
  },
];

export default function SetupPage() {
  return (
    <DashboardShell>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card heading="White-glove onboarding" description="We guide you through setup in under 20 minutes.">
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.title} className="flex items-start justify-between gap-4 rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                  <p className="text-xs text-slate-500">{step.description}</p>
                </div>
                <Button variant="ghost" className="px-0 text-brand-600">
                  {step.action}
                </Button>
              </div>
            ))}
          </div>
        </Card>
        <Card heading="Schedule a concierge session" description="Prefer a guided tour? Book time with our success team.">
          <form className="space-y-4">
            <Input label="Full name" placeholder="Maya Chen" required />
            <Input label="Business email" type="email" placeholder="maya@glowhaus.com" required />
            <Input label="Preferred date" type="date" required />
            <Input label="Preferred time" type="time" required />
            <Button type="submit">Book onboarding call</Button>
          </form>
        </Card>
      </div>
    </DashboardShell>
  );
}
