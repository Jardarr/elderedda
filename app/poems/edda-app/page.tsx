import React from "react";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import EddaList from "@/app/utils/EddaList";

export const metadata: Metadata = {
	title: "Gjallarbru | Старшая Эдда - Приложения",
	description: "Не властны мужи над богатством и силой, хоть сопутствует им успех. Несчастье приходит всегда неожиданно, никому не подвластна судьба.",
	keywords: ["Elder Edda, Старшая Эдда, Приложения"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Gjallarbru | Elder Edda",
	openGraph: {
		title: "Gjallarbru | Старшая Эдда - Приложения",
		description: "Не властны мужи над богатством и силой, хоть сопутствует им успех. Несчастье приходит всегда неожиданно, никому не подвластна судьба.",
		url: "https://gjallarbru.ru",
		siteName: "Gjallarbru | Elder Edda",
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
		title: "Gjallarbru | Старшая Эдда - Приложения",
		description: "Не властны мужи над богатством и силой, хоть сопутствует им успех. Несчастье приходит всегда неожиданно, никому не подвластна судьба.",
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
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function EddaApp() {
    const eddaApp = EddaList?.[3]?.edda_app || [];

    return (
        <main className="flex items-center justify-center text-sm md:text-base h-dvh">
            <div className="flex flex-col items-center w-[600px] rounded-md sm:mt-20">
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1 style={{ fontFamily: "Elementary, sans-serif" }}>Viðbætir</h1>
                    <h2 className="mt-2" style={{ fontFamily: "Feofan, sans-serif" }}>Приложения</h2>
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
                                    <p className="mt-2 text-xl hover:text-sky-500" style={{ fontFamily: "Kells, sans-serif" }}>{item.text}</p>
                                </Link>
                            ) : null // Пропускаем элементы с недостающими полями
                        ))
                    ) : (
                        null
                    )}
                </div>
            </div>
        </main>
    );
}