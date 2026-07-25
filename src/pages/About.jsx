import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle,
  Shield,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SectionHeader from '../components/ui/SectionHeader';
import { COMPANY, IMAGES, STATS, WHY_CHOOSE_US } from '../data/company';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';

const iconMap = {
  'Premium Spare Parts': Shield,
  'Reliable Sourcing': Award,
  'Experienced Professionals': Users,
  'Excellent Customer Support': CheckCircle,
  'Fast Response': Zap,
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-gray-light bg-white py-14 lg:py-20">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              About {COMPANY.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              A trusted partner in Sinotruk spare parts supply, serving Ethiopia&apos;s transport
              and construction industries with quality and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Our Story</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Founded with a vision to bridge the gap between international quality standards
                and local fleet maintenance needs, Ze-Sino Trading PLC has grown into one of
                Ethiopia&apos;s most trusted Sinotruk spare parts suppliers.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                From our early days serving individual mechanics to partnering with major transport
                and construction companies, we have built our reputation on consistent quality,
                honest business practices, and deep product knowledge.
              </p>
            </motion.div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-[16px] shadow-[var(--shadow-soft)]"
            >
              <img
                src="/images/ab.png"
                alt="Industrial warehouse operations"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[16px] border border-gray-light bg-white p-8 shadow-[var(--shadow-card)] lg:p-10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-primary/10">
                <Target className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                To provide genuine and high-quality Sinotruk spare parts that keep Ethiopia&apos;s
                fleets running efficiently, while delivering exceptional service and building
                lasting partnerships with our customers.
              </p>
            </motion.div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[16px] border border-gray-light bg-white p-8 shadow-[var(--shadow-card)] lg:p-10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-primary/10">
                <Award className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                To be the leading Sinotruk spare parts supplier in East Africa, recognized for
                product quality, professional expertise, and unwavering commitment to customer
                success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Team */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 overflow-hidden rounded-[16px] shadow-[var(--shadow-soft)] lg:order-1"
            >
              <img
                src="/images/team.jpg"
                alt="Professional team"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                10+ Years Experience &amp; Expert Team
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Our team brings over a decade of specialized experience in Sinotruk spare parts.
                We understand the technical requirements of HOWO and SITRAK vehicles and work
                closely with customers to identify the right components for their needs.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                From fleet managers to independent mechanics, our professionals provide knowledgeable
                guidance, ensuring you receive the correct parts with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={slideUp}
                className="text-center"
              >
                <p className="text-4xl font-bold text-white lg:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose Ze-Sino"
            subtitle="What sets us apart as your trusted Sinotruk spare parts partner."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {WHY_CHOOSE_US.map((item) => {
              const Icon = iconMap[item.title] || CheckCircle;
              return (
                <motion.div
                  key={item.title}
                  variants={slideUp}
                  className="rounded-[14px] border border-gray-light bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
