import React from "react";
import { SONGOFHEROES } from "@/app/components/NavbarItemList";
import Link from "next/link";
export default function AboutHeroes() {
  return (
    <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base h-svh">
      <div className="flex flex-col w-[600px] bg-gray-800/70 rounded-md h-full">
        <div className="m-8 text-3xl text-teal-800 text-center font-bold">
          <h1>Hetjukvæði</h1>
          <h2>Песни о Героях</h2>
        </div>
        <div className="flex flex-col items-center mt-5">
          {SONGOFHEROES.map((item) => (
            <Link key={item.text} href={item.link} title={item.title}>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};
