"use client";
import { useState } from "react";
import { mainData } from "./../types/mainData";
import { linkList } from "./../poems/on-dictionary/linkList";
import Link from "next/link";
import Spinner from "@/app/components/Spinner";

export default function Dictionary() {
    const [letter, setLetter] = useState<string>("");
    const [response, setResponse] = useState<mainData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const Dictionary = "/ON-dictionary.json";

    const getLetter = () => {
        setLoading(true);
        fetch(Dictionary)
            .then((response) => response.json())
            .then((data) => {
                const filteredLetters = data.filter((entry: mainData) => entry.word.charAt(0).toLowerCase() === letter.toLowerCase());
                setResponse(filteredLetters);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <div className="my-5">
                <input
                    className="bg-neutral-300 text-sky-600 dark:text-neutral-200 dark:bg-neutral-400 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-sky-700 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="æ"
                    type="text"
                    value={letter}
                    onChange={(e) => setLetter(e.target.value)}
                />
                <button
                    className="text-neutral-200 ml-3 border py-2 px-3 text-sm rounded-md focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition ease-in-out duration-300 bg-[#203E51] hover:border-sky-400"
                    onClick={getLetter}>
                    Поиск
                </button>
            </div>
            <div className="m-5 flex flex-wrap justify-center">
                {linkList.map((item) => (
                    <Link translate="no" className="text-neutral-800 dark:text-neutral-200 mx-1" key={item.letter} onClick={() => setLetter(item.letter)} href="#">
                        {item.letter}
                    </Link>
                ))}
            </div>
            <div className="max-w-2xl p-3 flex flex-col">
                {loading ? (
                    <div className="m-5 w-[100px] h-[100px]">
                        <Spinner />
                    </div>
                ) : response.length > 0 ? (
                    response.map((norse, index) => (
                        <div key={index}>
                            <span
                                translate="no"
                                dangerouslySetInnerHTML={{
                                    __html: norse.word,
                                }}
                            />
                            <br />
                            {norse.definitions.map((definition, defIndex) => (
                                <span key={defIndex}>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: definition,
                                        }}
                                    />
                                    <br />
                                    <br />
                                </span>
                            ))}
                        </div>
                    ))
                ) : (
                    <div className="m-5 text-gray-500 text-xs text-center">
                        <p>Для поиска по словарю введите букву исландского алфавита или кликните на букву из алфавита выше</p>
                    </div>
                )}
            </div>
        </>
    );
}
