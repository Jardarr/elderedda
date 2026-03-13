import categoryTitlesRaw from "./categoryLinks.json";
import { pickTitle, type LocalizedTitle } from "./localeTitle";

const categoryTitles = categoryTitlesRaw as Record<string, LocalizedTitle>;

const buildLinks = (locale: string, limit?: number) => {
    const entries = Object.entries(categoryTitles);
    const sliced = typeof limit === "number" ? entries.slice(0, limit) : entries;
    return sliced.map(([slug, title]) => {
        const text = pickTitle(locale, title);
        return { href: `/${slug}`, text, aria: text };
    });
};

export const getHeaderLinks = (locale: string) => buildLinks(locale, 4);
export const getFullLinks = (locale: string) => buildLinks(locale);
