import React from "react";
import { killingtheniflungs } from "./page.utils";
export default function KillingTheNiflungs() {
	return (
		<main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base">
			<div className="flex flex-col w-[600px] bg-gray-800/70 rounded-md">
				<div className="m-8 text-3xl text-teal-800 text-center font-bold">
					<h1>Dráp Niflunga</h1>
					<h2>Убийство Нифлунгов</h2>
				</div>
				{killingtheniflungs.map((poem, id) => {
					return (
						<div key={id} className={poem.class}>
							<div>{poem.contentON}</div>
							<div>{poem.contentRU}</div>
						</div>
					);
				})}
				<div className="flex justify-center my-8 mx-4">
					<span>
						<p>Древнеисландский текст, ред. Guðni Jónsson</p>
						<p>Текст на русском языке в переводе А. И. Корсуна</p>
					</span>
				</div>
			</div>
		</main>
	);
}
