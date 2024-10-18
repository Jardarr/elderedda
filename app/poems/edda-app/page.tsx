import React from "react";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import EddaList from "@/app/utils/EddaList";

export const metadata: Metadata = {
    title: "Jardarr | Viðbætir",
    description: "Старшая эдда - Приложения",
    keywords: "Старшая Эдда, поэзия, древний обычай",
    openGraph: {
        title: "Jardarr | Viðbætir",
        description: "Старшая эдда - Приложения",
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

export default function EddaApp() {
    const eddaApp = EddaList?.[3]?.edda_app || [];

    return (
        <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base h-custom-height">
            <div className="flex flex-col items-center w-[600px] bg-neutral-800/80 rounded-md h-full">
                <div className="m-8 text-3xl text-teal-800 text-center font-bold">
                    <h1>Viðbætir</h1>
                    <h2>Приложения</h2>
                </div>
                <div className="flex flex-col items-center w-full max-w-60 lg:max-w-full my-5">
                    {eddaApp.length > 0 ? (
                        eddaApp.map((item) => (
                            item.text && item.link && item.title ? ( // Проверяем, что все поля определены
                                <Link
                                    key={item.text}
                                    href={item.link}
                                    title={item.title}
                                >
                                    <p className="mt-2 text-lg">{item.text}</p>
                                </Link>
                            ) : null // Пропускаем элементы с недостающими полями
                        ))
                    ) : (
                        <p>Нет доступных приложений к Эдде.</p> // Сообщение, если нет данных
                    )}
                </div>
            </div>
        </main>
    );
}