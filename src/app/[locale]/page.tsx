import { Metadata, Viewport } from "next";
import Hero from "../components/Hero";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Gjallarbru | Старшая Эдда",
    description: "Гибнут стада, родня умирает, и смертен ты сам; но знаю одно, что вечно бессмертно: умершего слава.",
    keywords: ["Elder Edda, Старшая Эдда"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Gjallarbru | Elder Edda",
    openGraph: {
        title: "Gjallarbru | Старшая Эдда",
        description: "Гибнут стада, родня умирает, и смертен ты сам; но знаю одно, что вечно бессмертно: умершего слава.",
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
        title: "Gjallarbru | Старшая Эдда",
        description: "Гибнут стада, родня умирает, и смертен ты сам; но знаю одно, что вечно бессмертно: умершего слава.",
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
    const t = useTranslations("HomePage");
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <div className="font-GoodVibes max-w-2xl text-center p-5 text-lg sm:text-2xl sea-color dark:text-neutral-300">
                <p className="mb-2">{t("Greeting1")}</p>
                <p className="mb-2">{t("Greeting2")}</p>
                <p>{t("Greeting3")}</p>
            </div>
        </div>
    );
}
