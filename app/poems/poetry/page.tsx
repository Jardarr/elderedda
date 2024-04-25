import React from "react";
import { poetry } from "./page.utils";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Jardarr | Poetry',
  description: 'Старшая эдда, поэзия',
  keywords: 'Старшая Эдда, поэзия, древний обычай',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Jardarr | Poetry',
    description: 'Старшая эдда, поэзия',
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
export default function Poetry() {
  return (
    <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base h-svh">
      <div className="flex justify-center items-center flex-col w-[600px] bg-gray-800/70 rounded-md h-full">
        <div className="m-8">
          <span>
            {poetry.map((poem, index) => (
              <p className="mb-4" key={index}>{poem.content}</p>
            ))}
          </span>
        </div>
        <div className="">
          <span>
            <p>jardarr</p>
          </span>
        </div>
      </div>
    </main>
  );
}
