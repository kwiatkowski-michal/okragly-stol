import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ogólnopolski Okrągły Stół ds. Strategii Młodzieżowej',
    short_name: 'Okrągły Stół',
    description: 'Stowarzyszenie Umarłych Statutów x Fundacja PZU | Pierwsze w Polsce od ponad 20 lat konsultacje na rzecz Krajowej Strategii Młodzieżowej. Twój głos ma realny wpływ.',
    start_url: '/',
    display: 'standalone',
    dir: 'ltr',
    lang: 'pl',
    id: 'okragly-stol',
    orientation: 'portrait',
    background_color: '#FFFBFB',
    theme_color: '#F2313E',
    icons: [
      {
        src: '/512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: "any"
      },
      {
        src: '/128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: "any"
      },
      {
        src: '/maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: "maskable"
      }
    ],
  }
}