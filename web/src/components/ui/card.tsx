import type { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  description?: string;
  actions?: ReactNode;
};

export function Card({ heading, description, actions, className, children, ...props }: CardProps) {
  return (
    <section
      className={twMerge(
        'flex w-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm',
        className,
      )}
      {...props}
    >
      {(heading || description || actions) && (
        <header className="flex flex-wrap items-start justify-between gap-2">
          <div>
            {heading && <h3 className="text-lg font-semibold text-slate-900">{heading}</h3>}
            {description && <p className="text-sm text-slate-500">{description}</p>}
          </div>
          {actions}
        </header>
      )}
      {children}
    </section>
  );
}
