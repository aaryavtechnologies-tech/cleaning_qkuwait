import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { VERIFIED_TESTIMONIALS } from '../data/testimonialsData';

/**
 * Renders verified customer testimonials cleanly in a 3-card / carousel layout.
 * Automatically stays hidden when VERIFIED_TESTIMONIALS is empty so no fabricated
 * reviews, customer names, or star ratings ever appear on the site.
 */
export function Testimonials() {
  const { language, isRtl, t } = useLanguage();
  const [activeStart, setActiveStart] = useState(0);

  if (VERIFIED_TESTIMONIALS.length === 0) {
    return null;
  }

  const visibleCount = 3;
  const hasCarousel = VERIFIED_TESTIMONIALS.length > visibleCount;
  const visibleItems = hasCarousel
    ? Array.from({ length: visibleCount }, (_, idx) => {
        return VERIFIED_TESTIMONIALS[(activeStart + idx) % VERIFIED_TESTIMONIALS.length];
      })
    : VERIFIED_TESTIMONIALS;

  const handlePrev = () => {
    setActiveStart(
      (prev) => (prev - 1 + VERIFIED_TESTIMONIALS.length) % VERIFIED_TESTIMONIALS.length
    );
  };

  const handleNext = () => {
    setActiveStart((prev) => (prev + 1) % VERIFIED_TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="bg-[#F5FAFC] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#00A896] ring-1 ring-[#E8EFF3]">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl">
            {t.testimonials.heading}
          </h2>
          <p className="mt-4 text-base text-[#526572]">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {visibleItems.map((item) => {
            const quote = language === 'ar' ? item.quoteAr : item.quoteEn;
            const name = language === 'ar' ? item.clientNameAr : item.clientNameEn;
            const area = language === 'ar' ? item.areaAr : item.areaEn;
            const service = language === 'ar' ? item.serviceAr : item.serviceEn;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between rounded-3xl border border-[#E8EFF3] bg-white p-7 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className="h-4 w-4 fill-[#E9B44C] text-[#E9B44C]"
                        />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-[#00A896]/25" />
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#1C2B33]">{quote}</p>
                </div>

                <div className="mt-6 border-t border-[#E8EFF3] pt-4">
                  <p className="text-sm font-bold text-[#102A43]">{name}</p>
                  <p className="text-xs text-[#526572]">
                    {service} • {area}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {hasCarousel && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={isRtl ? handleNext : handlePrev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#E8EFF3] bg-white text-[#102A43] hover:border-[#00A896]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={isRtl ? handlePrev : handleNext}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#E8EFF3] bg-white text-[#102A43] hover:border-[#00A896]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
