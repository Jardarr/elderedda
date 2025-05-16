import React from "react";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import EddaList from "@/app/utils/EddaList";

export const metadata: Metadata = {
	title: "Gjallarbru | Эддические песни",
	description: "Домой поезжай! Гордись своей славой! Отныне сюда никто не придет, пока свои узы Локи не сбросит и не настанет гибель богов!",
	keywords: ["Elder Edda, Старшая Эдда, Эддические песни"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Gjallarbru | Elder Edda",
	openGraph: {
		title: "Gjallarbru | Эддические песни",
		description: "Домой поезжай! Гордись своей славой! Отныне сюда никто не придет, пока свои узы Локи не сбросит и не настанет гибель богов!",
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
		title: "Gjallarbru | Эддические песни",
		description: "Домой поезжай! Гордись своей славой! Отныне сюда никто не придет, пока свои узы Локи не сбросит и не настанет гибель богов!",
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

export default function EddaSongs() {
    const eddaSongs = EddaList?.[2]?.edda_songs || [];

    return (
        <main className="flex items-center justify-center text-sm md:text-base min-h-screen sm:h-fit">
            <div className="flex flex-col items-center w-[600px] rounded-md mt-20">
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1 style={{ fontFamily: "Elementary, sans-serif" }}>Eddukvæði</h1>
                    <h2 className="mt-2" style={{ fontFamily: "Feofan, sans-serif" }}>Эддические песни</h2>
                </div>
                <div className="flex flex-col items-center w-full max-w-64 lg:max-w-full my-5">
                    {eddaSongs.length > 0 ? (
                        eddaSongs.map((item) => (
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
