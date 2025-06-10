import { Send } from "lucide-react";
import Link from "next/link";
import Copyright from "./Copyright";
import PoemsLinks from "../utils/PoemsLinks";

export default function Footer() {
    return (
        <footer className="flex flex-col lg:justify-between lg:flex-row md:text-xs sea-color dark:text-neutral-500 text-xs">
            <div className="flex justify-center flex-col">
                <div className="flex justify-center items-center flex-wrap">
                    {PoemsLinks.map((link, index) => (
                        <Link key={index} aria-label={link.aria} title={link.aria} translate="no" className="px-2 hover:text-sky-500 dark:hover:text-neutral-300" href={link.href}>
                            {link.text}
                        </Link>
                    ))}
                </div>
                <Copyright />
            </div>
            <div className="flex justify-center items-center lg:justify-end w-full text-center lg:w-1/3 my-8 sm:my-0">
                <Link href="https://t.me/jardarr">
                    <Send />
                </Link>
            </div>
        </footer>
    );
}
