import React from "react";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import EddaList from "@/app/utils/EddaList";

export const metadata: Metadata = {
	title: "Gjallarbru | Песни о Богах",
	description: "Встретились асы на Идавёлль-поле, капища стали высокие строить, сил не жалели, ковали сокровища, создали клещи, орудья готовили.",
	keywords: ["Elder Edda, Старшая Эдда, Песни о Богах"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Gjallarbru | Elder Edda",
	openGraph: {
		title: "Gjallarbru | Песни о Богах",
		description: "Встретились асы на Идавёлль-поле, капища стали высокие строить, сил не жалели, ковали сокровища, создали клещи, орудья готовили.",
		url: "https://gjallarbru.ru",
		siteName: "Gjallarbru | Elder Edda",
		images: [
			{
				url: "/og-logo.jpg",
				width: 800,
				height: 600,
				alt: "Gjallarbru | Elder Edda",
			},
		],
		locale: "ru-RU",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Gjallarbru | Песни о Богах",
		description: "Встретились асы на Идавёлль-поле, капища стали высокие строить, сил не жалели, ковали сокровища, создали клещи, орудья готовили.",
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
		canonical: "https://gjallarbru.ru",
	},
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function AboutGods() {
    const songsOfGods = EddaList?.[0]?.song_of_gods || []; // Проверяем, что EddaList и song_of_gods существуют

    return (
        <main className="flex items-center justify-center text-sm md:text-base min-h-screen sm:h-fit">
            <div className="flex flex-col items-center w-[600px] rounded-md my-20">
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1 style={{ fontFamily: "Elementary, sans-serif" }}>Goðakvæði</h1>
                    <h2 className="mt-2" style={{ fontFamily: "Feofan, sans-serif" }}>Песни о Богах</h2>
                </div>
                <div className="flex flex-col items-center w-full max-w-52 mt-5">
                    {songsOfGods.length > 0 ? (
                        songsOfGods.map((item) => (
                            item.text && item.link && item.title ? ( // Проверяем, что все поля определены
                                <Link
                                    key={item.text}
                                    href={item.link}
                                    title={item.title}
                                >
                                    <p className="mt-2 text-xl hover:text-sky-500" style={{ fontFamily: "Kells, sans-serif" }}>{item.text}</p>
                                </Link>
                            ) : null // Пропускаем элементы с недостающими полями
                        ))
                    ) : (
                        null
                    )}
                </div>
            </div>
        </main>
    );
}
