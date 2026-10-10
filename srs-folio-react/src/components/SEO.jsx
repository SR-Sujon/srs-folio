import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  schema
}) => {
  useEffect(() => {
    // 1. Update document title
    if (title) {
      document.title = title;
    }

    // Helper to set or create meta tag
    const setMetaTag = (attribute, name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // 3. Canonical Link
    const currentCanonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href.split('?')[0] : 'https://sr-sujon.com/');
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', currentCanonical);

    // 4. Open Graph Tags
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `https://sr-sujon.com${ogImage}`;
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', currentCanonical);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 6. JSON-LD Structured Data
    const scriptId = 'seo-dynamic-jsonld';
    let scriptTag = document.getElementById(scriptId);

    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      try {
        scriptTag.text = JSON.stringify(schema);
      } catch (e) {
        console.error('Error stringifying JSON-LD schema:', e);
      }
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up dynamic script tag when unmounting or switching routes if desired
      const el = document.getElementById(scriptId);
      if (el) {
        el.remove();
      }
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, schema]);

  return null;
};

export default SEO;
