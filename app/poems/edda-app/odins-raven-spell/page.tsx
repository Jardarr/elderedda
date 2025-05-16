import React from "react";
import { odinsravenspell } from "./page.utils";
import { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gjallarbru | Воронова ворожба Одина",
    description: "Труд Всеотца, альвов явленья, знание ванов, пря́денье норн, ведьмина вьюга, дре́внейших тяга, турсова жажда, валькирий зов.",
    keywords: ["Elder Edda, Старшая Эдда, Воронова ворожба Одина"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Gjallarbru | Воронова ворожба Одина",
        description: "Труд Всеотца, альвов явленья, знание ванов, пря́денье норн, ведьмина вьюга, дре́внейших тяга, турсова жажда, валькирий зов.",
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
        title: "Gjallarbru | Воронова ворожба Одина",
        description: "Труд Всеотца, альвов явленья, знание ванов, пря́денье норн, ведьмина вьюга, дре́внейших тяга, турсова жажда, валькирий зов.",
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

export default function OdinsRavenSpell() {
    return (
        <main className="flex items-center justify-center text-sm md:text-base">
            <div className="flex flex-col w-[600px] rounded-md mt-20">
                <span className="hidden sm:flex text-xs text-neutral-500">
                    <Link className="hover:text-sky-500" href="/">
                        Gjallarbru Elder Edda
                    </Link>
                    &nbsp;/&nbsp;
                    <Link className="hover:text-sky-500" href="/poems/edda-app">
                        Viðbætir
                    </Link>
                    &nbsp;/&nbsp;<span>Hrafnagaldr Óðins</span>
                </span>
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1 style={{ fontFamily: "Elementary, sans-serif" }}>
                        Forspjallsljóð
                        <p className="mt-2">Hrafnagaldr Óðins</p>
                    </h1>
                    <h2 className="mt-2" style={{ fontFamily: "Feofan, sans-serif" }}>
                        Предваряющая песнь,
                        <br />
                        или Воронова ворожба Одина
                    </h2>
                </div>
                {odinsravenspell.map((poem, id) => {
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
                        <p>Текст на русском языке в переводе Т. Гимранова</p>
                    </span>
                </div>
            </div>
        </main>
    );
}
