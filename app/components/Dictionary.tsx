"use client";
import { useState } from "react";
import { mainData } from "./../types/mainData";
import { linkList } from "./../poems/on-dictionary/linkList";
import Link from "next/link";
import Spinner from "@/app/components/Spinner";

export default function Dictionary() {
    const [query, setQuery] = useState<string>("");
    const [response, setResponse] = useState<mainData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getWord = async () => {
        if (!query.trim()) return;
        setLoading(true);
        try {
            const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
            if (!res.ok) {
                console.error("Ошибка поиска:", await res.text());
                return;
            }
            const data: mainData[] = await res.json();
            setResponse(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="my-5">
                <input
                    className="bg-neutral-300 text-sky-600 dark:text-neutral-200 dark:bg-neutral-400 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-sky-700 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                    placeholder="Введите слово"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className="text-neutral-200 ml-3 border py-2 px-3 text-sm rounded-md focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition ease-in-out duration-300 bg-[#203E51] hover:border-sky-400"
                    onClick={getWord}>
                    Поиск
                </button>
            </div>
            <div className="m-5 flex flex-wrap justify-center">
                {linkList.map((item) => (
                    <Link translate="no" className="text-neutral-800 dark:text-neutral-200 mx-1" key={item.letter} href="#" onClick={() => setQuery(item.letter)}>
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
                    response.map((entry, index) => (
                        <div key={index}>
                            <span translate="no" dangerouslySetInnerHTML={{ __html: entry.word }} />
                            <br />
                            {entry.definitions.map((definition, defIndex) => (
                                <span key={defIndex}>
                                    <span dangerouslySetInnerHTML={{ __html: definition }} />
                                    <br />
                                    <br />
                                </span>
                            ))}
                        </div>
                    ))
                ) : (
                    <div className="m-5 text-gray-500 text-xs text-center">
                        <p>Для поиска по словарю введите слово или нажмите на букву из списка</p>
                    </div>
                )}
            </div>
        </>
    );
}
