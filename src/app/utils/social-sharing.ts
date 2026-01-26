// Social Media Sharing Optimization Helper
// Add this to your component templates to enable social sharing

export const SOCIAL_MEDIA_URLS = {
  facebook: (url: string, quote?: string) => 
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}${quote ? `&quote=${encodeURIComponent(quote)}` : ''}`,
  
  twitter: (url: string, text?: string, hashtags?: string[]) =>
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}${text ? `&text=${encodeURIComponent(text)}` : ''}${hashtags && hashtags.length ? `&hashtags=${hashtags.join(',')}` : ''}`,
  
  linkedin: (url: string, title?: string, summary?: string) =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}${title ? `&title=${encodeURIComponent(title)}` : ''}`,
  
  whatsapp: (text: string) =>
    `https://wa.me/?text=${encodeURIComponent(text)}`,
  
  telegram: (text: string) =>
    `https://t.me/share/url?url=${encodeURIComponent(text)}`,
  
  reddit: (url: string, title?: string) =>
    `https://reddit.com/submit?url=${encodeURIComponent(url)}${title ? `&title=${encodeURIComponent(title)}` : ''}`,
  
  pinterest: (url: string, description?: string, image?: string) =>
    `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}${description ? `&description=${encodeURIComponent(description)}` : ''}${image ? `&media=${encodeURIComponent(image)}` : ''}`,
  
  email: (subject: string, body: string) =>
    `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
};

// Hash tags for different content types
export const SOCIAL_HASHTAGS = {
  general: ['#SoftwareEngineer', '#DigitalTransformation', '#TechConsulting', '#SoftwareDevelopment', '#USA'],
  services: ['#CloudMigration', '#LegacyModernization', '#CustomDevelopment', '#EnterpriseApps'],
  portfolio: ['#CaseStudy', '#ProjectShowcase', '#TechProject', '#Portfolio'],
  blog: ['#TechBlog', '#DeveloperInsights', '#SoftwareNews', '#CareerTips'],
  career: ['#Hiring', '#DeveloperJob', '#TechJobs', '#Consulting']
};

// Share button components - use in your Angular templates
export interface ShareConfig {
  title: string;
  description: string;
  url: string;
  image?: string;
  hashtags?: string[];
}

export function shareToFacebook(config: ShareConfig) {
  window.open(SOCIAL_MEDIA_URLS.facebook(config.url, config.title), '_blank', 'width=600,height=400');
}

export function shareToTwitter(config: ShareConfig) {
  window.open(
    SOCIAL_MEDIA_URLS.twitter(
      config.url,
      config.description,
      config.hashtags
    ),
    '_blank',
    'width=600,height=400'
  );
}

export function shareToLinkedIn(config: ShareConfig) {
  window.open(
    SOCIAL_MEDIA_URLS.linkedin(config.url, config.title, config.description),
    '_blank',
    'width=600,height=400'
  );
}

export function shareToWhatsApp(config: ShareConfig) {
  const text = `${config.title}\n${config.description}\n${config.url}`;
  window.open(SOCIAL_MEDIA_URLS.whatsapp(text), '_blank');
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function generateShareableURL(baseURL: string, utm_source: string, utm_medium: string, utm_campaign: string): string {
  const url = new URL(baseURL);
  url.searchParams.append('utm_source', utm_source);
  url.searchParams.append('utm_medium', utm_medium);
  url.searchParams.append('utm_campaign', utm_campaign);
  return url.toString();
}

// Google Analytics event tracking for social shares
export function trackSocialShare(platform: string, contentTitle: string) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'share', {
      method: platform,
      content_type: 'social_share',
      content_title: contentTitle
    });
  }
}

// Open Graph validator
export function validateOpenGraphTags(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Check for required OG tags
  const requiredTags = ['og:title', 'og:description', 'og:image', 'og:url'];
  requiredTags.forEach(tag => {
    const meta = document.querySelector(`meta[property="${tag}"]`);
    if (!meta || !meta.getAttribute('content')) {
      errors.push(`Missing or empty: ${tag}`);
    }
  });

  // Check image dimensions
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    const content = ogImage.getAttribute('content');
    if (content && !content.includes('1200x630')) {
      errors.push('OG Image should be 1200x630px for optimal display');
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

// Twitter Card validator
export function validateTwitterCards(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  const requiredTags = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
  requiredTags.forEach(tag => {
    const meta = document.querySelector(`meta[name="${tag}"]`);
    if (!meta || !meta.getAttribute('content')) {
      errors.push(`Missing or empty: ${tag}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}

// Schema.org validation helper
export function validateStructuredData(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  if (scripts.length === 0) {
    errors.push('No structured data found');
    return { valid: false, errors };
  }

  scripts.forEach((script, index) => {
    try {
      const data = JSON.parse(script.textContent || '');
      if (!data['@context']) {
        errors.push(`Script ${index + 1}: Missing @context`);
      }
      if (!data['@type']) {
        errors.push(`Script ${index + 1}: Missing @type`);
      }
    } catch (e) {
      errors.push(`Script ${index + 1}: Invalid JSON - ${e.message}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}

// Mobile optimization checker
export function checkMobileOptimization(): { optimized: boolean; suggestions: string[] } {
  const suggestions: string[] = [];

  // Check viewport meta tag
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport || !viewport.getAttribute('content').includes('width=device-width')) {
    suggestions.push('Add proper viewport meta tag for mobile responsiveness');
  }

  // Check touch icon
  const touchIcon = document.querySelector('link[rel="apple-touch-icon"]');
  if (!touchIcon) {
    suggestions.push('Add apple-touch-icon for iOS home screen');
  }

  // Check theme color
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (!themeColor) {
    suggestions.push('Add theme-color meta tag for mobile browser UI');
  }

  // Check manifest
  const manifest = document.querySelector('link[rel="manifest"]');
  if (!manifest) {
    suggestions.push('Add web app manifest for PWA support');
  }

  return {
    optimized: suggestions.length === 0,
    suggestions
  };
}
