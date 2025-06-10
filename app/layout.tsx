import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "./components/Provider";
import "./index.css";
import ToTopButton from "./components/ToTopButton";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`${inter.className} bg-neutral-300 text-neutral-800 dark:bg-gradient-to-r from-sky-950 via-black to-sky-950 dark:text-neutral-200`}>
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
			</body>
		</html>
	);
}
