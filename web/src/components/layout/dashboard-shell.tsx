import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">
        <Topbar />
        <main className="flex-1 space-y-6 bg-slate-50 px-4 py-8 lg:px-10">{children}</main>
      </div>
    </div>
  );
}
