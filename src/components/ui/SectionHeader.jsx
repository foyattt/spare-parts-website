import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { slideUp } from '../../utils/animations';

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
}) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'mb-12 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left',
        className,
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </motion.div>
  );
}
