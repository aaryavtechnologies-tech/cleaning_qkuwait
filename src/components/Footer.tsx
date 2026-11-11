import { ArrowUp, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { SERVICES_LIST } from '../data/servicesData';
import { BUSINESS_INFO, getGeneralWhatsAppUrl, getServiceWhatsAppUrl } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';
import { InstagramIcon } from './InstagramIcon';

export function Footer() {
  const { language, t } = useLanguage();

  const quickLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#contact', label: t.nav.contact },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F33] pt-16 pb-24 text-white md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <BrandLogo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {t.footer.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={getGeneralWhatsAppUrl(language)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-[#00A896]"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-[#00A896]"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={BUSINESS_INFO.phone1Href}
                aria-label={BUSINESS_INFO.phone1Display}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-[#00A896]"
              >
                <Phone className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wide text-white">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-white/70 transition-colors hover:text-[#64DFDF]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wide text-white">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2">
              {SERVICES_LIST.map((service) => {
                const name = t.services.items[service.id].name;
                return (
                  <li key={service.id}>
                    <a
                      href={getServiceWhatsAppUrl(name, language)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 transition-colors hover:text-[#64DFDF]"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wide text-white">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a
                  href={BUSINESS_INFO.phone1Href}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#64DFDF]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#00A896]" />
                  <span dir="ltr">{BUSINESS_INFO.phone1Display}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.phone2Href}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#64DFDF]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#00A896]" />
                  <span dir="ltr">{BUSINESS_INFO.phone2Display}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#64DFDF]"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-[#00A896]" />
                  <span dir="ltr">{BUSINESS_INFO.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-[#64DFDF]"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00A896]" />
                  <span>{t.footer.officeAddress}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-white/60 sm:text-start">
            {t.footer.copyright}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold text-white transition-colors hover:border-[#00A896] hover:bg-[#00A896]"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
