import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { upcomingGaps } from '@/lib/mock-data';

export default function CalendarPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Calendar gap detection</h1>
            <p className="text-sm text-slate-500">
              Connect Google Calendar and let our AI forecast openings before they happen.
            </p>
          </div>
          <Button>Connect another calendar</Button>
        </div>
        <Card heading="Gap forecast" description="Proactive recommendations for the next 14 days.">
          <div className="grid gap-4 lg:grid-cols-2">
            {upcomingGaps.map((day) => (
              <div key={day.day} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">{day.day}</p>
                  <span className="text-xs font-semibold text-brand-600">{day.slots.length} opportunities</span>
                </div>
                <div className="mt-3 space-y-3 text-sm text-slate-600">
                  {day.slots.map((slot) => (
                    <div key={`${slot.time}-${slot.service}`} className="rounded-2xl bg-white p-3">
                      <p className="font-semibold text-slate-900">{slot.time}</p>
                      <p>{slot.service}</p>
                      <p className="text-xs text-slate-500">Suggested segment: {slot.idealSegment}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card heading="Performance trends" description="Bookings generated from gap-filling campaigns">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                label: 'Average time to fill',
                value: '6.5 hours',
                subtext: 'Down from 11 hours last month',
              },
              {
                label: 'Campaigns launched automatically',
                value: '32',
                subtext: 'Based on calendar predictions',
              },
              {
                label: 'No-show recovery rate',
                value: '74%',
                subtext: 'Clients rebooked within 2 days',
              },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{metric.value}</p>
                <p className="text-xs text-slate-500">{metric.subtext}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
