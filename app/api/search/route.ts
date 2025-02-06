import { NextResponse } from "next/server";
import data from "../ON-dictionary.json";

interface DictionaryEntry {
    word: string;
    definitions: string[];
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";

    if (!q) {
        return NextResponse.json({ error: "Введите слово для поиска" }, { status: 400 });
    }

    const searchWord = q.toLowerCase();
    const results = (data as DictionaryEntry[]).filter((entry) => entry.word.toLowerCase().includes(searchWord));

    return NextResponse.json(results);
}
