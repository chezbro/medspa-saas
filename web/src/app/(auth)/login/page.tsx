import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-brand-50 px-6 py-16">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
          <p className="text-sm text-slate-600">Sign in to orchestrate AI campaigns and fill your calendar.</p>
        </div>
        <form className="space-y-4">
          <Input label="Email" type="email" name="email" placeholder="maya@glowhaus.com" required />
          <Input label="Password" type="password" name="password" placeholder="••••••••" required />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          <Button type="button" variant="secondary" className="w-full">
            Sign in with Google
          </Button>
        </form>
        <p className="text-center text-sm text-slate-600">
          New to MedSpa Engine?{' '}
          <Link href="/signup" className="font-semibold text-brand-600 hover:text-brand-700">
            Start your free trial
          </Link>
        </p>
      </div>
    </main>
  );
}
