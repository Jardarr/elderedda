import React from "react";
import { poetry } from "./page.utils";
import { Metadata } from 'next'
import Image from "next/image";
 
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
    <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base min-h-screen sm:h-fit">
      <div className="flex justify-center items-center flex-col w-[600px] bg-neutral-800/80 rounded-md h-screen">
        <div className="mx-8">
          <span>
            {poetry.map((poem, index) => (
              <p className="mb-4" key={index}>{poem.content}</p>
            ))}
          </span>
        </div>
        <div>
            <p className="text-center font-bold pb-5">jardarr</p>
        </div>
        <Image className="my-5 rounded-md bg-indigo-500 shadow-lg shadow-indigo-500/50" src="/jonaslaumarkussen.jpg" alt="jardarr" width={300} height={300} />
      </div>
    </main>
  );
}
