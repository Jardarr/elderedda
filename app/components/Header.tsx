"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import BurgerMenu from "./BurgerMenu";
// import EddaList from "../utils/EddaList";

export default function Header() {
	return (
		<div className="flex w-full justify-between bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-lg absolute top-0 right-0 left-0 z-50 px-4 md:px-24">
			<Link href="/">
				<Image className="w-16 lg:w-20 p-2" src="/Jr-logo.png" width={150} height={30} alt="logo" />
			</Link>
			<div className="flex items-center sea-color dark:text-neutral-300">
				<div className="hidden sm:flex">
					<Link href="/poems" style={{ fontFamily: 'Goth, sans-serif' }}>Poems</Link>
				</div>
                <div className="mx-4">
					<ThemeSwitcher />
				</div>
                <BurgerMenu />
			</div>
		</div>
	);
}
