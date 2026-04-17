import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "../components/Provider";
import ToTopButton from "../components/ToTopButton";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${inter.className} bg-amber-100/50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-200`}
            >
                <NextIntlClientProvider locale={locale}>
                    <Provider>
                        <div className="top-0 sticky">
                            <Header />
                        </div>
                        {children}
                        <div className="px-4 md:px-24 py-4">
                            <Footer />
                        </div>
                        <ToTopButton />
                    </Provider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
