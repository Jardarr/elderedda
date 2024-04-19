import { EDDASONGS } from "@/app/components/NavbarItemList";
import Link from "next/link";
import React from "react";

export default function EddaSongs() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Eddukvæði</h1>
          <h2 className="poem_title poem_title_sub">Эддические песни</h2>
        </div>
        <div className="main_wrapper_text_links">
          {EDDASONGS.map((item) => (
            <Link key={item.text} href={item.link} title={item.title}>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
