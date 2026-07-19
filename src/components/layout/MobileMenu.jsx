import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../data/company';
import { cn } from '../../utils/cn';

export default function MobileMenu({ open, onClose }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[100px] z-30 bg-navy/20 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden
          />

          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[100px] z-40 border-b border-gray-light bg-white px-4 py-4 shadow-[var(--shadow-soft)] lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={cn(
                      'block rounded-[12px] px-4 py-3 text-base font-medium transition-colors',
                      location.pathname === link.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-body hover:bg-background',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
