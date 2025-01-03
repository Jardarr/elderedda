import React from "react";
import { thirdsongofgudrun } from "./page.utils";
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Jardarr | Guðrúnarkviða in þriðja',
  description: 'Старшая эдда - Третья Песнь о Гудрун',
  keywords: 'Старшая Эдда, поэзия, древний обычай',
  openGraph: {
    title: 'Jardarr | Guðrúnarkviða in þriðja',
    description: 'Старшая эдда - Третья Песнь о Гудрун',
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

export default function ThirdSongOfGudrun() {
  return (
    <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base">
      <div className="flex flex-col w-[600px] bg-neutral-800/80 rounded-md">
        <div className="m-8 text-3xl text-teal-800 text-center font-bold">
          <h1>Guðrúnarkviða in þriðja</h1>
          <h2>Третья Песнь о Гудрун</h2>
        </div>
        {thirdsongofgudrun.map((poem, id) => {
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
