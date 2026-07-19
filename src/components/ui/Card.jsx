import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Card({ children, className, hover = false, ...props }) {
  const Component = hover ? motion.div : 'div';

  return (
    <Component
      className={cn(
        'overflow-hidden rounded-[14px] bg-white shadow-[var(--shadow-card)]',
        hover && 'transition-shadow duration-200 hover:shadow-[var(--shadow-soft)]',
        className,
      )}
      {...(hover
        ? {
            whileHover: { y: -4 },
            transition: { duration: 0.2 },
          }
        : {})}
      {...props}
    >
      {children}
    </Component>
  );
}
