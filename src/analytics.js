export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, eventParams);
};
