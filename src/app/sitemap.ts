import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Es una landing de una sola página: Google ignora las anclas (#productos), así que va solo la home.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }]
}
