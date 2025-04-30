import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useRef } from 'react';

export default function Free() {
    const freeContentRef = useRef<HTMLDivElement>(null);
    const lessonsRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={freeContentRef}
            className="py-16 md:py-20"
            style={{
                background: 'linear-gradient(to bottom, #05101f 0%, #071428 100%)',
                color: '#fff',
                borderTop: '1px solid rgba(59, 130, 246, 0.1)',
            }}
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <div className="relative mb-4 inline-block">
                        <span className="absolute top-0 -left-4 text-5xl font-bold text-blue-500/20">★</span>
                        <h2 className="section-title relative text-3xl font-bold text-white md:text-4xl">Free Content Spotlight</h2>
                    </div>
                    <p className="mx-auto max-w-2xl text-gray-300">
                        Get started with these premium-quality lessons completely free. No signup required - just click and start learning.
                    </p>
                </div>

                {/* Featured Free Lessons */}
                <div ref={lessonsRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Lesson 1 */}
                    <div className="group relative overflow-hidden rounded-lg transition-all">
                        <div className="absolute -top-16 -right-16 z-0 h-40 w-40 rotate-45 bg-gradient-to-br from-blue-600/30 to-transparent"></div>
                        <div className="absolute -bottom-12 -left-12 z-0 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent blur-xl"></div>

                        <div className="relative z-10 bg-gradient-to-br from-blue-950/90 to-blue-900/70 p-6">
                            <div className="flex justify-between">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-blue-200">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                                        <path
                                            fill="currentColor"
                                            d="M12,2A2,2 0 0,1 14,4V6H16.5L17,7L13.5,10.5L16.5,13.5L17,14L16.5,14.5L14,12V13.5L15,14.5V16H9V14.5L10,13.5V12L7.5,14.5L7,14L7.5,13.5L10.5,10.5L7,7L7.5,6H10V4A2,2 0 0,1 12,2Z"
                                        />
                                    </svg>
                                </div>
                                <span className="inline-block rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-400">
                                    Beginner Friendly
                                </span>
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-white">Chess Fundamentals</h3>
                            <p className="mb-4 text-sm text-gray-300">
                                Master the basic moves, understand the value of pieces, and learn essential principles for beginners.
                            </p>

                            <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    5 Videos
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                                        />
                                    </svg>
                                    Beginner
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                        />
                                    </svg>
                                    1,200+ Students
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    1h 45m Total
                                </div>
                            </div>

                            <Button className="w-full bg-blue-600 hover:bg-blue-500" asChild>
                                <Link href="#">Start Learning</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Lesson 2 */}
                    <div className="group relative overflow-hidden rounded-lg transition-all">
                        <div className="absolute -top-16 -right-16 z-0 h-40 w-40 rotate-45 bg-gradient-to-br from-blue-600/30 to-transparent"></div>
                        <div className="absolute -bottom-12 -left-12 z-0 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent blur-xl"></div>

                        <div className="relative z-10 bg-gradient-to-br from-blue-950/90 to-blue-900/70 p-6">
                            <div className="flex justify-between">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-blue-200">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                                        <path
                                            fill="currentColor"
                                            d="M19,22H5V20H19V22M17,10C15.58,10 14.26,10.77 13.55,12H13V7H16V5H13V2H11V5H8V7H11V12H10.45C9.74,10.77 8.42,10 7,10C4.79,10 3,11.79 3,14C3,16.21 4.79,18 7,18C8.42,18 9.74,17.23 10.45,16H13.55C14.26,17.23 15.58,18 17,18C19.21,18 21,16.21 21,14C21,11.79 19.21,10 17,10Z"
                                        />
                                    </svg>
                                </div>
                                <span className="inline-block rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-400">
                                    Popular
                                </span>
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-white">Basic Tactics & Combinations</h3>
                            <p className="mb-4 text-sm text-gray-300">
                                Learn the fundamental tactical patterns every chess player needs to know to win material and games.
                            </p>

                            <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    7 Videos
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                                        />
                                    </svg>
                                    Intermediate
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                        />
                                    </svg>
                                    3,400+ Students
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    2h 20m Total
                                </div>
                            </div>

                            <Button className="w-full bg-blue-600 hover:bg-blue-500" asChild>
                                <Link href="#">Start Learning</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Lesson 3 */}
                    <div className="group relative overflow-hidden rounded-lg transition-all">
                        <div className="absolute -top-16 -right-16 z-0 h-40 w-40 rotate-45 bg-gradient-to-br from-blue-600/30 to-transparent"></div>
                        <div className="absolute -bottom-12 -left-12 z-0 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent blur-xl"></div>

                        <div className="relative z-10 bg-gradient-to-br from-blue-950/90 to-blue-900/70 p-6">
                            <div className="flex justify-between">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-blue-200">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                                        <path fill="currentColor" d="M19,22H5V20H19V22M18,9H14V15L12,13L10,15V9H6L12,3L18,9Z" />
                                    </svg>
                                </div>
                                <span className="inline-block rounded-full bg-amber-600/20 px-3 py-1 text-xs font-semibold text-amber-400">New</span>
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-white">Essential Opening Principles</h3>
                            <p className="mb-4 text-sm text-gray-300">
                                Start your games strong with core opening principles that apply to any opening and help avoid early mistakes.
                            </p>

                            <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    6 Videos
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                                        />
                                    </svg>
                                    All Levels
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                        />
                                    </svg>
                                    1,800+ Students
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-4 w-4 text-blue-400"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    1h 50m Total
                                </div>
                            </div>

                            <Button className="w-full bg-blue-600 hover:bg-blue-500" asChild>
                                <Link href="#">Start Learning</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <p className="mb-6 text-gray-400">Enjoy these free lessons? Unlock our full library with a premium membership.</p>
                    <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950/50 hover:text-blue-300" asChild>
                        <Link href="#">Browse All Free Content</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
