import { motion } from 'framer-motion';
import {
  BadgeDollarSign,
  CalendarCheck2,
  LayoutGrid,
  MapPinned,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const BENEFIT_ICONS: LucideIcon[] = [
  ShieldCheck,
  LayoutGrid,
  MapPinned,
  CalendarCheck2,
  Zap,
  BadgeDollarSign,
];

export function Benefits() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="bg-white py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-[#E6F7F5] px-4 py-1.5 text-xs font-bold text-[#00A896]">
            {t.benefits.eyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#102A43] sm:mt-4 sm:text-4xl">
            {t.benefits.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#526572] sm:mt-4 sm:text-base">
            {t.benefits.subtitle}
          </p>
        </motion.div>

        {/* 6 Benefit Cards */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {t.benefits.items.map((item, idx) => {
            const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-3xl border border-[#E8EFF3] bg-[#F5FAFC]/65 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A896]/40 hover:bg-white hover:shadow-[0_20px_45px_-20px_rgba(16,42,67,0.16)]"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-[#00A896] shadow-xs ring-1 ring-[#E8EFF3] transition-colors duration-300 group-hover:bg-[#00A896] group-hover:text-white group-hover:ring-[#00A896]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#102A43]">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#526572]">
                  {item.description}
                </p>

                {/* Subtle bottom gold/teal accent line on hover */}
                <div className="mt-6 h-0.5 w-10 rounded-full bg-[#E8EFF3] transition-all duration-300 group-hover:w-16 group-hover:bg-[#00A896]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
