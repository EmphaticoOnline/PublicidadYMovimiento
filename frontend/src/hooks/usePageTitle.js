// Create a simple custom React hook called usePageTitle that receives a string and updates document.title using useEffect.
import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = 'https://grupopmpublicidad.mx/logotipo.jpg';
const DEFAULT_TW_CARD = 'summary_large_image';

function ensureMeta(selector, createCb) {
  // Busca en todo el documento (no solo en <head>) por si el HTML base difiere.
  const existing = document.querySelector(selector);
  if (existing) return existing;
  const created = createCb();
  (document.head || document.documentElement).appendChild(created);
  return created;
}

function usePageTitle(title, description, canonicalUrl, options = {}) {
  const ogImage = options.ogImage || DEFAULT_OG_IMAGE;
  const ogType = options.ogType || 'website';
  const twitterCard = options.twitterCard || DEFAULT_TW_CARD;

  useEffect(() => {
    document.title = title;

    if (description) {
      const meta = ensureMeta('meta[name="description"]', () => {
        const el = document.createElement('meta');
        el.name = 'description';
        return el;
      });
      meta.content = description;
    }

    if (canonicalUrl) {
      const canonical = ensureMeta('link[rel="canonical"]', () => {
        const el = document.createElement('link');
        el.rel = 'canonical';
        return el;
      });
      canonical.href = canonicalUrl;
    }

    // Open Graph
    if (title) {
      const ogTitle = ensureMeta('meta[property="og:title"]', () => {
        const el = document.createElement('meta');
        el.setAttribute('property', 'og:title');
        return el;
      });
      ogTitle.content = title;
    }

    if (description) {
      const ogDesc = ensureMeta('meta[property="og:description"]', () => {
        const el = document.createElement('meta');
        el.setAttribute('property', 'og:description');
        return el;
      });
      ogDesc.content = description;
    }

    if (ogImage) {
      const ogImg = ensureMeta('meta[property="og:image"]', () => {
        const el = document.createElement('meta');
        el.setAttribute('property', 'og:image');
        return el;
      });
      ogImg.content = ogImage;
    }

    if (canonicalUrl) {
      const ogUrl = ensureMeta('meta[property="og:url"]', () => {
        const el = document.createElement('meta');
        el.setAttribute('property', 'og:url');
        return el;
      });
      ogUrl.content = canonicalUrl;
    }

    if (ogType) {
      const ogTypeEl = ensureMeta('meta[property="og:type"]', () => {
        const el = document.createElement('meta');
        el.setAttribute('property', 'og:type');
        return el;
      });
      ogTypeEl.content = ogType;
    }

    // Twitter Cards
    if (twitterCard) {
      const twCard = ensureMeta('meta[name="twitter:card"]', () => {
        const el = document.createElement('meta');
        el.name = 'twitter:card';
        return el;
      });
      twCard.content = twitterCard;
    }

    if (title) {
      const twTitle = ensureMeta('meta[name="twitter:title"]', () => {
        const el = document.createElement('meta');
        el.name = 'twitter:title';
        return el;
      });
      twTitle.content = title;
    }

    if (description) {
      const twDesc = ensureMeta('meta[name="twitter:description"]', () => {
        const el = document.createElement('meta');
        el.name = 'twitter:description';
        return el;
      });
      twDesc.content = description;
    }

    if (ogImage) {
      const twImg = ensureMeta('meta[name="twitter:image"]', () => {
        const el = document.createElement('meta');
        el.name = 'twitter:image';
        return el;
      });
      twImg.content = ogImage;
    }

    if (canonicalUrl) {
      const twUrl = ensureMeta('meta[name="twitter:url"]', () => {
        const el = document.createElement('meta');
        el.name = 'twitter:url';
        return el;
      });
      twUrl.content = canonicalUrl;
    }
  }, [title, description, canonicalUrl, ogImage, ogType, twitterCard]);
}

export default usePageTitle;
