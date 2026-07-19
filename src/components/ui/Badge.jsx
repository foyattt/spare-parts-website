import { cn } from '../../utils/cn';

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary',
        className,
      )}
    >
      {children}
    </span>
  );
}
