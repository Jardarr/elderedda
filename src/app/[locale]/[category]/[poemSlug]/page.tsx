import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import DOMPurify from "isomorphic-dompurify";
import onData from "../../../utils/on.json";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ locale: string; category: string; poemSlug: string }>;
};

function findPoemBySlug(slug: string) {
	const poems = onData.Poems as any;
	for (const key in poems) {
		if (poems[key].slug === slug) {
			return { key, data: poems[key] };
		}
	}
	return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { poemSlug } = await params;
	const poem = findPoemBySlug(poemSlug);

	if (!poem) {
		return { title: "Poem not found" };
	}

	return {
		title: `Gjallarbru | ${poem.data.Title}`,
		description: `${poem.data.Title} - Elder Edda`,
	};
}

export default async function PoemPage({ params }: Props) {
	const { locale, poemSlug } = await params;
	const poem = findPoemBySlug(poemSlug);

	if (!poem) {
		notFound();
	}

	const t = await getTranslations(`Poems.${poem.key}`);
	const onBlocks = poem.data.Texts || [];
	const translatedBlocksRaw = t.raw("Texts");
	// Преобразуем объект в массив
	const translatedBlocks = Array.isArray(translatedBlocksRaw) ? translatedBlocksRaw : Object.values(translatedBlocksRaw || {});

	const source = DOMPurify.sanitize(t.raw("Source"));

	// Определяем максимальное количество блоков для рендеринга
	const maxBlocks = Math.max(onBlocks.length, translatedBlocks.length);

	return (
		<main className="flex items-center justify-center text-sm md:text-base">
			<div className="flex flex-col w-[600px] rounded-md mt-20">
				<span className="hidden sm:flex text-xs text-neutral-500">
					<Link className="hover:text-sky-500" href="/">
						Gjallarbru
					</Link>
					&nbsp;/&nbsp;
					<Link className="hover:text-sky-500" href={`/${poem.data.category}`}>
						{poem.data.category}
					</Link>
					&nbsp;/&nbsp;<span>{t("Title")}</span>
				</span>
				<div className="m-8 text-3xl sea-color text-center font-bold">
					<h1>{t("Title")}</h1>
				</div>
				{Array.from({ length: maxBlocks }).map((_, index) => {
					const onBlock = onBlocks[index];
					const translatedBlock = translatedBlocks[index];

					// Если блок есть только в переводе, рендерим только перевод
					if (!onBlock && translatedBlock) {
						const linesTranslated = locale === "ru" ? translatedBlock.linesRU || [] : translatedBlock.linesEN || [];
						if (translatedBlock.type === "stanza") {
							return (
								<div key={`trans-${index}`} className="flex justify-center mb-6">
									{translatedBlock.number && <div className="text-base mt-1">{translatedBlock.number}</div>}
									<div className="w-40 sm:w-60">
										{linesTranslated.map((line: string, i: number) => (
											<p key={i}>{line}</p>
										))}
									</div>
								</div>
							);
						}
						return (
							<div key={`trans-${index}`} className="mb-6 mx-3 sm:mx-0">
								<div className="text-base">
									{linesTranslated.map((line: string, i: number) => (
										<p key={i}>{line}</p>
									))}
								</div>
							</div>
						);
					}

					// Если блок есть только в ON, рендерим только ON
					if (!translatedBlock && onBlock) {
						const linesON = onBlock.linesON || [];
						if (onBlock.type === "stanza") {
							return (
								<div key={`on-${index}`} className="flex justify-center mb-6">
									{onBlock.number && <div className="text-base mt-1">{onBlock.number}</div>}
									<div className="w-40 sm:w-60 text-base">
										{linesON.map((line: string, i: number) => (
											<p key={i}>{line}</p>
										))}
									</div>
								</div>
							);
						}
						return (
							<div key={`on-${index}`} className="mb-6 mx-3 sm:mx-0">
								<div className="text-base">
									{linesON.map((line: string, i: number) => (
										<p key={i}>{line}</p>
									))}
								</div>
							</div>
						);
					}

					// Если блоки есть в обоих файлах, рендерим параллельно
					const linesON = onBlock.linesON || [];
					const linesTranslated = locale === "ru" ? translatedBlock.linesRU || [] : translatedBlock.linesEN || [];

					// Используем type из ON файла как основной
					if (onBlock.type === "stanza") {
						return (
							<div key={onBlock.id || index} className="flex justify-center mb-6">
								{onBlock.number && <div className="text-base mt-1">{onBlock.number}</div>}
								<div className="flex mt-1">
									<div className="w-40 sm:w-60 text-base">
										{linesON.map((line: string, i: number) => (
											<p key={i}>{line}</p>
										))}
									</div>
									<div className="w-40 sm:w-60">
										{linesTranslated.map((line: string, i: number) => (
											<p key={i}>{line}</p>
										))}
									</div>
								</div>
							</div>
						);
					}

					return (
						<div key={onBlock.id || index} className="mb-6 mx-3 sm:mx-0">
							<div className="text-base">
								{linesON.map((line: string, i: number) => (
									<p key={i}>{line}</p>
								))}
							</div>
							<div className="mt-6">
								{linesTranslated.map((line: string, i: number) => (
									<p key={i}>{line}</p>
								))}
							</div>
						</div>
					);
				})}
				<div className="flex justify-center text-center my-8 mx-4">
					<span dangerouslySetInnerHTML={{ __html: source }}></span>
				</div>
			</div>
		</main>
	);
}
