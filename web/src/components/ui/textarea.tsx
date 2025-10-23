import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, id, ...props }, ref) => {
    const textAreaId = id ?? props.name ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <label className="flex w-full flex-col gap-1 text-sm font-medium text-slate-700">
        {label && <span>{label}</span>}
        <textarea
          id={textAreaId}
          ref={ref}
          className={twMerge(
            'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-normal text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100',
            className,
          )}
          {...props}
        />
      </label>
    );
  },
);

TextArea.displayName = 'TextArea';
