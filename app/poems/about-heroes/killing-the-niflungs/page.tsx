import React from "react";
import { killingtheniflungs } from "./page.utils";
export default function KillingTheNiflungs() {
  return (
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Dráp Niflunga</h1>
          <h2 className="poem_title poem_title_sub">Убийство Нифлунгов</h2>
        </div>
        {killingtheniflungs.map((poem, id) => {
          return (
            <div key={id} className={poem.class}>
              <span>{poem.contentON}</span>
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
