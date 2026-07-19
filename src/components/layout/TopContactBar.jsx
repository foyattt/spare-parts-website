import { Clock, Mail, Phone, Send } from 'lucide-react';
import { COMPANY } from '../../data/company';

export default function TopContactBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-gray-light/60 bg-navy text-white">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={COMPANY.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Send className="h-3.5 w-3.5" aria-hidden />
              <span>Telegram</span>
            </a>

            <div className="hidden items-center gap-1.5 md:flex">
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="flex flex-wrap gap-x-3">
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                ))}
              </span>
            </div>

            <a
              href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 md:hidden"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              <span>{COMPANY.phones[0]}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-primary sm:flex"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden />
              <span>{COMPANY.email}</span>
            </a>

            <div className="flex items-center gap-1.5 text-white/90">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>
                {COMPANY.businessHours.days}: {COMPANY.businessHours.hours}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
