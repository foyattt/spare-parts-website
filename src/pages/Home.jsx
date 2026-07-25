import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import ProductCard from '../components/common/ProductCard';
import ContactCard from '../components/common/ContactCard';
import { COMPANY, IMAGES } from '../data/company';
import { FEATURED_PARTS } from '../data/featuredParts';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Truck spare parts warehouse"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1
              variants={slideUp}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
            >
              Genuine Sinotruk Spare Parts for Every Journey
            </motion.h1>
            <motion.p
              variants={slideUp}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
            >
              Ze-Sino Trading PLC is a trusted importer and supplier of genuine and high-quality
              aftermarket Sinotruk spare parts. With over 10 years of experience, we provide
              reliable parts for HOWO and SITRAK trucks, serving transport companies, construction
              businesses, mechanics, fleet operators, and spare parts dealers with dependable
              products and professional service.
            </motion.p>
            <motion.div variants={slideUp} className="mt-10">
              <Button to="/products" size="lg">
                Browse Products
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Spare Parts */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-custom">
          <SectionHeader
            title="Featured Spare Parts"
            subtitle="Premium Sinotruk components for HOWO and SITRAK vehicles — sourced for reliability and performance."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURED_PARTS.map((part, index) => (
              <ProductCard key={part.id} product={part} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-[16px] shadow-[var(--shadow-soft)]"
            >
              <img
                src="/images/warehouse.jpg"
                alt="Spare parts warehouse"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                10+ Years of Trusted Experience
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                For more than a decade, Ze-Sino Trading PLC has been supplying genuine and
                aftermarket Sinotruk spare parts with a commitment to quality, reliability, and
                customer satisfaction. Our experienced team understands the needs of Ethiopia&apos;s
                transport and construction industries, providing dependable solutions backed by
                professional service and trusted sourcing.
              </p>
              <Button to="/about" variant="secondary" className="mt-8">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-custom">
          <SectionHeader
            title="Get In Touch"
            subtitle="Reach out to our team for product inquiries, availability, and professional support."
          />

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

            <ContactCard icon={Mail} title="Email">
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition-colors hover:text-primary"
              >
                {COMPANY.email}
              </a>
            </ContactCard>

            <ContactCard icon={Clock} title="Business Hours">
              <p>{COMPANY.businessHours.days}</p>
              <p>{COMPANY.businessHours.hours}</p>
            </ContactCard>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-[14px] border border-gray-light bg-white p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" aria-hidden />
              <div>
                <p className="font-semibold text-navy">{COMPANY.address}</p>
                <p className="text-sm text-muted">{COMPANY.addressDetail}</p>
              </div>
            </div>
            <Button to="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
