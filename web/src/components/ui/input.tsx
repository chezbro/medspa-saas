import { forwardRef, type InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  description?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const inputId = id ?? props.name ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <label className="flex w-full flex-col gap-1 text-sm font-medium text-slate-700">
        {label && <span>{label}</span>}
        <input
          id={inputId}
          ref={ref}
          className={twMerge(
            'w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-base font-normal text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100',
            className,
          )}
          {...props}
        />
        {description && <span className="text-xs font-normal text-slate-500">{description}</span>}
      </label>
    );
  },
);

Input.displayName = 'Input';
