import React from "react";
import { songofhjalmar } from "./page.utils";
export default function SongOfHjalmar() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Hjálmarskviða</h1>
          <h2 className="poem_title poem_title_sub">Песнь о Хьяльмаре</h2>
        </div>
        {songofhjalmar.map((poem, id) => {
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
            <p>Древнеисландский текст, ред. Guðni Jónsson</p>
            <p>Текст на русском языке в переводе Т. Ермолаева</p>
          </span>
        </div>
      </div>
    </main>
  );
}
