"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import BurgerMenu from "./BurgerMenu";
// import EddaList from "../utils/EddaList";

export default function Header() {
    return (
        <div className="flex w-full justify-between bg-white/20 dark:bg-black/30 backdrop-blur-lg shadow-lg absolute top-0 right-0 left-0 z-50 px-4 md:px-24">
            <div className="flex items-center">
                <Link href="/">
                    <Image className="w-14 sm:w-16 p-2" src="/jardarr-logo.png" width={150} height={30} alt="logo" />
                </Link>
                <span className="uppercase sea-color w-10 sm:w-auto text-xs/3 sm:text-xl" style={{ fontFamily: "Goth, sans-serif" }}>
                    Jardarr Elder Edda
                </span>
            </div>
            <div className="flex items-center sea-color dark:text-neutral-300">
                <div className="hidden sm:flex">
                    <Link translate="no" className="px-2 hover:text-sky-500 dark:hover:text-neutral-300" href="/poems/about-gods">
                        Goðakvæði
                    </Link>
                    <Link translate="no" className="px-2 hover:text-sky-500 dark:hover:text-neutral-300" href="/poems/about-heroes">
                        Hetjukvæði
                    </Link>
                    <Link translate="no" className="px-2 hover:text-sky-500 dark:hover:text-neutral-300" href="/poems/edda-songs">
                        Eddukvæði
                    </Link>
                    <Link translate="no" className="px-2 hover:text-sky-500 dark:hover:text-neutral-300" href="/poems/edda-app">
                        Viðbætir
                    </Link>
                </div>
                <div className="mx-4">
                    <ThemeSwitcher />
                </div>
                <BurgerMenu />
            </div>
        </div>
    );
}
