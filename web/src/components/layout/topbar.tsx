'use client';

import Link from 'next/link';
import { Bell, MessageCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Topbar() {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 bg-white/70 px-4 py-4 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
      <div className="flex w-full items-center gap-3 lg:max-w-xl">
        <div className="hidden text-sm font-semibold text-slate-500 lg:block">Quick search</div>
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Search campaigns, clients, or playbooks"
            className="pl-9"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 self-end lg:self-center">
        <Button variant="ghost" className="rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-500">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-500">
          <MessageCircle className="h-4 w-4" />
        </Button>
        <Link
          href="/campaigns"
          className="flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-brand-700"
        >
          New campaign
        </Link>
        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
          <span className="h-8 w-8 rounded-full bg-brand-200" />
          Maya, GlowHaus Spa
        </div>
      </div>
    </header>
  );
}
