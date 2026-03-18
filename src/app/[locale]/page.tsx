import { Metadata, Viewport } from "next";
import Hero from "../components/Hero";
import { getTranslations } from "next-intl/server";
import Toast from "../components/Toast";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("HomePage.Metadata");
    return {
        title: t("title"),
        description: t("description"),
        keywords: [
            "Elder Edda, Старшая Эдда, Älteste Edda, Élder Edda, Anziana Edda, Anciã Edda, Edda Seanóir, Vanhin Edda, Eldri Edda, Äldste Edda, Eldste Edda",
        ],
        authors: [
            { name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" },
        ],
        applicationName: "Gjallarbru | Elder Edda",
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: "https://gjallarbru.ru",
            siteName: t("title"),
            images: [
                {
                    url: "/og-logo.jpg",
                    width: 800,
                    height: 600,
                    alt: t("title"),
                },
            ],
            locale: "ru-RU",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: t("title"),
            description: t("description"),
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
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default async function Home() {
    const t = await getTranslations("HomePage");
    const greeting = t.raw("Greeting") as String[];
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <div className="max-w-2xl text-center p-5 sea-color dark:text-neutral-300">
                {greeting.map((text, index) => (
                    <div key={index} className="my-8">
                        {text}
                    </div>
                ))}
            </div>
            <Toast />
        </div>
    );
}
