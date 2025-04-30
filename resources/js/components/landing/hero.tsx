import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const chessPiecesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const loadGSAP = async () => {
            const gsapModule = await import('gsap');
            const gsap = gsapModule.default;

            if (heroRef.current) {
                gsap.from(heroRef.current, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                });
            }

            if (textRef.current) {
                gsap.from(Array.from(textRef.current.children), {
                    y: 50,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'power2.out',
                });
            }

            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    delay: 0.5,
                    ease: 'back.out(1.7)',
                });
            }

            if (chessPiecesRef.current) {
                const pieces = Array.from(chessPiecesRef.current.children);
                gsap.from(pieces, {
                    y: -50,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    delay: 1,
                    ease: 'power2.out',
                });

                pieces.forEach((piece, index) => {
                    gsap.to(piece, {
                        y: '-=10',
                        rotation: index % 2 === 0 ? 5 : -5,
                        duration: 2 + index * 0.2,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                    });
                });
            }
        };

        loadGSAP();
    }, []);

    return (
        <div
            ref={heroRef}
            className="relative overflow-hidden px-4 pt-24 pb-16 sm:py-20 md:px-6 md:pt-32 md:pb-24"
            style={{
                background: 'linear-gradient(120deg, #0a192f 0%, #051224 100%)',
                color: '#fff',
            }}
        >
            {/* Chess Piece Background Elements */}
            <div ref={chessPiecesRef} className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-10 left-10 opacity-10">
                    <svg width="100" height="100" viewBox="0 0 24 24" className="text-blue-400">
                        <path
                            fill="currentColor"
                            d="M19,22H5V20H19V22M17,10C15.58,10 14.26,10.77 13.55,12H13V7H16V5H13V2H11V5H8V7H11V12H10.45C9.74,10.77 8.42,10 7,10C4.79,10 3,11.79 3,14C3,16.21 4.79,18 7,18C8.42,18 9.74,17.23 10.45,16H13.55C14.26,17.23 15.58,18 17,18C19.21,18 21,16.21 21,14C21,11.79 19.21,10 17,10Z"
                        />
                    </svg>
                </div>
                <div className="absolute top-1/3 right-1/4 rotate-12 transform opacity-10">
                    <svg width="180" height="180" viewBox="0 0 24 24" className="text-blue-300">
                        <path
                            fill="currentColor"
                            d="M12,2A2,2 0 0,1 14,4V6H16.5L17,7L13.5,10.5L16.5,13.5L17,14L16.5,14.5L14,12V13.5L15,14.5V16H9V14.5L10,13.5V12L7.5,14.5L7,14L7.5,13.5L10.5,10.5L7,7L7.5,6H10V4A2,2 0 0,1 12,2M12,3A1,1 0 0,0 11,4V6H13V4A1,1 0 0,0 12,3Z"
                        />
                    </svg>
                </div>
                <div className="absolute bottom-20 left-1/4 -rotate-12 transform opacity-10">
                    <svg width="140" height="140" viewBox="0 0 24 24" className="text-blue-500">
                        <path
                            fill="currentColor"
                            d="M12 2C11.08 2 10.25 2.27 9.6 2.7C8.94 3.13 8.5 3.73 8.5 4.38C8.5 5.51 9.54 6.41 10.8 6.5V11.5H9V12.5L9 13.5H10.8V19.6C9.33 19.45 8.11 18.63 7.34 17.43C6.58 16.22 6.25 14.68 6.25 13.19C6.25 12.97 6.24 12.76 6.22 12.55C8.2 12.35 9.72 10.8 9.72 8.91V5.69H8.72V8.91C8.72 10.25 7.6 11.34 6.22 11.34C4.85 11.34 3.72 10.25 3.72 8.91V5.69H2.72V8.91C2.72 10.45 3.67 11.78 5 12.33C5 12.33 5 12.39 5 13.19C5 14.94 5.41 16.78 6.4 18.27C7.39 19.76 9.07 20.83 11 20.97V21H13V20.97C14.93 20.83 16.61 19.76 17.6 18.27C18.59 16.78 19 14.94 19 13.19C19 12.39 19 12.33 19 12.33C20.33 11.78 21.28 10.45 21.28 8.91V5.69H20.28V8.91C20.28 10.25 19.15 11.34 17.78 11.34C16.4 11.34 15.28 10.25 15.28 8.91V5.69H14.28V8.91C14.28 10.8 15.8 12.35 17.78 12.55C17.76 12.76 17.75 12.97 17.75 13.19C17.75 14.68 17.42 16.22 16.66 17.43C15.89 18.63 14.67 19.45 13.2 19.6V13.5H15V12.5V11.5H13.2V6.5C14.46 6.41 15.5 5.51 15.5 4.38C15.5 3.73 15.06 3.13 14.4 2.7C13.75 2.27 12.92 2 12 2Z"
                        />
                    </svg>
                </div>
                <div className="absolute top-1/2 right-20 rotate-45 transform opacity-10">
                    <svg width="120" height="120" viewBox="0 0 24 24" className="text-blue-300">
                        <path fill="currentColor" d="M19,22H5V20H19V22M18,9H14V15L12,13L10,15V9H6L12,3L18,9Z" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row">
                <div ref={textRef} className="flex-1 text-center lg:text-left">
                    <div className="mb-3 text-sm font-semibold tracking-widest text-blue-400 uppercase md:text-base">SOLO CHESS LEVELING</div>
                    <h1 className="mb-4 font-serif text-4xl font-bold tracking-wider text-blue-300 uppercase md:text-5xl lg:text-6xl">
                        Ultimate Chess
                        <br />
                        Training Program
                    </h1>
                    <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-300 lg:mx-0"></div>
                    <p className="mb-6 text-lg text-gray-300">
                        Master the art of chess through personalized coaching, strategic training, and deliberate practice. Join our community of
                        players and take your game to the next level.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                        <Button
                            size="lg"
                            className="transform bg-blue-600 shadow-md transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg"
                            asChild
                        >
                            <Link href={route('auth.register')}>Start Training Now</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="transform border-blue-500 text-blue-300 shadow-sm transition-all hover:-translate-y-1 hover:bg-blue-900/30 hover:shadow-md"
                            asChild
                        >
                            <Link href="/topics">Explore Curriculum</Link>
                        </Button>
                    </div>
                </div>

                <div ref={imageRef} className="perspective-1000 w-full max-w-md lg:max-w-lg lg:flex-1">
                    <div
                        className="relative transform overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 hover:rotate-y-5"
                        style={{
                            transformStyle: 'preserve-3d',
                            boxShadow: '0 0 40px rgba(37, 99, 235, 0.3), 0 0 15px rgba(37, 99, 235, 0.4)',
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                        }}
                    >
                        {/* Rank Badge */}
                        <div className="absolute -top-12 -right-12 flex h-24 w-24 rotate-45 items-center justify-center bg-blue-600 shadow-lg">
                            <div className="-rotate-45 text-sm font-bold tracking-wider text-white uppercase">Class S</div>
                        </div>

                        <div className="p-6 pt-8">
                            {/* Feature Cards */}
                            <div className="mb-6 grid grid-cols-2 gap-4">
                                <div className="rounded-lg border border-blue-800 bg-blue-900/40 p-3">
                                    <div className="mb-2 flex items-center justify-center text-blue-300">
                                        <svg viewBox="0 0 24 24" className="h-8 w-8">
                                            <path
                                                fill="currentColor"
                                                d="M12,2A2,2 0 0,1 14,4V6H16.5L17,7L13.5,10.5L16.5,13.5L17,14L16.5,14.5L14,12V13.5L15,14.5V16H9V14.5L10,13.5V12L7.5,14.5L7,14L7.5,13.5L10.5,10.5L7,7L7.5,6H10V4A2,2 0 0,1 12,2M12,3A1,1 0 0,0 11,4V6H13V4A1,1 0 0,0 12,3Z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-center text-sm font-medium text-white">Opening Mastery</div>
                                </div>
                                <div className="rounded-lg border border-blue-800 bg-blue-900/40 p-3">
                                    <div className="mb-2 flex items-center justify-center text-blue-300">
                                        <svg viewBox="0 0 24 24" className="h-8 w-8">
                                            <path
                                                fill="currentColor"
                                                d="M19,22H5V20H19V22M17,10C15.58,10 14.26,10.77 13.55,12H13V7H16V5H13V2H11V5H8V7H11V12H10.45C9.74,10.77 8.42,10 7,10C4.79,10 3,11.79 3,14C3,16.21 4.79,18 7,18C8.42,18 9.74,17.23 10.45,16H13.55C14.26,17.23 15.58,18 17,18C19.21,18 21,16.21 21,14C21,11.79 19.21,10 17,10Z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-center text-sm font-medium text-white">Tactical Puzzles</div>
                                </div>
                                <div className="rounded-lg border border-blue-800 bg-blue-900/40 p-3">
                                    <div className="mb-2 flex items-center justify-center text-blue-300">
                                        <svg viewBox="0 0 24 24" className="h-8 w-8">
                                            <path fill="currentColor" d="M19,22H5V20H19V22M18,9H14V15L12,13L10,15V9H6L12,3L18,9Z" />
                                        </svg>
                                    </div>
                                    <div className="text-center text-sm font-medium text-white">Endgame Study</div>
                                </div>
                                <div className="rounded-lg border border-blue-800 bg-blue-900/40 p-3">
                                    <div className="mb-2 flex items-center justify-center text-blue-300">
                                        <svg viewBox="0 0 24 24" className="h-8 w-8">
                                            <path
                                                fill="currentColor"
                                                d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-center text-sm font-medium text-white">Game Analysis</div>
                                </div>
                            </div>

                            {/* Metrics */}
                            <div className="mb-4 grid grid-cols-2 gap-3 border-t border-blue-800 pt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-300">2100+</div>
                                    <div className="text-xs text-gray-400">MASTER RATING</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-300">12+</div>
                                    <div className="text-xs text-gray-400">WEEKLY SESSIONS</div>
                                </div>
                            </div>

                            {/* Bottom Info */}
                            <div className="rounded-lg bg-gradient-to-r from-blue-900/60 to-blue-800/40 p-3 text-center">
                                <div className="text-sm font-medium text-white">Live Classes with Grand Masters</div>
                                <div className="text-xs text-blue-200">Available Every Day</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
