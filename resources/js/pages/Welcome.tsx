import Coach from '@/components/landing/coach';
import Features from '@/components/landing/features';
import Footer from '@/components/landing/footer';
import Free from '@/components/landing/free';
import Hero from '@/components/landing/hero';
import Navbar from '@/components/landing/navbar';
import Sample from '@/components/landing/sample';
import Support from '@/components/landing/support';
import { Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';

export default function Welcome() {
    const featuresRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Import GSAP dynamically
        const loadGSAP = async () => {
            const gsapModule = await import('gsap');
            const gsap = gsapModule.default;

            const scrollTriggerModule = await import('gsap/ScrollTrigger');
            const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

            gsap.registerPlugin(ScrollTrigger);

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

            // Animate CTA section
            if (ctaRef.current) {
                gsap.from(ctaRef.current, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 80%',
                    },
                });
            }
        };

        loadGSAP();
    }, []);

    return (
        <>
            <Head title="SoloChess Leveling - Elevate Your Game">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
                {/* Add a modern chess-themed font */}
                <link href="https://fonts.bunny.net/css?family=playfair-display:700" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col bg-[#05101f]">
                <Navbar />
                <main className="flex-grow">
                    <Hero />
                    <Features />
                    <Free />
                    <Coach />
                    <Sample />
                    <Support />
                    <Footer />
                </main>
            </div>
        </>
    );
}
