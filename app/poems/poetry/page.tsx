import React from "react";
import { poetry } from "./page.utils";
export default function Poetry() {
  return (
    <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base h-svh">
      <div className="flex justify-center items-center flex-col w-[600px] bg-gray-800/70 rounded-md h-full">
        <div className="m-8">
          <span>
            {poetry.map((poem, index) => (
              <p key={index}>{poem.content}</p>
            ))}
          </span>
        </div>
        <div className="">
          <span>
            <p>jardarr</p>
          </span>
        </div>
      </div>
    </main>
  );
}