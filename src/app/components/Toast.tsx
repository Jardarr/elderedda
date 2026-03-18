"use client";

import { useEffect, useState } from "react";

export default function Toast() {
    const [render, setRender] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem("home_toast_shown");

        if (!alreadyShown) {
            setRender(true);
            sessionStorage.setItem("home_toast_shown", "true");

            const enterTimer = requestAnimationFrame(() => {
                setVisible(true);
            });

            const hideTimer = window.setTimeout(() => {
                setVisible(false);
            }, 9000);

            const unmountTimer = window.setTimeout(() => {
                setRender(false);
            }, 9300);

            return () => {
                cancelAnimationFrame(enterTimer);
                clearTimeout(hideTimer);
                clearTimeout(unmountTimer);
            };
        }
    }, []);

    if (!render) return null;

    return (
        <div
            className={`min-w-80 text-xs sm:text-sm fixed left-1/2 -translate-x-1/2 top-20 sm:top-auto sm:bottom-20 sm:right-4 sm:left-auto sm:translate-x-0 bg-neutral-300/80 dark:bg-slate-800/70 border-transparent dark:border-teal-600 border p-4 rounded-lg shadow-lg z-50 transition-all duration-300 ease-out ${
                visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
            }`}
        >
            <p className="font-bold text-gray-600 dark:text-gray-200 mb-2">
                Встречайте - Gjallarbru 2.0!
            </p>
            <p>
                Теперь кроме русского языка, добавлены переводы и на английский!
            </p>
        </div>
    );
}
