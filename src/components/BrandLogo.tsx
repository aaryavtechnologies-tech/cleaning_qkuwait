import { useLanguage } from '../context/useLanguage';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
  hideSubtitleOnMobile?: boolean;
}

export function BrandLogo({
  variant = 'dark',
  compact = false,
  hideSubtitleOnMobile = false,
}: BrandLogoProps) {
  const { language } = useLanguage();
  const isLightText = variant === 'light';

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 select-none">
      {/* Custom Minimal Q + Sparkle Emblem */}
      <div
        className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl transition-colors duration-300 ${
          isLightText
            ? 'bg-white/12 ring-1 ring-white/25 backdrop-blur-md'
            : 'bg-[#102A43] shadow-sm shadow-[#102A43]/15'
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 40" className="h-5 w-5 sm:h-7 sm:w-7" fill="none">
          {/* Modern Letter Q Ring */}
          <circle
            cx="18.5"
            cy="20"
            r="9.5"
            stroke="#FFFFFF"
            strokeWidth="3.2"
          />
          {/* Cleanliness Sweep Q Tail */}
          <path
            d="M23.5 24.5L30.5 31.5"
            stroke="#00A896"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          {/* Sparkle Gleam */}
          <path
            d="M30 7.5L31.1 10.4L34 11.5L31.1 12.6L30 15.5L28.9 12.6L26 11.5L28.9 10.4L30 7.5Z"
            fill="#E9B44C"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-tight">
        <span
          className={`whitespace-nowrap text-[13px] font-extrabold tracking-tight sm:text-lg transition-colors duration-300 ${
            isLightText ? 'text-white' : 'text-[#102A43]'
          }`}
          dir="ltr"
        >
          Cleaning <span className="text-[#00A896]">Q</span> Kuwait
        </span>
        {!compact && (
          <span
            className={`whitespace-nowrap text-[10px] font-semibold sm:text-[11px] transition-colors duration-300 ${
              hideSubtitleOnMobile ? 'hidden sm:block ' : ''
            }${isLightText ? 'text-white/75' : 'text-[#526572]'}`}
          >
            {language === 'ar' ? 'شركة تنظيف بالكويت' : 'Professional Cleaning Services'}
          </span>
        )}
      </div>
    </div>
  );
}
