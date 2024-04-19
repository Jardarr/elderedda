import React from "react";
import { groasspell } from "./page.utils";
export default function GroasSpell() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Grógaldr</h1>
          <h2 className="poem_title poem_title_sub">
            Заклинание Гроа, которое она, мёртвая,
            <br /> спела своему сыну
          </h2>
        </div>
        {groasspell.map((poem, id) => {
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
            <p>Текст на русском языке в переводе А. И. Корсуна</p>
          </span>
        </div>
      </div>
    </main>
  );
}
