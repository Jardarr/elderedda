import { Metadata, Viewport } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
	title: "Jardarr | Старшая Эдда",
	description: "Гибнут стада, родня умирает, и смертен ты сам; но знаю одно, что вечно бессмертно: умершего слава.",
	keywords: ["Elder Edda, Старшая Эдда"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Jardarr | Elder Edda",
	openGraph: {
		title: "Jardarr | Старшая Эдда",
		description: "Гибнут стада, родня умирает, и смертен ты сам; но знаю одно, что вечно бессмертно: умершего слава.",
		url: "https://jardarr.ru",
		siteName: "Jardarr | Elder Edda",
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
		title: "Jardarr | Старшая Эдда",
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
		canonical: "https://jardarr.ru",
	},
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <div className="w-full text-center p-5 text-2xl sea-color dark:text-neutral-300">
                <span translate="no" style={{ fontFamily: 'Ephesis, sans-serif' }}>
                    Hearing I ask <br />
                    from the holy races, From Heimdall&#39;s sons, <br />
                    both high and low; Thou wilt, Valfather, <br />
                    that well I relate Old tales I remember <br />
                    of men long ago.
                    <h1 translate="no">&copy; Elder Edda</h1>
                </span>
            </div>
        </div>
    );
}
