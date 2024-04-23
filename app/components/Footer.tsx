import Link from "next/link";

export default function Footer() {
	return (
		<div className="flex flex-col lg:flex-row text-sm md:text-base">
			<div className="flex w-full justify-center flex-wrap lg:w-1/3">
				<Link className="px-2" href="#">Goðakvæði</Link>
				<Link className="px-2" href="#">Hetjukvæði</Link>
				<Link className="px-2" href="#">Eddukvæði</Link>
				<Link className="px-2" href="#">Viðbætir</Link>
				<Link className="px-2" href="#">Ljóð</Link>
			</div>
            <div className="w-full text-center lg:w-1/3"><span>&copy; 2024 Designed by Jardarr</span></div>
            <div className="w-full text-center lg:w-1/3"><Link href="https://t.me/jardarr">tg: jardarr</Link></div>
		</div>
	);
}
