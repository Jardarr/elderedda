"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import BurgerMenu from "./BurgerMenu";
import HeaderLinks from "../utils/HeaderLinks";
export default function Header() {
    return (
        <header className="flex w-full justify-between bg-white/20 dark:bg-gradient-to-r from-sky-950/30 via-black/30 to-sky-950/30 backdrop-blur-lg shadow-lg absolute top-0 right-0 left-0 z-50 px-4 md:px-24">
            <div className="flex items-center">
                <Link href="/">
                    <Image className="w-14 sm:w-16 p-2" aria-label="Логотип сайта Gjallarbru Elder Edda" src="/gjallarbru.png" width={150} height={30} alt="logo" />
                </Link>
                <span className="font-Goth uppercase w-10 sm:w-auto text-xs/3 sm:text-xl">
                    GJALLARBRU
                </span>
            </div>
            <nav className="flex items-center sea-color dark:text-neutral-300">
                <div className="font-Goth hidden sm:flex">
                    {HeaderLinks.map((link, index) => (
                        <Link key={index} aria-label={link.aria} title={link.aria} translate="no" className="px-2 hover:text-sky-500 dark:hover:text-neutral-300" href={link.href}>
                            {link.text}
                        </Link>
                    ))}
                </div>
                <div className="mx-4">
                    <ThemeSwitcher />
                </div>
                <BurgerMenu />
            </nav>
        </header>
    );
}
