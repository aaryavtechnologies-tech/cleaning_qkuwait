import { createContext, useContext } from 'react';
import type { TranslationSchema } from '../data/translations';
import type { Language } from '../utils/whatsapp';

export interface LanguageContextValue {
  language: Language;
  isRtl: boolean;
  t: TranslationSchema;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

