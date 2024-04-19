import React from "react";
import { secondsongofhelgatheslayerofhunding } from "./page.utils";
export default function SecondSongOfHelgaTheSlayerOfHunding() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Helgakviða Hundingsbana önnur</h1>
          <h2 className="poem_title poem_title_sub">
            Вторая Песнь о Хельги убийце Хундинга
          </h2>
        </div>
        <div className="subtitle">
          <p>О Вёльсунгах</p>
        </div>
        {secondsongofhelgatheslayerofhunding.map((poem, id) => {
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
