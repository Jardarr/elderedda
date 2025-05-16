import React from "react";
import { poetry } from "./page.utils";
import { Metadata, Viewport } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Gjallarbru | Два ворона",
    description: "И Одаля столбы приобретали силу Поставленные крепкою рукой А недалече, под лысою горой Пролили Бло́том кровь",
    keywords: ["Elder Edda, Старшая Эдда, Два ворона"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Jardarr | Два ворона",
        description: "И Одаля столбы приобретали силу Поставленные крепкою рукой А недалече, под лысою горой Пролили Бло́том кровь",
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
        title: "Gjallarbru | Два ворона",
        description: "И Одаля столбы приобретали силу Поставленные крепкою рукой А недалече, под лысою горой Пролили Бло́том кровь",
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

export default function Poetry() {
    return (
        <main className="flex items-center justify-center text-sm md:text-base min-h-screen sm:h-fit">
            <div className="flex justify-center items-center flex-col w-[600px] rounded-md mt-32">
                <div className="mx-8">
                    <span>
                        {poetry.map((poem, index) => (
                            <p className="mb-4" key={index}>
                                {poem.content}
                            </p>
                        ))}
                    </span>
                </div>
                <div>
                    <p className="text-center font-bold pb-5">jardarr</p>
                </div>
                <Image className="my-5 rounded-md bg-indigo-500 shadow-lg shadow-indigo-500/50" src="/jonaslaumarkussen.jpg" alt="Odin's Journey" width={300} height={300} />
            </div>
        </main>
    );
}
