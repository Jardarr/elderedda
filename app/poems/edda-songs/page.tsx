import React from "react";
import { EDDASONGS } from "@/app/components/NavbarItemList";
import Link from "next/link";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Jardarr | Eddukvæði',
  description: 'Старшая эдда - Эддические песни',
  keywords: 'Старшая Эдда, поэзия, древний обычай',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Jardarr | Eddukvæði',
    description: 'Старшая эдда - Эддические песни',
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
export default function EddaSongs() {
  return (
    <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base h-custom-height">
      <div className="flex flex-col w-[600px] bg-gray-800/70 rounded-md h-full">
        <div className="m-8 text-3xl text-teal-800 text-center font-bold">
          <h1>Eddukvæði</h1>
          <h2>Эддические песни</h2>
        </div>
        <div className="flex flex-col items-center mt-5">
          {EDDASONGS.map((item) => (
            <Link key={item.text} href={item.link} title={item.title}>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
