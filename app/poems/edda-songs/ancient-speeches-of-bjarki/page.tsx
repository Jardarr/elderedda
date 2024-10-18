import React from "react";
import { ancientspeechesofbjarki } from "./page.utils";
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Jardarr | Bjarkamál in fornu',
  description: 'Старшая эдда - Древние речи Бьярки',
  keywords: 'Старшая Эдда, поэзия, древний обычай',
  openGraph: {
    title: 'Jardarr | Bjarkamál in fornu',
    description: 'Старшая эдда - Древние речи Бьярки',
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

export default function AncientSpeechesOfBjarki() {
  return (
    <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base">
      <div className="flex flex-col w-[600px] bg-neutral-800/80 rounded-md">
        <div className="m-8 text-3xl text-teal-800 text-center font-bold">
          <h1>Bjarkamál in fornu</h1>
          <h2>Древние речи Бьярки</h2>
        </div>
        {ancientspeechesofbjarki.map((poem, id) => {
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
            <p>Древнеисландский текст, Stóra Edda</p>
            <p>
              Текст на русском языке в переводе Ю. К. Кузьменко и О. А.
              Смирницкой
            </p>
          </span>
        </div>
      </div>
    </main>
  );
}
