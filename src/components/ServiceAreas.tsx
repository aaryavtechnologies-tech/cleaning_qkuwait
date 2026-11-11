import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { getAreaWhatsAppUrl } from '../utils/whatsapp';

interface MapPinCoord {
  id: string;
  cx: number;
  cy: number;
  labelAlign: 'start' | 'end' | 'middle';
  dx: number;
  dy: number;
}

const KUWAIT_MAP_PINS: MapPinCoord[] = [
  { id: 'jahra', cx: 112, cy: 130, labelAlign: 'middle', dx: 0, dy: 20 },
  { id: 'capital', cx: 218, cy: 132, labelAlign: 'start', dx: 11, dy: 4 },
  { id: 'farwaniya', cx: 198, cy: 162, labelAlign: 'end', dx: -11, dy: 4 },
  { id: 'hawalli', cx: 244, cy: 158, labelAlign: 'start', dx: 11, dy: 4 },
  { id: 'mubarak', cx: 240, cy: 188, labelAlign: 'start', dx: 11, dy: 4 },
  { id: 'ahmadi', cx: 232, cy: 228, labelAlign: 'start', dx: 11, dy: 4 },
];

export function ServiceAreas() {
  const { language, t } = useLanguage();
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);

  const selectedArea = t.serviceAreas.areas.find((a) => a.id === selectedAreaId) ?? null;
  const whatsappUrl = getAreaWhatsAppUrl(selectedArea ? selectedArea.name : null, language);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Left / Start: Content & Interactive Area Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E6F7F5] px-4 py-1.5 text-xs font-bold text-[#00A896]">
              <Navigation className="h-3.5 w-3.5" />
              <span>{t.serviceAreas.eyebrow}</span>
            </span>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#102A43] sm:mt-4 sm:text-4xl">
              {t.serviceAreas.heading}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#526572] sm:mt-4 sm:text-base">
              {t.serviceAreas.description}
            </p>

            {/* Selectable Area Chips */}
            <p className="mt-7 text-xs font-bold uppercase tracking-wider text-[#102A43]/75">
              {t.serviceAreas.selectAreaHint}
            </p>

            <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.serviceAreas.areas.map((area) => {
                const isSelected = area.id === selectedAreaId;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() =>
                      setSelectedAreaId((prev) => (prev === area.id ? null : area.id))
                    }
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3.5 text-start transition-all duration-200 ${
                      isSelected
                        ? 'border-[#00A896] bg-[#E6F7F5]/75 shadow-sm'
                        : 'border-[#E8EFF3] bg-[#F5FAFC] hover:border-[#00A896]/45 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isSelected
                            ? 'bg-[#00A896] text-white'
                            : 'bg-white text-[#00A896] ring-1 ring-[#E8EFF3]'
                        }`}
                      >
                        {isSelected ? <Check className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#102A43]">{area.name}</p>
                        <p className="text-xs text-[#526572]">{area.governorate}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Availability CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-[#00A896] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#00A896]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#008F80] sm:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{t.serviceAreas.cta}</span>
              </a>

              {selectedArea && (
                <span className="rounded-xl bg-[#F5FAFC] px-3.5 py-2 text-xs font-semibold text-[#102A43] ring-1 ring-[#E8EFF3]">
                  {t.serviceAreas.selectedPrefix}{' '}
                  <strong className="text-[#00A896]">{selectedArea.name}</strong>
                </span>
              )}
            </div>
          </motion.div>

          {/* Right / End: Kuwait-Inspired Visual Map Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#E8EFF3] bg-gradient-to-br from-[#102A43] via-[#102A43] to-[#0B1F33] p-6 text-white shadow-2xl shadow-[#102A43]/15 sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-navy-grid opacity-70"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold text-[#64DFDF]">
                    {language === 'ar' ? 'دولة الكويت' : 'State of Kuwait'}
                  </span>
                  <span className="text-xs font-medium text-white/70">
                    {language === 'ar' ? 'اختر منطقة على الخريطة' : 'Select a region'}
                  </span>
                </div>

                {/* Stylized Kuwait Territory & Gulf Coastline SVG */}
                <svg
                  viewBox="0 0 365 290"
                  className="mt-4 w-full"
                  role="img"
                  aria-label={
                    language === 'ar'
                      ? 'خريطة توضيحية لمحافظات الكويت'
                      : 'Illustrative coverage map of Kuwait governorates'
                  }
                >
                  {/* Subtle Arabian Gulf water sheen */}
                  <defs>
                    <radialGradient id="gulfGlow" cx="72%" cy="45%" r="60%">
                      <stop offset="0%" stopColor="#00A896" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#0B1F33" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="365" height="290" fill="url(#gulfGlow)" rx="16" />

                  {/* Stylized Kuwait Landmass */}
                  <path
                    d="M34 108 L92 54 L164 40 L218 68 L208 112 L200 134 L238 146 L256 166 L248 218 L260 248 L202 242 L134 246 L76 212 L30 168 Z"
                    fill="#1A3A57"
                    stroke="#00A896"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  {/* Bubiyan Island hint */}
                  <path
                    d="M224 54 L256 42 L270 76 L246 100 L224 84 Z"
                    fill="#17344E"
                    stroke="#00A896"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                  />

                  {/* Interactive Pins */}
                  {KUWAIT_MAP_PINS.map((pin) => {
                    const areaObj = t.serviceAreas.areas.find((a) => a.id === pin.id);
                    const isSelected = selectedAreaId === pin.id;

                    return (
                      <g
                        key={pin.id}
                        className="cursor-pointer"
                        onClick={() =>
                          setSelectedAreaId((prev) => (prev === pin.id ? null : pin.id))
                        }
                      >
                        <circle
                          cx={pin.cx}
                          cy={pin.cy}
                          r={isSelected ? 17 : 12}
                          fill="#00A896"
                          fillOpacity={isSelected ? 0.35 : 0.18}
                        />
                        <circle
                          cx={pin.cx}
                          cy={pin.cy}
                          r={isSelected ? 7 : 5.5}
                          fill={isSelected ? '#E9B44C' : '#64DFDF'}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                        {areaObj && (
                          <text
                            x={pin.cx + pin.dx}
                            y={pin.cy + pin.dy}
                            fill={isSelected ? '#E9B44C' : '#E8EFF3'}
                            fontSize="9.5"
                            fontWeight={isSelected ? '700' : '600'}
                            textAnchor={pin.labelAlign}
                          >
                            {areaObj.governorate}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
