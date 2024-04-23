import { Ephesis } from "next/font/google";
const ephesis = Ephesis({ subsets: ["latin"], weight: "400" });

export default function Home() {
	return (
		<div>
			<div className="flex flex-col items-center justify-center bg-home-bg bg-cover bg-center bg-attachment-fixed bg-no-repeat h-dvh">
				<div className="text-white bg-gray-500/40 w-full text-center p-5 text-2xl">
					<span className={`${ephesis.className}`}>
						Hearing I ask <br />
						from the holy races, From Heimdall&#39;s sons, <br />
						both high and low; Thou wilt, Valfather, <br />
						that well I relate Old tales I remember <br />
						of men long ago.
						<h1>&copy; Elder Edda</h1>
					</span>
				</div>
			</div>
		</div>
	);
}
