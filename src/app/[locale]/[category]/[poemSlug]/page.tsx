import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
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

	const t = await getTranslations(`Poems.${poem.key}`);

	return {
		title: `Gjallarbru | ${t("Title")}`,
		description: t("Description"),
		keywords: [`${t("Title")}`, "Elder Edda", "Старшая Эдда"],
		authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
		applicationName: "Gjallarbru | Elder Edda",
		openGraph: {
			title: `Gjallarbru | ${t("Title")}`,
			description: t("Description"),
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
			title: `Gjallarbru | ${t("Title")}`,
			description: t("Description"),
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
			canonical: `https://gjallarbru.ru/${poem.data.category}/${poemSlug}`,
		},
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
				{onBlocks.map((block: any) => {
					const translated = translatedBlocks.find((b: any) => b.id === block.id);

					const linesON = block.linesON || [];
					const linesTranslated = locale === "ru" ? translated?.linesRU || [] : translated?.linesEN || [];

					if (block.type === "stanza") {
						return (
							<div key={block.id} className="flex justify-center mb-6">
								{block.number && <div className="text-base mt-1">{block.number}</div>}
								<div className="flex mt-1">
									<div className="w-40 sm:w-60">
										{linesON.map((line: string, i: number) => (
											<p key={i}>{line}</p>
										))}
									</div>
									{translated?.number && <div className="text-base">{translated.number}</div>}
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
						<div key={block.id} className="mb-6 mx-3 sm:mx-0">
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
					<span dangerouslySetInnerHTML={{ __html: t.raw("Source") }}></span>
				</div>
			</div>
		</main>
	);
}
