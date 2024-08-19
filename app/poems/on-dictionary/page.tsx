"use client";
import { useState } from "react";
import ToTopButton from "./../../components/ToTopButton";
import Link from "next/link";
import { linkList } from "./linkList";
import Spinner from "@/app/components/Spinner";

interface mainData {
    word: string;
    definitions: string[];
}

export default function Home() {
    const [letter, setLetter] = useState<string>("");
    const [response, setResponse] = useState<mainData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const Dictionary =
        "https://gist.githubusercontent.com/Jardarr/812383e8b50cc4c5c902b27e69851de3/raw/e5764fdaa12f0347eb4ad7c9c04caa23b5a615be/ON-dictionary";

    const getLetter = () => {
        setLoading(true);
        fetch(Dictionary)
            .then((response) => response.json())
            .then((data) => {
                const filteredLetters = data.filter(
                    (entry: mainData) =>
                        entry.word.charAt(0).toLowerCase() ===
                        letter.toLowerCase()
                );
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
        <main className="flex items-center justify-center bg-poem-bg bg-cover bg-fixed bg-top bg-no-repeat text-sm md:text-base min-h-screen sm:h-fit">
            <div className="flex flex-col items-center w-[600px] bg-gray-800/70 rounded-md min-h-screen">
                <div className="flex flex-col w-full p-8 text-2xl text-teal-800 text-center font-bold">
                    <h1>Cleasby & Vigfusson Old Norse dictionary</h1>
                    <p className="text-gray-200 text-xs mt-4 font-thin">Словарь древнескандинавского языка. Онлайн-версия классического древнескандинавского/древнеисландского словаря Ричарда Клисби и Гудбранда Вигфуссона, первоначально опубликованного в 1874 году.</p>
                </div>
                <div className="my-5">
                    <input
                        className="bg-gray-800 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                        placeholder="æ"
                        type="text"
                        value={letter}
                        onChange={(e) => setLetter(e.target.value)}
                    />
                    <button
                        className="ml-3 border py-2 px-3 text-sm rounded-md focus:border-teal-500 focus:ring-1 focus:ring-teal-500 hover:border-teal-500 transition ease-in-out duration-300 bg-teal-950/80"
                        onClick={getLetter}
                    >
                        Поиск
                    </button>
                </div>
                <div className="m-5 flex flex-wrap justify-center">
                    {linkList.map((item) => (
                        <Link className="text-gray-100 mx-1" key={item.letter} onClick={() => setLetter(item.letter)} href="#">{item.letter}</Link>
                    ))}
                </div>
                <div className="max-w-2xl p-3 flex flex-col">
                    {loading ? (
                        <div className="m-5 w-[100px] h-[100px]">
                            <Spinner />
                        </div>
                    ) : response.length > 0 ? (
                        response.map((norse, index) => (
                            <div className="text-gray-100" key={index}>
                                <span
                                    translate="no"
                                    dangerouslySetInnerHTML={{
                                        __html: norse.word,
                                    }}
                                />
                                <br />
                                {norse.definitions.map(
                                    (definition, defIndex) => (
                                        <span key={defIndex}>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: definition,
                                                }}
                                            />
                                            <br />
                                            <br />
                                        </span>
                                    )
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="m-5 text-gray-500 text-xs text-center">
                            <p>
                                Для поиска по словарю введите букву
                                исландского алфавита или кликните на букву из алфавита выше
                            </p>
                        </div>
                    )}
                </div>
                <ToTopButton />
            </div>
        </main>
    );
}