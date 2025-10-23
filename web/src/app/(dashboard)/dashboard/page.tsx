import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { performanceMetrics, upcomingGaps, onboardingTasks } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <DashboardShell>
      <section className="space-y-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Revenue overview</h1>
          <p className="text-sm text-slate-500">
            Track AI-driven campaign performance and spot opportunities to fill your calendar.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {performanceMetrics.map((metric) => (
            <Card key={metric.label} className="bg-white">
              <div className="space-y-3">
                <p className="text-sm text-slate-500">{metric.label}</p>
                <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                <Badge tone="success" className="w-fit">{metric.change}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card
          heading="Upcoming calendar gaps"
          description="Our AI suggests the perfect tone, channel mix, and segment to fill each slot."
        >
          <div className="space-y-4">
            {upcomingGaps.map((day) => (
              <div key={day.day} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">{day.day}</h3>
                  <Badge>{day.slots.length} open slots</Badge>
                </div>
                <div className="mt-3 space-y-3 text-sm text-slate-600">
                  {day.slots.map((slot) => (
                    <div key={`${slot.time}-${slot.service}`} className="rounded-2xl bg-white p-3">
                      <p className="font-semibold text-slate-900">{slot.time}</p>
                      <p>{slot.service}</p>
                      <p className="text-xs text-slate-500">Recommended segment: {slot.idealSegment}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card
          heading="Go-live checklist"
          description="Complete onboarding steps to unlock full automation."
        >
          <div className="space-y-4">
            {onboardingTasks.map((task) => (
              <div key={task.id} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{task.title}</p>
                  <p className="text-xs text-slate-500">{task.description}</p>
                </div>
                <Badge tone={task.status === 'completed' ? 'success' : task.status === 'in-progress' ? 'warning' : 'default'}>
                  {task.status.replace('-', ' ')}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card heading="Recent activity" description="Campaigns and automations launched in the last 7 days.">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: 'GlowHaus VIP Flash Sale',
              detail: 'Luxury tone SMS + email to 134 VIP clients',
              metric: '18 bookings · $7,200 revenue',
            },
            {
              title: 'Dormant client reactivation',
              detail: 'Friendly tone SMS to 426 inactive clients',
              metric: '62 replies · 21 bookings',
            },
            {
              title: 'Winter Botox Party',
              detail: 'Instagram + Email with Canva visuals',
              metric: '132 RSVPs · Sold out',
            },
            {
              title: 'Microneedling bundle upsell',
              detail: 'Chill tone SMS drip',
              metric: '12 packages sold · $4,800 revenue',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="text-xs text-slate-500">{item.detail}</p>
              <p className="mt-3 text-sm text-brand-700">{item.metric}</p>
            </div>
          ))}
        </div>
      </Card>
    </DashboardShell>
  );
}
