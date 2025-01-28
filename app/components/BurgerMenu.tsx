import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import PoemsList from "../utils/PoemsList";

export default function BurgerMenu() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleLinkClick = () => {
        setIsSheetOpen(false);
    };
    return (
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
                    className="w-6 h-6 text-neutral-800 dark:text-neutral-200"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </SheetTrigger>
            <SheetContent className="bg-neutral-200 dark:bg-neutral-800/80">
                <SheetHeader>
                    <SheetTitle className="flex flex-col">
                        {PoemsList.map((item) => (
                            <Link
                                key={item.text}
                                onClick={handleLinkClick}
                                href={item.link ?? "#"}
                                className="text-neutral-800 dark:text-neutral-200"
                            >
                                {item.text}
                            </Link>
                        ))}
                    </SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
    )
}