import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Info,
  Maximize2,
  MessageCircle,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import {
  BEFORE_AFTER_WORKS,
  GALLERY_ITEMS,
  type BeforeAfterItem,
  type GalleryCategory,
  type GalleryItem,
} from '../data/galleryData';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

type FilterType = 'all' | GalleryCategory;

const CATEGORIES: GalleryCategory[] = [
  'home',
  'sofa',
  'carpet',
  'kitchen',
  'commercial',
  'garden',
];

export function Gallery() {
  const { language, isRtl, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const activeIndex = useMemo(() => {
    if (!lightboxItem) return -1;
    return filteredItems.findIndex((i) => i.id === lightboxItem.id);
  }, [filteredItems, lightboxItem]);

  const showPrev = useCallback(() => {
    if (filteredItems.length === 0 || activeIndex === -1) return;
    const prevIdx = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxItem(filteredItems[prevIdx]);
  }, [activeIndex, filteredItems]);

  const showNext = useCallback(() => {
    if (filteredItems.length === 0 || activeIndex === -1) return;
    const nextIdx = (activeIndex + 1) % filteredItems.length;
    setLightboxItem(filteredItems[nextIdx]);
  }, [activeIndex, filteredItems]);

  useEffect(() => {
    if (!lightboxItem) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxItem(null);
      if (e.key === 'ArrowRight') {
        if (isRtl) showPrev();
        else showNext();
      }
      if (e.key === 'ArrowLeft') {
        if (isRtl) showNext();
        else showPrev();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isRtl, lightboxItem, showNext, showPrev]);

  return (
    <section id="gallery" className="bg-[#F5FAFC] py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#00A896] ring-1 ring-[#E8EFF3]">
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#102A43] sm:mt-4 sm:text-4xl">
            {t.gallery.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#526572] sm:mt-4 sm:text-base">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        {/* Real On-Site Before & After Transformations */}
        <div className="mt-8 sm:mt-12">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-6">
            <h3 className="text-lg font-extrabold text-[#102A43] sm:text-xl">
              {t.gallery.realResultsTitle}
            </h3>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F7F5] px-3 py-1 text-xs font-bold text-[#00A896]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00A896]" />
              <span>{t.gallery.realResultsBadge}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            {BEFORE_AFTER_WORKS.map((pair: BeforeAfterItem) => {
              const title = language === 'ar' ? pair.titleAr : pair.titleEn;
              const caption = language === 'ar' ? pair.captionAr : pair.captionEn;
              const sides: Array<{
                key: 'before' | 'after';
                src: string;
                badge: string;
                zoomPrefix: string;
                badgeClasses: string;
              }> = [
                {
                  key: 'before',
                  src: pair.beforeImage,
                  badge: t.gallery.beforeLabel,
                  zoomPrefix: t.gallery.inspectBeforeLabel,
                  badgeClasses: 'bg-[#102A43]/85 text-white',
                },
                {
                  key: 'after',
                  src: pair.afterImage,
                  badge: t.gallery.afterLabel,
                  zoomPrefix: t.gallery.inspectAfterLabel,
                  badgeClasses: 'bg-[#00A896] text-white',
                },
              ];

              return (
                <motion.div
                  key={pair.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45 }}
                  className="overflow-hidden rounded-3xl border border-[#E8EFF3] bg-white p-3.5 shadow-sm sm:p-5"
                >
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                    {sides.map((side) => (
                      <button
                        key={side.key}
                        type="button"
                        onClick={() =>
                          setLightboxItem({
                            id: `${pair.id}-${side.key}`,
                            category: pair.category,
                            image: side.src,
                            titleEn: `${pair.titleEn} (${t.gallery.beforeLabel === side.badge ? 'Before' : 'After'})`,
                            titleAr: `${pair.titleAr} (${side.badge})`,
                            captionEn: pair.captionEn,
                            captionAr: pair.captionAr,
                          })
                        }
                        aria-label={`${side.zoomPrefix}: ${title}`}
                        className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-[#E8EFF3] focus-visible:outline-2"
                      >
                        <img
                          src={side.src}
                          alt={`${title} - ${side.badge}`}
                          loading="lazy"
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1F33]/55 via-transparent to-transparent" />
                        <span
                          className={`absolute top-2.5 start-2.5 rounded-lg px-2.5 py-1 text-[11px] font-bold shadow-sm backdrop-blur-sm ${side.badgeClasses}`}
                        >
                          {side.badge}
                        </span>
                        <span className="absolute bottom-2.5 end-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/85 text-[#102A43] shadow-sm transition-colors group-hover:bg-[#00A896] group-hover:text-white">
                          <Maximize2 className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <h4 className="text-sm font-bold text-[#102A43] sm:text-base">{title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-[#526572]">{caption}</p>
                    </div>
                    <a
                      href={getServiceWhatsAppUrl(
                        t.gallery.categories[pair.category],
                        language
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#E6F7F5] px-4 py-2.5 text-xs font-bold text-[#00A896] transition-colors hover:bg-[#00A896] hover:text-white"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>{t.gallery.bookSimilar}</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label={t.gallery.heading}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
            className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 sm:text-sm ${
              activeFilter === 'all'
                ? 'bg-[#102A43] text-white shadow-sm'
                : 'bg-white text-[#526572] ring-1 ring-[#E8EFF3] hover:text-[#102A43]'
            }`}
          >
            {t.gallery.allFilter}
          </button>

          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 sm:text-sm ${
                activeFilter === category
                  ? 'bg-[#00A896] text-white shadow-sm'
                  : 'bg-white text-[#526572] ring-1 ring-[#E8EFF3] hover:text-[#102A43]'
              }`}
            >
              {t.gallery.categories[category]}
            </button>
          ))}
        </div>

        {/* Masonry-Inspired Responsive Grid */}
        <motion.div
          layout
          className={`mt-10 grid gap-4 ${
            filteredItems.length === 1
              ? 'mx-auto max-w-xl grid-cols-1 lg:auto-rows-[320px]'
              : filteredItems.length === 2
                ? 'mx-auto max-w-4xl grid-cols-1 sm:grid-cols-2 lg:auto-rows-[280px]'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const title = language === 'ar' ? item.titleAr : item.titleEn;
              const categoryLabel = t.gallery.categories[item.category];
              const isFeaturedTile = activeFilter === 'all' && Boolean(item.spanClass);

              return (
                <motion.button
                  layout
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setLightboxItem(item)}
                  aria-label={`${t.gallery.zoomLabel}: ${title}`}
                  className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-[#E8EFF3] bg-[#E8EFF3] text-start shadow-sm focus-visible:outline-2 ${
                    isFeaturedTile
                      ? 'lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto'
                      : 'aspect-[4/3] lg:aspect-auto'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-[#0B1F33]/20 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Expand Pill */}
                  <div className="absolute top-3.5 end-3.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#00A896]">
                    <Maximize2 className="h-4 w-4" />
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-block rounded-lg bg-[#00A896]/90 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                      {categoryLabel}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-white sm:text-lg">
                      {title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Transparent Showcase Notice */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-[#526572]">
          <Info className="h-4 w-4 shrink-0 text-[#00A896]" />
          <p>{t.gallery.showcaseNotice}</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F33]/88 p-4 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={language === 'ar' ? lightboxItem.titleAr : lightboxItem.titleEn}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label={t.gallery.closeLightbox}
                className="absolute top-4 end-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#0B1F33]/75 text-white backdrop-blur-md transition-colors hover:bg-[#00A896]"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Wrapper */}
              <div className="relative flex max-h-[68vh] min-h-[260px] w-full items-center justify-center bg-[#0B1F33]">
                <img
                  src={lightboxItem.image}
                  alt={language === 'ar' ? lightboxItem.titleAr : lightboxItem.titleEn}
                  className={
                    lightboxItem.id.startsWith('ba-')
                      ? 'max-h-[68vh] w-full object-contain'
                      : 'aspect-[16/10] max-h-[68vh] w-full object-cover object-center'
                  }
                />

                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label={t.gallery.prevImage}
                      className="absolute top-1/2 start-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#102A43] shadow-lg transition-transform hover:scale-105"
                    >
                      {isRtl ? (
                        <ChevronRight className="h-5 w-5" />
                      ) : (
                        <ChevronLeft className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label={t.gallery.nextImage}
                      className="absolute top-1/2 end-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#102A43] shadow-lg transition-transform hover:scale-105"
                    >
                      {isRtl ? (
                        <ChevronLeft className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                    </button>
                  </>
                )}
              </div>

              {/* Details & Book Similar CTA */}
              <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
                <div>
                  <span className="inline-block rounded-lg bg-[#E6F7F5] px-3 py-1 text-xs font-bold text-[#00A896]">
                    {t.gallery.categories[lightboxItem.category]}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-[#102A43]">
                    {language === 'ar' ? lightboxItem.titleAr : lightboxItem.titleEn}
                  </h3>
                  <p className="mt-1 text-sm text-[#526572]">
                    {language === 'ar' ? lightboxItem.captionAr : lightboxItem.captionEn}
                  </p>
                </div>

                <a
                  href={getServiceWhatsAppUrl(
                    t.gallery.categories[lightboxItem.category],
                    language
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#00A896] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#008F80]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.gallery.bookSimilar}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
