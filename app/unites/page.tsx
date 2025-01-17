"use client";

export default function Unites() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Unites</h1>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-4"
                onClick={() => (window.location.href = "/")}
            >
                Go to Home
            </button>
            <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                onClick={() => (window.location.href = "/heros")}
            >
                Go to Heros
            </button>
        </div>
    );
}
