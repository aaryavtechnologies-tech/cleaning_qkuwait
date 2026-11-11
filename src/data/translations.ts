import type { Language } from '../utils/whatsapp';

export interface TranslationSchema {
  seo: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    whyUs: string;
    ourWork: string;
    contact: string;
    whatsapp: string;
    callNow: string;
    toggleLabel: string;
    switchTo: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    supportingText: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: {
      professional: string;
      kuwaitWide: string;
      fastResponse: string;
    };
    scrollCue: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    locationLabel: string;
    locationValue: string;
    cta: string;
    secondaryCta: string;
    imageAlt: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  services: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    bookButton: string;
    photoMode: string;
    videoMode: string;
    mediaHeading: string;
    mediaSubtitle: string;
    realVideoBadge: string;
    items: Record<
      | 'apartment'
      | 'house'
      | 'carpet'
      | 'rug'
      | 'sofa'
      | 'kitchen'
      | 'school'
      | 'garden',
      {
        name: string;
        description: string;
        alt: string;
      }
    >;
  };
  benefits: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    realResultsTitle: string;
    realResultsBadge: string;
    beforeLabel: string;
    afterLabel: string;
    inspectBeforeLabel: string;
    inspectAfterLabel: string;
    showcaseNotice: string;
    allFilter: string;
    zoomLabel: string;
    bookSimilar: string;
    closeLightbox: string;
    prevImage: string;
    nextImage: string;
    categories: Record<
      'home' | 'sofa' | 'carpet' | 'kitchen' | 'commercial' | 'garden',
      string
    >;
  };
  videos: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    realWorkBadge: string;
    allFilter: string;
    showMore: string;
    showLess: string;
    expandVideo: string;
    bookService: string;
    closeModal: string;
    prevVideo: string;
    nextVideo: string;
    categories: Record<'sofa' | 'floor' | 'kitchen', string>;
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    cta: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  serviceAreas: {
    eyebrow: string;
    heading: string;
    description: string;
    selectAreaHint: string;
    selectedPrefix: string;
    cta: string;
    areas: Array<{
      id: string;
      name: string;
      governorate: string;
    }>;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    phone1Label: string;
    phone2Label: string;
    whatsappCardTitle: string;
    whatsappCardDesc: string;
    whatsappBtn: string;
    callBtn: string;
    instagramLabel: string;
    instagramAction: string;
    officeLabel: string;
    officeAddress: string;
    getDirections: string;
    mapTitle: string;
    formTitle: string;
    formSubtitle: string;
    formNote: string;
    fields: {
      fullName: string;
      fullNamePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      service: string;
      servicePlaceholder: string;
      generalServiceOption: string;
      area: string;
      areaPlaceholder: string;
      preferredDate: string;
      message: string;
      messagePlaceholder: string;
    };
    errors: {
      fullNameRequired: string;
      phoneRequired: string;
      phoneInvalid: string;
      serviceRequired: string;
      areaRequired: string;
    };
    submitButton: string;
    successTitle: string;
    successBody: string;
    openWhatsAppAgain: string;
    copyMessage: string;
    copiedMessage: string;
    newInquiry: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    officeAddress: string;
    backToTop: string;
    copyright: string;
  };
  floating: {
    whatsappTooltip: string;
    whatsappAria: string;
    mobileWhatsapp: string;
    mobileCall: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    seo: {
      title: 'Cleaning Q Kuwait | Professional Home, Sofa & Carpet Cleaning',
      description:
        'Professional apartment, house, sofa, carpet, kitchen, school and garden cleaning services across Kuwait. Contact Cleaning Q Kuwait to inquire and book.',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      whyUs: 'Why Choose Us',
      ourWork: 'Our Work',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      callNow: 'Call Now',
      toggleLabel: 'Switch language',
      switchTo: 'عربي',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    hero: {
      badge: 'Residential & Commercial Care • Kuwait',
      headline: 'Professional Cleaning Services Across Kuwait',
      subheadline: 'خدمات تنظيف احترافية في جميع أنحاء الكويت',
      supportingText:
        'From spotless homes to refreshed sofas and carpets, we provide reliable, professional cleaning services throughout Kuwait.',
      primaryCta: 'Book Cleaning via WhatsApp',
      secondaryCta: 'Call Now',
      highlights: {
        professional: 'Professional Cleaning',
        kuwaitWide: 'Kuwait-Wide Service',
        fastResponse: 'Fast Response',
      },
      scrollCue: 'Explore Services',
      imageAlt: 'Spotless modern luxury living room interior in Kuwait',
    },
    about: {
      eyebrow: 'About Cleaning Q Kuwait',
      heading: 'Your Trusted Cleaning Partner in Kuwait',
      paragraph1:
        'Cleaning Q Kuwait provides comprehensive, attentive cleaning solutions for residential and commercial spaces throughout Kuwait. Whether refreshing an apartment, preparing a family home, or maintaining school facilities and outdoor gardens, we focus on meticulous care and dependable service.',
      paragraph2:
        'Our services span everyday residential spaces as well as deep upholstery, carpet, rug, and kitchen cleaning—delivered with straightforward communication, competitive pricing, and quick responses to every inquiry.',
      locationLabel: 'Farwaniya Office',
      locationValue: 'Office 30, Old Nesto Hyper Building, Block 1, Farwaniya',
      cta: 'Inquire on WhatsApp',
      secondaryCta: 'View All Services',
      imageAlt: 'Cleaning specialist detailing a modern marble kitchen counter',
      cards: [
        {
          title: 'Home & Facility Care',
          description:
            'Tailored cleaning for apartments, houses, kitchens, schools, and gardens.',
        },
        {
          title: 'Upholstery & Floor Focus',
          description:
            'Dedicated care for sofas, fitted carpets, and delicate area rugs.',
        },
        {
          title: 'Clear & Quick Booking',
          description:
            'Direct phone and WhatsApp communication to arrange your preferred schedule.',
        },
      ],
    },
    services: {
      eyebrow: 'Our Cleaning Services',
      heading: 'Cleaning Solutions for Every Space',
      subtitle:
        'Select any service below to open a prefilled WhatsApp inquiry with our team for availability and booking.',
      bookButton: 'Book This Service',
      photoMode: 'Photo',
      videoMode: 'Real Video',
      mediaHeading: 'Real Service Videos & Before/After Photos',
      mediaSubtitle:
        'Watch live cleaning footage and real before-and-after results directly from our cleaning teams in Kuwait.',
      realVideoBadge: 'Live Clip',
      items: {
        apartment: {
          name: 'Apartment Cleaning',
          description:
            'Thorough floor-to-ceiling cleaning for living areas, bedrooms, bathrooms, and glass surfaces.',
          alt: 'Freshly cleaned modern apartment living and dining area',
        },
        house: {
          name: 'House Cleaning',
          description:
            'Complete residential cleaning designed for multi-room homes, reception salons, and family spaces.',
          alt: 'Spotless spacious modern Kuwaiti family villa salon',
        },
        carpet: {
          name: 'Carpet Cleaning',
          description:
            'Deep fiber cleaning to lift embedded dust, refresh texture, and restore clean indoor comfort.',
          alt: 'Deep-cleaned plush carpet showing crisp groomed texture',
        },
        rug: {
          name: 'Rug Washing',
          description:
            'Careful washing and stain attention to preserve rug colors, woven detail, and soft underfoot feel.',
          alt: 'Freshly washed patterned luxury area rug on polished floor',
        },
        sofa: {
          name: 'Sofa & Upholstery Cleaning',
          description:
            'Targeted fabric and cushion care that revitalizes seating areas while protecting delicate upholstery.',
          alt: 'Immaculate cream sectional sofa after deep upholstery care',
        },
        kitchen: {
          name: 'Kitchen Deep Cleaning',
          description:
            'Focused degreasing and sanitization for countertops, cabinets, hoods, backsplashes, and sinks.',
          alt: 'Sparkling deep-cleaned luxury kitchen with polished countertops',
        },
        school: {
          name: 'School Cleaning',
          description:
            'Consistent, organized cleaning for classrooms, corridors, and shared educational spaces.',
          alt: 'Clean sunlit school classroom and polished corridor floor',
        },
        garden: {
          name: 'Garden Cleaning',
          description:
            'Outdoor courtyard, patio paver, and garden upkeep to keep exterior spaces neat and welcoming.',
          alt: 'Clean luxury villa garden patio and manicured courtyard',
        },
      },
    },
    benefits: {
      eyebrow: 'Why Choose Us',
      heading: 'Why Choose Cleaning Q Kuwait?',
      subtitle:
        'Designed around convenience, versatility, and attentive customer communication across Kuwait.',
      items: [
        {
          id: 'convenient',
          title: 'Convenient Cleaning Solutions',
          description:
            'Flexible cleaning support organized around your space, household routine, or facility schedule.',
        },
        {
          id: 'wide-range',
          title: 'Wide Range of Services',
          description:
            'One dependable contact for apartments, villas, sofas, carpets, rugs, kitchens, schools, and gardens.',
        },
        {
          id: 'coverage',
          title: 'Service Across Kuwait',
          description:
            'Serving residential and commercial neighborhoods across Kuwait’s governorates.',
        },
        {
          id: 'easy-booking',
          title: 'Easy Booking',
          description:
            'Book directly via WhatsApp, phone call, or our quick online inquiry builder in moments.',
        },
        {
          id: 'fast-inquiry',
          title: 'Fast Inquiry Process',
          description:
            'Direct lines to our team so you receive prompt attention regarding scheduling and details.',
        },
        {
          id: 'pricing',
          title: 'Competitive Pricing',
          description:
            'Clear, competitive pricing tailored to the type and scope of cleaning your space requires.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Service Standards Showcase',
      heading: 'Our Cleaning Work & Standards',
      subtitle:
        'Explore real on-site cleaning results across Kuwait alongside representative visuals for residential, upholstery, kitchen, school, and outdoor categories.',
      realResultsTitle: 'Real Before & After Results',
      realResultsBadge: 'Real Site Photos',
      beforeLabel: 'Before',
      afterLabel: 'After',
      inspectBeforeLabel: 'Inspect before photo',
      inspectAfterLabel: 'Inspect after photo',
      showcaseNotice:
        'Includes authentic before-and-after project photos from our Kuwait cleaning team alongside representative category visuals.',
      allFilter: 'All Spaces',
      zoomLabel: 'Inspect image',
      bookSimilar: 'Book This Category',
      closeLightbox: 'Close preview',
      prevImage: 'Previous image',
      nextImage: 'Next image',
      categories: {
        home: 'Home Cleaning',
        sofa: 'Sofa Cleaning',
        carpet: 'Carpet Washing',
        kitchen: 'Kitchen Cleaning',
        commercial: 'Commercial Cleaning',
        garden: 'Garden Cleaning',
      },
    },
    videos: {
      eyebrow: 'Live Work Showcase',
      heading: 'See Our Cleaning Team in Action',
      subtitle:
        'Real on-site video clips from Cleaning Q Kuwait—herringbone floor scrubbing, room restoration, deep sofa extraction, and kitchen shining.',
      realWorkBadge: 'Real Work',
      allFilter: 'All Videos',
      showMore: 'View All 15 Videos',
      showLess: 'Show Featured (8)',
      expandVideo: 'Watch full video',
      bookService: 'Book This Service',
      closeModal: 'Close video player',
      prevVideo: 'Previous video',
      nextVideo: 'Next video',
      categories: {
        sofa: 'Sofa & Upholstery',
        floor: 'Floor Scrubbing',
        kitchen: 'Kitchen & Detailing',
      },
    },
    howItWorks: {
      eyebrow: 'Simple 3-Step Process',
      heading: 'How Our Service Works',
      subtitle:
        'From first message to a freshly cleaned space—straightforward booking without unnecessary complexity.',
      cta: 'Start Your Inquiry Now',
      steps: [
        {
          number: '01',
          title: 'Contact Us',
          description: 'Contact our company directly through WhatsApp or phone call.',
        },
        {
          number: '02',
          title: 'Tell Us Your Requirements',
          description:
            'Share your location in Kuwait, cleaning needs, and preferred appointment time.',
        },
        {
          number: '03',
          title: 'Confirm Your Cleaning',
          description:
            'Our team will discuss availability, pricing details, and confirm your booking.',
        },
      ],
    },
    serviceAreas: {
      eyebrow: 'Kuwait Coverage',
      heading: 'Serving Customers Across Kuwait',
      description:
        'Cleaning Q Kuwait serves residential homes, apartments, schools, and facilities throughout Kuwait. Select an area below or inquire directly to confirm service availability in your neighborhood.',
      selectAreaHint: 'Select an area to tailor your WhatsApp inquiry:',
      selectedPrefix: 'Selected area:',
      cta: 'Check Service Availability',
      areas: [
        { id: 'capital', name: 'Kuwait City & Capital', governorate: 'Al Asimah' },
        { id: 'hawalli', name: 'Hawalli & Salmiya', governorate: 'Hawalli' },
        { id: 'farwaniya', name: 'Farwaniya & Khaitan', governorate: 'Farwaniya' },
        { id: 'mubarak', name: 'Mubarak Al-Kabeer', governorate: 'Mubarak Al-Kabeer' },
        { id: 'ahmadi', name: 'Ahmadi & Fahaheel', governorate: 'Al Ahmadi' },
        { id: 'jahra', name: 'Al Jahra', governorate: 'Al Jahra' },
      ],
    },
    testimonials: {
      eyebrow: 'Client Feedback',
      heading: 'Customer Testimonials',
      subtitle: 'Verified client experiences shared with Cleaning Q Kuwait.',
    },
    contact: {
      eyebrow: 'Contact & Booking',
      heading: 'Ready for a Cleaner Space?',
      subtitle:
        'Contact Cleaning Q Kuwait today and let us help you find the right cleaning service.',
      phone1Label: 'Primary Phone & WhatsApp',
      phone2Label: 'Secondary Phone',
      whatsappCardTitle: 'Instant WhatsApp Booking',
      whatsappCardDesc: 'Message us directly for quick scheduling and pricing inquiries.',
      whatsappBtn: 'WhatsApp Us',
      callBtn: 'Call Now',
      instagramLabel: 'Instagram',
      instagramAction: 'Follow @cleaning_qkuwait',
      officeLabel: 'Office Location',
      officeAddress: 'Office 30, Old Nesto Hyper Building, Block 1, Farwaniya, Kuwait',
      getDirections: 'Get Directions',
      mapTitle: 'Cleaning Q Kuwait Farwaniya office area map',
      formTitle: 'Request a Cleaning Inquiry',
      formSubtitle:
        'Fill in your details below to generate an instant prefilled WhatsApp inquiry with our team.',
      formNote: 'Submitting opens WhatsApp with your details—no account or email wait required.',
      fields: {
        fullName: 'Full Name',
        fullNamePlaceholder: 'Enter your full name',
        phone: 'Phone Number',
        phonePlaceholder: '+965 XXXX XXXX',
        service: 'Service Required',
        servicePlaceholder: 'Select a cleaning service',
        generalServiceOption: 'General Cleaning Inquiry',
        area: 'Area in Kuwait',
        areaPlaceholder: 'e.g. Salmiya, Farwaniya, Hawalli...',
        preferredDate: 'Preferred Date (Optional)',
        message: 'Additional Message (Optional)',
        messagePlaceholder: 'Share room count, sofa size, carpet details, or preferred timing...',
      },
      errors: {
        fullNameRequired: 'Please enter your full name.',
        phoneRequired: 'Please enter your contact phone number.',
        phoneInvalid: 'Please enter a valid phone number (at least 8 digits).',
        serviceRequired: 'Please select the cleaning service you need.',
        areaRequired: 'Please enter your area in Kuwait.',
      },
      submitButton: 'Send Inquiry via WhatsApp',
      successTitle: 'WhatsApp Inquiry Ready',
      successBody:
        'Your formatted inquiry has been prepared for WhatsApp. If WhatsApp did not open automatically, use the button below.',
      openWhatsAppAgain: 'Open WhatsApp Chat',
      copyMessage: 'Copy Inquiry Text',
      copiedMessage: 'Copied!',
      newInquiry: 'Edit or Start New Inquiry',
    },
    footer: {
      description:
        'Professional residential and commercial cleaning services across Kuwait—apartments, houses, sofas, carpets, rugs, kitchens, schools, and gardens.',
      quickLinksTitle: 'Quick Links',
      servicesTitle: 'Cleaning Services',
      contactTitle: 'Contact Details',
      officeAddress: 'Office 30, Old Nesto Hyper Building, Block 1, Farwaniya, Kuwait',
      backToTop: 'Back to Top',
      copyright: '© 2026 Cleaning Q Kuwait. All Rights Reserved.',
    },
    floating: {
      whatsappTooltip: 'Chat on WhatsApp',
      whatsappAria: 'Contact Cleaning Q Kuwait on WhatsApp',
      mobileWhatsapp: 'WhatsApp',
      mobileCall: 'Call Now',
    },
  },
  ar: {
    seo: {
      title: 'Cleaning Q Kuwait | شركة تنظيف بالكويت - تنظيف منازل وكنب وسجاد',
      description:
        'خدمات تنظيف احترافية في جميع أنحاء الكويت تشمل الشقق والمنازل والكنب والسجاد والزل والمطابخ والمدارس والحدائق. تواصل مع شركة تنظيف بالكويت للاستفسار والحجز.',
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      whyUs: 'لماذا تختارنا',
      ourWork: 'أعمالنا',
      contact: 'تواصل معنا',
      whatsapp: 'واتساب',
      callNow: 'اتصل الآن',
      toggleLabel: 'تغيير اللغة',
      switchTo: 'English',
      openMenu: 'فتح قائمة التنقل',
      closeMenu: 'إغلاق قائمة التنقل',
    },
    hero: {
      badge: 'خدمات تنظيف سكنية وتجارية • الكويت',
      headline: 'خدمات تنظيف احترافية في جميع أنحاء الكويت',
      subheadline: 'Cleaning Q Kuwait • عناية متكاملة لمساحتك',
      supportingText:
        'من المنازل اللامعة إلى الكنب والسجاد المتجدد، نقدم خدمات تنظيف موثوقة واحترافية في جميع أنحاء الكويت.',
      primaryCta: 'احجز التنظيف عبر واتساب',
      secondaryCta: 'اتصل الآن',
      highlights: {
        professional: 'تنظيف احترافي',
        kuwaitWide: 'تغطية شاملة للكويت',
        fastResponse: 'استجابة سريعة',
      },
      scrollCue: 'استكشف خدماتنا',
      imageAlt: 'غرفة معيشة فاخرة ونظيفة بالكامل في الكويت',
    },
    about: {
      eyebrow: 'عن شركة تنظيف بالكويت',
      heading: 'شريكك الموثوق لخدمات التنظيف في الكويت',
      paragraph1:
        'تقدم Cleaning Q Kuwait (شركة تنظيف بالكويت) حلول تنظيف شاملة ومتقنة للمساحات السكنية والتجارية في جميع أنحاء الكويت. سواء كنت ترغب في تنظيف شقة، أو تجهيز منزل عائلي، أو العناية بالمدارس والحدائق الخارجية، نحرص على تقديم عناية دقيقة وخدمة يُعتمد عليها.',
      paragraph2:
        'تغطي خدماتنا تنظيف المساحات اليومية إلى جانب التنظيف العميق للكنب والمفروشات والسجاد والزل والمطابخ، مع تواصل مباشر وواضح، وأسعار تنافسية، وسرعة في الرد على جميع الاستفسارات.',
      locationLabel: 'مكتب الفروانية',
      locationValue: 'مكتب 30، مبنى نستو هايبر القديم، قطعة 1، الفروانية، الكويت',
      cta: 'استفسر عبر واتساب',
      secondaryCta: 'تصفح جميع الخدمات',
      imageAlt: 'أخصائي تنظيف يلمع سطح رخام في مطبخ حديث ومشرق',
      cards: [
        {
          title: 'عناية بالمنازل والمنشآت',
          description: 'تنظيف مخصص للشقق والمنازل والمطابخ والمدارس والحدائق.',
        },
        {
          title: 'خبرة بالمفروشات والأرضيات',
          description: 'اهتمام دقيق بالكنب والموكيت والزل والقطع الحساسة.',
        },
        {
          title: 'حجز سهل وتواصل مباشر',
          description: 'تنسيق سريع عبر الهاتف أو الواتساب لاختيار الموعد المناسب لك.',
        },
      ],
    },
    services: {
      eyebrow: 'خدمات التنظيف الاحترافية',
      heading: 'حلول تنظيف متكاملة لكل مساحة',
      subtitle:
        'اختر الخدمة المطلوبة لفتح رسالة واتساب جاهزة باسم الخدمة للتنسيق والاستفسار عن الحجز.',
      bookButton: 'احجز هذه الخدمة',
      photoMode: 'صورة',
      videoMode: 'فيديو حقيقي',
      mediaHeading: 'فيديوهات وصور حقيقية لأعمال خدماتنا',
      mediaSubtitle:
        'شاهد لقطات الفيديو المباشرة ونتائج التنظيف الحقيقية قبل وبعد من مواقع عمل فريقنا في الكويت.',
      realVideoBadge: 'فيديو مباشر',
      items: {
        apartment: {
          name: 'تنظيف الشقق',
          description:
            'تنظيف شامل للغرف والصالات والحمامات والنوافذ والأرضيات لإعادة الانتعاش واللمعان لشقتك.',
          alt: 'شقة حديثة نظيفة ومرتبة بإضاءة طبيعية',
        },
        house: {
          name: 'تنظيف المنازل',
          description:
            'عناية متكاملة للفلل والبيوت متعددة الغرف ومجالس الاستقبال والمداخل والأسطح الرخامية.',
          alt: 'صالة منزل عائلي واسع ونظيف في الكويت',
        },
        carpet: {
          name: 'تنظيف السجاد والموكيت',
          description:
            'تنظيف عميق لألياف السجاد والموكيت لإزالة الأتربة العالقة واستعادة النظافة والملمس الناعم.',
          alt: 'سجاد نظيف ومعتنى به بألياف منتعشة',
        },
        rug: {
          name: 'غسيل الزل',
          description:
            'غسيل دقيق للزل وقطع السجاد مع عناية خاصة بالألوان والنقوش وإزالة البقع برفق.',
          alt: 'زل فاخر مغسول ومجفف بعناية على أرضية رخامية',
        },
        sofa: {
          name: 'تنظيف الكنب والمفروشات',
          description:
            'معالجة فعالة لأقمشة الكنب والوسائد لإنعاش المجالس والحفاظ على جودة التنجيد.',
          alt: 'كنب زاوية فاتح نظيف ومنتعش بعد التنظيف العميق',
        },
        kitchen: {
          name: 'التنظيف العميق للمطابخ',
          description:
            'إزالة الدهون وتنظيف وتعقيم الأسطح والخزائن والشفاطات والأحواض بدقة عالية.',
          alt: 'مطبخ حديث لامع ونظيف بأسطح كوارتز مصقولة',
        },
        school: {
          name: 'تنظيف المدارس',
          description:
            'تنظيف منظم ومستمر للفصول الدراسية والممرات والمرافق التعليمية لبيئة صحية ومرتبة.',
          alt: 'فصل دراسي وممر مدرسي حديث نظيف ومشرق',
        },
        garden: {
          name: 'تنظيف الحدائق',
          description:
            'تنظيف الساحات الخارجية وممرات الحجر والأحواش والحدائق لإبقاء المساحة الخارجية أنيقة.',
          alt: 'حديقة منزلية وفناء خارجي نظيف ومرتب في الكويت',
        },
      },
    },
    benefits: {
      eyebrow: 'مميزاتنا',
      heading: 'لماذا تختار Cleaning Q Kuwait؟',
      subtitle:
        'نركز على الراحة وتنوع الخدمات وسهولة التواصل لتجربة تنظيف مريحة وموثوقة في الكويت.',
      items: [
        {
          id: 'convenient',
          title: 'حلول تنظيف مريحة',
          description: 'خدمات مرنة تلائم طبيعة مساحتك وجدول منزلك أو منشأتك بكل يسر.',
        },
        {
          id: 'wide-range',
          title: 'تنوع واسع في الخدمات',
          description:
            'جهة واحدة تغطي الشقق والمنازل والكنب والسجاد والزل والمطابخ والمدارس والحدائق.',
        },
        {
          id: 'coverage',
          title: 'خدمة في جميع أنحاء الكويت',
          description: 'نصل إلى مختلف المناطق والمحافظات في دولة الكويت.',
        },
        {
          id: 'easy-booking',
          title: 'سهولة في الحجز',
          description: 'احجز بخطوات بسيطة عبر واتساب أو الاتصال المباشر أو نموذج الاستفسار.',
        },
        {
          id: 'fast-inquiry',
          title: 'سرعة في معالجة الاستفسارات',
          description: 'قنوات تواصل مباشرة تضمن متابعة استفسارك وتنسيق التفاصيل دون تأخير.',
        },
        {
          id: 'pricing',
          title: 'أسعار تنافسية',
          description: 'عروض أسعار واضحة وتنافسية تتناسب مع نوع الخدمة وحجم المكان.',
        },
      ],
    },
    gallery: {
      eyebrow: 'معرض العناية والتفاصيل',
      heading: 'أعمالنا ومعايير النظافة',
      subtitle:
        'شاهد نتائج التنظيف الحقيقية قبل وبعد من مواقع العمل في الكويت إلى جانب نماذج الخدمات للمنازل والكنب والسجاد والمطابخ والمنشآت والحدائق.',
      realResultsTitle: 'نتائج حقيقية من مواقع العمل: قبل وبعد التنظيف',
      realResultsBadge: 'صور حقيقية من الميدان',
      beforeLabel: 'قبل التنظيف',
      afterLabel: 'بعد التنظيف',
      inspectBeforeLabel: 'عرض صورة قبل التنظيف',
      inspectAfterLabel: 'عرض صورة بعد التنظيف',
      showcaseNotice:
        'تضم هذه الصفحة صور قبل وبعد حقيقية من أعمال فريقنا في الكويت بالإضافة إلى صور توضيحية لفئات الخدمات.',
      allFilter: 'جميع الفئات',
      zoomLabel: 'تكبير الصورة',
      bookSimilar: 'احجز لهذه الفئة',
      closeLightbox: 'إغلاق العرض',
      prevImage: 'الصورة السابقة',
      nextImage: 'الصورة التالية',
      categories: {
        home: 'تنظيف المنازل',
        sofa: 'تنظيف الكنب',
        carpet: 'غسيل السجاد',
        kitchen: 'تنظيف المطابخ',
        commercial: 'التنظيف التجاري والمدارس',
        garden: 'تنظيف الحدائق',
      },
    },
    videos: {
      eyebrow: 'لقطات حقيقية من الميدان',
      heading: 'شاهد نتائج التنظيف على الطبيعة',
      subtitle:
        'مقاطع فيديو حقيقية من أعمال فريق Cleaning Q Kuwait في الموقع — جلي الأرضيات بالماكينة، تنظيف الغرف، التنظيف العميق للكنب، وتلميع المطابخ.',
      realWorkBadge: 'عمل حقيقي',
      allFilter: 'جميع الفيديوهات',
      showMore: 'عرض جميع الفيديوهات (15)',
      showLess: 'عرض المختارات (8)',
      expandVideo: 'مشاهدة الفيديو كاملاً',
      bookService: 'احجز هذه الخدمة',
      closeModal: 'إغلاق مشغل الفيديو',
      prevVideo: 'الفيديو السابق',
      nextVideo: 'الفيديو التالي',
      categories: {
        sofa: 'تنظيف الكنب والمفروشات',
        floor: 'جلي وغسيل الأرضيات',
        kitchen: 'المطابخ والتفاصيل',
      },
    },
    howItWorks: {
      eyebrow: 'ثلاث خطوات بسيطة',
      heading: 'كيف تعمل خدمتنا',
      subtitle: 'من أول رسالة وحتى تأكيد موعدك — خطوات واضحة وسريعة لحجز خدمة التنظيف.',
      cta: 'ابدأ استفسارك الآن',
      steps: [
        {
          number: '01',
          title: 'تواصل معنا',
          description: 'تواصل مع شركتنا بسهولة عبر الواتساب أو الاتصال الهاتفي.',
        },
        {
          number: '02',
          title: 'شاركنا متطلباتك',
          description: 'أخبرنا بمنطقتك في الكويت ونوع التنظيف المطلوب والموعد المفضل لديك.',
        },
        {
          number: '03',
          title: 'تأكيد الحجز',
          description: 'سيناقش فريقنا التوفر وتفاصيل الخدمة وتأكيد موعد الحجز معك.',
        },
      ],
    },
    serviceAreas: {
      eyebrow: 'التغطية الجغرافية',
      heading: 'نخدم عملاءنا في جميع أنحاء الكويت',
      description:
        'تغطي Cleaning Q Kuwait المنازل والشقق والمدارس والمنشآت في مختلف مناطق الكويت. اختر منطقتك أدناه أو استفسر مباشرة للتحقق من التوفر في منطقتك.',
      selectAreaHint: 'اختر منطقة لتخصيص رسالة التحقق عبر واتساب:',
      selectedPrefix: 'المنطقة المختارة:',
      cta: 'تحقق من توفر الخدمة',
      areas: [
        { id: 'capital', name: 'مدينة الكويت والعاصمة', governorate: 'محافظة العاصمة' },
        { id: 'hawalli', name: 'حولي والسالمية', governorate: 'محافظة حولي' },
        { id: 'farwaniya', name: 'الفروانية وخيطان', governorate: 'محافظة الفروانية' },
        { id: 'mubarak', name: 'مبارك الكبير', governorate: 'محافظة مبارك الكبير' },
        { id: 'ahmadi', name: 'الأحمدي والفحيحيل', governorate: 'محافظة الأحمدي' },
        { id: 'jahra', name: 'الجهراء', governorate: 'محافظة الجهراء' },
      ],
    },
    testimonials: {
      eyebrow: 'آراء العملاء',
      heading: 'تجارب عملائنا',
      subtitle: 'تقييمات وآراء موثقة من عملاء شركة تنظيف بالكويت.',
    },
    contact: {
      eyebrow: 'التواصل والحجز',
      heading: 'هل أنت مستعد لمساحة أكثر نظافة؟',
      subtitle:
        'تواصل مع Cleaning Q Kuwait اليوم ودعنا نساعدك في اختيار خدمة التنظيف المناسبة لك.',
      phone1Label: 'الهاتف الرئيسي وواتساب',
      phone2Label: 'الهاتف الثاني',
      whatsappCardTitle: 'حجز فوري عبر واتساب',
      whatsappCardDesc: 'راسلنا مباشرة للاستفسار السريع عن المواعيد والأسعار.',
      whatsappBtn: 'راسلنا عبر واتساب',
      callBtn: 'اتصل الآن',
      instagramLabel: 'إنستغرام',
      instagramAction: 'تابع @cleaning_qkuwait',
      officeLabel: 'عنوان المكتب',
      officeAddress: 'مكتب 30، مبنى نستو هايبر القديم، قطعة 1، الفروانية، الكويت',
      getDirections: 'احصل على الاتجاهات',
      mapTitle: 'خريطة موقع مكتب شركة تنظيف بالكويت في الفروانية',
      formTitle: 'نموذج طلب تنظيف واستفسار',
      formSubtitle:
        'أدخل بياناتك أدناه لتجهيز رسالة استفسار منسقة وإرسالها مباشرة عبر واتساب.',
      formNote: 'سيفتح الإرسال محادثة واتساب مجهزة ببياناتك للتواصل الفوري مع فريقنا.',
      fields: {
        fullName: 'الاسم الكامل',
        fullNamePlaceholder: 'أدخل اسمك الكامل',
        phone: 'رقم الهاتف',
        phonePlaceholder: '+965 XXXX XXXX',
        service: 'الخدمة المطلوبة',
        servicePlaceholder: 'اختر خدمة التنظيف',
        generalServiceOption: 'استفسار عام عن خدمات التنظيف',
        area: 'المنطقة في الكويت',
        areaPlaceholder: 'مثال: السالمية، الفروانية، حولي...',
        preferredDate: 'التاريخ المفضل (اختياري)',
        message: 'رسالة إضافية (اختياري)',
        messagePlaceholder: 'اذكر عدد الغرف، حجم الكنب أو السجاد، أو الوقت المناسب لك...',
      },
      errors: {
        fullNameRequired: 'يرجى إدخال الاسم الكامل.',
        phoneRequired: 'يرجى إدخال رقم الهاتف للتواصل.',
        phoneInvalid: 'يرجى إدخال رقم هاتف صحيح (8 أرقام على الأقل).',
        serviceRequired: 'يرجى اختيار الخدمة المطلوبة.',
        areaRequired: 'يرجى كتابة المنطقة في الكويت.',
      },
      submitButton: 'إرسال الطلب عبر واتساب',
      successTitle: 'رسالة الواتساب جاهزة للإرسال',
      successBody:
        'تم تجهيز طلبك بصيغة منظمة للواتساب. إذا لم تفتح نافذة واتساب تلقائياً، استخدم الزر أدناه.',
      openWhatsAppAgain: 'فتح محادثة واتساب',
      copyMessage: 'نسخ نص الطلب',
      copiedMessage: 'تم النسخ!',
      newInquiry: 'تعديل أو طلب جديد',
    },
    footer: {
      description:
        'خدمات تنظيف احترافية في جميع أنحاء الكويت للشقق والمنازل والكنب والسجاد والزل والمطابخ والمدارس والحدائق بأسعار تنافسية واستجابة سريعة.',
      quickLinksTitle: 'روابط سريعة',
      servicesTitle: 'خدماتنا',
      contactTitle: 'بيانات التواصل',
      officeAddress: 'مكتب 30، مبنى نستو هايبر القديم، قطعة 1، الفروانية، الكويت',
      backToTop: 'العودة للأعلى',
      copyright: '© 2026 Cleaning Q Kuwait. جميع الحقوق محفوظة.',
    },
    floating: {
      whatsappTooltip: 'تواصل عبر واتساب',
      whatsappAria: 'تواصل مع شركة تنظيف بالكويت عبر واتساب',
      mobileWhatsapp: 'واتساب',
      mobileCall: 'اتصل الآن',
    },
  },
};

