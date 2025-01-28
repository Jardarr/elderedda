import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jardarr | Page not found",
    viewport: "width=device-width, initial-scale=1.0",
};
export default function NotFound() {
    return (
        <div className="flex justify-center items-center bg-not-found bg-cover bg-fixed bg-top bg-no-repeat h-dvh">
            <div className="flex w-full items-center justify-center text-center flex-col text-teal-800 text-6xl lg:text-9xl bg-gray-500/45 rounded-md">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
        </div>
    );
}
