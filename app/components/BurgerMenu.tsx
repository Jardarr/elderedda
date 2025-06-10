import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import PoemsLinks from "../utils/PoemsLinks";

export default function BurgerMenu() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleLinkClick = () => {
        setIsSheetOpen(false);
    };
    return (
        <nav className="flex items-center sm:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger
                    onClick={() => setIsSheetOpen(true)}
                    className="align-middle w-6 h-6 rounded-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-800 dark:text-neutral-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </SheetTrigger>
                <SheetContent className="bg-neutral-200/90 dark:bg-neutral-800/80">
                    <SheetHeader>
                        <SheetTitle className="flex flex-col">
                            {PoemsLinks.map((link, index) => (
                                <Link key={index} aria-label={link.aria} title={link.aria} onClick={handleLinkClick} href={link.href} className="text-neutral-800 dark:text-neutral-200">
                                    {link.text}
                                </Link>
                            ))}
                        </SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
