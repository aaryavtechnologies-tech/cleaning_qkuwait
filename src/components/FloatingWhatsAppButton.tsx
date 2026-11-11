import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { BUSINESS_INFO, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export function FloatingWhatsAppButton() {
  const { language, t } = useLanguage();
  const whatsappUrl = getGeneralWhatsAppUrl(language);
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Only show the sticky mobile bar after scrolling past the hero's own primary CTAs
      setShowMobileBar(window.scrollY > 340);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button */}
      <div className="fixed bottom-6 end-6 z-40 hidden md:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.floating.whatsappAria}
          className="group relative flex items-center gap-2.5 rounded-full bg-[#00A896] py-3.5 ps-4 pe-5 text-sm font-bold text-white shadow-[0_12px_32px_-6px_rgba(0,168,150,0.5)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#008F80]"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-60" />
            <MessageCircle className="relative h-5 w-5" />
          </span>
          <span>{t.floating.whatsappTooltip}</span>
        </a>
      </div>

      {/* Slim Floating Mobile Quick-Contact Pill (appears only after scrolling past hero) */}
      <AnimatePresence>
        {showMobileBar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 bottom-3 z-40 md:hidden"
          >
            <div className="mx-auto grid max-w-[272px] grid-cols-2 gap-1.5 rounded-full border border-[#E8EFF3] bg-white/95 p-1 shadow-[0_10px_28px_-6px_rgba(16,42,67,0.28)] backdrop-blur-md">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-full bg-[#00A896] px-3 py-2 text-[11px] font-bold text-white active:scale-[0.98]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>{t.floating.mobileWhatsapp}</span>
              </a>

              <a
                href={BUSINESS_INFO.phone1Href}
                className="flex items-center justify-center gap-1.5 rounded-full bg-[#102A43] px-3 py-2 text-[11px] font-bold text-white active:scale-[0.98]"
              >
                <Phone className="h-3.5 w-3.5 text-[#00A896]" />
                <span>{t.floating.mobileCall}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
