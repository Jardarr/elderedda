import { ArrowUpToLine } from "lucide-react";

export default function ToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button className="fixed bottom-3 right-5 border py-2 px-3 text-sm rounded-md focus:border-teal-500 focus:ring-1 focus:ring-teal-500 hover:border-teal-500 transition ease-in-out duration-300 bg-teal-950/80" onClick={scrollToTop}>
            <ArrowUpToLine />
        </button>
    )
}