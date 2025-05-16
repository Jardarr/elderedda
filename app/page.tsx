import { Metadata, Viewport } from "next";
import Hero from "./components/Hero";

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
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <div className="max-w-xl text-center p-5 text-xs italic sea-color dark:text-neutral-300">
                <p className="mb-2">Добро пожаловать на Gjallarbru — портал, вдохновлённый древнескандинавской мифологией и её глубинной связью между человеческим и божественным.</p>
                <p className="mb-2">
                    В мифах Gjallarbrú — мост, ведущий через реку Гьёлль к Хельхейму, миру мёртвых. Но в символическом смысле — это путь понимания, соединяющий нас с миром духов, с
                    памятью предков и богами. Этот сайт — наш мост. Здесь оживают древние сказания, образы и архетипы, передающиеся сквозь тысячелетия. Мифы, это связь между
                    прошлым и настоящим, где каждый может найти свой путь по этому мосту — к смыслу, силе и вдохновению северной традиции.
                </p>
                <p>Gjallarbru зовёт — иди с нами.</p>
            </div>
        </div>
    );
}
