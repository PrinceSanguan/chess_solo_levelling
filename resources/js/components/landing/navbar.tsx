import { Button } from '@/components/ui/button';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        // Import GSAP dynamically to avoid SSR issues
        const loadGSAP = async () => {
            const gsapModule = await import('gsap');
            const gsap = gsapModule.default;

            gsap.from(navRef.current, {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
            });

            if (!navRef.current) return;
            const navItems = navRef.current.querySelectorAll('.nav-item');
            gsap.from(navItems, {
                opacity: 0,
                y: -20,
                stagger: 0.1,
                duration: 0.6,
                delay: 0.3,
                ease: 'power2.out',
            });
        };

        loadGSAP();
    }, []);

    useEffect(() => {
        if (mobileMenuRef.current) {
            const loadGSAP = async () => {
                const gsapModule = await import('gsap');
                const gsap = gsapModule.default;

                if (mobileMenuOpen) {
                    gsap.to(mobileMenuRef.current, {
                        height: 'auto',
                        opacity: 1,
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                } else {
                    gsap.to(mobileMenuRef.current, {
                        height: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.in',
                    });
                }
            };

            loadGSAP();
        }
    }, [mobileMenuOpen]);

    return (
        <div
            className="fixed top-0 left-0 z-50 w-full shadow-md"
            ref={navRef}
            style={{
                background: 'linear-gradient(90deg, #0a192f 0%, #081523 100%)',
                borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
            }}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-3">
                    {/* Circular Logo */}
                    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-blue-500 bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                        <img
                            src="/assets/images/navbar-logo.jpg"
                            alt="Logo"
                            className="h-8 w-8 rounded-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://via.placeholder.com/80';
                            }}
                        />
                    </div>
                    <span className="text-lg font-bold text-blue-300 md:text-xl">SoloChess Leveling</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center space-x-6 md:flex">
                    <Link
                        href="/"
                        className={`nav-item transition-colors duration-200 ${
                            usePage().url === '/' ? 'font-semibold text-blue-400' : 'text-gray-300 hover:text-blue-400'
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/learn"
                        className={`nav-item transition-colors duration-200 ${
                            usePage().url === '/learn' ? 'font-semibold text-blue-400' : 'text-gray-300 hover:text-blue-400'
                        }`}
                    >
                        Learn
                    </Link>
                    <Link
                        href="/live-classes"
                        className={`nav-item transition-colors duration-200 ${
                            usePage().url === '/live-classes' ? 'font-semibold text-blue-400' : 'text-gray-300 hover:text-blue-400'
                        }`}
                    >
                        Live Classes
                    </Link>
                    <Link
                        href="/coaching"
                        className={`nav-item transition-colors duration-200 ${
                            usePage().url === '/coaching' ? 'font-semibold text-blue-400' : 'text-gray-300 hover:text-blue-400'
                        }`}
                    >
                        Coaches
                    </Link>
                    <Link
                        href={route('auth.login')}
                        className={`nav-item transition-colors duration-200 ${
                            usePage().url === route('auth.login') ? 'font-semibold text-blue-400' : 'text-gray-300 hover:text-blue-400'
                        }`}
                    >
                        My Account
                    </Link>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-1 text-blue-300 hover:bg-blue-900/40 hover:text-blue-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                )}
                            </svg>
                        </Button>
                    </div>

                    <div className="hidden space-x-3 md:flex">
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:bg-blue-900/40 hover:text-blue-300" asChild>
                            <Link href={route('auth.login')}>Login</Link>
                        </Button>
                        <Button size="sm" className="bg-blue-600 shadow-md hover:bg-blue-500" asChild>
                            <Link href={route('auth.register')}>Sign Up</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="h-0 overflow-hidden opacity-0 md:hidden"
                style={{
                    background: 'linear-gradient(180deg, #0a192f 0%, #081523 100%)',
                }}
            >
                <div className="space-y-1 px-4 py-2">
                    <Link
                        href="/"
                        className={`block rounded-lg px-4 py-2 ${
                            usePage().url === '/' ? 'bg-blue-900/40 text-blue-300' : 'text-gray-300 hover:bg-blue-900/40 hover:text-blue-300'
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/learn"
                        className={`block rounded-lg px-4 py-2 ${
                            usePage().url === '/learn' ? 'bg-blue-900/40 text-blue-300' : 'text-gray-300 hover:bg-blue-900/40 hover:text-blue-300'
                        }`}
                    >
                        Learn
                    </Link>
                    <Link
                        href="/live-classes"
                        className={`block rounded-lg px-4 py-2 ${
                            usePage().url === '/live-classes'
                                ? 'bg-blue-900/40 text-blue-300'
                                : 'text-gray-300 hover:bg-blue-900/40 hover:text-blue-300'
                        }`}
                    >
                        Live Classes
                    </Link>
                    <Link
                        href="/coaching"
                        className={`block rounded-lg px-4 py-2 ${
                            usePage().url === '/coaching' ? 'bg-blue-900/40 text-blue-300' : 'text-gray-300 hover:bg-blue-900/40 hover:text-blue-300'
                        }`}
                    >
                        Coaches
                    </Link>
                    <Link
                        href={route('auth.login')}
                        className={`block rounded-lg px-4 py-2 ${
                            usePage().url === route('auth.login')
                                ? 'bg-blue-900/40 text-blue-300'
                                : 'text-gray-300 hover:bg-blue-900/40 hover:text-blue-300'
                        }`}
                    >
                        My Account
                    </Link>
                    <div className="flex space-x-2 py-2">
                        <Button variant="ghost" size="sm" className="w-1/2 text-gray-300 hover:bg-blue-900/40 hover:text-blue-300" asChild>
                            <Link href={route('auth.login')}>Login</Link>
                        </Button>
                        <Button size="sm" className="w-1/2 bg-blue-600 hover:bg-blue-500" asChild>
                            <Link href={route('auth.register')}>Sign Up</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
