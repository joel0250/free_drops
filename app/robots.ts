import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://joel0250.github.io/free_drops';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/scan/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
