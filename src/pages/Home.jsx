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
          >{/* 1. Company Name Alone */}
            {/* 1. Main Brand Name (Biggest) */}
          {/* 1. Main Brand Name (Biggest) */}
          {/* 1. Main Brand Name (Single Line, Centered, Large) */}
          {/* 1. Main Brand Name (Single Line, High-Impact Typography) */}
            <motion.h1
              variants={slideUp}
              className="mx-auto text-center font-black uppercase tracking-[0.08em] text-white whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            >
              Ze-Sino{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,191,36,0.3)]">
                Trading PLC
              </span>
            </motion.h1>

            {/* Subtle Aesthetic Divider */}
            <motion.div 
              variants={slideUp}
              className="mx-auto mt-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
            />

            {/* 2. Welcome Title & Subtitle (Unified Spacing & High-Contrast Fonts) */}
            <motion.div variants={slideUp} className="mt-8 text-center space-y-3">
              <h2 className="text-2xl font-light tracking-[0.15em] uppercase text-zinc-300 sm:text-3xl lg:text-4xl">
                Welcome to <span className="font-semibold text-white">Ze-Sino</span>
              </h2>
              <p className="text-xl font-bold tracking-normal text-amber-400 sm:text-2xl lg:text-3xl drop-shadow-md">
                Genuine Sinotruk Spare Parts for Every Journey
              </p>
            </motion.div>

            {/* 3. High-Aesthetic Glassmorphism Note Card (Distinct Alignment Accent) */}
            <motion.div
              variants={slideUp}
              className="group relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-amber-400/40"
            >
              {/* Gold Glowing Left Border Accent */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-amber-300 via-amber-500 to-transparent opacity-80" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 pl-2">
                <span className="shrink-0 inline-flex items-center rounded-lg bg-amber-400/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-amber-400 ring-1 ring-amber-400/30 shadow-[0_0_15px_rgba(251,191,36,0.15)]">
                  Note
                </span>
                <p className="text-base leading-relaxed text-zinc-300 sm:text-lg text-center md:text-left font-normal">
                  <strong className="font-semibold text-white">Ze-Sino Trading PLC</strong> is a trusted importer and supplier of high-quality
                  Sinotruk spare parts. With over 10 years of experience, we provide
                  reliable components for HOWO and SITRAK trucks.serving transport fleets, mechanics, and dealers across the region.
                </p>
              </div>
            </motion.div>

            {/* 4. Call to Action Button */}
            <motion.div variants={slideUp} className="mt-12 text-center">
              <Button to="/products" size="lg" className="shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-shadow">
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
                For more than a decade, Ze-Sino Trading PLC has been supplying genuine
               Sinotruk spare parts with a commitment to quality, reliability, and
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
