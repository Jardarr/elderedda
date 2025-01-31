import React from "react";
import { ancientspeechesofbjarki } from "./page.utils";
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
	title: "Jardarr | Древние речи Бьярки",
	description: "Близится день, бьет крылами петел, пора рабам за работу браться, вставайте, вставайте, друзья первейшие, вы, достославные товарищи Адильса.",
	keywords: ["Elder Edda, Старшая Эдда, Древние речи Бьярки"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Jardarr | Elder Edda",
	openGraph: {
		title: "Jardarr | Древние речи Бьярки",
		description: "Близится день, бьет крылами петел, пора рабам за работу браться, вставайте, вставайте, друзья первейшие, вы, достославные товарищи Адильса.",
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
		title: "Jardarr | Древние речи Бьярки",
		description: "Близится день, бьет крылами петел, пора рабам за работу браться, вставайте, вставайте, друзья первейшие, вы, достославные товарищи Адильса.",
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

export default function AncientSpeechesOfBjarki() {
  return (
    <main className="flex items-center justify-center text-sm md:text-base">
      <div className="flex flex-col w-[600px] rounded-md mt-20">
      <span className="hidden sm:flex text-xs text-neutral-500"><a className="hover:text-sky-500" href="/">Jardarr Elder Edda</a>&nbsp;/&nbsp;<a className="hover:text-sky-500" href="/poems/edda-songs">Eddukvæði</a>&nbsp;/&nbsp;<span>Bjarkamál in fornu</span></span>
        <div className="m-8 text-3xl sea-color text-center font-bold">
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
