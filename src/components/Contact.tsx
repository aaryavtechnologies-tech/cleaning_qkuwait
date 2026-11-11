import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { SERVICES_LIST } from '../data/servicesData';
import {
  BUSINESS_INFO,
  buildFormWhatsAppMessage,
  buildWhatsAppUrl,
  getGeneralWhatsAppUrl,
} from '../utils/whatsapp';
import { InstagramIcon } from './InstagramIcon';

interface FormState {
  fullName: string;
  phone: string;
  service: string;
  area: string;
  preferredDate: string;
  message: string;
}

type FormErrors = Partial<Record<'fullName' | 'phone' | 'service' | 'area', string>>;

export function Contact() {
  const { language, isRtl, t } = useLanguage();
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    service: '',
    area: '',
    preferredDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [preparedText, setPreparedText] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const generalWaUrl = getGeneralWhatsAppUrl(language);

  const serviceOptions = [
    ...SERVICES_LIST.map((item) => ({
      value: t.services.items[item.id].name,
      label: t.services.items[item.id].name,
    })),
    {
      value: t.contact.fields.generalServiceOption,
      label: t.contact.fields.generalServiceOption,
    },
  ];

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = t.contact.errors.fullNameRequired;
    }

    const digitsOnly = form.phone.replace(/\D/g, '');
    if (!form.phone.trim()) {
      nextErrors.phone = t.contact.errors.phoneRequired;
    } else if (digitsOnly.length < 8) {
      nextErrors.phone = t.contact.errors.phoneInvalid;
    }

    if (!form.service.trim()) {
      nextErrors.service = t.contact.errors.serviceRequired;
    }

    if (!form.area.trim()) {
      nextErrors.area = t.contact.errors.areaRequired;
    }

    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const formattedMessage = buildFormWhatsAppMessage(
      {
        fullName: form.fullName,
        phone: form.phone,
        service: form.service,
        area: form.area,
        preferredDate: form.preferredDate,
        message: form.message,
      },
      language
    );
    const waUrl = buildWhatsAppUrl(formattedMessage);

    setPreparedText(formattedMessage);
    setSubmittedUrl(waUrl);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = async () => {
    if (!preparedText) return;
    try {
      await navigator.clipboard.writeText(preparedText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard failures
    }
  };

  const inputBaseClass =
    'mt-1.5 w-full rounded-xl border bg-[#F5FAFC] px-4 py-3 text-sm text-[#1C2B33] placeholder-[#526572]/65 transition-colors focus:bg-white focus:outline-none focus:ring-2';

  return (
    <section id="contact" className="bg-[#F5FAFC] py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#00A896] ring-1 ring-[#E8EFF3]">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#102A43] sm:mt-4 sm:text-4xl">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#526572] sm:mt-4 sm:text-base">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Two-Column Conversion Grid */}
        <div className="mt-9 grid grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-12 lg:gap-10">
          {/* Contact Cards & Location Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="space-y-5 lg:col-span-5"
          >
            {/* Primary WhatsApp Highlight Card */}
            <div className="rounded-3xl bg-[#102A43] p-6 text-white shadow-xl shadow-[#102A43]/15 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00A896] text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t.contact.whatsappCardTitle}</h3>
                  <p className="mt-1 text-sm text-white/75">{t.contact.whatsappCardDesc}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={generalWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#00A896] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#008F80]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.contact.whatsappBtn}</span>
                </a>
                <a
                  href={BUSINESS_INFO.phone1Href}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
                >
                  <Phone className="h-4 w-4 text-[#64DFDF]" />
                  <span>{t.contact.callBtn}</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Numbers + Instagram */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={BUSINESS_INFO.phone1Href}
                className="flex items-center justify-between rounded-2xl border border-[#E8EFF3] bg-white p-4 transition-all hover:border-[#00A896]/50 hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F5] text-[#00A896]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#526572]">
                      {t.contact.phone1Label}
                    </p>
                    <p dir="ltr" className="text-base font-extrabold text-[#102A43]">
                      {BUSINESS_INFO.phone1Display}
                    </p>
                  </div>
                </div>
                <span className="rounded-lg bg-[#F5FAFC] px-3 py-1.5 text-xs font-bold text-[#00A896]">
                  {t.contact.callBtn}
                </span>
              </a>

              <a
                href={BUSINESS_INFO.phone2Href}
                className="flex items-center justify-between rounded-2xl border border-[#E8EFF3] bg-white p-4 transition-all hover:border-[#00A896]/50 hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F5] text-[#00A896]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#526572]">
                      {t.contact.phone2Label}
                    </p>
                    <p dir="ltr" className="text-base font-extrabold text-[#102A43]">
                      {BUSINESS_INFO.phone2Display}
                    </p>
                  </div>
                </div>
                <span className="rounded-lg bg-[#F5FAFC] px-3 py-1.5 text-xs font-bold text-[#00A896]">
                  {t.contact.callBtn}
                </span>
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#E8EFF3] bg-white p-4 transition-all hover:border-[#00A896]/50 hover:shadow-md sm:col-span-2 lg:col-span-1"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F5] text-[#00A896]">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#526572]">
                      {t.contact.instagramLabel}
                    </p>
                    <p dir="ltr" className="text-sm font-extrabold text-[#102A43]">
                      {BUSINESS_INFO.instagramHandle}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#526572]" />
              </a>
            </div>

            {/* Office Address + Google Map Card */}
            <div className="overflow-hidden rounded-3xl border border-[#E8EFF3] bg-white shadow-xs">
              <div className="p-5">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F5] text-[#00A896]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#00A896]">
                      {t.contact.officeLabel}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-[#102A43]">
                      {t.contact.officeAddress}
                    </p>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#E8EFF3] bg-[#F5FAFC] px-4 py-2.5 text-xs font-bold text-[#102A43] transition-colors hover:border-[#00A896] hover:bg-[#E6F7F5]/60 hover:text-[#00A896]"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>{t.contact.getDirections}</span>
                </a>
              </div>

              {/* Verified Query Map Embed for Nesto Hypermarket Block 1 Farwaniya */}
              <div className="h-48 w-full border-t border-[#E8EFF3] bg-[#E8EFF3]">
                <iframe
                  title={t.contact.mapTitle}
                  src={BUSINESS_INFO.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-[#E8EFF3] bg-white p-6 shadow-[0_20px_50px_-22px_rgba(16,42,67,0.14)] sm:p-9">
              <h3 className="text-2xl font-extrabold text-[#102A43]">
                {t.contact.formTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#526572]">
                {t.contact.formSubtitle}
              </p>

              {submittedUrl ? (
                <div className="mt-8 rounded-2xl border border-[#00A896]/30 bg-[#E6F7F5]/55 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#00A896]" />
                    <div>
                      <h4 className="text-lg font-bold text-[#102A43]">
                        {t.contact.successTitle}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#526572]">
                        {t.contact.successBody}
                      </p>
                    </div>
                  </div>

                  <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-[#E8EFF3] bg-white p-4 font-sans text-xs leading-relaxed text-[#1C2B33]">
                    {preparedText}
                  </pre>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#00A896] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#008F80]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{t.contact.openWhatsAppAgain}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#E8EFF3] bg-white px-4 py-3 text-sm font-bold text-[#102A43] hover:bg-[#F5FAFC]"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-[#00A896]" />
                      ) : (
                        <Copy className="h-4 w-4 text-[#526572]" />
                      )}
                      <span>{copied ? t.contact.copiedMessage : t.contact.copyMessage}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmittedUrl(null)}
                      className="cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold text-[#526572] hover:text-[#102A43]"
                    >
                      {t.contact.newInquiry}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="contact-fullname"
                        className="block text-xs font-bold text-[#102A43]"
                      >
                        {t.contact.fields.fullName} <span className="text-[#00A896]">*</span>
                      </label>
                      <input
                        id="contact-fullname"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => {
                          setForm({ ...form, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder={t.contact.fields.fullNamePlaceholder}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'err-fullname' : undefined}
                        className={`${inputBaseClass} ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-[#E8EFF3] focus:border-[#00A896] focus:ring-[#00A896]/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="err-fullname" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold text-[#102A43]"
                      >
                        {t.contact.fields.phone} <span className="text-[#00A896]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        dir="ltr"
                        required
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder={t.contact.fields.phonePlaceholder}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'err-phone' : undefined}
                        className={`${inputBaseClass} ${isRtl ? 'text-right' : 'text-left'} ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-[#E8EFF3] focus:border-[#00A896] focus:ring-[#00A896]/20'
                        }`}
                      />
                      {errors.phone && (
                        <p id="err-phone" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Service Required */}
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-bold text-[#102A43]"
                      >
                        {t.contact.fields.service} <span className="text-[#00A896]">*</span>
                      </label>
                      <select
                        id="contact-service"
                        required
                        value={form.service}
                        onChange={(e) => {
                          setForm({ ...form, service: e.target.value });
                          if (errors.service) setErrors({ ...errors, service: undefined });
                        }}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? 'err-service' : undefined}
                        className={`${inputBaseClass} ${
                          errors.service
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-[#E8EFF3] focus:border-[#00A896] focus:ring-[#00A896]/20'
                        }`}
                      >
                        <option value="">{t.contact.fields.servicePlaceholder}</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p id="err-service" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Area in Kuwait */}
                    <div>
                      <label
                        htmlFor="contact-area"
                        className="block text-xs font-bold text-[#102A43]"
                      >
                        {t.contact.fields.area} <span className="text-[#00A896]">*</span>
                      </label>
                      <input
                        id="contact-area"
                        type="text"
                        required
                        value={form.area}
                        onChange={(e) => {
                          setForm({ ...form, area: e.target.value });
                          if (errors.area) setErrors({ ...errors, area: undefined });
                        }}
                        placeholder={t.contact.fields.areaPlaceholder}
                        aria-invalid={Boolean(errors.area)}
                        aria-describedby={errors.area ? 'err-area' : undefined}
                        className={`${inputBaseClass} ${
                          errors.area
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-[#E8EFF3] focus:border-[#00A896] focus:ring-[#00A896]/20'
                        }`}
                      />
                      {errors.area && (
                        <p id="err-area" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.area}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="contact-date"
                      className="block text-xs font-bold text-[#102A43]"
                    >
                      {t.contact.fields.preferredDate}
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      className={`${inputBaseClass} border-[#E8EFF3] focus:border-[#00A896] focus:ring-[#00A896]/20`}
                    />
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-[#102A43]"
                    >
                      {t.contact.fields.message}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t.contact.fields.messagePlaceholder}
                      className={`${inputBaseClass} resize-y border-[#E8EFF3] focus:border-[#00A896] focus:ring-[#00A896]/20`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-[#00A896] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#00A896]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#008F80]"
                  >
                    <Send className="h-4.5 w-4.5" />
                    <span>{t.contact.submitButton}</span>
                  </button>

                  <p className="text-center text-xs text-[#526572]">{t.contact.formNote}</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
