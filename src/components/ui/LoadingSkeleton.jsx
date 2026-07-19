import { cn } from '../../utils/cn';

export default function LoadingSkeleton({ count = 8, className }) {
  return (
    <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-[14px] border border-gray-light bg-white"
        >
          <div className="aspect-[4/3] animate-pulse bg-gray-light" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-light" />
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-light" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-light" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-light" />
          </div>
        </div>
      ))}
    </div>
  );
}
