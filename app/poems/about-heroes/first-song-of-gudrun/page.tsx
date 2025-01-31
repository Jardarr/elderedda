import React from "react";
import { firstsongofgudrun } from "./page.utils";
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
	title: "Jardarr | Первая Песнь о Гудрун",
	description: "Гудрун сидела над мертвым Сигурдом. Она не плакала, как другие женщины, но грудь ее разрывалась от горя. Жены и мужи подходили утешить ее. Но это было нелегко.",
	keywords: ["Elder Edda, Старшая Эдда, Первая Песнь о Гудрун"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Jardarr | Elder Edda",
	openGraph: {
		title: "Jardarr | Первая Песнь о Гудрун",
		description: "Гудрун сидела над мертвым Сигурдом. Она не плакала, как другие женщины, но грудь ее разрывалась от горя. Жены и мужи подходили утешить ее. Но это было нелегко.",
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
		title: "Jardarr | Первая Песнь о Гудрун",
		description: "Гудрун сидела над мертвым Сигурдом. Она не плакала, как другие женщины, но грудь ее разрывалась от горя. Жены и мужи подходили утешить ее. Но это было нелегко.",
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

export default function FirstSongOfGudrun() {
  return (
    <main className="flex items-center justify-center text-sm md:text-base">
      <div className="flex flex-col w-[600px] rounded-md mt-20">
      <span className="hidden sm:flex text-xs text-neutral-500"><a className="hover:text-sky-500" href="/">Jardarr Elder Edda</a>&nbsp;/&nbsp;<a className="hover:text-sky-500" href="/poems/about-heroes">Hetjukvæði</a>&nbsp;/&nbsp;<span>Guðrúnarkviða in fyrsta</span></span>
        <div className="m-8 text-3xl sea-color text-center font-bold">
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
