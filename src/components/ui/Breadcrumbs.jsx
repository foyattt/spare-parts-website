import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export default function Breadcrumbs({ items, className }) {
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-8', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-4 w-4 text-gray-light" aria-hidden />
            {item.path && index < items.length - 1 ? (
              <Link to={item.path} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-navy">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
