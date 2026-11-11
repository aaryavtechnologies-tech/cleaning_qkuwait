export type Language = 'ar' | 'en';

export const BUSINESS_INFO = {
  brandEn: 'Cleaning Q Kuwait',
  brandAr: 'شركة تنظيف بالكويت',
  phone1Display: '+965 60432138',
  phone1Href: 'tel:+96560432138',
  phone2Display: '+965 98992996',
  phone2Href: 'tel:+96598992996',
  whatsappNumber: '96560432138',
  whatsappBaseUrl: 'https://wa.me/96560432138',
  instagramHandle: '@cleaning_qkuwait',
  instagramUrl: 'https://www.instagram.com/cleaning_qkuwait/',
  mapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Nesto+Hypermarket,+Block+1,+Farwaniya,+Kuwait',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Nesto%20Hypermarket%20Block%201%20Farwaniya%20Kuwait&t=&z=16&ie=UTF8&iwloc=&output=embed',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppUrl(lang: Language): string {
  const message =
    lang === 'ar'
      ? 'مرحباً شركة تنظيف بالكويت (Cleaning Q Kuwait)، أود الاستفسار عن خدمات التنظيف وحجز موعد.'
      : 'Hello Cleaning Q Kuwait, I would like to inquire about your cleaning services and booking availability.';
  return buildWhatsAppUrl(message);
}

export function getServiceWhatsAppUrl(serviceName: string, lang: Language): string {
  const message =
    lang === 'ar'
      ? `مرحباً شركة تنظيف بالكويت، أود الاستفسار عن خدمة ${serviceName}.`
      : `Hello Cleaning Q Kuwait, I would like to inquire about your ${serviceName.toLowerCase()} service.`;
  return buildWhatsAppUrl(message);
}

export function getAreaWhatsAppUrl(areaName: string | null, lang: Language): string {
  if (lang === 'ar') {
    const message = areaName
      ? `مرحباً شركة تنظيف بالكويت، أود الاستفسار عن توفر خدمة التنظيف في منطقة ${areaName} بالكويت.`
      : 'مرحباً شركة تنظيف بالكويت، أود الاستفسار عن توفر خدمة التنظيف في منطقتي بالكويت.';
    return buildWhatsAppUrl(message);
  }

  const message = areaName
    ? `Hello Cleaning Q Kuwait, I would like to check service availability in ${areaName}, Kuwait.`
    : 'Hello Cleaning Q Kuwait, I would like to check service availability in my area in Kuwait.';
  return buildWhatsAppUrl(message);
}

export interface InquiryFormPayload {
  fullName: string;
  phone: string;
  service: string;
  area: string;
  preferredDate?: string;
  message?: string;
}

export function buildFormWhatsAppMessage(payload: InquiryFormPayload, lang: Language): string {
  const cleanName = payload.fullName.trim();
  const cleanPhone = payload.phone.trim();
  const cleanArea = payload.area.trim();
  const cleanDate = payload.preferredDate?.trim();
  const cleanNote = payload.message?.trim();

  if (lang === 'ar') {
    const lines = [
      'مرحباً شركة تنظيف بالكويت (Cleaning Q Kuwait)، أرغب في تقديم طلب استفسار / حجز خدمة تنظيف:',
      `• الاسم: ${cleanName}`,
      `• رقم الهاتف: ${cleanPhone}`,
      `• الخدمة المطلوبة: ${payload.service}`,
      `• المنطقة في الكويت: ${cleanArea}`,
    ];
    if (cleanDate) lines.push(`• التاريخ المفضل: ${cleanDate}`);
    if (cleanNote) lines.push(`• ملاحظات إضافية: ${cleanNote}`);
    return lines.join('\n');
  }

  const lines = [
    'Hello Cleaning Q Kuwait, I would like to submit a cleaning service inquiry:',
    `• Full Name: ${cleanName}`,
    `• Phone Number: ${cleanPhone}`,
    `• Service Required: ${payload.service}`,
    `• Area in Kuwait: ${cleanArea}`,
  ];
  if (cleanDate) lines.push(`• Preferred Date: ${cleanDate}`);
  if (cleanNote) lines.push(`• Additional Notes: ${cleanNote}`);
  return lines.join('\n');
}

