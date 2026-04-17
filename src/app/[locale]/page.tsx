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

    return (
        <>
            <Hero />

            <section className="w-full bg-amber-50/60 px-6 py-16 dark:bg-neutral-950 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
                        {t("Greeting.eyebrow")}
                    </p>

                    <h1 className="mt-4 font-serif text-4xl leading-tight text-neutral-900 dark:text-neutral-100 md:text-5xl">
                        Gjallarbru
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-neutral-800 dark:text-neutral-200 md:text-xl">
                        {t("Greeting.lead")}
                    </p>

                    <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-neutral-700 dark:text-neutral-300 md:text-lg">
                        {t("Greeting.body")}
                    </p>

                    <p className="mt-10 font-serif text-xl italic text-neutral-800 dark:text-neutral-200 md:text-2xl">
                        {t("Greeting.closing")}
                    </p>
                </div>
            </section>

            <Toast />
        </>
    );
}
