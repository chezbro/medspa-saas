import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Workspace settings</h1>
          <p className="text-sm text-slate-500">
            Configure branding, compliance, and integrations across your med spa locations.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card heading="Brand details" description="Update what appears in campaigns and landing pages.">
            <form className="space-y-4">
              <Input label="Business name" defaultValue="GlowHaus MedSpa" />
              <Input label="Reply-to email" defaultValue="hello@glowhaus.com" />
              <Input label="Primary phone" defaultValue="(310) 555-0199" />
              <Button type="submit">Save changes</Button>
            </form>
          </Card>
          <Card heading="Compliance" description="Manage HIPAA + GDPR controls and audit logs.">
            <div className="space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">PHI encryption</p>
                <p className="text-xs text-slate-500">Encryption at rest + in transit enabled. Keys rotated every 90 days.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Audit trails</p>
                <p className="text-xs text-slate-500">Download access logs for HIPAA compliance and SOC 2 readiness.</p>
                <Button variant="ghost" className="mt-2 px-0 text-brand-600">
                  Export logs
                </Button>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">GDPR toolkit</p>
                <p className="text-xs text-slate-500">Data residency set to US-East. Toggle UK region to activate local storage.</p>
                <Button variant="ghost" className="mt-2 px-0 text-brand-600">
                  Manage GDPR settings
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
