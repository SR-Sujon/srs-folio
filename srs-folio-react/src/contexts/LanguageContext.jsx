/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import en from '../i18n/en.json';
import ja from '../i18n/ja.json';

const translations = { en, ja };

const LanguageContext = createContext();

/**
 * Resolve a nested key like 'navbar.home' from a translations object.
 * Supports interpolation: t('portfolio.showing', { filtered: 3, total: 10 })
 */
const getNestedValue = (obj, keyPath) => {
  if (typeof keyPath !== 'string') return undefined;

  return keyPath.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key];
    }
    return undefined;
  }, obj);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem('srs-folio-lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('srs-folio-lang', lang);
    } catch {
      // localStorage not available
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  /**
   * Translation function.
   * Usage:
   *   t('navbar.home')  => "Home" or "ホーム"
   *   t('portfolio.showing', { filtered: 3, total: 10 })  => "Showing 3 of 10"
   *   t('some.missing.key', 'Fallback string') => "Fallback string"
   */
  const t = useCallback((keyPath, params = {}) => {
    let fallbackValue = undefined;
    let actualParams = params;

    if (typeof params === 'string') {
      fallbackValue = params;
      actualParams = {};
    } else if (params && typeof params === 'object') {
      if ('defaultValue' in params) {
        fallbackValue = params.defaultValue;
      } else if ('fallback' in params) {
        fallbackValue = params.fallback;
      }
    }

    const currentTranslations = translations[language] || translations.en;
    let value = getNestedValue(currentTranslations, keyPath);

    // Fallback to English if key not found in current language
    if (value === undefined) {
      value = getNestedValue(translations.en, keyPath);
    }

    // If still not found, return fallbackValue if provided, otherwise the keyPath itself
    if (value === undefined) {
      return fallbackValue !== undefined ? fallbackValue : keyPath;
    }

    // If it's not a string (e.g., it's a nested object), return as-is
    if (typeof value !== 'string') {
      return value;
    }

    // Interpolate {param} placeholders
    if (actualParams && typeof actualParams === 'object') {
      Object.keys(actualParams).forEach((param) => {
        value = value.replace(new RegExp(`\\{${param}\\}`, 'g'), actualParams[param]);
      });
    }

    return value;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
