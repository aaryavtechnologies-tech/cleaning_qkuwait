import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { BUSINESS_INFO, getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

export function Navbar() {
  const { language, isRtl, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll & handle Esc key for mobile drawer
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#videos', label: t.nav.ourWork },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = getGeneralWhatsAppUrl(language);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_6px_30px_-10px_rgba(16,42,67,0.12)] border-b border-[#E8EFF3]'
            : 'bg-gradient-to-b from-[#0B1F33]/75 via-[#0B1F33]/40 to-transparent'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-3.5 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="rounded-xl focus-visible:outline-2"
            aria-label="Cleaning Q Kuwait Home"
          >
            <BrandLogo variant={scrolled ? 'dark' : 'light'} hideSubtitleOnMobile />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  scrolled
                    ? 'text-[#1C2B33] hover:bg-[#F5FAFC] hover:text-[#00A896]'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Cluster */}
          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.nav.toggleLabel}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all duration-200 ${
                scrolled
                  ? 'border border-[#E8EFF3] bg-[#F5FAFC] text-[#102A43] hover:border-[#00A896] hover:text-[#00A896]'
                  : 'border border-white/25 bg-white/12 text-white backdrop-blur-md hover:bg-white/20'
              }`}
            >
              <Globe className="h-3.5 w-3.5 text-[#00A896]" />
              <span>{t.nav.switchTo}</span>
            </button>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#00A896] px-4 py-2.5 text-xs font-bold text-white shadow-sm shadow-[#00A896]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#008F80]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t.nav.whatsapp}</span>
            </a>

            {/* Call Now CTA */}
            <a
              href={BUSINESS_INFO.phone1Href}
              className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 ${
                scrolled
                  ? 'bg-[#102A43] text-white hover:bg-[#0B1F33]'
                  : 'bg-white text-[#102A43] hover:bg-[#F5FAFC]'
              }`}
            >
              <Phone className="h-3.5 w-3.5 text-[#00A896]" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>

          {/* Mobile Controls: Quick Language Toggle + Hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.nav.toggleLabel}
              className={`inline-flex h-8 cursor-pointer items-center gap-1 rounded-lg px-2 text-[11px] font-bold transition-colors sm:h-9 sm:px-2.5 sm:text-xs ${
                scrolled
                  ? 'border border-[#E8EFF3] bg-[#F5FAFC] text-[#102A43]'
                  : 'border border-white/25 bg-white/12 text-white backdrop-blur-md'
              }`}
            >
              <Globe className="h-3.5 w-3.5 text-[#00A896]" />
              <span>{t.nav.switchTo}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={mobileOpen}
              className={`inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-colors sm:h-9 sm:w-9 ${
                scrolled
                  ? 'border border-[#E8EFF3] bg-white text-[#102A43] hover:bg-[#F5FAFC]'
                  : 'border border-white/25 bg-white/12 text-white backdrop-blur-md hover:bg-white/20'
              }`}
            >
              <Menu className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#0B1F33]/60 backdrop-blur-xs"
            />

            {/* Drawer Panel */}
            <motion.aside
              initial={{ x: isRtl ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? '-100%' : '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className={`fixed inset-y-0 ${
                isRtl ? 'left-0' : 'right-0'
              } flex w-[85%] max-w-sm flex-col justify-between bg-white p-6 shadow-2xl`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E8EFF3] pb-4">
                  <BrandLogo variant="dark" compact />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label={t.nav.closeMenu}
                    className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#E8EFF3] text-[#102A43] hover:bg-[#F5FAFC]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Navigation">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="rounded-xl px-4 py-3 text-base font-semibold text-[#102A43] transition-colors hover:bg-[#F5FAFC] hover:text-[#00A896]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-3 border-t border-[#E8EFF3] pt-5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00A896] px-5 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#008F80]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.hero.primaryCta}</span>
                </a>
                <a
                  href={BUSINESS_INFO.phone1Href}
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#102A43] bg-[#102A43] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#0B1F33]"
                >
                  <Phone className="h-4 w-4 text-[#00A896]" />
                  <span>{t.nav.callNow}</span>
                  <span dir="ltr" className="opacity-85">
                    ({BUSINESS_INFO.phone1Display})
                  </span>
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
