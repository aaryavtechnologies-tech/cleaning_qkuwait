import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Film,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { BEFORE_AFTER_WORKS } from '../data/galleryData';
import { VIDEO_WORKS } from '../data/videosData';
import { BUSINESS_INFO, getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { AutoPlayVideo } from './AutoPlayVideo';

const HERO_REEL_IDS = ['vid-14', 'vid-15', 'vid-03', 'vid-07'];

export function Hero() {
  const { language, isRtl, t } = useLanguage();
  const whatsappUrl = getGeneralWhatsAppUrl(language);

  const heroReels = useMemo(
    () =>
      HERO_REEL_IDS.map((id) => VIDEO_WORKS.find((item) => item.id === id)).filter(
        (item): item is NonNullable<typeof item> => Boolean(item)
      ),
    []
  );
  const [activeReelId, setActiveReelId] = useState<string>(HERO_REEL_IDS[0]);
  const activeReel = useMemo(
    () => heroReels.find((item) => item.id === activeReelId) ?? heroReels[0],
    [activeReelId, heroReels]
  );
  const featuredResult = BEFORE_AFTER_WORKS[0];

  const highlights = [
    {
      icon: Sparkles,
      label: t.hero.highlights.professional,
    },
    {
      icon: MapPin,
      label: t.hero.highlights.kuwaitWide,
    },
    {
      icon: Zap,
      label: t.hero.highlights.fastResponse,
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[85svh] items-center overflow-hidden bg-[#0B1F33] pt-20 pb-12 sm:min-h-[100svh] sm:pt-28 sm:pb-24"
    >
      {/* Background Photography */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.06, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/images/hero-luxury-living.jpg"
          alt={t.hero.imageAlt}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Art-directed directional overlay for guaranteed contrast in LTR and RTL */}
        <div
          className={`absolute inset-0 ${
            isRtl
              ? 'bg-gradient-to-l from-[#0B1F33]/94 via-[#102A43]/80 to-[#102A43]/35'
              : 'bg-gradient-to-r from-[#0B1F33]/94 via-[#102A43]/80 to-[#102A43]/35'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-[#0B1F33]/40" />
      </div>

      {/* Main Content & Live Media Showcase */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00A896] ring-4 ring-[#00A896]/25 sm:h-2 sm:w-2" />
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-4 text-[1.65rem] leading-[1.22] font-extrabold tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.15]"
            >
              {t.hero.headline}
            </motion.h1>

            {/* Bilingual Complementary Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14 }}
              className="mt-2 text-sm font-semibold text-[#64DFDF] sm:mt-3 sm:text-lg"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-lg"
            >
              {t.hero.supportingText}
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00A896] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#00A896]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#008F80] sm:w-auto sm:gap-2.5 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
              >
                <MessageCircle className="h-4.5 w-4.5 shrink-0 sm:h-5 sm:w-5" />
                <span>{t.hero.primaryCta}</span>
              </a>

              <a
                href={BUSINESS_INFO.phone1Href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white px-5 py-3 text-sm font-bold text-[#102A43] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F5FAFC] sm:w-auto sm:gap-2.5 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
              >
                <Phone className="h-4.5 w-4.5 shrink-0 text-[#00A896] sm:h-5 sm:w-5" />
                <span>{t.hero.secondaryCta}</span>
                <span dir="ltr" className="text-xs font-semibold text-[#526572] sm:text-sm">
                  {BUSINESS_INFO.phone1Display}
                </span>
              </a>
            </motion.div>

            {/* Secondary Phone Quick Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.34 }}
              className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-white/75 sm:mt-4 sm:gap-x-5 sm:text-sm"
            >
              <a
                href={BUSINESS_INFO.phone2Href}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-[#E9B44C]" />
                <span dir="ltr">{BUSINESS_INFO.phone2Display}</span>
              </a>
              <span className="text-white/30">•</span>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <span dir="ltr">{BUSINESS_INFO.instagramHandle}</span>
              </a>
            </motion.div>

            {/* Three Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="mt-4 flex flex-wrap gap-1.5 sm:mt-8 sm:grid sm:grid-cols-3 sm:gap-3.5"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-2.5 py-1.5 text-white backdrop-blur-md sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#00A896]/25 text-[#64DFDF] sm:h-9 sm:w-9 sm:rounded-xl">
                      <Icon className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                    </div>
                    <span className="text-[11px] font-semibold sm:text-sm">{item.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right/End Column: Autoplaying Real Cleaning Video & On-Site Before/After Card */}
          {activeReel && (
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-[#081625]/80 p-3 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00A896]/20 px-2.5 py-1 text-[11px] font-bold text-[#64DFDF]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00A896]" />
                    <span>{t.hero.showcase.liveBadge}</span>
                  </span>

                  <div className="flex flex-wrap items-center gap-1">
                    {heroReels.map((reel) => {
                      const isActive = reel.id === activeReel.id;
                      const label = language === 'ar' ? reel.serviceNameAr : reel.serviceNameEn;
                      return (
                        <button
                          key={reel.id}
                          type="button"
                          onClick={() => setActiveReelId(reel.id)}
                          className={`cursor-pointer rounded-lg px-2 py-1 text-[10px] font-bold transition-colors sm:text-[11px] ${
                            isActive
                              ? 'bg-[#00A896] text-white'
                              : 'bg-white/10 text-white/75 hover:bg-white/20 hover:text-white'
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Main Autoplaying Real Cleaning Video */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1F33] sm:aspect-[4/3]">
                  <AutoPlayVideo
                    key={activeReel.src}
                    src={activeReel.src}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081625]/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
                    <p className="text-xs font-bold text-white sm:text-sm">
                      {language === 'ar' ? activeReel.titleAr : activeReel.titleEn}
                    </p>
                  </div>
                </div>

                {/* Real On-Site Before/After Thumbnails + Jump to All Services Media */}
                {featuredResult && (
                  <div className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative h-12 w-16 overflow-hidden rounded-xl border border-white/15 bg-[#0B1F33]">
                        <img
                          src={featuredResult.beforeImage}
                          alt={`${t.hero.showcase.resultLabel} - ${t.hero.showcase.beforeTag}`}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute bottom-0.5 start-0.5 rounded bg-[#0B1F33]/85 px-1 text-[9px] font-bold text-white">
                          {t.hero.showcase.beforeTag}
                        </span>
                      </div>
                      <div className="relative h-12 w-16 overflow-hidden rounded-xl border border-[#00A896]/60 bg-[#0B1F33]">
                        <img
                          src={featuredResult.afterImage}
                          alt={`${t.hero.showcase.resultLabel} - ${t.hero.showcase.afterTag}`}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute bottom-0.5 start-0.5 rounded bg-[#00A896] px-1 text-[9px] font-bold text-white">
                          {t.hero.showcase.afterTag}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-white/85">
                        {t.hero.showcase.resultLabel}
                      </span>
                    </div>

                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/12 px-3 py-2 text-[11px] font-bold text-white transition-colors hover:bg-[#00A896]"
                    >
                      <Film className="h-3.5 w-3.5 text-[#64DFDF]" />
                      <span>{t.hero.showcase.watchAllCta}</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Subtle Scroll Down Cue */}
      <a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md transition-colors hover:bg-white/20 md:inline-flex"
      >
        <span>{t.hero.scrollCue}</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce text-[#00A896]" />
      </a>
    </section>
  );
}
