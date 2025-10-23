import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-brand-600 text-white shadow-card hover:bg-brand-700 focus-visible:outline-brand-500',
  secondary:
    'bg-white text-brand-700 border border-brand-200 hover:border-brand-400 hover:text-brand-900 focus-visible:outline-brand-400',
  ghost:
    'bg-transparent text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-400',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => (
    <button
      ref={ref}
      className={twMerge(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = 'Button';
