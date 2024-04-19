import React from "react";
import { ancientspeechesofbjarki } from "./page.utils";
export default function AncientSpeechesOfBjarki() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Bjarkamál in fornu</h1>
          <h2 className="poem_title poem_title_sub">Древние речи Бьярки</h2>
        </div>
        {ancientspeechesofbjarki.map((poem, id) => {
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
            <p>Древнеисландский текст, Stóra Edda</p>
            <p>
              Текст на русском языке в переводе Ю. К. Кузьменко и О. А.
              Смирницкой
            </p>
          </span>
        </div>
      </div>
    </main>
  );
}
