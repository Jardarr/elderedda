import React from "react";
import { lokialtercation } from "./page.utils";
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Jardarr | Lokasenna',
  description: 'Старшая эдда - Перебранка Локи',
  keywords: 'Старшая Эдда, поэзия, древний обычай',
  openGraph: {
    title: 'Jardarr | Lokasenna',
    description: 'Старшая эдда - Перебранка Локи',
    siteName: 'Jardarr | Elder Edda',
    images: [
      {
        url: '/og-logo.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function LokiAltercation() {
  return (
    <main className="flex items-center justify-center text-sm md:text-base">
      <div className="flex flex-col w-[600px] rounded-md mt-20">
        <div className="m-8 text-3xl sea-color text-center font-bold">
          <h1>Lokasenna</h1>
          <h2>Перебранка Локи</h2>
        </div>
        {lokialtercation.map((poem, id) => {
          return (
            <div key={id} className={poem.class}>
              <div>{poem.number}</div>
              <div>{poem.contentON}</div>
              <div>{poem.number}</div>
              <div>{poem.contentRU}</div>
            </div>
          );
        })}
        <div className="flex justify-center my-8 mx-4">
          <span>
            <p>Древнеисландский текст, ред. Guðni Jónsson</p>
            <p>Текст на русском языке в переводе А. И. Корсуна</p>
          </span>
        </div>
      </div>
    </main>
  );
}
