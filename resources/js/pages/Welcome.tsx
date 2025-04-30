import Coach from '@/components/landing/coach';
import Features from '@/components/landing/features';
import Footer from '@/components/landing/footer';
import Free from '@/components/landing/free';
import Hero from '@/components/landing/hero';
import Navbar from '@/components/landing/navbar';
import Sample from '@/components/landing/sample';
import Support from '@/components/landing/support';
import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

export default function Welcome() {
    const featuresRef = useRef<HTMLDivElement>(null);
    const coachRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const supportRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Import GSAP dynamically
        const loadGSAP = async () => {
            const gsapModule = await import('gsap');
            const gsap = gsapModule.default;

            const scrollTriggerModule = await import('gsap/ScrollTrigger');
            const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

            gsap.registerPlugin(ScrollTrigger);

            setIsLoaded(true);

            // Initial entrance animations
            gsap.fromTo('main > *:first-child', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });

            // Animate feature cards when they enter viewport
            if (featuresRef.current) {
                const featureCards = featuresRef.current.querySelectorAll('.feature-card');

                gsap.from(featureCards, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: 'top 80%',
                    },
                });
            }

            // Animate Coach section
            if (coachRef.current) {
                gsap.from(coachRef.current, {
                    opacity: 0,
                    x: -50,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: coachRef.current,
                        start: 'top 75%',
                    },
                });
            }

            // Animate CTA section with a more impressive animation
            if (ctaRef.current) {
                const ctaElements = ctaRef.current.querySelectorAll('h2, p, .cta-button');

                gsap.from(ctaRef.current, {
                    backgroundColor: 'transparent',
                    boxShadow: '0 0 0 rgba(0,0,0,0)',
                    duration: 1,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 80%',
                    },
                });

                gsap.from(ctaElements, {
                    opacity: 0,
                    y: 20,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 80%',
                    },
                });
            }

            // Animate Support section
            if (supportRef.current) {
                gsap.from(supportRef.current.querySelectorAll('.support-item'), {
                    scale: 0.9,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.6,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: supportRef.current,
                        start: 'top 80%',
                    },
                });
            }
        };

        loadGSAP();

        // Cleanup ScrollTrigger on unmount
        return () => {
            const cleanup = async () => {
                const scrollTriggerModule = await import('gsap/ScrollTrigger');
                const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
                ScrollTrigger.getAll().forEach((t) => t.kill());
            };
            cleanup();
        };
    }, []);

    return (
        <>
            <Head title="SoloChess Leveling - Elevate Your Game">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <meta
                    name="description"
                    content="Improve your chess skills with SoloChess Leveling - personalized coaching, free resources, and community support."
                />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
                <link href="https://fonts.bunny.net/css?family=playfair-display:700,900" rel="stylesheet" />
            </Head>

            <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-[#05101f] to-[#0a1a2f]">
                <div className="pointer-events-none absolute inset-0 bg-[url('/images/chess-bg-pattern.svg')] bg-repeat opacity-5"></div>

                <Navbar />

                <main className={`flex-grow transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <Hero />

                    <div ref={featuresRef} className="relative z-10">
                        <Features />
                    </div>

                    <Free />

                    <div ref={coachRef} className="relative z-10">
                        <Coach />
                    </div>

                    <div ref={ctaRef} className="relative z-10 mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Sample />
                    </div>

                    <div ref={supportRef} className="relative z-10">
                        <Support />
                    </div>

                    <Footer />
                </main>
            </div>
        </>
    );
}
