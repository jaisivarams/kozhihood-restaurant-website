/**
 * SEO Route Metadata and Document Manager for Kozhihood.
 * Ensures strict compliance with local SEO, canonical tagging,
 * and meta description requirements without external dependencies.
 */

export const siteUrl = import.meta.env.VITE_SITE_URL || '';

export const routeSeo = {
  '/': {
    title: 'Kozhihood | Biryani & Restaurant in Erode',
    description:
      'Kozhihood is a restaurant in Erode serving biryani, fried rice, noodles, chicken and vegetarian starters. Explore our menu, visit us or order online.',
    isPublic: true,
  },
  '/menu': {
    title: 'Kozhihood Menu | Biryani, Fried Rice, Noodles & Starters',
    description:
      'Explore the Kozhihood menu featuring biryani, fried rice, noodles, chicken starters and vegetarian favourites in Erode.',
    isPublic: true,
  },
  '/about': {
    title: 'About Kozhihood | Restaurant in Erode',
    description:
      'Learn about Kozhihood, a restaurant in Erode serving flavour-packed biryani, fried rice, noodles and chicken and vegetarian starters.',
    isPublic: true,
  },
  '/reviews': {
    title: 'Kozhihood Reviews | Customer Experiences',
    description:
      'Read genuine customer reviews and experiences from Kozhihood in Erode.',
    isPublic: true,
  },
  '/login': {
    title: 'Kozhihood | Sign In',
    description: 'Sign in to your Kozhihood account.',
    isPublic: false,
    noindex: true,
  },
  '/admin/reviews': {
    title: 'Kozhihood | Admin Reviews',
    description: 'Admin review moderation dashboard for Kozhihood.',
    isPublic: false,
    noindex: true,
  },
};

export function updateDocumentSEO(path) {
  if (typeof document === 'undefined') return;

  const normalized = path.replace(/\/+$/, '') || '/';
  const meta = routeSeo[normalized] || routeSeo['/'];

  // 1. Update Title
  document.title = meta.title;

  // 2. Update Meta Description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', meta.description);

  // 3. Update Robots tag for private routes vs public routes
  let robotsTag = document.querySelector('meta[name="robots"]');
  if (meta.noindex) {
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'noindex, nofollow');
  } else if (robotsTag) {
    robotsTag.setAttribute('content', 'index, follow');
  }

  // 4. Update Canonical Link (only for public pages)
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (meta.isPublic) {
    const base = siteUrl || (typeof window !== 'undefined' ? window.location.origin : '');
    if (base) {
      const canonicalHref = `${base.replace(/\/+$/, '')}${normalized === '/' ? '/' : normalized}`;
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonicalHref);
    }
  } else if (canonicalTag) {
    canonicalTag.remove();
  }
}
