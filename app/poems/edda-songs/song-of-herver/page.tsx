import React from "react";
import { songofherver } from "./page.utils";
import { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gjallarbru | Песнь о Хервёр",
    description: "Встретила дева в Мунарваге на солнца закате мужа при стаде. Пастух сказал: «Кто одинокий на остров пришёл? Скорее иди ночлега искать!»",
    keywords: ["Elder Edda, Старшая Эдда, Песнь о Хервёр"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Gjallarbru | Песнь о Хервёр",
        description: "Встретила дева в Мунарваге на солнца закате мужа при стаде. Пастух сказал: «Кто одинокий на остров пришёл? Скорее иди ночлега искать!»",
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
        title: "Gjallarbru | Песнь о Хервёр",
        description: "Встретила дева в Мунарваге на солнца закате мужа при стаде. Пастух сказал: «Кто одинокий на остров пришёл? Скорее иди ночлега искать!»",
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
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function SongOfHerver() {
    return (
        <main className="flex items-center justify-center text-sm md:text-base">
            <div className="flex flex-col w-[600px] rounded-md mt-20">
                <span className="hidden sm:flex text-xs text-neutral-500">
                    <Link className="hover:text-sky-500" href="/">
                        Gjallarbru Elder Edda
                    </Link>
                    &nbsp;/&nbsp;
                    <Link className="hover:text-sky-500" href="/poems/edda-songs">
                        Eddukvæði
                    </Link>
                    &nbsp;/&nbsp;<span>Hervararkviða</span>
                </span>
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1>Hervararkviða</h1>
                    <h2 className="mt-2">Песнь о Хервёр</h2>
                </div>
                {songofherver.map((poem, id) => {
                    return (
                        <div key={id} className={poem.class}>
                            <div className="text-xl/6 sm:text-xl/6">{poem.number}</div>
                            <div className="font-Kells text-xl/6 sm:text-3xl/6 flex">{poem.contentON}</div>
                            <div className="text-xl/6 sm:text-xl/6">{poem.number}</div>
                            <div className="font-Feofan text-xl/6 sm:text-3xl/6">{poem.contentRU}</div>
                        </div>
                    );
                })}
                <div className="flex justify-center my-8 mx-4">
                    <span>
                        <p>Древнеисландский текст, ред. Guðni Jónsson</p>
                        <p>Текст на русском языке в переводе Т. Ермолаева</p>
                    </span>
                </div>
            </div>
        </main>
    );
}
