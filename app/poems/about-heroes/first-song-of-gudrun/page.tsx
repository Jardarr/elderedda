import React from "react";
import { firstsongofgudrun } from "./page.utils";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Jardarr | Guðrúnarkviða in fyrsta',
  description: 'Старшая эдда - Первая Песнь о Гудрун',
  keywords: 'Старшая Эдда, поэзия, древний обычай',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Jardarr | Guðrúnarkviða in fyrsta',
    description: 'Старшая эдда - Первая Песнь о Гудрун',
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
export default function FirstSongOfGudrun() {
  return (
    <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base">
      <div className="flex flex-col w-[600px] bg-gray-800/70 rounded-md">
        <div className="m-8 text-3xl text-teal-800 text-center font-bold">
          <h1>Guðrúnarkviða in fyrsta</h1>
          <h2>Первая Песнь о Гудрун</h2>
        </div>
        {firstsongofgudrun.map((poem, id) => {
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
