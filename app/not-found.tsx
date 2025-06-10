import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    title: "Gjallarbru | Page not found",
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}
export default function NotFound() {
    return (
        <div className="flex justify-center items-center bg-not-found bg-cover bg-fixed bg-top bg-no-repeat h-dvh">
            <div className="flex w-full items-center justify-center text-center flex-col sea-color text-6xl lg:text-9xl bg-gray-500/45 rounded-md">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
        </div>
    );
}
