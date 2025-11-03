import React from "react";
import { theslayingoftheniflungs } from "./page.utils";
import { Metadata, Viewport } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import DOMPurify from "isomorphic-dompurify";

export const metadata: Metadata = {
    title: "Gjallarbru | Убийство Нифлунгов",
    description:
        "Гуннар и Хёгни взяли тогда все золото, наследье Фафнира. Между Гьюкунгами и Атли была тогда вражда. Он обвинял Гьюкунгов в смерти Брюнхильд.",
    keywords: ["Elder Edda, Старшая Эдда, Убийство Нифлунгов"],
    authors: [
        { name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" },
    ],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Gjallarbru | Убийство Нифлунгов",
        description:
            "Гуннар и Хёгни взяли тогда все золото, наследье Фафнира. Между Гьюкунгами и Атли была тогда вражда. Он обвинял Гьюкунгов в смерти Брюнхильд.",
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
        title: "Gjallarbru | Убийство Нифлунгов",
        description:
            "Гуннар и Хёгни взяли тогда все золото, наследье Фафнира. Между Гьюкунгами и Атли была тогда вражда. Он обвинял Гьюкунгов в смерти Брюнхильд.",
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

export default function TheSlayingOfTheNiflungs() {
    const t = useTranslations("Poems.TheSlayingOfTheNiflungs");
    const verses = t.raw("Verses") || {};
    const source = t.raw("Source");
    const autors = DOMPurify.sanitize(source);
    return (
        <main className="flex items-center justify-center text-sm md:text-base">
            <div className="flex flex-col w-[600px] rounded-md mt-20">
                <span className="hidden sm:flex text-xs text-neutral-500">
                    <Link className="hover:text-sky-500" href="/">
                        Gjallarbru Elder Edda
                    </Link>
                    &nbsp;/&nbsp;
                    <Link
                        className="hover:text-sky-500"
                        href="/poems/about-heroes"
                    >
                        Hetjukvæði
                    </Link>
                    &nbsp;/&nbsp;<span>Dráp Niflunga</span>
                </span>
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1>Dráp Niflunga</h1>
                    <h2 className="mt-2">{t("Title")}</h2>
                </div>
                <div>
                    {theslayingoftheniflungs.map((poem, id) => (
                        <div key={id} className={poem.class}>
                            <div className="font-Kells text-xl/6 sm:text-3xl/6 flex">
                                {poem.contentON}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mx-7">
                    {Object.entries(verses).map(([num, lines]) => (
                        <div key={num} className="mb-6">
                            {lines.map((line: string, i: number) => (
                                <p key={i} className="mb-2">
                                    {line}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center text-center my-8 mx-4">
                    <span dangerouslySetInnerHTML={{ __html: autors }}></span>
                </div>
            </div>
        </main>
    );
}
