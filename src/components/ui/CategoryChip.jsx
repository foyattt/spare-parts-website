import { cn } from '../../utils/cn';

export default function CategoryChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200',
        active
          ? 'bg-primary text-white shadow-sm'
          : 'border border-gray-light bg-white text-muted hover:border-primary hover:text-primary',
      )}
    >
      {label}
    </button>
  );
}
