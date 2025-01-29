import React from "react";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import EddaList from "@/app/utils/EddaList";

export const metadata: Metadata = {
    title: "Jardarr | Eddukvæði",
    description: "Старшая эдда - Эддические песни",
    keywords: "Старшая Эдда, поэзия, древний обычай",
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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function EddaSongs() {
    const eddaSongs = EddaList?.[2]?.edda_songs || [];

    return (
        <main className="flex items-center justify-center text-sm md:text-base h-dvh sm:h-dvh">
            <div className="flex flex-col items-center w-[600px] rounded-md mt-20">
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1>Eddukvæði</h1>
                    <h2>Эддические песни</h2>
                </div>
                <div className="flex flex-col items-center w-full max-w-64 lg:max-w-full my-5">
                    {eddaSongs.length > 0 ? (
                        eddaSongs.map((item) => (
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
                        <p>Нет доступных песен о героях.</p> // Сообщение, если нет данных
                    )}
                </div>
            </div>
        </main>
    );
}
