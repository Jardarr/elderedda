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
            <div className="flex flex-col items-center w-[600px] rounded-md mt-20 px-2 sm:px-0">
                <div className="w-full flex flex-col gap-2 border border-1 rounded-xl p-4 border-amber-800/20 bg-amber-50 dark:bg-zinc-900 dark:border-zinc-800">
                    <span className="uppercase text-xs text-amber-900/60 dark:text-amber-200/40">{t("Titles.Category")}</span>
                    <h1 className="text-2xl text-zinc-900 dark:text-zinc-300">{cat.ON}</h1>
                    <h2 className="text-base dark:text-zinc-400">{localeTitle}</h2>
                </div>
                <nav className="flex flex-col items-center my-5 w-full">
                    {poems.length > 0 ? (
                        poems.map((poem) => (
                            <Link
                                key={poem.data.slug}
                                href={`/${category}/${poem.data.slug}`}
                                title={t(`Poems.${poem.key}.Title`)}
                                aria-label={t(`Poems.${poem.key}.Title`)}
                                className="w-full inline-flex justify-between border border-1 rounded-xl p-4 mb-4 border-amber-800/20 bg-amber-50 dark:bg-zinc-900 dark:border-zinc-800"
                            >
                                <p className="dark:text-zinc-400">
                                    {t(`Poems.${poem.key}.Title`)}
                                </p>
                                <span className="text-amber-900 dark:text-amber-200/40">›</span>
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
