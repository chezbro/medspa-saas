'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, CreditCard, Home, Layers, Settings, Users } from 'lucide-react';
import { clsx } from 'clsx';

const links = [
  { href: '/dashboard', label: 'Overview', icon: Home },
  { href: '/campaigns', label: 'Campaigns', icon: Layers },
  { href: '/calendar', label: 'Calendar Gaps', icon: Calendar },
  { href: '/clients', label: 'Clients', icon: Users },
  { href: '/billing', label: 'Billing', icon: CreditCard },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 flex-col justify-between border-r border-slate-200 bg-white px-6 py-8 lg:flex">
      <div className="space-y-8">
        <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold text-brand-700">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
            ME
          </span>
          MedSpa Engine
        </Link>
        <nav className="space-y-1">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition',
                  isActive
                    ? 'bg-brand-50 text-brand-700 shadow-sm'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900',
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Need onboarding help?</p>
        <p className="mt-1">Schedule a white-glove setup call with our success team.</p>
        <Link href="/setup" className="mt-3 inline-flex text-brand-600 hover:text-brand-700">
          Book a call →
        </Link>
      </div>
    </aside>
  );
}
