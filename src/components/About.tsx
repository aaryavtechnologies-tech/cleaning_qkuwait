import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export function About() {
  const { language, isRtl, t } = useLanguage();
  const whatsappUrl = getGeneralWhatsAppUrl(language);

  return (
    <section id="about" className="relative overflow-hidden bg-white py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Photograph Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-6"
          >
            {/* Subtle Architectural Backdrop Accent */}
            <div
              className={`absolute -inset-4 -z-10 rounded-3xl bg-[#F5FAFC] bg-architectural-dots ${
                isRtl ? 'translate-x-2 translate-y-2' : '-translate-x-2 translate-y-2'
              }`}
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-3xl border border-[#E8EFF3] bg-[#E8EFF3] shadow-[0_24px_60px_-20px_rgba(16,42,67,0.18)]">
              <img
                src="/images/about-cleaning-team.jpg"
                alt={t.about.imageAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            {/* Verified Office Location Floating Badge */}
            <div
              className={`mt-4 sm:mt-0 sm:absolute sm:bottom-5 ${
                isRtl ? 'sm:right-5' : 'sm:left-5'
              } max-w-xs rounded-2xl border border-[#E8EFF3] bg-white/95 p-4 shadow-xl shadow-[#102A43]/10 backdrop-blur-md`}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F5] text-[#00A896]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00A896]">
                    {t.about.locationLabel}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold leading-snug text-[#102A43]">
                    {t.about.locationValue}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E6F7F5] px-4 py-1.5 text-xs font-bold text-[#00A896]">
              <span>{t.about.eyebrow}</span>
            </div>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#102A43] sm:mt-4 sm:text-4xl">
              {t.about.heading}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#526572]">
              {t.about.paragraph1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#526572]">
              {t.about.paragraph2}
            </p>

            {/* Modern Feature Cards */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {t.about.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#E8EFF3] bg-[#F5FAFC] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00A896]/40 hover:bg-white hover:shadow-md"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#00A896]" />
                  <h3 className="mt-2.5 text-sm font-bold text-[#102A43]">{card.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#526572]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00A896] px-6 py-3.5 text-sm font-bold text-white shadow-sm shadow-[#00A896]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#008F80]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t.about.cta}</span>
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-[#E8EFF3] bg-white px-6 py-3.5 text-sm font-bold text-[#102A43] transition-all duration-200 hover:border-[#102A43]/30 hover:bg-[#F5FAFC]"
              >
                <span>{t.about.secondaryCta}</span>
                <ArrowRight className={`h-4 w-4 text-[#00A896] ${isRtl ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
