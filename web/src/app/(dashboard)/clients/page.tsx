import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const segments = [
  { name: 'VIP Glow Club', members: 142, lifetimeValue: '$2,870', openRate: '64%' },
  { name: 'Inactive > 120 days', members: 389, lifetimeValue: '$1,210', openRate: '41%' },
  { name: 'Body contour prospects', members: 214, lifetimeValue: '$980', openRate: '58%' },
  { name: 'Bridal parties', members: 76, lifetimeValue: '$3,120', openRate: '72%' },
];

const recentImports = [
  { file: 'glowhaus_clients_oct.csv', status: 'Completed', records: 824 },
  { file: 'vip_waitlist.xlsx', status: 'Queued', records: 57 },
];

export default function ClientsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Clients & segmentation</h1>
            <p className="text-sm text-slate-500">
              Import contacts, sync CRMs, and build AI-powered segments in one place.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">Import CSV</Button>
            <Button>Connect CRM</Button>
          </div>
        </div>
        <Card heading="Smart segments" description="Our AI suggests segments based on spend, visits, and treatment history.">
          <div className="grid gap-4 md:grid-cols-2">
            {segments.map((segment) => (
              <div key={segment.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{segment.name}</p>
                <div className="mt-3 space-y-1 text-xs text-slate-500">
                  <p>Members: {segment.members}</p>
                  <p>Average lifetime value: {segment.lifetimeValue}</p>
                  <p>Last campaign open rate: {segment.openRate}</p>
                </div>
                <Button variant="ghost" className="mt-3 px-0 text-brand-600">
                  View recommended campaigns
                </Button>
              </div>
            ))}
          </div>
        </Card>
        <Card heading="Recent imports" description="Track CSV uploads and upcoming integrations.">
          <div className="space-y-3 text-sm text-slate-600">
            {recentImports.map((item) => (
              <div key={item.file} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="font-semibold text-slate-900">{item.file}</p>
                  <p className="text-xs text-slate-500">{item.records} contacts</p>
                </div>
                <span className="text-xs font-semibold text-brand-600">{item.status}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
