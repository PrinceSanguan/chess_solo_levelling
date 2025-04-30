import { Button } from '@/components/ui/button';
import { Chess } from 'chess.js';
import { Chessground } from 'chessground';
import { Config } from 'chessground/config';
import { Key } from 'chessground/types';
import { useEffect, useRef, useState } from 'react';

interface ChessPuzzleProps {
    onSolve: () => void;
}

export default function ChessPuzzle({ onSolve }: ChessPuzzleProps) {
    const boardRef = useRef<HTMLDivElement>(null);
    const [chess] = useState(new Chess('rnbqkbnr/ppppp2p/8/5pp1/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3'));
    const [message, setMessage] = useState<string>('Find the winning move for white - Mate in 1');
    const [showHint, setShowHint] = useState<boolean>(false);
    const [solved, setSolved] = useState<boolean>(false);
    const [ground, setGround] = useState<any>(null);

    // The correct move is queen (Q) from d1 to h5: d1-h5#
    const correctMove = {
        from: 'd1',
        to: 'h5',
    };

    useEffect(() => {
        if (!boardRef.current) return;

        // Initialize the chessground board
        const config: Config = {
            fen: chess.fen(),
            orientation: 'white',
            turnColor: 'white',
            coordinates: true,
            autoCastle: true,
            viewOnly: false,
            movable: {
                free: false,
                color: 'white',
                dests: possibleMoves(),
                events: {
                    after: onMove,
                },
            },
            premovable: {
                enabled: false,
            },
            draggable: {
                enabled: true,
            },
            highlight: {
                lastMove: true,
                check: true,
            },
            animation: {
                enabled: true,
                duration: 200,
            },
        };

        const cg = Chessground(boardRef.current, config);
        setGround(cg);

        // Cleanup
        return () => {
            cg.destroy();
        };
    }, []);

    // Get all possible moves
    function possibleMoves() {
        const dests: Map<Key, Key[]> = new Map();
        const moves = chess.moves({ verbose: true });

        moves.forEach((move) => {
            const from = move.from as Key;
            if (!dests.has(from)) {
                dests.set(from, []);
            }
            dests.get(from)?.push(move.to as Key);
        });

        return dests;
    }

    // Handle moves
    function onMove(from: Key, to: Key) {
        const move = chess.move({ from, to, promotion: 'q' });

        if (!move) return false;

        // Check if this was the correct move for the mate in 1
        if (from === correctMove.from && to === correctMove.to) {
            setMessage('Correct! That\'s the "Scholar\'s Mate" checkmate in one move.');
            setSolved(true);

            // Success celebration
            setTimeout(() => {
                onSolve();
            }, 2000);
        } else {
            // Undo the move as it's not the right solution
            chess.undo();
            ground?.set({
                fen: chess.fen(),
                turnColor: 'white',
                movable: {
                    dests: possibleMoves(),
                },
            });
            setMessage('Not quite right. Try again - look for the queen delivering checkmate.');
        }
    }

    // Show hint
    const handleHint = () => {
        setShowHint(true);
        setMessage('Hint: The queen can deliver checkmate along the diagonal...');
        ground?.setShapes([{ orig: 'd1', dest: 'h5', brush: 'green' }]);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,20,0.9)', backdropFilter: 'blur(8px)' }}
        >
            <div className="w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-[#1a2151] to-[#111a40] p-6 shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
                <h2 className="mb-4 text-center text-3xl font-bold text-white">Chess Puzzle Challenge</h2>

                <div className="mb-4 rounded-xl bg-[#253275] p-3 text-center shadow-inner">
                    <p className="text-lg font-medium text-blue-100">{message}</p>
                </div>

                {/* Custom CSS wrapper for the board */}
                <div className="relative mx-auto mb-5 aspect-square max-w-md overflow-hidden rounded-xl border-4 border-[#1e2a5e] shadow-lg">
                    <div
                        ref={boardRef}
                        className="h-full w-full"
                        style={{
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)',
                        }}
                    ></div>
                </div>

                <div className="mt-5 flex justify-center gap-3">
                    <Button
                        className="rounded-full border-2 border-[#3b82f6] bg-transparent px-6 py-2 font-medium text-[#3b82f6] transition-all hover:bg-[#3b82f6] hover:text-white"
                        onClick={handleHint}
                        disabled={showHint || solved}
                    >
                        Show Hint
                    </Button>

                    <Button
                        className="rounded-full bg-[#3b82f6] px-6 py-2 font-medium text-white transition-all hover:bg-[#2563eb]"
                        onClick={onSolve}
                    >
                        Skip Puzzle
                    </Button>
                </div>

                <div className="mt-4 text-center text-sm text-gray-400">
                    <p>Drags the pieces to make your move. White to play and mate in one.</p>
                </div>
            </div>

            {/* Add custom styles for chessground */}
            <style jsx global>{`
                /* Override chessground styles for better appearance */
                .cg-wrap {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    display: block;
                }

                .cg-wrap coords {
                    font-weight: bold;
                    color: #bfc5d9;
                    font-size: 14px;
                }

                .cg-wrap coords.ranks {
                    right: 2px;
                    top: 1px;
                }

                .cg-wrap coords.files {
                    bottom: 2px;
                    left: 2px;
                }

                /* Improve piece contrast */
                .cg-wrap piece.white {
                    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
                }

                .cg-wrap piece.black {
                    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
                }

                /* Highlight for possible moves */
                .cg-wrap square.move-dest {
                    background: radial-gradient(
                        rgba(59, 130, 246, 0.8) 19%,
                        rgba(59, 130, 246, 0.3) 20%,
                        rgba(59, 130, 246, 0.3) 34%,
                        rgba(59, 130, 246, 0) 35%
                    );
                }

                /* Highlight for selected piece */
                .cg-wrap square.selected {
                    background-color: rgba(59, 130, 246, 0.3) !important;
                }

                /* Highlight for last move */
                .cg-wrap square.last-move {
                    background-color: rgba(59, 130, 246, 0.2) !important;
                }

                /* Highlight for check */
                .cg-wrap square.check {
                    background: radial-gradient(
                        ellipse at center,
                        rgba(255, 0, 0, 0.9) 0%,
                        rgba(255, 0, 0, 0.4) 25%,
                        rgba(255, 0, 0, 0.05) 89%,
                        rgba(255, 0, 0, 0) 100%
                    );
                }
            `}</style>
        </div>
    );
}
