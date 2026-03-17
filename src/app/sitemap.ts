import { MetadataRoute } from "next";
import onData from "./utils/on.json";
import { routing } from "../i18n/routing";

const baseUrl = "https://gjallarbru.ru";
const locales = routing.locales;
const defaultLocale = routing.defaultLocale;

const staticRoutes = [
    { path: "/", priority: 1.0 },
    { path: "/stora-edda", priority: 0.9 },
    { path: "/poetry", priority: 0.8 },
    { path: "/on-dictionary", priority: 0.8 },
];

interface Poem {
    slug: string;
    category: string;
    Title: string;
}

interface OnData {
    Poems: Record<string, Poem>;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    const data = onData as unknown as OnData;
    const poems = Object.values(data.Poems);
    const categories = Array.from(new Set(poems.map((poem) => poem.category)));

    const localizedPath = (path: string, locale: string) =>
        locale === defaultLocale ? path : `/${locale}${path}`;

    // Статические маршруты
    for (const locale of locales) {
        for (const route of staticRoutes) {
            const href = localizedPath(route.path, locale);
            sitemapEntries.push({
                url: `${baseUrl}${href}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: route.priority,
            });
        }

        // Страницы категорий
        for (const category of categories) {
            const href = localizedPath(`/${category}`, locale);
            sitemapEntries.push({
                url: `${baseUrl}${href}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.85,
            });
        }

        // Динамические страницы поэм
        for (const poem of poems) {
            const href = localizedPath(`/${poem.category}/${poem.slug}`, locale);
            sitemapEntries.push({
                url: `${baseUrl}${href}`,
                lastModified: new Date(),
                changeFrequency: "monthly" as const,
                priority: 0.7,
            });
        }
    }

    return sitemapEntries;
}
