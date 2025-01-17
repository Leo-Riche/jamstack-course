"use client";
import { useEffect, useState } from "react";

interface Hero {
    id: number;
    name: string;
    description: string;
}

interface ParagraphChild {
    type: string;
    text: string;
}

interface Paragraph {
    type: string;
    children: ParagraphChild[];
}

interface ImageData {
    id: number;
    url: string;
    alternativeText: string;
}

interface HomeData {
    name: string;
    description: Paragraph[];
    slug: string;
    images: ImageData[];
    createdAt: string;
    updatedAt: string;
}

export default function Heros() {
    const [data, setData] = useState<HomeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "http://localhost:1337/api/heros?populate=image"
                );
                if (!response.ok) {
                    throw new Error(
                        "Erreur lors de la récupération des données"
                    );
                }
                const json = await response.json();
                setData(json.data);
                setLoading(false);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Une erreur inconnue s'est produite");
                }
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Heros</h1>
            <button
                className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={() => (window.location.href = "/")}
            >
                Go to Home
            </button>
            <button
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
                onClick={() => (window.location.href = "/unites")}
            >
                Go to Unites
            </button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && (
                <ul>
                    {data.map((hero: Hero) => (
                        <li key={hero.id}>
                            <h2 className="text-2xl font-bold">{hero.name}</h2>
                            <p>{hero.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}