import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
    short_name: 'Okrągły Stół',
    description: 'Stowarzyszenie Umarłych Statutów x Fundacja PZU | Pierwsze w Polsce od ponad 20 lat konsultacje na rzecz Krajowej Strategii Młodzieżowej. Twój głos ma realny wpływ.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFBFB',
    theme_color: '#F2313E',
    icons: [
        {
        src: '/icons/512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}