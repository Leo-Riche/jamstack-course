"use client";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Home</h1>
            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
                onClick={() => window.location.href = '/heros'}
            >
                Go to Heros
            </button>
            <button 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => window.location.href = '/unites'}
            >
                Go to Unites
            </button>
        </div>
    );
}
