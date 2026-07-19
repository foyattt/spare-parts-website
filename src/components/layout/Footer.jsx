import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone, Send, Truck } from 'lucide-react';
import { COMPANY, FOOTER_LINKS } from '../../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-light bg-navy text-white">
      <div className="container-custom py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-primary">
                <Truck className="h-5 w-5 text-white" aria-hidden />
              </div>
              <div>
                <span className="block text-sm font-bold">Ze-Sino Trading</span>
                <span className="block text-xs text-white/60">PLC</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Trusted importer and supplier of genuine Sinotruk spare parts for HOWO and SITRAK
              vehicles across Ethiopia.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              {COMPANY.phones.slice(0, 2).map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white">
                    <Phone className="h-4 w-4 shrink-0" aria-hidden />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {COMPANY.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Business Hours
            </h3>
            <div className="flex items-start gap-2 text-sm text-white/70">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <div>
                <p>{COMPANY.businessHours.days}</p>
                <p>{COMPANY.businessHours.hours}</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={COMPANY.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[12px] bg-white/10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary"
              >
                <Send className="h-4 w-4" aria-hidden />
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/50">Genuine Sinotruk Spare Parts Supplier</p>
        </div>
      </div>
    </footer>
  );
}
