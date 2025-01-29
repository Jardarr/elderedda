import { Send } from "lucide-react";
import Link from "next/link";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <div className="flex flex-col lg:justify-between lg:flex-row md:text-xs sea-color dark:text-neutral-500 text-xs">
      <div className="flex justify-center flex-col">
        <div className="flex justify-center items-center flex-wrap">
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
          <Link translate="no" className="px-2 hover:text-sky-500 dark:hover:text-neutral-300" href="/poems/poetry">
            Ljóð
          </Link>
          <Link translate="no" className="px-2 hover:text-sky-500 dark:hover:text-neutral-300" href="/poems/stora-edda">
            Stóra Edda
          </Link>
          <Link translate="no" className="px-2 hover:text-sky-500 dark:hover:text-neutral-300" href="/poems/on-dictionary">
            Orðabók
          </Link>
        </div>
        <Copyright />
      </div>
      <div className="flex justify-center items-center lg:justify-end w-full text-center lg:w-1/3 my-8 sm:my-0">
        <Link href="https://t.me/jardarr">
          <Send />
        </Link>
      </div>
    </div>
  );
}
