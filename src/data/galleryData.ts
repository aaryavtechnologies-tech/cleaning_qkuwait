export type GalleryCategory =
  | 'home'
  | 'sofa'
  | 'carpet'
  | 'kitchen'
  | 'commercial'
  | 'garden';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  image: string;
  spanClass?: string;
  titleEn: string;
  titleAr: string;
  captionEn: string;
  captionAr: string;
}

export interface BeforeAfterItem {
  id: string;
  category: GalleryCategory;
  beforeImage: string;
  afterImage: string;
  titleEn: string;
  titleAr: string;
  captionEn: string;
  captionAr: string;
}

export const BEFORE_AFTER_WORKS: BeforeAfterItem[] = [
  {
    id: 'ba-floor-1',
    category: 'home',
    beforeImage: '/images/work-floor-before.jpg',
    afterImage: '/images/work-floor-after.jpg',
    titleEn: 'Herringbone Room Floor Deep Wash',
    titleAr: 'تنظيف وجلي أرضيات الغرف (قبل وبعد)',
    captionEn:
      'On-site transformation removing heavy post-construction dust and residue from wood-look ceramic flooring.',
    captionAr:
      'نتيجة عمل حقيقية لإزالة مخلفات الغبار والجص بالكامل واستعادة نظافة ولمعان أرضيات السيراميك.',
  },
  {
    id: 'ba-bath-1',
    category: 'home',
    beforeImage: '/images/work-bath-before.jpg',
    afterImage: '/images/work-bath-after.jpg',
    titleEn: 'Bathroom Marble Tile & Drain Cleaning',
    titleAr: 'تنظيف أرضيات الحمام والصفاية (قبل وبعد)',
    captionEn:
      'Deep scrubbing marble-pattern bathroom floor tiles, grout joints, and floor drain to a spotless finish.',
    captionAr:
      'تنظيف عميق لبلاط الحمام وفواصل السيراميك والصفاية لإزالة البقع والأوساخ بالكامل.',
  },
];

/**
 * Easy-to-update gallery manifest.
 * Replace `image` paths with authentic Cleaning Q Kuwait project photos at any time.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-home-1',
    category: 'home',
    image: '/images/hero-luxury-living.jpg',
    spanClass: 'md:col-span-2 md:row-span-2',
    titleEn: 'Living Room & Marble Floor Care',
    titleAr: 'العناية بالصالات والأرضيات الرخامية',
    captionEn: 'Representative standard for bright reception salons, glass, and marble flooring.',
    captionAr: 'نموذج لمعايير العناية بصالات الاستقبال والأسطح الزجاجية والأرضيات الرخامية.',
  },
  {
    id: 'gal-sofa-1',
    category: 'sofa',
    image: '/images/service-sofa.jpg',
    titleEn: 'Sofa & Fabric Upholstery Care',
    titleAr: 'العناية بالكنب والمفروشات',
    captionEn: 'Deep upholstery refresh tailored for fabric sofas and lounge seating.',
    captionAr: 'عناية عميقة بأقمشة الكنب والوسائد للحفاظ على نظافة وانتعاش المجالس.',
  },
  {
    id: 'gal-kitchen-1',
    category: 'kitchen',
    image: '/images/service-kitchen.jpg',
    titleEn: 'Kitchen Deep Hygiene & Polishing',
    titleAr: 'التنظيف العميق للمطابخ',
    captionEn: 'Focused care for quartz counters, stainless steel surfaces, and fixtures.',
    captionAr: 'عناية مركزة لأسطح الكوارتز والستانلس ستيل والمغاسل والخزائن.',
  },
  {
    id: 'gal-carpet-1',
    category: 'carpet',
    image: '/images/service-carpet.jpg',
    titleEn: 'Deep Carpet Grooming & Washing',
    titleAr: 'تنظيف وغسيل السجاد',
    captionEn: 'Revitalizing carpet pile and removing embedded dust across home rooms.',
    captionAr: 'إنعاش ألياف السجاد وإزالة الغبار العالق لاستعادة المظهر النظيف.',
  },
  {
    id: 'gal-commercial-1',
    category: 'commercial',
    image: '/images/service-school.jpg',
    titleEn: 'School & Facility Floor Upkeep',
    titleAr: 'تنظيف المدارس والمرافق التعليمية',
    captionEn: 'Clean, organized classrooms, corridors, and shared facility spaces.',
    captionAr: 'فصول دراسية وممرات نظيفة ومرتبة لبيئة تعليمية صحية.',
  },
  {
    id: 'gal-garden-1',
    category: 'garden',
    image: '/images/service-garden.jpg',
    titleEn: 'Villa Courtyard & Garden Care',
    titleAr: 'تنظيف الحدائق والأحواش الخارجية',
    captionEn: 'Tidy stone pavers, patio glass, and inviting outdoor courtyard areas.',
    captionAr: 'مظاهر مرتبة لممرات الحجر والزجاج الخارجي والحدائق المنزلية.',
  },
  {
    id: 'gal-home-2',
    category: 'home',
    image: '/images/service-apartment.jpg',
    titleEn: 'Modern Apartment Detail Cleaning',
    titleAr: 'تنظيف الشقق السكنية الحديثة',
    captionEn: 'Detailed room-by-room cleaning for bright contemporary apartments.',
    captionAr: 'تنظيف متكامل للغرف والصالات في الشقق السكنية العصرية.',
  },
  {
    id: 'gal-carpet-2',
    category: 'carpet',
    image: '/images/service-rug.jpg',
    titleEn: 'Woven Area Rug Washing',
    titleAr: 'غسيل الزل والسجاد المنقوش',
    captionEn: 'Gentle washing focused on vibrant patterns and delicate rug edges.',
    captionAr: 'غسيل لطيف يحافظ على ألوان الزل وتفاصيله الدقيقة.',
  },
  {
    id: 'gal-house-1',
    category: 'home',
    image: '/images/service-house.jpg',
    titleEn: 'Villa Salon & Majlis Cleaning',
    titleAr: 'تنظيف الصالات والمجالس الواسعة',
    captionEn: 'Comprehensive polishing and seating care for family reception areas.',
    captionAr: 'تلميع شامل للأرضيات وعناية كاملة بمجالس الاستقبال والفلل.',
  },
];

