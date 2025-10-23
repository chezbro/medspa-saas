import { DashboardShell } from '@/components/layout/dashboard-shell';
import { CampaignDesigner } from '@/components/campaign/campaign-designer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CampaignsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">AI campaign studio</h1>
            <p className="text-sm text-slate-500">
              Launch A/B tested SMS, email, and social campaigns in minutes.
            </p>
          </div>
          <Button>Preview customer journey</Button>
        </div>
        <CampaignDesigner />
        <Card heading="Compliance checklist" description="Keep messaging compliant and high-performing.">
          <div className="grid gap-4 md:grid-cols-3">
            {[ 
              {
                title: 'A2P 10DLC status',
                detail: 'Brand verified, campaign approved',
                action: 'View registration',
              },
              {
                title: 'Opt-in coverage',
                detail: '98% of SMS list has active consent',
                action: 'Manage consent flows',
              },
              {
                title: 'Image licenses',
                detail: 'All Canva assets ready for social use',
                action: 'Open media library',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.detail}</p>
                <Button variant="ghost" className="mt-3 px-0 text-brand-600">
                  {item.action}
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
