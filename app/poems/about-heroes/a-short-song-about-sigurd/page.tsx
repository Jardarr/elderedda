import React from "react";
import { ashortsongaboutsigurd } from "./page.utils";
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
	title: "Jardarr | Краткая Песнь о Сигурде",
	description: "Давно это было, — Сигурд-воитель, юный Вёльсунг, у Гьюки гостил; клятвы он принял от братьев обоих, верности клятвы от воинов смелых.",
	keywords: ["Elder Edda, Старшая Эдда, Краткая Песнь о Сигурде"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Jardarr | Elder Edda",
	openGraph: {
		title: "Jardarr | Краткая Песнь о Сигурде",
		description: "Давно это было, — Сигурд-воитель, юный Вёльсунг, у Гьюки гостил; клятвы он принял от братьев обоих, верности клятвы от воинов смелых.",
		url: "https://jardarr.ru",
		siteName: "Jardarr | Elder Edda",
		images: [
			{
				url: "/og-logo.jpg",
				width: 800,
				height: 600,
				alt: "Jardarr | Elder Edda",
			},
		],
		locale: "ru-RU",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jardarr | Краткая Песнь о Сигурде",
		description: "Давно это было, — Сигурд-воитель, юный Вёльсунг, у Гьюки гостил; клятвы он принял от братьев обоих, верности клятвы от воинов смелых.",
		images: ["/og-logo.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
	alternates: {
		canonical: "https://jardarr.ru",
	},
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function AShortSongAboutSigurd() {
  return (
    <main className="flex items-center justify-center text-sm md:text-base">
      <div className="flex flex-col w-[600px] rounded-md mt-20">
      <span className="hidden sm:flex text-xs text-neutral-500"><a className="hover:text-sky-500" href="/">Jardarr Elder Edda</a>&nbsp;/&nbsp;<a className="hover:text-sky-500" href="/poems/about-heroes">Hetjukvæði</a>&nbsp;/&nbsp;<span>Sigurðarkviða in skamma</span></span>
        <div className="m-8 text-3xl sea-color text-center font-bold">
          <h1>Sigurðarkviða in skamma</h1>
          <h2>Краткая Песнь о Сигурде</h2>
        </div>
        {ashortsongaboutsigurd.map((poem, id) => {
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
