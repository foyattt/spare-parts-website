import { cn } from '../../utils/cn';

export default function ContactCard({ icon: Icon, title, children, className }) {
  return (
    <div
      className={cn(
        'rounded-[14px] border border-gray-light bg-white p-6 shadow-[var(--shadow-card)]',
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-primary/10">
        <Icon className="h-5 w-5 text-primary" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <div className="mt-2 space-y-1 text-muted">{children}</div>
    </div>
  );
}
