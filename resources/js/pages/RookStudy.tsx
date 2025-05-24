import Footer from '@/components/landing/footer';
import Navbar from '@/components/landing/navbar';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function RookStudy() {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);
    const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
    const [rookPosition, setRookPosition] = useState('e2');
    const [targetPosition, setTargetPosition] = useState('e7');
    const [completedLevels, setCompletedLevels] = useState<number[]>([]);
    const [showCelebration, setShowCelebration] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);

    const levels = [
        {
            id: 1,
            title: 'Basic Vertical Movement',
            description: 'Move the rook vertically to reach the star',
            rookStart: 'e2',
            target: 'e7',
            instruction: 'Click on the rook, then click on the star to move it vertically!',
        },
        {
            id: 2,
            title: 'Basic Horizontal Movement',
            description: 'Move the rook horizontally to reach the star',
            rookStart: 'b4',
            target: 'g4',
            instruction: 'Now try moving the rook horizontally!',
        },
        {
            id: 3,
            title: 'L-shaped Path',
            description: 'Use two moves to reach the star',
            rookStart: 'a1',
            target: 'h8',
            instruction: 'Use vertical then horizontal movement (or vice versa) to reach the star!',
        },
    ];

    const currentLevelData = levels[currentLevel - 1];

    useEffect(() => {
        setRookPosition(currentLevelData.rookStart);
        setTargetPosition(currentLevelData.target);
        setSelectedSquare(null);
        setMoves(0);
    }, [currentLevel]);

    const getSquarePosition = (square: string) => {
        const file = square[0];
        const rank = parseInt(square[1]);
        const x = (file.charCodeAt(0) - 97) * 60;
        const y = (8 - rank) * 60;
        return { x, y };
    };

    const isValidRookMove = (from: string, to: string) => {
        const fromFile = from[0];
        const fromRank = parseInt(from[1]);
        const toFile = to[0];
        const toRank = parseInt(to[1]);

        return fromFile === toFile || fromRank === toRank;
    };

    const getValidMoves = (position: string) => {
        const file = position[0];
        const rank = parseInt(position[1]);
        const moves = [];

        // Vertical moves
        for (let r = 1; r <= 8; r++) {
            if (r !== rank) {
                moves.push(file + r);
            }
        }

        // Horizontal moves
        for (let f = 97; f <= 104; f++) {
            const fileChar = String.fromCharCode(f);
            if (fileChar !== file) {
                moves.push(fileChar + rank);
            }
        }

        return moves;
    };

    const handleSquareClick = (square: string) => {
        if (square === rookPosition) {
            setSelectedSquare(square);
        } else if (selectedSquare === rookPosition && isValidRookMove(rookPosition, square)) {
            setRookPosition(square);
            setSelectedSquare(null);
            setMoves(moves + 1);

            if (square === targetPosition) {
                const stars = Math.max(1, 4 - Math.floor(moves / 2));
                setScore(score + stars);
                setCompletedLevels([...completedLevels, currentLevel]);
                setShowCelebration(true);

                setTimeout(() => {
                    setShowCelebration(false);
                    if (currentLevel < levels.length) {
                        setCurrentLevel(currentLevel + 1);
                    }
                }, 2000);
            }
        } else {
            setSelectedSquare(null);
        }
    };

    const renderSquare = (file: string, rank: number) => {
        const square = file + rank;
        const isLight = (file.charCodeAt(0) - 97 + rank) % 2 === 1;
        const isSelected = selectedSquare === square;
        const isValidMove = selectedSquare === rookPosition && isValidRookMove(rookPosition, square);
        const hasRook = rookPosition === square;
        const hasTarget = targetPosition === square;

        return (
            <div
                key={square}
                className={`relative h-8 w-8 cursor-pointer border transition-all sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 ${
                    isLight ? 'bg-amber-100' : 'bg-amber-800'
                } ${isSelected ? 'ring-2 ring-blue-500' : ''} ${isValidMove ? 'bg-green-400 opacity-70' : ''}`}
                onClick={() => handleSquareClick(square)}
            >
                {hasRook && (
                    <div className="flex h-full w-full items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">♜</div>
                )}
                {hasTarget && (
                    <div className="flex h-full w-full items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">⭐</div>
                )}
                {isValidMove && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-green-600 opacity-60 sm:h-3 sm:w-3 md:h-4 md:w-4"></div>
                    </div>
                )}
            </div>
        );
    };

    const renderBoard = () => {
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

        return (
            <div className="relative mx-auto w-fit">
                <div className="grid grid-cols-8 gap-0 border-2 border-amber-900 sm:border-4">
                    {ranks.map((rank) => files.map((file) => renderSquare(file, rank)))}
                </div>

                {/* File labels */}
                <div className="mt-1 grid grid-cols-8 gap-0 sm:mt-2">
                    {files.map((file) => (
                        <div key={file} className="flex h-4 items-center justify-center text-xs text-gray-400 sm:h-6 sm:text-sm">
                            {file}
                        </div>
                    ))}
                </div>

                {/* Rank labels */}
                <div className="absolute top-0 -left-4 grid h-64 grid-rows-8 gap-0 sm:-left-6 sm:h-80 md:-left-8 md:h-96 lg:h-112 xl:h-128">
                    {ranks.map((rank) => (
                        <div key={rank} className="flex w-3 items-center justify-center text-xs text-gray-400 sm:w-4 sm:text-sm md:w-6">
                            {rank}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#05101f] to-[#071428] text-white">
            <Navbar />

            <div className="pt-20">
                <div className="container mx-auto px-4 py-4 sm:py-8">
                    <div className="mb-4 text-center sm:mb-8">
                        <h1 className="mb-2 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Learn the Rook</h1>
                        <p className="text-sm text-gray-300 sm:text-base">Master the movement of the most powerful piece after the queen</p>
                    </div>

                    {/* Mobile Instructions Toggle */}
                    <div className="mb-4 lg:hidden">
                        <Button
                            onClick={() => setShowInstructions(!showInstructions)}
                            variant="outline"
                            className="w-full border-blue-600 text-blue-400 hover:bg-blue-950/50"
                        >
                            {showInstructions ? 'Hide' : 'Show'} Instructions
                        </Button>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
                        {/* Lesson Info - Mobile Collapsible */}
                        <div className={`${showInstructions ? 'block' : 'hidden'} order-2 rounded-lg bg-blue-900/20 p-4 sm:p-6 lg:order-1 lg:block`}>
                            <div className="mb-4 sm:mb-6">
                                <h2 className="mb-2 text-xl font-bold sm:text-2xl">♜ The Rook</h2>
                                <p className="text-sm text-gray-300 sm:text-base">It moves in straight lines - horizontally and vertically</p>
                            </div>

                            <div className="mb-4 sm:mb-6">
                                <h3 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
                                    Level {currentLevel}: {currentLevelData.title}
                                </h3>
                                <p className="mb-3 text-sm text-gray-300 sm:mb-4 sm:text-base">{currentLevelData.description}</p>
                                <div className="rounded-lg bg-blue-800/30 p-2 sm:p-3">
                                    <p className="text-xs text-blue-200 sm:text-sm">{currentLevelData.instruction}</p>
                                </div>
                            </div>

                            <div className="mb-4 sm:mb-6">
                                <div className="mb-2 flex justify-between text-sm sm:text-base">
                                    <span>Moves: {moves}</span>
                                    <span>Score: {score}</span>
                                </div>

                                {/* Star Rating */}
                                <div className="flex gap-1">
                                    {[1, 2, 3].map((star) => (
                                        <div
                                            key={star}
                                            className={`text-base sm:text-xl ${
                                                star <= Math.max(1, 4 - Math.floor(moves / 2)) ? 'text-yellow-400' : 'text-gray-600'
                                            }`}
                                        >
                                            ⭐
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Level Progress */}
                            <div className="mb-4 sm:mb-6">
                                <h4 className="mb-2 text-sm font-semibold sm:text-base">Progress</h4>
                                <div className="flex gap-1 sm:gap-2">
                                    {levels.map((level) => (
                                        <Button
                                            key={level.id}
                                            size="sm"
                                            variant={completedLevels.includes(level.id) ? 'default' : 'outline'}
                                            className={`px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm ${
                                                completedLevels.includes(level.id)
                                                    ? 'bg-green-600 hover:bg-green-500'
                                                    : level.id === currentLevel
                                                      ? 'border-blue-500 text-blue-400'
                                                      : 'border-gray-600 text-gray-400'
                                            }`}
                                            onClick={() => setCurrentLevel(level.id)}
                                        >
                                            {level.id}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 sm:space-y-3">
                                <Button
                                    variant="outline"
                                    className="w-full border-blue-600 py-2 text-xs text-blue-400 hover:bg-blue-950/50 sm:text-sm"
                                    onClick={() => {
                                        setRookPosition(currentLevelData.rookStart);
                                        setMoves(0);
                                        setSelectedSquare(null);
                                    }}
                                >
                                    Reset Level
                                </Button>

                                <Button
                                    className="w-full bg-green-600 py-2 text-xs hover:bg-green-500 sm:text-sm"
                                    onClick={() => window.history.back()}
                                >
                                    Back to Study Hub
                                </Button>
                            </div>
                        </div>

                        {/* Chess Board */}
                        <div className="order-1 lg:order-2 lg:col-span-2">
                            <div className="flex justify-center">{renderBoard()}</div>

                            {/* Mobile Quick Stats */}
                            <div className="mt-4 flex justify-center gap-4 text-sm lg:hidden">
                                <div className="rounded-lg bg-blue-900/20 px-3 py-2">
                                    <span className="text-gray-400">Moves:</span> <span className="font-bold">{moves}</span>
                                </div>
                                <div className="rounded-lg bg-blue-900/20 px-3 py-2">
                                    <span className="text-gray-400">Score:</span> <span className="font-bold">{score}</span>
                                </div>
                                <div className="flex items-center gap-1 rounded-lg bg-blue-900/20 px-3 py-2">
                                    {[1, 2, 3].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-sm ${
                                                star <= Math.max(1, 4 - Math.floor(moves / 2)) ? 'text-yellow-400' : 'text-gray-600'
                                            }`}
                                        >
                                            ⭐
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Celebration Modal */}
                    {showCelebration && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                            <div className="w-full max-w-sm rounded-lg bg-green-600 p-6 text-center text-white sm:p-8">
                                <div className="mb-4 text-4xl sm:text-6xl">🎉</div>
                                <h2 className="mb-2 text-xl font-bold sm:text-2xl">Excellent!</h2>
                                <p className="text-sm sm:text-base">You completed the level in {moves} moves!</p>
                                <div className="mt-4 flex justify-center gap-1">
                                    {[1, 2, 3].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-lg sm:text-2xl ${
                                                star <= Math.max(1, 4 - Math.floor(moves / 2)) ? 'text-yellow-300' : 'text-gray-400'
                                            }`}
                                        >
                                            ⭐
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
