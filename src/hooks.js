import { useEffect, useState, useCallback } from 'react';

const LANGUAGE_KEY = 'site-language';

export const languagePaths = { en: '/', zh: '/zh/' };

export const getPathLanguage = (pathname) => (pathname.startsWith('/zh') ? 'zh' : 'en');

export const getSavedLanguage = () => {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
    if (savedLanguage === 'en' || savedLanguage === 'zh') {
      return savedLanguage;
    }
  } catch {
    // Ignore storage access failures.
  }

  return null;
};

export const saveLanguage = (language) => {
  try {
    window.localStorage.setItem(LANGUAGE_KEY, language);
  } catch {
    // Ignore storage write failures.
  }
};

export const getPreferredLanguage = () => {
  const savedLanguage = getSavedLanguage();
  if (savedLanguage) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.languages?.[0] ?? window.navigator.language ?? 'en';
  return browserLanguage.toLowerCase().startsWith('zh') ? 'zh' : 'en';
};

export const translate = (value, language) => {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[language] ?? value.en ?? value.zh ?? '';
  }

  return value ?? '';
};

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};

export const useScrollTop = (threshold = 400) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { show, scrollToTop };
};
