import React from "react";
import Link from "next/link";
import { gudrunsinciting } from "./gudrunsinciting";
import { useTranslations, useLocale } from "next-intl";
import DOMPurify from "isomorphic-dompurify";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    title: "Gjallarbru | Подстрекательство Гудрун",
    description:
        "Гудрун пошла тогда к морю, после того как она убила Атли. Она вошла в море и хотела покончить с собой. Но она не могла утонуть.",
    keywords: ["Elder Edda, Старшая Эдда, Подстрекательство Гудрун"],
    authors: [
        { name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" },
    ],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Gjallarbru | Подстрекательство Гудрун",
        description:
            "Гудрун пошла тогда к морю, после того как она убила Атли. Она вошла в море и хотела покончить с собой. Но она не могла утонуть.",
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
        title: "Gjallarbru | Подстрекательство Гудрун",
        description:
            "Гудрун пошла тогда к морю, после того как она убила Атли. Она вошла в море и хотела покончить с собой. Но она не могла утонуть.",
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

export default function GudrunsInciting() {
    const t = useTranslations("Poems.GudrunsInciting");
    const locale = useLocale();
    const source = DOMPurify.sanitize(t.raw("Source"));
    const translatedBlocks = t.raw("Texts") || [];

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
                    &nbsp;/&nbsp;<span>Guðrúnarhvöt</span>
                </span>

                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1>Guðrúnarhvöt</h1>
                    <h2 className="mt-2">{t("Title")}</h2>
                </div>

                {gudrunsinciting.map((block) => {
                    const translated = translatedBlocks.find(
                        (b: any) => b.id === block.id
                    );
                    const linesTranslated =
                        locale === "ru"
                            ? translated?.linesRU || []
                            : translated?.linesEN || [];
                    
                    // стих
                    if (block.type === "stanza") {
                        return (
                            <div key={block.id} className="flex justify-center mb-6">
                                {block.number && (
                                    <div className="text-xl/6 sm:text-xl/6 mt-1">
                                        {block.number}
                                    </div>
                                )}
                                <div className="flex mt-1">
                                    <div className="font-Kells w-40 sm:w-60 text-xl/6 sm:text-3xl/6">
                                        {block.linesON.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                    <div className="w-40 sm:w-60">
                                        {linesTranslated.map(
                                            (line: string, i: number) => (
                                                <p key={i}>{line}</p>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    // проза
                    return (
                        <div key={block.id} className="mb-6">
                            <div className="font-Kells text-xl/6 sm:text-3xl/6">
                                {block.linesON.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                            <div className="mt-6">
                                {linesTranslated.map(
                                    (line: string, i: number) => (
                                        <p key={i}>{line}</p>
                                    )
                                )}
                            </div>
                        </div>
                    );
                })}

                <div
                    className="flex justify-center text-center my-8 mx-4"
                    dangerouslySetInnerHTML={{ __html: source }}
                ></div>
            </div>
        </main>
    );
}
