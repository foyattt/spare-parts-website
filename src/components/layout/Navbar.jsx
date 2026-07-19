import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Truck, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_LINKS } from '../../data/company';
import { cn } from '../../utils/cn';
import MobileMenu from './MobileMenu';

export default function Navbar({ onSearchClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-[36px] z-40 border-b border-gray-light/80 bg-white/95 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
            <Link to="/" className="flex shrink-0 items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-primary">
                <Truck className="h-5 w-5 text-white" aria-hidden />
              </div>
              <div className="hidden sm:block">
                <span className="block text-sm font-bold leading-tight text-navy">
                  Ze-Sino Trading
                </span>
                <span className="block text-xs text-muted">PLC</span>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'rounded-[12px] px-4 py-2 text-sm font-medium transition-colors',
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-body hover:bg-background hover:text-primary',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onSearchClick}
                className="flex h-10 w-10 items-center justify-center rounded-[12px] text-muted transition-colors hover:bg-background hover:text-primary"
                aria-label="Search products"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-[12px] text-muted transition-colors hover:bg-background hover:text-primary lg:hidden"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
