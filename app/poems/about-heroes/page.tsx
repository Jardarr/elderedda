import { SONGOFHEROES } from "@/app/components/NavbarItemList";
import Link from "next/link";
import React from "react";
export default function AboutHeroes() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Hetjukvæði</h1>
          <h2 className="poem_title poem_title_sub">Песни о Героях</h2>
        </div>
        <div className="main_wrapper_text_links">
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
