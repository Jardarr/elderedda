import { Metadata, Viewport } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
    title: "Jardarr | Elder Edda",
    description:
        "Внимайте мне все священные роды, великие с малыми Хеймдалля дети! О́дин, ты хочешь, чтоб я рассказала о прошлом всех сущих, о древнем, что помню.",
    keywords: "Старшая Эдда, поэзия, древний обычай",
    openGraph: {
        title: "Jardarr | Elder Edda",
        description:
            "Внимайте мне все священные роды, великие с малыми Хеймдалля дети! О́дин, ты хочешь, чтоб я рассказала о прошлом всех сущих, о древнем, что помню.",
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
