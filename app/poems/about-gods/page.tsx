import React from "react";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import EddaList from "@/app/utils/EddaList";

export const metadata: Metadata = {
    title: "Jardarr | Goðakvæði",
    description: "Старшая эдда - Песни о Богах",
    keywords: "Старшая Эдда, поэзия, древний обычай",
    openGraph: {
        title: "Jardarr | Goðakvæði",
        description: "Старшая эдда - Песни о Богах",
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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function AboutGods() {
    const songsOfGods = EddaList?.[0]?.song_of_gods || []; // Проверяем, что EddaList и song_of_gods существуют

    return (
        <main className="flex items-center justify-center text-sm md:text-base h-screen sm:h-dvh">
            <div className="flex flex-col items-center w-[600px] rounded-md my-20">
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1>Goðakvæði</h1>
                    <h2>Песни о Богах</h2>
                </div>
                <div className="flex flex-col items-center w-full max-w-52 mt-5">
                    {songsOfGods.length > 0 ? (
                        songsOfGods.map((item) => (
                            item.text && item.link && item.title ? ( // Проверяем, что все поля определены
                                <Link
                                    key={item.text}
                                    href={item.link}
                                    title={item.title}
                                >
                                    <p className="mt-2 text-lg hover:text-sky-500">{item.text}</p>
                                </Link>
                            ) : null // Пропускаем элементы с недостающими полями
                        ))
                    ) : (
                        <p>Нет доступных песен о Богах.</p> // Сообщение, если нет данных
                    )}
                </div>
            </div>
        </main>
    );
}
