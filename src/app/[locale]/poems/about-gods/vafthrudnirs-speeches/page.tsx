import React from "react";
import { vafthrudnirsspeeches } from "./page.utils";
import { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gjallarbru | Речи Вафтруднира",
    description: "Один сказал: «Дай, Фригг, мне совет, в путь я собрался к Вафтрудниру в гости! В древних познаньях помериться силой хочу я с мудрейшим».",
    keywords: ["Elder Edda, Старшая Эдда, Речи Вафтруднира"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Gjallarbru | Речи Вафтруднира",
        description: "Один сказал: «Дай, Фригг, мне совет, в путь я собрался к Вафтрудниру в гости! В древних познаньях помериться силой хочу я с мудрейшим».",
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
        title: "Gjallarbru | Речи Вафтруднира",
        description: "Один сказал: «Дай, Фригг, мне совет, в путь я собрался к Вафтрудниру в гости! В древних познаньях помериться силой хочу я с мудрейшим».",
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

export default function VafthrudnirsSpeeches() {
    return (
        <main className="flex items-center justify-center text-sm md:text-base">
            <div className="flex flex-col w-[600px] rounded-md mt-20">
                <span className="hidden sm:flex text-xs text-neutral-500">
                    <Link className="hover:text-sky-500" href="/">
                        Gjallarbru Elder Edda
                    </Link>
                    &nbsp;/&nbsp;
                    <Link className="hover:text-sky-500" href="/poems/about-gods">
                        Goðakvæði
                    </Link>
                    &nbsp;/&nbsp;<span>Vafþrúðnismál</span>
                </span>
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1>Vafþrúðnismál</h1>
                    <h2 className="mt-2">Речи Вафтруднира</h2>
                </div>
                {vafthrudnirsspeeches.map((poem, id) => {
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
                        <p>Текст на русском языке в переводе А. И. Корсуна</p>
                    </span>
                </div>
            </div>
        </main>
    );
}
