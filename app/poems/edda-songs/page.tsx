import React from "react";
import { EDDASONGS } from "@/app/components/NavbarItemList";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jardarr | Eddukvæði",
    description: "Старшая эдда - Эддические песни",
    keywords: "Старшая Эдда, поэзия, древний обычай",
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
        title: "Jardarr | Eddukvæði",
        description: "Старшая эдда - Эддические песни",
        siteName: "Jardarr | Elder Edda",
        images: [
            {
                url: "/og-logo.jpg",
                width: 800,
                height: 600,
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
};
export default function EddaSongs() {
    return (
        <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base min-h-screen sm:h-fit">
            <div className="flex flex-col items-center w-[600px] bg-neutral-800/80 rounded-md min-h-screen">
                <div className="m-8 text-3xl text-teal-800 text-center font-bold">
                    <h1>Eddukvæði</h1>
                    <h2>Эддические песни</h2>
                </div>
                <div className="flex flex-col items-center w-full max-w-60 my-5">
                    {EDDASONGS.map((item) => (
                        <Link
                            key={item.text}
                            href={item.link}
                            title={item.title}
                        >
                            <p className="mt-2 text-lg">{item.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
