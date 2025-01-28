import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "./components/Provider";
import "./styles/index.css";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`${inter.className} bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200`}>
				<Provider>
					<div className="sticky top-0">
						<Header />
					</div>
					{children}
					<div className="px-4 md:px-24 py-4">
						<Footer />
					</div>
				</Provider>
			</body>
		</html>
	);
}
