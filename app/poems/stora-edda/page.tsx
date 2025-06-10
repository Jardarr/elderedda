import React from "react";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Gjallarbru | Большая Эдда",
	description: "Эта книга является попыткой собрать под одной обложкой как можно большее число важнейших древних текстов, связанных с германо-скандинавской мифологией. ",
	keywords: ["Elder Edda, Старшая Эдда, Большая Эдда"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Gjallarbru | Elder Edda",
	openGraph: {
		title: "Gjallarbru | Большая Эдда",
		description: "v",
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
		title: "Gjallarbru | Большая Эдда",
		description: "Эта книга является попыткой собрать под одной обложкой как можно большее число важнейших древних текстов, связанных с германо-скандинавской мифологией. ",
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
export default function StoraEdda() {
  return (
    <main className="flex items-center justify-center text-sm md:text-base min-h-screen sm:h-fit">
      <div className="flex flex-col justify-center w-[600px] rounded-md h-full p-4 my-20">
        <div className="m-8 text-3xl sea-color text-center font-bold">
          <h1>Stóra Edda</h1>
          <h2>Большая Эдда</h2>
        </div>
        <div className="flex items-center flex-col mt-5">
          <Image
            src="/stora-edda.png"
            width={300}
            height={300}
            alt="Изображение обложки книги Большая Эдда"
          />
          <div className="mt-5 text-sm">
            <p className="mb-2">
              Лучшее на данный момент русскоязычное издание за авторством Eyvar
              Tjörvason
            </p>
            <p className="mb-2">
              Вот что говорит автор сборника о своём труде:
            </p>
            <p className="italic bg-neutral-400/70 rounded-md p-4">
              &quot;Эта книга является попыткой собрать под одной обложкой как
              можно большее число важнейших древних текстов, связанных с
              германо-скандинавской мифологией. Очередной попыткой — т. к.
              многочисленные исландские манускрипты XIII—XIX вв., вмещавшие в
              себя похожие наборы текстов, являлись её идейными предтечами. И
              первой попыткой — на русском языке&quot;.
            </p>
          </div>
          <button className="my-5 py-2 px-2 bg-[#203E51] hover:border-sky-400 text-neutral-200 border border-transparent transition-all duration-300 ease-in-out rounded-md">
            <Link
              href="https://drive.google.com/file/d/17G-EKf-ZNxHwrE-l-HRunFETvLExbLIY/view?usp=drive_link"
              target="_blank"
            >
              Stóra Edda
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
