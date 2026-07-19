import { Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search products...',
  className,
  size = 'md',
}) {
  const sizes = {
    sm: 'py-2.5 pl-11 pr-10 text-sm',
    md: 'py-3.5 pl-12 pr-11 text-base',
  };

  return (
    <div className={cn('relative w-full', className)}>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-[14px] border border-gray-light bg-white text-body placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
          sizes[size],
        )}
        aria-label={placeholder}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted transition-colors hover:bg-gray-light/60 hover:text-navy"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
