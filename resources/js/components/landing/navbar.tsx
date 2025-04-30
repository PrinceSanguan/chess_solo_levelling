import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
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
            className="shadow-md"
            ref={navRef}
            style={{
                background: 'linear-gradient(90deg, #0a192f 0%, #081523 100%)',
                borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
            }}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-3">
                    {/* Circular Logo Placeholder */}
                    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-blue-500 bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                        <img src="/assets/images/navbar-logo.jpg" alt="Logo" className="h-8 w-8 rounded-full object-cover" />
                    </div>
                    <span className="text-xl font-bold text-blue-300">SoloChess Leveling</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center space-x-6 md:flex">
                    <Link href="/learn" className="nav-item text-gray-300 transition-colors duration-200 hover:text-blue-400">
                        Learn
                    </Link>
                    <Link href="/classes" className="nav-item text-gray-300 transition-colors duration-200 hover:text-blue-400">
                        Live Classes
                    </Link>
                    <Link href="/coaches" className="nav-item text-gray-300 transition-colors duration-200 hover:text-blue-400">
                        Coaches
                    </Link>
                    <Link href="/pricing" className="nav-item text-gray-300 transition-colors duration-200 hover:text-blue-400">
                        Pricing
                    </Link>
                    <Link href="/account" className="nav-item text-gray-300 transition-colors duration-200 hover:text-blue-400">
                        My Account
                    </Link>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-blue-300 hover:bg-blue-900/40 hover:text-blue-200"
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
                <div className="space-y-3 px-4 py-2">
                    <Link href="/learn" className="block rounded-lg px-4 py-2 text-gray-300 hover:bg-blue-900/40 hover:text-blue-300">
                        Learn
                    </Link>
                    <Link href="/classes" className="block rounded-lg px-4 py-2 text-gray-300 hover:bg-blue-900/40 hover:text-blue-300">
                        Live Classes
                    </Link>
                    <Link href="/coaches" className="block rounded-lg px-4 py-2 text-gray-300 hover:bg-blue-900/40 hover:text-blue-300">
                        Coaches
                    </Link>
                    <Link href="/pricing" className="block rounded-lg px-4 py-2 text-gray-300 hover:bg-blue-900/40 hover:text-blue-300">
                        Pricing
                    </Link>
                    <Link href="/account" className="block rounded-lg px-4 py-2 text-gray-300 hover:bg-blue-900/40 hover:text-blue-300">
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
