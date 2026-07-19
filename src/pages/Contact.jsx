import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ContactCard from '../components/common/ContactCard';
import ContactForm from '../components/common/ContactForm';
import { COMPANY } from '../data/company';
import { fadeIn, slideUp } from '../utils/animations';

export default function Contact() {
  return (
    <>
      <section className="border-b border-gray-light bg-white py-14 lg:py-20">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Have questions about our products or need assistance? Our team is ready to help you
              find the right Sinotruk spare parts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard icon={Phone} title="Phone Numbers">
              {COMPANY.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="block transition-colors hover:text-primary"
                >
                  {phone}
                </a>
              ))}
            </ContactCard>

            <ContactCard icon={Mail} title="Email">
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition-colors hover:text-primary"
              >
                {COMPANY.email}
              </a>
            </ContactCard>

            <ContactCard icon={Send} title="Telegram">
              <a
                href={COMPANY.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {COMPANY.telegram}
              </a>
            </ContactCard>

            <ContactCard icon={Clock} title="Business Hours">
              <p>{COMPANY.businessHours.days}</p>
              <p>{COMPANY.businessHours.hours}</p>
            </ContactCard>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-navy">Send Us a Message</h2>
              <p className="mt-3 text-muted">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <ContactForm className="mt-8" />
            </motion.div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-navy">Our Location</h2>
                <div className="mt-4 flex items-start gap-3 rounded-[14px] border border-gray-light bg-white p-6">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-semibold text-navy">{COMPANY.address}</p>
                    <p className="mt-1 text-muted">{COMPANY.addressDetail}</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[14px] border border-gray-light bg-white shadow-[var(--shadow-card)]">
                <div className="flex aspect-[16/10] items-center justify-center bg-gray-light/40">
                  <iframe
                    title="Ze-Sino Trading PLC location"
                    src={COMPANY.mapEmbedUrl}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
