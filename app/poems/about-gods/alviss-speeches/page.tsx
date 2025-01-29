import React from "react";
import { alvissspeeches } from "./page.utils";
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
	title: 'Jardarr | Alvíssmál',
	description: 'Старшая эдда - Речи Альвиса',
	keywords: 'Старшая Эдда, поэзия, древний обычай',
	openGraph: {
		title: 'Jardarr | Alvíssmál',
		description: 'Старшая эдда - Речи Альвиса',
		siteName: 'Jardarr | Elder Edda',
		images: [
			{
				url: '/og-logo.jpg',
				width: 800,
				height: 600,
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function AlvissSpeeches() {
	return (
		<main className="flex items-center justify-center text-sm md:text-base">
			<div className="flex flex-col w-[600px] rounded-md mt-20">
				<div className="m-8 text-3xl sea-color text-center font-bold">
					<h1>Alvíssmál</h1>
					<h2>Речи Альвиса</h2>
				</div>
				{alvissspeeches.map((poem) => (
					<div key={poem.id} className={poem.class}>
						<div>{poem.number}</div>
						<div>{poem.contentON}</div>
						<div>{poem.number}</div>
						<div>{poem.contentRU}</div>
					</div>
				))}
				<div className="flex justify-center my-8 mx-4">
					<span>
						<p>Древнеисландский текст, ред. Guðni Jónsson</p>
						<p>Текст на русском языке в переводе А. И. Корсуна</p>
					</span>
				</div>
			</div>
		</main>
	);
}
