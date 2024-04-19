import React from "react";
import { volvasprophecy } from "./page.utils";
export default function VolvasProphecy() {
  return (
    <main className="">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Völuspá</h1>
          <h2 className="poem_title poem_title_sub">Прорицание вёльвы</h2>
        </div>
        {volvasprophecy.map((poem, id) => {
          return (
            <div key={id} className={poem.class}>
              <div>{poem.number}</div>
              <span>{poem.contentON}</span>
              <div>{poem.number}</div>
              <span>{poem.contentRU}</span>
            </div>
          );
        })}
        <div className="notes">
          <span>
            <p>Древнеисландский текст, ред. Theodor Möbius, 1860 г.</p>
            <p>Текст на русском языке в переводе А. И. Корсуна</p>
          </span>
        </div>
      </div>
    </main>
  );
}
