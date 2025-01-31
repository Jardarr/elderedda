import React from "react";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import EddaList from "@/app/utils/EddaList";

export const metadata: Metadata = {
	title: "Jardarr | Песни о Героях",
	description: "Она сказала: «Славься, день! И вы, дня сыны! И ты, ночь с сестрою! Взгляните на нас благостным взором, победу нам дайте!",
	keywords: ["Elder Edda, Старшая Эдда, Песни о Героях"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Jardarr | Elder Edda",
	openGraph: {
		title: "Jardarr | Песни о Героях",
		description: "Она сказала: «Славься, день! И вы, дня сыны! И ты, ночь с сестрою! Взгляните на нас благостным взором, победу нам дайте!",
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
		title: "Jardarr | Песни о Героях",
		description: "Она сказала: «Славься, день! И вы, дня сыны! И ты, ночь с сестрою! Взгляните на нас благостным взором, победу нам дайте!",
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

export default function AboutHeroes() {
    const songsOfHeroes = EddaList?.[1]?.song_of_heroes || [];

    return (
        <main className="flex items-center justify-center text-sm md:text-base min-h-screen sm:h-fit">
            <div className="flex flex-col items-center w-[600px] rounded-md mt-20">
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1>Hetjukvæði</h1>
                    <h2>Песни о Героях</h2>
                </div>
                <div className="flex flex-col items-center w-full max-w-72 lg:max-w-full my-5">
                    {songsOfHeroes.length > 0 ? (
                        songsOfHeroes.map((item) => (
                            item.text && item.link && item.title ? ( // Проверяем, что все поля определены
                                <Link
                                    key={item.text}
                                    href={item.link}
                                    title={item.title}
                                >
                                    <p className="mt-2 text-lg hover:text-sky-500">{item.text}</p>
                                </Link>
                            ) : null // Пропускаем элементы с недостающими полями
                        ))
                    ) : (
                        <p>Нет доступных песен о Героях.</p> // Сообщение, если нет данных
                    )}
                </div>
            </div>
        </main>
    );
}