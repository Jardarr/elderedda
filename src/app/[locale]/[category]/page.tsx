import React from "react";
import { Metadata } from "next";
import { Link } from "../../../i18n/routing";
import onData from "../../utils/on.json";
import { notFound } from "next/navigation";

const categories = ["about-gods", "about-heroes", "edda-songs", "edda-app"];

const categoryTitles: Record<string, { ON: string; RU: string }> = {
    "about-gods": { ON: "Goðakvæði", RU: "Песни о Богах" },
    "about-heroes": { ON: "Hetjukvæði", RU: "Песни о Героях" },
    "edda-songs": { ON: "Eddukvæði", RU: "Песни Эдды" },
    "edda-app": { ON: "Viðbætir", RU: "Приложение к Эдде" },
};

type Props = {
    params: Promise<{ locale: string; category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    
    if (!categories.includes(category)) {
        return { title: "Category not found" };
    }

    const cat = categoryTitles[category];
    return {
        title: `Gjallarbru | ${cat.RU}`,
        description: `${cat.ON} - Elder Edda`,
    };
}

export default async function CategoryPage({ params }: Props) {
    const { locale, category } = await params;
    
    if (!categories.includes(category)) {
        notFound();
    }

    const poems = Object.values(onData.Poems as any)
        .filter((poem: any) => poem.category === category);

    const cat = categoryTitles[category];

    return (
        <main className="flex items-center justify-center text-sm md:text-base min-h-screen sm:h-fit">
            <div className="flex flex-col items-center w-[600px] rounded-md mt-20">
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1>{cat.ON}</h1>
                    <h2 className="mt-2">{cat.RU}</h2>
                </div>
                <nav className="flex flex-col items-center my-5">
                    {poems.length > 0 ? (
                        poems.map((poem: any) => (
                            <Link
                                key={poem.slug}
                                href={`/${category}/${poem.slug}`}
                                title={poem.Title}
                                aria-label={poem.Title}
                            >
                                <p className="font-Kells mt-2 text-xl sm:text-3xl hover:text-sky-500">
                                    {poem.Title}
                                </p>
                            </Link>
                        ))
                    ) : (
                        <p className="text-center">No poems found</p>
                    )}
                </nav>
            </div>
        </main>
    );
}