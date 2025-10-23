import type { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'default' | 'success' | 'warning';
};

const toneStyles: Record<NonNullable<BadgeProps['tone']>, string> = {
  default: 'bg-brand-100 text-brand-800',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
};

export function Badge({ tone = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={twMerge(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        toneStyles[tone],
        className,
      )}
      {...props}
    />
  );
}
