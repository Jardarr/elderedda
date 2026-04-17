import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "../../i18n/routing";
import { useState } from "react";
import { getFullLinks } from "../utils/linksBuilder";
import { usePathname } from "next/navigation";

export default function BurgerMenu() {
	const pathname = usePathname();
	const locale = pathname.split("/")[1] || "en";
	const burgerLinks = getFullLinks(locale);
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const handleLinkClick = () => {
		setIsSheetOpen(false);
	};
	return (
		<nav className="flex items-center md:hidden">
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
							{burgerLinks.map((link) => (
								<Link key={link.href} aria-label={link.aria} title={link.aria} onClick={handleLinkClick} href={link.href} className="text-neutral-800 dark:text-neutral-200">
									<span className="text-base">{link.text}</span>
								</Link>
							))}
						</SheetTitle>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
