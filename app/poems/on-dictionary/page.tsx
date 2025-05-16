import Dictionary from "@/app/components/Dictionary";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    title: "Gjallarbru | Словарь",
    description: "Словарь древнескандинавского языка. Онлайн-версия классического древнескандинавского/древнеисландского словаря Ричарда Клисби и Гудбранда Вигфуссона",
    keywords: ["Elder Edda, Старшая Эдда, Словарь"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Jardarr | Словарь",
        description: "Словарь древнескандинавского языка. Онлайн-версия классического древнескандинавского/древнеисландского словаря Ричарда Клисби и Гудбранда Вигфуссона",
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
        title: "Gjallarbru | Словарь",
        description: "Словарь древнескандинавского языка. Онлайн-версия классического древнескандинавского/древнеисландского словаря Ричарда Клисби и Гудбранда Вигфуссона",
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

export default function Home() {
    return (
        <main className="flex items-center justify-center text-sm md:text-base min-h-screen sm:h-fit">
            <div className="flex flex-col items-center w-[600px] rounded-md min-h-screen mt-20">
                <div className="flex flex-col w-full p-8 text-2xl sea-color text-center font-bold">
                    <h1>Cleasby & Vigfusson Old Norse dictionary</h1>
                    <p className="text-neutral-900 dark:text-neutral-200 text-sm mt-4 italic">
                        Словарь древнескандинавского языка. Онлайн-версия классического древнескандинавского/древнеисландского словаря Ричарда Клисби и Гудбранда Вигфуссона,
                        первоначально опубликованного в 1874 году.
                    </p>
                </div>
                <Dictionary />
            </div>
        </main>
    );
}
