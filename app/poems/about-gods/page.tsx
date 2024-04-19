import React from "react";
import { SONGOFGODS } from "@/app/components/NavbarItemList";
import Link from "next/link";

export default function AboutGods() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Goðakvæði</h1>
          <h2 className="poem_title poem_title_sub">Песни о Богах</h2>
        </div>
        <div className="main_wrapper_text_links">
          {SONGOFGODS.map((item) => (
            <Link key={item.text} href={item.link} title={item.title}>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
