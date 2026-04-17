"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/routing";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleChange = (nextLocale: string) => {
        const safePathname = pathname ?? "/";
        router.push(safePathname, { locale: nextLocale, scroll: false });
    };

    return (
		<button
            type="button"
            aria-label="Переключить язык"
            value={locale}
			onClick={() => handleChange(locale === "ru" ? "en" : "ru")}
			className="bg-neutral-500/30 dark:bg-neutral-700/30 p-2 rounded-lg sea-color dark:text-neutral-300 border border-transparent transition ease-in-out duration-300 hover:border-sky-500 dark:hover:border-amber-400/50"
		>
			{locale === "ru" ? "EN" : "RU"}
		</button>
    );
}
