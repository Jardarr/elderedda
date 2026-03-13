import { Metadata } from "next";
import { Link } from "../../../i18n/routing";
import onData from "../../utils/on.json";
import { notFound } from "next/navigation";
import categoryTitlesRaw from "../../utils/categoryLinks.json";
import { pickTitle, type LocalizedTitle } from "../../utils/localeTitle";
import { getTranslations } from "next-intl/server";

const categories = ["about-gods", "about-heroes", "edda-songs", "edda-app"] as const;
type Category = (typeof categories)[number];
const categoryTitles = categoryTitlesRaw as Record<Category, LocalizedTitle>;

type Props = {
    params: Promise<{ locale: string; category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category, locale } = await params;
    
    if (!categories.includes(category as Category)) {
        return { title: "Category not found" };
    }

    const cat = categoryTitles[category as Category];
    const localeTitle = pickTitle(locale, cat);
    return {
        title: `Gjallarbru | ${localeTitle}`,
        description: `${localeTitle} - Elder Edda`,
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category, locale } = await params;
    
    if (!categories.includes(category as Category)) {
        notFound();
    }

    const poems = Object.entries(onData.Poems as Record<string, any>)
        .map(([key, data]) => ({ key, data }))
        .filter((poem) => poem.data.category === category);

    const cat = categoryTitles[category as Category];
    const localeTitle = pickTitle(locale, cat);
    const t = await getTranslations({ locale });

    return (
        <main className="flex items-center justify-center text-sm md:text-base min-h-screen sm:h-fit">
            <div className="flex flex-col items-center w-[600px] rounded-md mt-20">
                <div className="m-8 text-3xl sea-color text-center font-bold">
                    <h1>{cat.ON}</h1>
                    <h2 className="mt-2">{localeTitle}</h2>
                </div>
                <nav className="flex flex-col items-center my-5">
                    {poems.length > 0 ? (
                        poems.map((poem) => (
                            <Link
                                key={poem.data.slug}
                                href={`/${category}/${poem.data.slug}`}
                                title={t(`Poems.${poem.key}.Title`)}
                                aria-label={t(`Poems.${poem.key}.Title`)}
                            >
                                <p className="mt-2 hover:text-sky-500">
                                    {t(`Poems.${poem.key}.Title`)}
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
