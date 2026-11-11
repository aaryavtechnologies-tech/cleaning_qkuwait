import React, { useEffect, useState } from 'react';
import { TRANSLATIONS } from '../data/translations';
import type { Language } from '../utils/whatsapp';
import { LanguageContext } from './useLanguage';

const STORAGE_KEY = 'cleaning_qkuwait_lang';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'ar';

  const urlParams = new URLSearchParams(window.location.search);
  const queryLang = urlParams.get('lang');
  if (queryLang === 'en' || queryLang === 'ar') {
    return queryLang;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ar') {
      return saved;
    }
  } catch {
    // Ignore storage restriction errors
  }

  return 'ar';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage restriction errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  useEffect(() => {
    const isRtl = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.title = TRANSLATIONS[language].seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', TRANSLATIONS[language].seo.description);
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        isRtl: language === 'ar',
        t: TRANSLATIONS[language],
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
