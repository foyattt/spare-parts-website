import { PackageOpen } from 'lucide-react';
import Button from './Button';

export default function EmptyState({
  title = 'No products found',
  description = 'Try adjusting your search or filter to find what you are looking for.',
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[14px] border border-dashed border-gray-light bg-white px-8 py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background">
        <PackageOpen className="h-8 w-8 text-muted" />
      </div>
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-2 max-w-md text-muted">{description}</p>
      {actionLabel && onAction && (
        <Button variant="secondary" className="mt-6" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
