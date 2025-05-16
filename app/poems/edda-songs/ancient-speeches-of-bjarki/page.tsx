import React from "react";
import { ancientspeechesofbjarki } from "./page.utils";
import { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gjallarbru | Древние речи Бьярки",
    description: "Близится день, бьет крылами петел, пора рабам за работу браться, вставайте, вставайте, друзья первейшие, вы, достославные товарищи Адильса.",
    keywords: ["Elder Edda, Старшая Эдда, Древние речи Бьярки"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Gjallarbru | Древние речи Бьярки",
        description: "Близится день, бьет крылами петел, пора рабам за работу браться, вставайте, вставайте, друзья первейшие, вы, достославные товарищи Адильса.",
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
        title: "Gjallarbru | Древние речи Бьярки",
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
        canonical: "https://gjallarbru.ru",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function AncientSpeechesOfBjarki() {
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
                    &nbsp;/&nbsp;<span>Bjarkamál in fornu</span>
                </span>
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1 style={{ fontFamily: "Elementary, sans-serif" }}>Bjarkamál in fornu</h1>
                    <h2 className="mt-2" style={{ fontFamily: "Feofan, sans-serif" }}>Древние речи Бьярки</h2>
                </div>
                {ancientspeechesofbjarki.map((poem, id) => {
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
                        <p>Древнеисландский текст, Stóra Edda</p>
                        <p>Текст на русском языке в переводе Ю. К. Кузьменко и О. А. Смирницкой</p>
                    </span>
                </div>
            </div>
        </main>
    );
}
