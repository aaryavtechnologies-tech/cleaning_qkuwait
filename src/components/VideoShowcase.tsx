import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Film,
  Maximize2,
  MessageCircle,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import {
  VIDEO_WORKS,
  type VideoCategory,
  type VideoWorkItem,
} from '../data/videosData';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { AutoPlayVideo } from './AutoPlayVideo';

type VideoFilter = 'all' | VideoCategory;

const VIDEO_CATEGORIES: VideoCategory[] = ['sofa', 'floor', 'kitchen'];

function AutoPlayReelCard({
  item,
  title,
  badgeText,
  expandLabel,
  categoryLabel,
  onSelect,
}: {
  item: VideoWorkItem;
  title: string;
  badgeText: string;
  expandLabel: string;
  categoryLabel: string;
  onSelect: (item: VideoWorkItem) => void;
}) {
  return (
    <motion.button
      layout
      type="button"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.22 }}
      onClick={() => onSelect(item)}
      aria-label={`${expandLabel}: ${title}`}
      className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#081625] text-start shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00A896]/60 sm:rounded-3xl"
    >
      <AutoPlayVideo
        src={item.src}
        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Scrim for guaranteed label legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081625]/92 via-[#081625]/20 to-[#081625]/35" />

      {/* Top Row: Real Work Badge + Expand Icon */}
      <div className="absolute inset-x-2.5 top-2.5 flex items-center justify-between gap-2 sm:inset-x-3.5 sm:top-3.5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0B1F33]/75 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md sm:text-[11px]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00A896]" />
          <span>{badgeText}</span>
        </span>

        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-md transition-colors group-hover:bg-[#00A896] sm:h-8 sm:w-8 sm:rounded-xl">
          <Maximize2 className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* Bottom Title & Category */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <span className="inline-block rounded-md bg-[#00A896]/90 px-2 py-0.5 text-[10px] font-bold text-white sm:rounded-lg sm:px-2.5 sm:text-[11px]">
          {categoryLabel}
        </span>
        <h3 className="mt-1.5 line-clamp-2 text-xs font-bold text-white sm:mt-2 sm:text-sm">
          {title}
        </h3>
      </div>
    </motion.button>
  );
}

export function VideoShowcase() {
  const { language, isRtl, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<VideoFilter>('all');
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoWorkItem | null>(null);

  const filteredVideos = useMemo(() => {
    if (activeFilter === 'all') return VIDEO_WORKS;
    return VIDEO_WORKS.filter((v) => v.category === activeFilter);
  }, [activeFilter]);

  const visibleVideos = useMemo(() => {
    if (activeFilter !== 'all' || showAll) {
      return filteredVideos;
    }
    return filteredVideos.filter((v) => v.featured);
  }, [activeFilter, filteredVideos, showAll]);

  const activeIndex = useMemo(() => {
    if (!activeVideo) return -1;
    return filteredVideos.findIndex((v) => v.id === activeVideo.id);
  }, [activeVideo, filteredVideos]);

  const showPrev = useCallback(() => {
    if (filteredVideos.length === 0 || activeIndex === -1) return;
    const prevIdx = (activeIndex - 1 + filteredVideos.length) % filteredVideos.length;
    setActiveVideo(filteredVideos[prevIdx]);
  }, [activeIndex, filteredVideos]);

  const showNext = useCallback(() => {
    if (filteredVideos.length === 0 || activeIndex === -1) return;
    const nextIdx = (activeIndex + 1) % filteredVideos.length;
    setActiveVideo(filteredVideos[nextIdx]);
  }, [activeIndex, filteredVideos]);

  useEffect(() => {
    if (!activeVideo) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
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
  }, [activeVideo, isRtl, showNext, showPrev]);

  const hasHiddenFeatured = useMemo(
    () => VIDEO_WORKS.some((video) => !video.featured),
    []
  );

  return (
    <div
      data-section="service-videos"
      className="relative mt-12 overflow-hidden rounded-3xl bg-[#0B1F33] bg-navy-grid px-4 py-10 text-white shadow-xl sm:mt-16 sm:px-8 sm:py-14"
    >
      {/* Subtle Ambient Teal Glow */}
      <div
        className="pointer-events-none absolute -top-24 start-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00A896]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-[#64DFDF]">
            <Film className="h-3.5 w-3.5" />
            <span>{t.videos.eyebrow}</span>
          </span>
          <h3 className="mt-3 text-xl font-extrabold tracking-tight text-white sm:mt-4 sm:text-3xl">
            {t.videos.heading}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base">
            {t.videos.subtitle}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div
          className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:mt-10"
          role="tablist"
          aria-label={t.videos.heading}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
            className={`cursor-pointer rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 sm:px-4 sm:text-sm ${
              activeFilter === 'all'
                ? 'bg-[#00A896] text-white shadow-sm'
                : 'border border-white/15 bg-white/8 text-white/80 hover:bg-white/15 hover:text-white'
            }`}
          >
            {t.videos.allFilter}
          </button>

          {VIDEO_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              className={`cursor-pointer rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 sm:px-4 sm:text-sm ${
                activeFilter === category
                  ? 'bg-[#00A896] text-white shadow-sm'
                  : 'border border-white/15 bg-white/8 text-white/80 hover:bg-white/15 hover:text-white'
              }`}
            >
              {t.videos.categories[category]}
            </button>
          ))}
        </div>

        {/* Autoplay Video Reels Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleVideos.map((item) => (
              <AutoPlayReelCard
                key={item.id}
                item={item}
                title={language === 'ar' ? item.titleAr : item.titleEn}
                badgeText={t.videos.realWorkBadge}
                expandLabel={t.videos.expandVideo}
                categoryLabel={t.videos.categories[item.category]}
                onSelect={setActiveVideo}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show All / Collapse Toggle when on All tab */}
        {activeFilter === 'all' && hasHiddenFeatured && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all hover:border-[#00A896] hover:bg-[#00A896] sm:text-sm"
            >
              <span>{showAll ? t.videos.showLess : t.videos.showMore}</span>
              {showAll ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Cinema Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#06111D]/90 p-3 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={language === 'ar' ? activeVideo.titleAr : activeVideo.titleEn}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#102A43] text-white shadow-2xl ring-1 ring-white/15"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label={t.videos.closeModal}
                className="absolute top-3 end-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#0B1F33]/80 text-white backdrop-blur-md transition-colors hover:bg-[#00A896]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative flex max-h-[65vh] items-center justify-center bg-black">
                <video
                  key={activeVideo.src}
                  src={activeVideo.src}
                  autoPlay
                  controls
                  playsInline
                  loop
                  className="max-h-[65vh] w-full object-contain"
                />

                {filteredVideos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label={t.videos.prevVideo}
                      className="absolute top-1/2 start-2.5 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#102A43] shadow-lg transition-transform hover:scale-105"
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
                      aria-label={t.videos.nextVideo}
                      className="absolute top-1/2 end-2.5 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#102A43] shadow-lg transition-transform hover:scale-105"
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

              <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-6">
                <div>
                  <span className="inline-block rounded-lg bg-[#00A896]/20 px-2.5 py-1 text-xs font-bold text-[#64DFDF]">
                    {t.videos.categories[activeVideo.category]}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                    {language === 'ar' ? activeVideo.titleAr : activeVideo.titleEn}
                  </h3>
                  <p className="mt-1 text-xs text-white/75 sm:text-sm">
                    {language === 'ar' ? activeVideo.captionAr : activeVideo.captionEn}
                  </p>
                </div>

                <a
                  href={getServiceWhatsAppUrl(
                    language === 'ar' ? activeVideo.serviceNameAr : activeVideo.serviceNameEn,
                    language
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#00A896] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#008F80]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.videos.bookService}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

