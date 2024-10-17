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
import { EDDAAPP, EDDASONGS, SONGOFGODS, SONGOFHEROES } from "./NavbarItemList";
import Image from "next/image";
import { useState } from "react";

interface eddaHrefs {
    text: string;
    title: string;
    link: string;
}
export default function Navbar() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleLinkClick = () => {
        setIsSheetOpen(false);
    };
    return (
        <div className="flex w-full justify-between">
            <Link href="/">
                {/* <h1 className="text-2xl font-bold">
          Jardarr<span className="text-teal-800">Edda</span>
        </h1> */}
                <Image
                    className="w-20 p-2"
                    src="/J-logo.png"
                    width={150}
                    height={30}
                    alt="logo"
                />
            </Link>
            <div className="hidden sm:flex">
                <>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Link
                                        translate="no"
                                        href="/poems/about-gods"
                                    >
                                        Goðakvæði
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {SONGOFGODS.map((item: eddaHrefs) => (
                                        <Link
                                            translate="no"
                                            key={item.text}
                                            href={item.link}
                                            title={item.title}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                {item.text}
                                            </NavigationMenuLink>
                                        </Link>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Link
                                        translate="no"
                                        href="/poems/about-heroes"
                                    >
                                        Hetjukvæði
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {SONGOFHEROES.map((item) => (
                                        <Link
                                            translate="no"
                                            key={item.text}
                                            href={item.link}
                                            title={item.title}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                {item.text}
                                            </NavigationMenuLink>
                                        </Link>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Link
                                        translate="no"
                                        href="/poems/edda-songs"
                                    >
                                        Eddukvæði
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {EDDASONGS.map((item: eddaHrefs) => (
                                        <Link
                                            translate="no"
                                            key={item.text}
                                            href={item.link}
                                            title={item.title}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                {item.text}
                                            </NavigationMenuLink>
                                        </Link>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Link translate="no" href="/poems/edda-app">
                                        Viðbætir
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {EDDAAPP.map((item: eddaHrefs) => (
                                        <Link
                                            translate="no"
                                            key={item.text}
                                            href={item.link}
                                            title={item.title}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                {item.text}
                                            </NavigationMenuLink>
                                        </Link>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </>
            </div>
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
                            <SheetTitle>
                                <Link
                                    onClick={handleLinkClick}
                                    href="/poems/about-gods"
                                >
                                    Goðakvæði
                                </Link>
                            </SheetTitle>
                            <SheetTitle>
                                <Link
                                    onClick={handleLinkClick}
                                    href="/poems/about-heroes"
                                >
                                    Hetjukvæði
                                </Link>
                            </SheetTitle>
                            <SheetTitle>
                                <Link
                                    onClick={handleLinkClick}
                                    href="/poems/edda-songs"
                                >
                                    Eddukvæði
                                </Link>
                            </SheetTitle>
                            <SheetTitle>
                                <Link
                                    onClick={handleLinkClick}
                                    href="/poems/edda-app"
                                >
                                    Viðbætir
                                </Link>
                            </SheetTitle>
                            <SheetTitle>
                                <Link
                                    onClick={handleLinkClick}
                                    href="/poems/poetry"
                                >
                                    Ljóð
                                </Link>
                            </SheetTitle>
                            <SheetTitle>
                                <Link
                                    onClick={handleLinkClick}
                                    href="/poems/stora-edda"
                                >
                                    Stóra Edda
                                </Link>
                            </SheetTitle>
                            <SheetTitle>
                                <Link
                                    onClick={handleLinkClick}
                                    href="/poems/on-dictionary"
                                >
                                    Orðabók
                                </Link>
                            </SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
