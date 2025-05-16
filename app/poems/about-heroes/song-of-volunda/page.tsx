import React from "react";
import { songofvolunda } from "./page.utils";
import { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gjallarbru | Песнь о Вёлунде",
    description: "Жил конунг в Свитьоде, звали его Нидуд. Двое сыновей было у него и дочь по имени Бёдвильд.",
    keywords: ["Elder Edda, Старшая Эдда, Песнь о Вёлунде"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Gjallarbru | Песнь о Вёлунде",
        description: "Жил конунг в Свитьоде, звали его Нидуд. Двое сыновей было у него и дочь по имени Бёдвильд.",
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
        title: "Gjallarbru | Песнь о Вёлунде",
        description: "Жил конунг в Свитьоде, звали его Нидуд. Двое сыновей было у него и дочь по имени Бёдвильд.",
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

export default function SongOfVolunda() {
    return (
        <main className="flex items-center justify-center text-sm md:text-base">
            <div className="flex flex-col w-[600px] rounded-md mt-20">
                <span className="hidden sm:flex text-xs text-neutral-500">
                    <Link className="hover:text-sky-500" href="/">
                        Gjallarbru Elder Edda
                    </Link>
                    &nbsp;/&nbsp;
                    <Link className="hover:text-sky-500" href="/poems/about-heroes">
                        Hetjukvæði
                    </Link>
                    &nbsp;/&nbsp;<span>Völundarkviða</span>
                </span>
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1 style={{ fontFamily: "Elementary, sans-serif" }}>Völundarkviða</h1>
                    <h2 className="mt-2" style={{ fontFamily: "Feofan, sans-serif" }}>Песнь о Велунде</h2>
                </div>
                {songofvolunda.map((poem, id) => {
                    return (
                        <div key={id} className={poem.class}>
                            <div>{poem.number}</div>
                            <div className="text-xl/6 flex" style={{ fontFamily: "Kells, sans-serif" }}>{poem.contentON}</div>
                            <div>{poem.number}</div>
                            <div className="text-xl/6" style={{ fontFamily: "Feofan, sans-serif" }}>{poem.contentRU}</div>
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
