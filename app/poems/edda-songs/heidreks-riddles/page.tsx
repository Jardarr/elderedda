import React from "react";
import { heidreksriddles } from "./page.utils";
export default function HeidreksRiddles() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Heiðreksgátur</h1>
          <h2 className="poem_title poem_title_sub">
            Загадки Хейдрека
            <br />
            (Загадки Гестумблинди)
          </h2>
        </div>
        {heidreksriddles.map((poem, id) => {
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
            <p>Текст на русском языке в переводе Т. В. Топоровой</p>
          </span>
        </div>
      </div>
    </main>
  );
}
