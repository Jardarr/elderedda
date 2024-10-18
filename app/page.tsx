import { Ephesis } from "next/font/google";
const ephesis = Ephesis({ subsets: ["latin"], weight: "400" });
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jardarr | Elder Edda",
    description:
        "Внимайте мне все священные роды, великие с малыми Хеймдалля дети! О́дин, ты хочешь, чтоб я рассказала о прошлом всех сущих, о древнем, что помню.",
    keywords: "Старшая Эдда, поэзия, древний обычай",
    viewport: "width=device-width, initial-scale=1.0",
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

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-home-bg bg-cover bg-center bg-attachment-fixed bg-no-repeat h-custom-height">
            <div className="text-white bg-orange-900/20 w-full text-center p-5 text-2xl">
                <span translate="no" className={`${ephesis.className}`}>
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
