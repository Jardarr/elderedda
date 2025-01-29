import React from "react";
import { poetry } from "./page.utils";
import { Metadata, Viewport } from 'next'
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Jardarr | Poetry',
  description: 'Старшая эдда, поэзия',
  keywords: 'Старшая Эдда, поэзия, древний обычай',
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function Poetry() {
  return (
    <main className="flex items-center justify-center text-sm md:text-base h-screen sm:h-dvh">
      <div className="flex justify-center items-center flex-col w-[600px] rounded-md my-32">
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
        <Image className="my-5 rounded-md bg-indigo-500 shadow-lg shadow-indigo-500/50" src="/jonaslaumarkussen.jpg" alt="Odin's Journey" width={300} height={300} />
      </div>
    </main>
  );
}
