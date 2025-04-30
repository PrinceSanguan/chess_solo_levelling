import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    // Observe when footer enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
            },
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    // Footer links organized by section
    const footerLinks = [
        {
            title: 'About Us',
            links: [
                { text: 'Our Story', href: '/about' },
                { text: 'Mission & Vision', href: '/mission' },
                { text: 'Team', href: '/team' },
                { text: 'Careers', href: '/careers' },
                { text: 'Press', href: '/press' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { text: 'FAQ', href: '/faq' },
                { text: 'Help Center', href: '/help' },
                { text: 'Getting Started', href: '/start' },
                { text: 'Tutorials', href: '/tutorials' },
                { text: 'Chess Dictionary', href: '/dictionary' },
            ],
        },
        {
            title: 'Content',
            links: [
                { text: 'Blog', href: '/blog' },
                { text: 'Videos', href: '/videos' },
                { text: 'Chess News', href: '/news' },
                { text: 'Tournaments', href: '/tournaments' },
                { text: 'Interviews', href: '/interviews' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { text: 'Terms of Service', href: '/terms' },
                { text: 'Privacy Policy', href: '/privacy' },
                { text: 'Cookie Policy', href: '/cookies' },
                { text: 'Copyright', href: '/copyright' },
                { text: 'Accessibility', href: '/accessibility' },
            ],
        },
    ];

    // Social media links
    const socialLinks = [
        {
            name: 'Twitter',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </svg>
            ),
            href: 'https://twitter.com',
        },
        {
            name: 'YouTube',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                </svg>
            ),
            href: 'https://youtube.com',
        },
        {
            name: 'Instagram',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
            ),
            href: 'https://instagram.com',
        },
        {
            name: 'Discord',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z" />
                </svg>
            ),
            href: 'https://discord.com',
        },
        {
            name: 'GitHub',
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
            ),
            href: 'https://github.com',
        },
    ];

    return (
        <footer
            ref={footerRef}
            className="relative"
            style={{
                background: 'linear-gradient(to bottom, #071428 0%, #030a17 100%)',
                color: '#fff',
                borderTop: '1px solid rgba(59, 130, 246, 0.1)',
            }}
        >
            {/* Chess pattern background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zm20-20h20v20H20V0z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                    backgroundSize: '40px 40px',
                }}
            ></div>

            {/* Pre-footer: Newsletter & App Download */}
            <div className="relative z-10 border-b border-blue-900/20">
                <div
                    className={`container mx-auto px-4 py-12 transition-all duration-700 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Newsletter */}
                        <div className="rounded-lg bg-blue-900/10 p-6">
                            <h3 className="mb-3 text-xl font-semibold text-white">Stay Updated</h3>
                            <p className="mb-4 text-sm text-gray-400">Subscribe to our newsletter for chess tips, updates, and exclusive offers.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 rounded-l-lg border border-blue-800/60 bg-blue-950/80 px-4 py-2 text-white placeholder-blue-500/70 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                />
                                <Button className="rounded-l-none bg-blue-600 hover:bg-blue-500">Subscribe</Button>
                            </div>
                        </div>

                        {/* App Download */}
                        <div className="rounded-lg bg-blue-900/10 p-6">
                            <h3 className="mb-3 text-xl font-semibold text-white">Get Our App</h3>
                            <p className="mb-4 text-sm text-gray-400">Download our mobile app for a better experience on the go.</p>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="outline" className="border-blue-700 text-blue-300 hover:bg-blue-900/50 hover:text-blue-200">
                                    <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current">
                                        <path d="M17.9,19.9L18,20V3.9L18,4A2,2 0 0,0 16,2H8A2,2 0 0,0 6,4V20A2,2 0 0,0 8,22H16C17.86,21.96 17.9,20 17.9,19.9M16,4V6H8V4H16M8,8H16V14H8V8M8,20V16H16V20H8Z" />
                                    </svg>
                                    Google Play
                                </Button>
                                <Button variant="outline" className="border-blue-700 text-blue-300 hover:bg-blue-900/50 hover:text-blue-200">
                                    <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current">
                                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                    </svg>
                                    App Store
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer: Links */}
            <div className="relative z-10">
                <div className="container mx-auto px-4 py-10">
                    {/* Desktop Footer */}
                    <div className="hidden grid-cols-5 gap-8 md:grid">
                        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link href="/" className="inline-block">
                                <div className="mb-6 text-xl font-bold text-white">SoloLevelingChess</div>
                            </Link>
                            <p className="mb-6 text-sm text-gray-400">
                                Elevating chess education through innovative learning tools and expert guidance for players at every level.
                            </p>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/50 text-blue-300 transition-colors hover:bg-blue-800/70 hover:text-blue-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {footerLinks.map((section, sectionIndex) => (
                            <div
                                key={sectionIndex}
                                className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${100 + sectionIndex * 100}ms` }}
                            >
                                <h3 className="mb-4 text-lg font-semibold text-white">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-blue-300">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Footer Accordion */}
                    <div className="md:hidden">
                        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link href="/" className="inline-block">
                                <div className="mb-4 text-xl font-bold text-white">ChessChamp</div>
                            </Link>
                            <p className="mb-4 text-sm text-gray-400">
                                Elevating chess education through innovative learning tools and expert guidance for players at every level.
                            </p>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/50 text-blue-300 transition-colors hover:bg-blue-800/70 hover:text-blue-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {footerLinks.map((section, sectionIndex) => (
                            <div
                                key={sectionIndex}
                                className={`border-t border-blue-900/20 transition-all duration-700 ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                style={{ transitionDelay: `${100 + sectionIndex * 100}ms` }}
                            >
                                <button
                                    className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-white"
                                    onClick={() => toggleAccordion(sectionIndex)}
                                >
                                    {section.title}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 transition-transform ${activeAccordion === sectionIndex ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        activeAccordion === sectionIndex ? 'max-h-60 pb-4' : 'max-h-0'
                                    }`}
                                >
                                    <ul className="space-y-2 pl-1">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-blue-300">
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sub-footer: Contact & Copyright */}
            <div className="relative z-10 border-t border-blue-900/20 py-6">
                <div
                    className={`container mx-auto px-4 transition-all delay-500 duration-700 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <div className="text-gray-400">© 2025 SoloLevelingChess. All rights reserved.</div>
                            <div className="hidden h-1 w-1 rounded-full bg-gray-500 md:block"></div>
                            <Link href="#" className="text-gray-400 hover:text-blue-300">
                                Terms
                            </Link>
                            <div className="hidden h-1 w-1 rounded-full bg-gray-500 md:block"></div>
                            <Link href="#" className="text-gray-400 hover:text-blue-300">
                                Privacy
                            </Link>
                            <div className="hidden h-1 w-1 rounded-full bg-gray-500 md:block"></div>
                            <Link href="#" className="text-gray-400 hover:text-blue-300">
                                Cookies
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href="/contact" className="text-gray-400 hover:text-blue-300">
                                Contact Support
                            </Link>
                            <div className="flex items-center gap-1">
                                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                                <span className="text-gray-400">Online Support Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
