import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Armchair,
  Building2,
  Camera,
  Film,
  GraduationCap,
  Home,
  Layers,
  MessageCircle,
  Play,
  Sparkles,
  Trees,
  Utensils,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { BEFORE_AFTER_WORKS } from '../data/galleryData';
import { SERVICES_LIST, type ServiceId, type ServiceItemConfig } from '../data/servicesData';
import { VIDEO_WORKS } from '../data/videosData';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { AutoPlayVideo } from './AutoPlayVideo';

const ICON_MAP: Record<ServiceItemConfig['iconName'], LucideIcon> = {
  Building2,
  Home,
  Layers,
  Sparkles,
  Armchair,
  Utensils,
  GraduationCap,
  Trees,
};

const SERVICE_REEL_IDS = ['vid-14', 'vid-15', 'vid-03', 'vid-07'];

export function Services() {
  const { language, t } = useLanguage();
  const [videoPreviewCards, setVideoPreviewCards] = useState<Partial<Record<ServiceId, boolean>>>({});

  const featuredReels = useMemo(
    () =>
      SERVICE_REEL_IDS.map((id) => VIDEO_WORKS.find((v) => v.id === id)).filter(
        (v): v is NonNullable<typeof v> => Boolean(v)
      ),
    []
  );

  const realResultPhotos = useMemo(
    () =>
      BEFORE_AFTER_WORKS.flatMap((pair) => [
        {
          id: `${pair.id}-before`,
          src: pair.beforeImage,
          badge: t.gallery.beforeLabel,
          isAfter: false,
          title: language === 'ar' ? pair.titleAr : pair.titleEn,
        },
        {
          id: `${pair.id}-after`,
          src: pair.afterImage,
          badge: t.gallery.afterLabel,
          isAfter: true,
          title: language === 'ar' ? pair.titleAr : pair.titleEn,
        },
      ]),
    [language, t.gallery.afterLabel, t.gallery.beforeLabel]
  );

  const toggleCardVideo = (serviceId: ServiceId) => {
    setVideoPreviewCards((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  return (
    <section id="services" className="bg-[#F5FAFC] py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#00A896] shadow-xs ring-1 ring-[#E8EFF3]">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#102A43] sm:mt-4 sm:text-4xl">
            {t.services.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#526572] sm:mt-4 sm:text-base">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* 8 Service Cards Grid */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName];
            const copy = t.services.items[service.id];
            const waUrl = getServiceWhatsAppUrl(copy.name, language);
            const showVideo = Boolean(service.video && videoPreviewCards[service.id]);

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#E8EFF3] bg-white shadow-[0_8px_24px_-14px_rgba(16,42,67,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00A896]/40 hover:shadow-[0_24px_48px_-18px_rgba(16,42,67,0.2)]"
              >
                {/* Card Photo / Optional Real Video */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#102A43]">
                  {showVideo && service.video ? (
                    <AutoPlayVideo
                      src={service.video}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <img
                      src={service.image}
                      alt={copy.alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102A43]/35 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-50" />

                  {/* Photo / Video Switch Pill for Services with Real Footage */}
                  {service.video && (
                    <button
                      type="button"
                      onClick={() => toggleCardVideo(service.id)}
                      className="absolute top-3 end-3 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/25 bg-[#102A43]/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md transition-colors hover:bg-[#00A896]"
                    >
                      {showVideo ? (
                        <>
                          <Camera className="h-3 w-3" />
                          <span>{t.services.photoMode}</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3 fill-current text-[#64DFDF]" />
                          <span>{t.services.videoMode}</span>
                        </>
                      )}
                    </button>
                  )}

                  {/* Clean Floating Icon */}
                  <div className="absolute bottom-3 start-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-[#00A896] shadow-md backdrop-blur-xs transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#102A43] transition-colors group-hover:text-[#00A896]">
                      {copy.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#526572]">
                      {copy.description}
                    </p>
                  </div>

                  {/* Book Service CTA */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F5FAFC] px-4 py-3 text-xs font-bold text-[#102A43] ring-1 ring-[#E8EFF3] transition-all duration-200 hover:bg-[#00A896] hover:text-white hover:ring-[#00A896]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#00A896] transition-colors group-hover:text-current" />
                    <span>{t.services.bookButton}</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Real Service Videos & On-Site Photos Showcase inside Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-3xl border border-[#E8EFF3] bg-white p-4 shadow-sm sm:mt-16 sm:p-8"
        >
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F7F5] px-3 py-1 text-xs font-bold text-[#00A896]">
                <Film className="h-3.5 w-3.5" />
                <span>{t.services.realVideoBadge}</span>
              </span>
              <h3 className="mt-2.5 text-xl font-extrabold text-[#102A43] sm:text-2xl">
                {t.services.mediaHeading}
              </h3>
              <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-[#526572] sm:text-sm">
                {t.services.mediaSubtitle}
              </p>
            </div>
          </div>

          {/* 4 Autoplay Cleaning Videos */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {featuredReels.map((video) => {
              const title = language === 'ar' ? video.titleAr : video.titleEn;
              const serviceName = language === 'ar' ? video.serviceNameAr : video.serviceNameEn;

              return (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-2xl border border-[#E8EFF3] bg-[#0B1F33] shadow-sm"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <AutoPlayVideo
                      src={video.src}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1F33]/92 via-[#0B1F33]/15 to-[#0B1F33]/25" />

                    <span className="absolute top-2.5 start-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0B1F33]/75 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00A896]" />
                      <span>{serviceName}</span>
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <h4 className="line-clamp-2 text-xs font-bold text-white sm:text-sm">
                        {title}
                      </h4>
                      <a
                        href={getServiceWhatsAppUrl(serviceName, language)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 rounded-lg bg-[#00A896] px-2.5 py-1.5 text-[11px] font-bold text-white transition-colors hover:bg-[#008F80]"
                      >
                        <MessageCircle className="h-3 w-3" />
                        <span>{t.services.bookButton}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4 Real On-Site Before & After Photos */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4 lg:grid-cols-4">
            {realResultPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl border border-[#E8EFF3] bg-[#F5FAFC] shadow-xs"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E8EFF3]">
                  <img
                    src={photo.src}
                    alt={`${photo.title} - ${photo.badge}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-transparent" />

                  <span
                    className={`absolute top-2.5 start-2.5 rounded-lg px-2.5 py-1 text-[10px] font-bold text-white shadow-sm sm:text-[11px] ${
                      photo.isAfter ? 'bg-[#00A896]' : 'bg-[#102A43]/85'
                    }`}
                  >
                    {photo.badge}
                  </span>

                  <p className="absolute inset-x-0 bottom-0 p-3 text-xs font-bold text-white sm:text-sm">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
