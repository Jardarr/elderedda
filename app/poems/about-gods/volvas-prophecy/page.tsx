import React from "react";
import { volvasprophecy } from "./page.utils";
import { Metadata, Viewport } from "next";
import { Home } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Jardarr | Прорицание вёльвы",
    description: "Внимайте мне все священные роды, великие с малыми Хеймдалля дети! О́дин, ты хочешь, чтоб я рассказала о прошлом всех сущих, о древнем, что помню.",
    keywords: ["Elder Edda, Старшая Эдда, Прорицание вёльвы"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Jardarr | Elder Edda",
    openGraph: {
        title: "Jardarr | Прорицание вёльвы",
        description: "Внимайте мне все священные роды, великие с малыми Хеймдалля дети! О́дин, ты хочешь, чтоб я рассказала о прошлом всех сущих, о древнем, что помню.",
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
        title: "Jardarr | Прорицание вёльвы",
        description: "Внимайте мне все священные роды, великие с малыми Хеймдалля дети! О́дин, ты хочешь, чтоб я рассказала о прошлом всех сущих, о древнем, что помню.",
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
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function VolvasProphecy() {
    return (
        <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base">
            <div className="flex flex-col w-[600px] rounded-md mt-20">
                <span className="hidden sm:flex text-xs text-neutral-500">
                    <Link className="hover:text-sky-500" href="/">
                        Jardarr Elder Edda
                    </Link>
                    &nbsp;/&nbsp;
                    <Link className="hover:text-sky-500" href="/poems/about-gods">
                        Goðakvæði
                    </Link>
                    &nbsp;/&nbsp;<span>Völuspá</span>
                </span>
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1 style={{ fontFamily: "Elementary, sans-serif" }}>Völuspá</h1>
                    <h2 className="mt-2" style={{ fontFamily: "Feofan, sans-serif" }}>Прорицание вельвы</h2>
                </div>
                {volvasprophecy.map((poem, id) => {
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
                        <p>Древнеисландский текст, ред. Theodor Möbius, 1860 г.</p>
                        <p>Текст на русском языке в переводе А. И. Корсуна</p>
                    </span>
                </div>
            </div>
        </main>
    );
}
