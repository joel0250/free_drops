import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://freedrops.in';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/scan/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
