export const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};

export const trackPageView = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-7B50KPKX0J', {
      page_path: url,
    });
  }
};
