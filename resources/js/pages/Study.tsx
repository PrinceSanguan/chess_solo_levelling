import Footer from '@/components/landing/footer';
import Navbar from '@/components/landing/navbar';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Study() {
    const [selectedCategory, setSelectedCategory] = useState('pieces');

    const chessPieces = [
        {
            id: 'rook',
            name: 'The Rook',
            symbol: '♜',
            description: 'Moves in straight lines - horizontally and vertically',
            difficulty: 'Beginner',
            lessons: 3,
            route: '/study/rook',
            color: 'bg-blue-600',
        },
        {
            id: 'bishop',
            name: 'The Bishop',
            symbol: '♗',
            description: 'Moves diagonally across the board',
            difficulty: 'Beginner',
            lessons: 3,
            route: '/study/bishop',
            color: 'bg-purple-600',
        },
        {
            id: 'queen',
            name: 'The Queen',
            symbol: '♕',
            description: 'The most powerful piece - combines rook and bishop',
            difficulty: 'Intermediate',
            lessons: 4,
            route: '/study/queen',
            color: 'bg-pink-600',
        },
        {
            id: 'king',
            name: 'The King',
            symbol: '♔',
            description: 'Moves one square in any direction',
            difficulty: 'Beginner',
            lessons: 2,
            route: '/study/king',
            color: 'bg-yellow-600',
        },
        {
            id: 'knight',
            name: 'The Knight',
            symbol: '♘',
            description: 'Moves in an L-shape and can jump over pieces',
            difficulty: 'Advanced',
            lessons: 4,
            route: '/study/knight',
            color: 'bg-green-600',
        },
        {
            id: 'pawn',
            name: 'The Pawn',
            symbol: '♙',
            description: 'Moves forward one square, captures diagonally',
            difficulty: 'Intermediate',
            lessons: 3,
            route: '/study/pawn',
            color: 'bg-gray-600',
        },
    ];

    const categories = [
        { id: 'pieces', name: 'Chess Pieces', icon: '♟️' },
        { id: 'fundamentals', name: 'Fundamentals', icon: '📚' },
        { id: 'intermediate', name: 'Intermediate', icon: '⚔️' },
        { id: 'advanced', name: 'Advanced', icon: '🏆' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#05101f] to-[#071428] text-white">
            <Navbar />

            <div className="pt-20">
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold">Interactive Chess Study</h1>
                        <p className="mx-auto max-w-2xl text-gray-300">
                            Learn chess through interactive lessons and hands-on practice. Master each piece and fundamental concept step by step.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="mb-8 flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`rounded-lg px-6 py-3 transition-all ${
                                    selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-blue-900/30 text-gray-300 hover:bg-blue-900/50'
                                }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {selectedCategory === 'pieces' && (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {chessPieces.map((piece) => (
                                <div key={piece.id} className="overflow-hidden rounded-lg bg-blue-900/20 transition-all hover:bg-blue-900/30">
                                    <div className="p-6">
                                        <div className="mb-4 flex items-center">
                                            <div
                                                className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white ${piece.color}`}
                                            >
                                                {piece.symbol}
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-xl font-bold">{piece.name}</h3>
                                                <div className="flex items-center gap-2">
                                                    <span
                                                        className={`rounded-full px-2 py-1 text-xs ${
                                                            piece.difficulty === 'Beginner'
                                                                ? 'bg-green-600'
                                                                : piece.difficulty === 'Intermediate'
                                                                  ? 'bg-yellow-600'
                                                                  : 'bg-red-600'
                                                        }`}
                                                    >
                                                        {piece.difficulty}
                                                    </span>
                                                    <span className="text-sm text-gray-400">{piece.lessons} lessons</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mb-4 text-gray-300">{piece.description}</p>

                                        <Link href={piece.route} className="block w-full">
                                            <Button className="w-full bg-blue-600 hover:bg-blue-500">Start Learning</Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {selectedCategory !== 'pieces' && (
                        <div className="rounded-lg bg-blue-900/20 py-12 text-center">
                            <div className="mb-4 text-6xl">🚧</div>
                            <h3 className="mb-2 text-xl font-bold">Coming Soon</h3>
                            <p className="text-gray-400">
                                {selectedCategory === 'fundamentals' && 'Basic chess rules, tactics, and strategy lessons'}
                                {selectedCategory === 'intermediate' && 'Advanced tactics, opening principles, and endgame basics'}
                                {selectedCategory === 'advanced' && 'Complex strategies, master-level tactics, and tournament preparation'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
