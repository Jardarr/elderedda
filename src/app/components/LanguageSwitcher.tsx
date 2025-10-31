"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Themebutton() {
	const router = useRouter();
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState("en");

    useEffect(() => {
        const segments = pathname.split("/");
        if (segments[1]) {
            setCurrentLocale(segments[1]);
        }
    }, [pathname]);

    const switchLanguage = (locale: string) => {
        const segments = pathname.split("/");
        segments[1] = locale; // Assuming the locale is the first segment after the domain
        const newPathname = segments.join("/");
        router.push(newPathname);
    };

    const handleChange = (locale: string) => {
        switchLanguage(locale);
    };
	return (
		<button
			onClick={() => handleChange(currentLocale === "ru" ? "en" : "ru")}
			className="bg-neutral-500/30 dark:bg-neutral-700/30 p-2 rounded-lg sea-color dark:text-neutral-300 border border-transparent transition ease-in-out duration-300 hover:border-sky-400"
		>
			{currentLocale === "ru" ? "EN" : "RU"}
		</button>
	);
}