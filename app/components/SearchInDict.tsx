'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Dictionary {
    word: string;
    definitions: string[];
}

export default function SearchInDict() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Dictionary[]>([]);
    const [displayedResults, setDisplayedResults] = useState<Dictionary[]>([]);
    const [data, setData] = useState<Dictionary[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const itemsPerPage = 10; // Количество элементов на страницу

    // Загрузка JSON-данных
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/ON-dictionary.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        }
        fetchData();
    }, []);

    // Настройка Fuse.js и выполнение поиска
    useEffect(() => {
        if (data.length === 0) return;
        const fuseOptions = {
            threshold: query.length === 1 ? 0 : 0.1,
            includeScore: true,
            keys: query.length === 1 ? ['word'] : ['word', 'definitions'],
            shouldSort: true,
        };

        const fuse = new Fuse(data, fuseOptions);

        if (query) {
            const searchResults = fuse.search(query.length === 1 ? query.charAt(0) : query);
            const newResults = searchResults.map((result) => result.item) as Dictionary[];
            setResults(newResults);
            setDisplayedResults(newResults.slice(0, itemsPerPage)); // Отображаем первую страницу
            setPage(1); // Сбрасываем страницу
            setHasMore(newResults.length > itemsPerPage); // Проверяем, есть ли ещё данные
        } else {
            setResults([]);
            setDisplayedResults([]);
            setHasMore(false);
        }
    }, [query, data]);

    // Функция для подгрузки следующих данных
    const loadMore = () => {
        if (results.length <= displayedResults.length) {
            setHasMore(false);
            return;
        }

        const nextPage = page + 1;
        const newItems = results.slice(0, nextPage * itemsPerPage);
        setDisplayedResults(newItems);
        setPage(nextPage);
        setHasMore(newItems.length < results.length);
    };

    return (
        <div className="w-full mx-auto p-4">
            <h1 className="text-2xl sea-color font-bold mb-4">Поиск в словаре</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Введите слово для поиска..."
                className="w-full p-2 border rounded-md mb-4"
            />
            {query === '' ? (
                <p className="text-gray-500 text-center">Введите запрос</p>
            ) : results.length === 0 ? (
                <p className="text-gray-500 text-center">Ничего не найдено</p>
            ) : (
                <InfiniteScroll
                    dataLength={displayedResults.length} // Количество уже отображённых элементов
                    next={loadMore} // Функция подгрузки данных
                    hasMore={hasMore} // Есть ли ещё данные для загрузки
                    loader={<p className="text-gray-500 text-center p-2">Загрузка...</p>} // Индикатор загрузки
                    endMessage={<p className="text-gray-500 text-center p-2">Это все результаты</p>} // Сообщение при завершении
                >
                    <ul className="space-y-4">
                        {displayedResults.map((item: Dictionary) => (
                            <li key={item.word} className="border p-4 rounded-md">
                                <h2 className="text-lg font-semibold">{item.word}</h2>
                                {item.definitions.map((def, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{ __html: def }} />
                                ))}
                            </li>
                        ))}
                    </ul>
                </InfiniteScroll>
            )}
        </div>
    );
}