import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

export default function Support() {
    const supportRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeDonation, setActiveDonation] = useState(1);
    const [showThanks, setShowThanks] = useState(false);

    const donationOptions = [
        { id: 0, amount: '$10', description: 'Beginner Support' },
        { id: 1, amount: '$25', description: 'Chess Enthusiast' },
        { id: 2, amount: '$50', description: 'Master Supporter' },
        { id: 3, amount: '$100', description: 'Grandmaster Patron' },
    ];

    // Intersection Observer to detect when element is in viewport
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

        if (supportRef.current) {
            observer.observe(supportRef.current);
        }

        return () => {
            if (supportRef.current) {
                observer.unobserve(supportRef.current);
            }
        };
    }, []);

    // Simulate donation submission
    const handleDonate = () => {
        setShowThanks(true);
        setTimeout(() => {
            setShowThanks(false);
        }, 3000);
    };

    return (
        <div
            ref={supportRef}
            className="relative overflow-hidden py-16 md:py-24"
            style={{
                background: 'linear-gradient(to bottom, #071428 0%, #05101f 100%)',
                color: '#fff',
                borderTop: '1px solid rgba(59, 130, 246, 0.1)',
            }}
        >
            {/* Background Chess Pieces */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
                <div className="absolute top-0 left-1/4 h-32 w-32 rotate-12 transform">
                    <svg viewBox="0 0 24 24" className="h-full w-full">
                        <path
                            fill="currentColor"
                            d="M19,22H5V20H19V22M17,10C15.58,10 14.26,10.77 13.55,12H13V7H16V5H13V2H11V5H8V7H11V12H10.45C9.74,10.77 8.42,10 7,10C4.79,10 3,11.79 3,14C3,16.21 4.79,18 7,18C8.42,18 9.74,17.23 10.45,16H13.55C14.26,17.23 15.58,18 17,18C19.21,18 21,16.21 21,14C21,11.79 19.21,10 17,10Z"
                        />
                    </svg>
                </div>
                <div className="absolute right-1/5 bottom-0 h-36 w-36 -rotate-12 transform">
                    <svg viewBox="0 0 24 24" className="h-full w-full">
                        <path
                            fill="currentColor"
                            d="M12,2A2,2 0 0,1 14,4V6H16.5L17,7L13.5,10.5L16.5,13.5L17,14L16.5,14.5L14,12V13.5L15,14.5V16H9V14.5L10,13.5V12L7.5,14.5L7,14L7.5,13.5L10.5,10.5L7,7L7.5,6H10V4A2,2 0 0,1 12,2Z"
                        />
                    </svg>
                </div>
                <div className="absolute top-1/3 right-1/4 h-40 w-40">
                    <svg viewBox="0 0 24 24" className="h-full w-full">
                        <path fill="currentColor" d="M19,22H5V20H19V22M18,9H14V15L12,13L10,15V9H6L12,3L18,9Z" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Support Content */}
                <div className="mx-auto max-w-3xl">
                    {/* Section Header */}
                    <div
                        className={`mb-10 text-center transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                        <div className="mb-3 inline-flex items-center justify-center gap-2">
                            <div className="h-1 w-6 rounded-full bg-blue-500"></div>
                            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Support Our Mission</span>
                            <div className="h-1 w-6 rounded-full bg-blue-500"></div>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Help Us Spread the Love of Chess</h2>
                        <div
                            className={`mx-auto mb-8 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-300 transition-all delay-300 duration-1000 ${
                                isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
                            }`}
                        ></div>
                    </div>

                    {/* Message */}
                    <div
                        className={`relative mb-10 rounded-lg bg-blue-900/20 p-6 text-center transition-all delay-200 duration-700 md:p-8 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </div>
                        </div>

                        <p className="mt-2 text-base text-gray-300 md:text-lg">
                            Chess is more than a game—it's a powerful educational tool that develops critical thinking, patience, and strategic
                            planning. Your support helps us create free educational resources and bring chess programs to underserved communities.
                        </p>

                        <div
                            className={`mt-6 rounded-lg bg-blue-950/50 p-4 text-sm text-blue-300 transition-all delay-400 duration-500 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        >
                            <p>
                                <strong>Your donation helps us:</strong>
                            </p>
                            <div className="mt-3 grid grid-cols-1 gap-2 text-left sm:grid-cols-2">
                                <div className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5 flex-shrink-0 text-blue-400"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Provide free chess resources</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5 flex-shrink-0 text-blue-400"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Bring chess to schools</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5 flex-shrink-0 text-blue-400"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Sponsor tournaments</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5 flex-shrink-0 text-blue-400"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Support young talents</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Donation Options */}
                    <div
                        className={`mb-8 rounded-lg bg-blue-950/40 p-6 shadow-lg transition-all delay-400 duration-700 md:p-8 ${
                            isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-95 opacity-0'
                        }`}
                    >
                        <h3 className="mb-6 text-center text-xl font-semibold text-white">Choose Your Support Level</h3>

                        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {donationOptions.map((option, index) => (
                                <div
                                    key={option.id}
                                    className={`relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:shadow-md ${
                                        activeDonation === option.id
                                            ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                                            : 'bg-blue-900/30 text-gray-300 hover:bg-blue-900/50'
                                    } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                                    onClick={() => setActiveDonation(option.id)}
                                >
                                    <div className="p-4 text-center">
                                        <div className="mb-1 text-xl font-bold">{option.amount}</div>
                                        <div className="text-xs">{option.description}</div>
                                    </div>
                                    {activeDonation === option.id && (
                                        <div className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mb-6 rounded-lg border border-blue-800/30 bg-blue-900/20 p-4">
                            <div className="mb-3 flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Custom Amount"
                                    className="flex-1 rounded-lg border border-blue-800/60 bg-blue-950/80 px-4 py-2 text-white placeholder-blue-500/70 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                />
                                <div className="rounded-lg border border-blue-800/60 bg-blue-950/80 px-4 py-2 text-gray-400">USD</div>
                            </div>
                            <div className="text-xs text-gray-400">Enter any amount you wish to donate</div>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                size="lg"
                                onClick={handleDonate}
                                className={`relative overflow-hidden bg-blue-600 px-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl ${
                                    showThanks ? 'pointer-events-none' : ''
                                }`}
                            >
                                <div className={`flex items-center transition-all duration-300 ${showThanks ? 'opacity-0' : 'opacity-100'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-5 w-5">
                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                    Donate Now
                                </div>
                                <div
                                    className={`absolute inset-0 flex items-center justify-center bg-green-600 text-white transition-all duration-300 ${
                                        showThanks ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Thank You!
                                    </div>
                                </div>
                            </Button>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div
                        className={`mb-10 rounded-lg bg-blue-900/10 p-6 text-center transition-all delay-600 duration-700 md:p-8 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                        <div className="mb-4 inline-block rounded-full bg-blue-900/40 p-3">
                            <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-400">
                                <path
                                    fill="currentColor"
                                    d="M12 2C6.47 2 2 6.47 2 12S6.47 22 12 22S22 17.53 22 12S17.53 2 12 2M15.1 10.77L14.24 14.46L12.38 13.46C11.08 14.45 9.5 15 8.17 15C6.57 15 6 14.4 6 13.69C6 12.59 7.53 11.17 9.12 11.17C9.24 11.17 9.37 11.18 9.5 11.2L10.69 8.46L13.07 9.41C13.46 8.76 14.06 8 15.28 8C16.12 8 17 8.43 17 9.5C17 10.05 16.5 10.77 15.1 10.77M12.97 11.17C13.09 10.96 13.43 10.5 13.84 10.5C14.05 10.5 14.23 10.65 14.23 10.89C14.23 11.06 14.12 11.22 13.84 11.32L12.97 11.17M8.45 13.28L8.13 13.84C8.07 13.95 8 14 7.85 14C7.58 14 7 13.45 7 13.13C7 13.05 7.07 13 7.15 13H7.3L8.45 13.28M10.66 10.12L9.74 12.17L8.09 11.74C8.97 11.5 10 11 10.66 10.12Z"
                                />
                            </svg>
                        </div>
                        <blockquote className="mb-4 text-base text-gray-300 italic md:text-lg">
                            "Your support helped us bring chess to our school district, engaging over 500 students who now have access to this
                            incredible game. The critical thinking skills they're developing are invaluable."
                        </blockquote>
                        <div className="font-medium text-blue-300">— Sarah Johnson, Elementary School Principal</div>
                    </div>

                    {/* Alternative Support */}
                    <div
                        className={`rounded-lg bg-gradient-to-r from-blue-900/40 to-blue-900/20 p-6 text-center transition-all delay-700 duration-700 md:p-8 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                        <h3 className="mb-4 text-lg font-semibold text-white">Other Ways to Support</h3>
                        <div className="mb-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                            <div className="rounded-lg bg-blue-950/40 p-4">
                                <div className="mb-2 inline-block rounded-full bg-blue-900/60 p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-5 w-5 text-blue-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </div>
                                <div className="text-white">Volunteer</div>
                                <p className="text-xs text-gray-400">Share your knowledge and time</p>
                            </div>
                            <div className="rounded-lg bg-blue-950/40 p-4">
                                <div className="mb-2 inline-block rounded-full bg-blue-900/60 p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-5 w-5 text-blue-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                        />
                                    </svg>
                                </div>
                                <div className="text-white">Spread the Word</div>
                                <p className="text-xs text-gray-400">Share our mission with others</p>
                            </div>
                            <div className="rounded-lg bg-blue-950/40 p-4">
                                <div className="mb-2 inline-block rounded-full bg-blue-900/60 p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-5 w-5 text-blue-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="text-white">Shop Our Store</div>
                                <p className="text-xs text-gray-400">Proceeds support our programs</p>
                            </div>
                        </div>
                        <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950/50 hover:text-blue-300" asChild>
                            <Link href="#">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
