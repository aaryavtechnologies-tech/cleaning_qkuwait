import { motion } from 'framer-motion';
import { CalendarCheck, ClipboardList, MessageCircle, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

const STEP_ICONS = [PhoneCall, ClipboardList, CalendarCheck];

export function HowItWorks() {
  const { language, t } = useLanguage();
  const whatsappUrl = getGeneralWhatsAppUrl(language);

  return (
    <section className="relative overflow-hidden bg-[#102A43] bg-navy-grid py-14 text-white sm:py-24">
      {/* Subtle Ambient Teal Glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00A896]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-[#64DFDF]">
            {t.howItWorks.eyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:mt-4 sm:text-4xl">
            {t.howItWorks.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Three Horizontal Process Cards */}
        <div className="relative mt-9 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Desktop Connector Line */}
          <div
            className="pointer-events-none absolute top-16 right-24 left-24 hidden h-px bg-gradient-to-r from-transparent via-[#00A896]/50 to-transparent lg:block"
            aria-hidden="true"
          />

          {t.howItWorks.steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl border border-white/12 bg-[#0B1F33]/65 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00A896]/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A896]/20 text-[#64DFDF] ring-1 ring-[#00A896]/35">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span
                    dir="ltr"
                    className="text-3xl font-extrabold tracking-tight text-white/15"
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-[#00A896] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#00A896]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#008F80] sm:text-base"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{t.howItWorks.cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
