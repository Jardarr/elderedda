import { MetadataRoute } from "next";
import onData from "./utils/on.json";

const baseUrl = "https://www.gjallarbru.ru";
const locales = ["en", "ru"];

// Статические маршруты для каждой локали
const staticRoutes = [
    { path: "/", priority: 1.0 },
    { path: "/stora-edda", priority: 0.9 },
    { path: "/poetry", priority: 0.8 },
    { path: "/on-dictionary", priority: 0.8 },
];

// Категории с приоритетами
const categories = [
    { path: "/about-gods", priority: 0.9 },
    { path: "/about-heroes", priority: 0.9 },
    { path: "/edda-songs", priority: 0.8 },
    { path: "/edda-app", priority: 0.8 },
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

    // Добавляем статические маршруты для всех локалей
    for (const locale of locales) {
        for (const route of staticRoutes) {
            const href = locale === "en" ? route.path : `/${locale}${route.path}`;
            sitemapEntries.push({
                url: `${baseUrl}${href}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: route.priority,
            });
        }

        // Добавляем страницы категорий для всех локалей
        for (const category of categories) {
            const href = locale === "en" ? category.path : `/${locale}${category.path}`;
            sitemapEntries.push({
                url: `${baseUrl}${href}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: category.priority,
            });
        }
    }

    // Добавляем динамические страницы поэм для всех локалей
    const data = onData as unknown as OnData;
    const poems = Object.values(data.Poems);
    for (const poem of poems) {
        for (const locale of locales) {
            const href = locale === "en"
                ? `/${poem.category}/${poem.slug}`
                : `/${locale}/${poem.category}/${poem.slug}`;

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
