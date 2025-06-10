"use client";
import { useState, useEffect } from "react";
import { ArrowUpToLine } from "lucide-react";

export default function ToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            id="scrollToTopButton"
            className={`fixed bottom-3 right-5 border py-2 px-3 text-sm text-neutral-200 rounded-md focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition ease-in-out duration-300 bg-[#203E51] hover:border-sky-400 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={scrollToTop}>
            <ArrowUpToLine />
        </button>
    );
}
