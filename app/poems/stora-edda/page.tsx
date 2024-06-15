import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jardarr | Stóra Edda",
  description: "Большая Эдда - Эддические песни",
  keywords: "Старшая Эдда, поэзия, древний обычай",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Jardarr | Stóra Edda",
    description: "Большая Эдда - Эддические песни",
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
export default function StoraEdda() {
  return (
    <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base">
      <div className="flex flex-col w-[600px] bg-gray-800/70 rounded-md h-full p-4">
        <div className="m-8 text-3xl text-teal-800 text-center font-bold">
          <h1>Stóra Edda</h1>
          <h2>Большая Эдда</h2>
        </div>
        <div className="flex items-center flex-col mt-5">
          <Image
            src="/stora-edda.png"
            width={300}
            height={300}
            alt="Stora Edda"
          />
          <div className="mt-5 text-sm">
            <p className="mb-2">
              Лучшее на данный момент русскоязычное издание за авторством Eyvar
              Tjörvason
            </p>
            <p className="mb-2">
              Вот что говорит автор сборника о своём труде:
            </p>
            <p className="italic bg-zinc-800/70 rounded-md p-4">
              &quot;Эта книга является попыткой собрать под одной обложкой как
              можно большее число важнейших древних текстов, связанных с
              германо-скандинавской мифологией. Очередной попыткой — т. к.
              многочисленные исландские манускрипты XIII—XIX вв., вмещавшие в
              себя похожие наборы текстов, являлись её идейными предтечами. И
              первой попыткой — на русском языке&quot;.
            </p>
          </div>
          <button className="my-5 py-2 px-2 bg-teal-800/70 hover:bg-teal-800 border border-transparent hover:border-teal-400 transition-all duration-300 ease-in-out rounded-md">
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
