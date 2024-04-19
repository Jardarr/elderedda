import React from "react";
import { speechesofthemanywise } from "./page.utils";
export default function SpeechesOfTheManyWise() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Fjölsvinnsmál</h1>
          <h2 className="poem_title poem_title_sub">
            Песнь о Свипдагре
            <br />
            (Песнь о Фйольсвидре)
          </h2>
        </div>
        {speechesofthemanywise.map((poem, id) => {
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
            <p>Текст на русском языке в переводе С. Свириденко</p>
          </span>
        </div>
      </div>
    </main>
  );
}
