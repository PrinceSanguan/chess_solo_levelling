import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useRef } from 'react';

export default function Features() {
    const featuresRef = useRef<HTMLDivElement>(null);
    const videosRef = useRef<HTMLDivElement>(null);
    const classesRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={featuresRef}
            className="py-16 md:py-20"
            style={{
                background: '#05101f',
                color: '#fff',
            }}
        >
            <div className="container mx-auto px-4">
                {/* Popular Videos */}
                <div className="mb-16">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white md:text-3xl">Popular Videos</h2>
                        <Link
                            href="#"
                            className="flex items-center rounded-full bg-blue-900/50 px-3 py-1 text-sm font-medium text-blue-300 transition-colors hover:bg-blue-800/60 hover:text-blue-200"
                        >
                            View All
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="ml-1 h-4 w-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>

                    <div ref={videosRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {/* Video Card 1 */}
                        <div className="group overflow-hidden rounded-lg transition-all">
                            <div className="relative">
                                <div className="aspect-video overflow-hidden bg-blue-950">
                                    <img
                                        src="/assets/images/feature-image.jpg"
                                        alt="Chess opening strategies"
                                        className="w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/80 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 rounded-full bg-blue-800/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                    25:16
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="mb-2 flex items-center gap-2">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-900 text-blue-300">
                                        <svg viewBox="0 0 24 24" className="h-4 w-4">
                                            <path
                                                fill="currentColor"
                                                d="M12,2A2,2 0 0,1 14,4V6H16.5L17,7L13.5,10.5L16.5,13.5L17,14L16.5,14.5L14,12V13.5L15,14.5V16H9V14.5L10,13.5V12L7.5,14.5L7,14L7.5,13.5L10.5,10.5L7,7L7.5,6H10V4A2,2 0 0,1 12,2Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-medium text-blue-300">Opening Strategies</span>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-white">Sicilian Defense: Dragon Variation Masterclass</h3>
                                <p className="mb-3 text-sm text-gray-400">
                                    Learn how to dominate with this aggressive opening against 1.e4 from Grandmaster analysis.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-full bg-blue-700"></div>
                                        <span className="text-xs text-gray-400">GM Sarah Chen</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        12.3K
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video Card 2 */}
                        <div className="group overflow-hidden rounded-lg transition-all">
                            <div className="relative">
                                <div className="aspect-video overflow-hidden bg-blue-950">
                                    <img
                                        src="/assets/images/feature-image.jpg"
                                        alt="Chess opening strategies"
                                        className="w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/80 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 rounded-full bg-blue-800/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                    42:08
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="mb-2 flex items-center gap-2">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-900 text-blue-300">
                                        <svg viewBox="0 0 24 24" className="h-4 w-4">
                                            <path
                                                fill="currentColor"
                                                d="M19,22H5V20H19V22M17,10C15.58,10 14.26,10.77 13.55,12H13V7H16V5H13V2H11V5H8V7H11V12H10.45C9.74,10.77 8.42,10 7,10C4.79,10 3,11.79 3,14C3,16.21 4.79,18 7,18C8.42,18 9.74,17.23 10.45,16H13.55C14.26,17.23 15.58,18 17,18C19.21,18 21,16.21 21,14C21,11.79 19.21,10 17,10Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-medium text-blue-300">Tactical Patterns</span>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-white">Advanced Pin Tactics Every Player Must Know</h3>
                                <p className="mb-3 text-sm text-gray-400">
                                    Master the art of pins with this comprehensive guide to one of chess's most powerful tactical weapons.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-full bg-blue-700"></div>
                                        <span className="text-xs text-gray-400">IM David Brooks</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        8.7K
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video Card 3 */}
                        <div className="group overflow-hidden rounded-lg transition-all">
                            <div className="relative">
                                <div className="aspect-video overflow-hidden bg-blue-950">
                                    <img
                                        src="/assets/images/feature-image.jpg"
                                        alt="Chess opening strategies"
                                        className="w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/80 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 rounded-full bg-blue-800/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                    37:52
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="mb-2 flex items-center gap-2">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-900 text-blue-300">
                                        <svg viewBox="0 0 24 24" className="h-4 w-4">
                                            <path fill="currentColor" d="M19,22H5V20H19V22M18,9H14V15L12,13L10,15V9H6L12,3L18,9Z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-medium text-blue-300">Endgame Studies</span>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-white">Rook Endgames: Essential Techniques</h3>
                                <p className="mb-3 text-sm text-gray-400">
                                    Develop your endgame technique with these critical rook endgame positions and principles.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-full bg-blue-700"></div>
                                        <span className="text-xs text-gray-400">GM Michael Rodriguez</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        15.2K
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Live Classes */}
                <div>
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white md:text-3xl">Upcoming Live Classes</h2>
                        <Link
                            href="#"
                            className="flex items-center rounded-full bg-blue-900/50 px-3 py-1 text-sm font-medium text-blue-300 transition-colors hover:bg-blue-800/60 hover:text-blue-200"
                        >
                            Full Schedule
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="ml-1 h-4 w-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>

                    <div ref={classesRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {/* Class Card 1 */}
                        <div className="group overflow-hidden rounded-lg bg-blue-950/30 transition-all">
                            <div className="relative">
                                <div className="absolute top-0 right-0 z-10 m-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                                    LIVE
                                </div>
                                <div className="aspect-[4/2] overflow-hidden bg-blue-950">
                                    <img
                                        src="/assets/images/feature-image.jpg"
                                        alt="Chess opening strategies"
                                        className="w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="mb-1 text-xs text-blue-400">
                                    <span className="font-semibold">Thursday, May 2 • </span>
                                    <span>7:00 PM - 9:00 PM EDT</span>
                                </div>
                                <h3 className="mb-3 text-lg font-semibold text-white">Queen's Gambit Masterclass</h3>
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-full bg-blue-700"></div>
                                    <div>
                                        <div className="text-sm font-medium text-white">GM Alexandra Botez</div>
                                        <div className="text-xs text-gray-400">Women's Grandmaster</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="rounded-full bg-blue-700/80 px-3 py-1 text-xs font-medium text-white">Intermediate</div>
                                    <Button size="sm" className="bg-blue-600 shadow-md hover:bg-blue-500">
                                        Reserve Spot
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Class Card 2 */}
                        <div className="group overflow-hidden rounded-lg bg-blue-950/30 transition-all">
                            <div className="relative">
                                <div className="aspect-[4/2] overflow-hidden bg-blue-950">
                                    <img
                                        src="/assets/images/feature-image.jpg"
                                        alt="Chess opening strategies"
                                        className="w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="mb-1 text-xs text-blue-400">
                                    <span className="font-semibold">Friday, May 3 • </span>
                                    <span>5:30 PM - 7:00 PM EDT</span>
                                </div>
                                <h3 className="mb-3 text-lg font-semibold text-white">Analyzing World Championship Games</h3>
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-full bg-blue-700"></div>
                                    <div>
                                        <div className="text-sm font-medium text-white">IM Daniel Rensch</div>
                                        <div className="text-xs text-gray-400">International Master</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="rounded-full bg-blue-700/80 px-3 py-1 text-xs font-medium text-white">Advanced</div>
                                    <Button size="sm" className="bg-blue-600 shadow-md hover:bg-blue-500">
                                        Reserve Spot
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Class Card 3 */}
                        <div className="group overflow-hidden rounded-lg bg-blue-950/30 transition-all">
                            <div className="relative">
                                <div className="aspect-[4/2] overflow-hidden bg-blue-950">
                                    <img
                                        src="/assets/images/feature-image.jpg"
                                        alt="Chess opening strategies"
                                        className="w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="mb-1 text-xs text-blue-400">
                                    <span className="font-semibold">Saturday, May 4 • </span>
                                    <span>11:00 AM - 12:30 PM EDT</span>
                                </div>
                                <h3 className="mb-3 text-lg font-semibold text-white">Beginner's Chess Fundamentals</h3>
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-full bg-blue-700"></div>
                                    <div>
                                        <div className="text-sm font-medium text-white">FM Rebecca Harris</div>
                                        <div className="text-xs text-gray-400">FIDE Master</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="rounded-full bg-blue-700/80 px-3 py-1 text-xs font-medium text-white">Beginner</div>
                                    <Button size="sm" className="bg-blue-600 shadow-md hover:bg-blue-500">
                                        Reserve Spot
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
