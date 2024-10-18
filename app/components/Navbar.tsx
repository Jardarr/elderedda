"use client";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import EddaList from "../utils/EddaList";
import PoemsList from "../utils/PoemsList";

interface PoemsData {
    name?: string;
    text?: string;
    title?: string;
    link?: string;
}

type PoemsCategory = "song_of_gods" | "song_of_heroes" | "edda_songs" | "edda_app";

export default function Navbar() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleLinkClick = () => {
        setIsSheetOpen(false);
    };

    return (
        <div className="flex w-full justify-between">
            <Link href="/">
                <Image
                    className="w-16 lg:w-20 p-2"
                    src="/J-logo.png"
                    width={150}
                    height={30}
                    alt="logo"
                />
            </Link>
            {/* Навигационное меню для десктопов */}
            <div className="hidden sm:flex">
                <NavigationMenu>
                    <NavigationMenuList>
                        {/* Цикл по каждому объекту массива Poems */}
                        {EddaList.map((poemCategory, index) => (
                            // Проверка на наличие категорий и вывод данных
                            Object.keys(poemCategory).map((category) => (
                                <NavigationMenuItem key={`${category}-${index}`}>
                                    <NavigationMenuTrigger>
                                    {poemCategory[category as PoemsCategory]?.[0]?.name?.replace(/_/g, ' ') || 'UNKNOWN'}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {/* Проверка на наличие категории и данных в ней */}
                                        {poemCategory[category as PoemsCategory]?.map((item: PoemsData) => (
                                            <Link
                                                key={item.text}
                                                href={item.link ?? "#"}
                                                title={item.title}
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    {item.text}
                                                </NavigationMenuLink>
                                            </Link>
                                        ))}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Мобильное меню */}
            <div className="flex items-center sm:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger
                        onClick={() => setIsSheetOpen(true)}
                        className="align-middle w-6 h-6 rounded-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-200"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="flex flex-col">
                                {PoemsList.map((item) => (
                                    <Link
                                        key={item.text}
                                        onClick={handleLinkClick}
                                        href={item.link ?? "#"}
                                    >
                                        {item.text}
                                    </Link>
                                ))}
                            </SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
