import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-50 via-white to-slate-100 px-6 py-16">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="grid gap-10 p-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold text-slate-900">Create your account</h1>
            <p className="text-sm text-slate-600">
              Set up MedSpa Engine in minutes. Connect Google Calendar, import your clients via CSV, and
              let our AI fill your empty slots.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• HIPAA-ready infrastructure and encryption by default</li>
              <li>• Twilio A2P registration handled in-app</li>
              <li>• Stripe-powered billing with a 14-day free trial</li>
            </ul>
          </div>
          <form className="space-y-4">
            <Input label="Full name" name="name" placeholder="Maya Chen" required />
            <Input label="Business name" name="business" placeholder="GlowHaus MedSpa" required />
            <Input label="Email" type="email" name="email" placeholder="maya@glowhaus.com" required />
            <Input label="Password" type="password" name="password" placeholder="Create a secure password" required />
            <Button type="submit" className="w-full">
              Start free trial
            </Button>
            <p className="text-center text-xs text-slate-500">
              By signing up you agree to our Terms, Privacy Policy, and HIPAA business associate agreements.
            </p>
          </form>
        </div>
        <div className="border-t border-slate-200 px-10 py-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-brand-600 hover:text-brand-700">
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
