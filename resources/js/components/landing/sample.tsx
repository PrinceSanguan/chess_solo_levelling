import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

export default function Sample() {
    const sampleRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Sample lesson content
    const sampleLesson = {
        title: "Queen's Gambit Accepted: Essential Strategies",
        instructor: 'GM Alexandra Botez',
        duration: '15:24',
        level: 'Intermediate',
        category: 'Opening Theory',
        sections: [
            {
                title: 'Introduction',
                content:
                    "The Queen's Gambit is one of the oldest and most respected openings in chess history. This lesson will cover the accepted variation where Black captures the c4 pawn.",
                videoTime: '00:00',
            },
            {
                title: 'Key Positions',
                content:
                    "We'll analyze the critical positions that arise after 1.d4 d5 2.c4 dxc4, and explore White's various options to regain the pawn.",
                videoTime: '03:45',
            },
            {
                title: 'Tactical Opportunities',
                content:
                    "The Queen's Gambit Accepted creates unique tactical opportunities. Learn to identify and exploit these patterns in your games.",
                videoTime: '07:12',
            },
            {
                title: 'Strategic Concepts',
                content: 'Understanding the long-term strategic ideas is essential for playing this opening successfully at an intermediate level.',
                videoTime: '11:30',
            },
        ],
        benefits: [
            'Master a classical opening played at all levels',
            'Improve your tactical awareness',
            'Develop better strategic understanding',
            'Build a solid opening repertoire',
        ],
    };

    // Observe when component enters viewport
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

        if (sampleRef.current) {
            observer.observe(sampleRef.current);
        }

        return () => {
            if (sampleRef.current) {
                observer.unobserve(sampleRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sampleRef}
            className="py-16 md:py-20"
            style={{
                background: 'linear-gradient(to bottom, #05101f 0%, #071428 100%)',
                color: '#fff',
                borderTop: '1px solid rgba(59, 130, 246, 0.1)',
            }}
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div
                    className={`mb-12 text-center transition-all duration-700 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    <div className="relative mb-4 inline-block">
                        <span className="absolute top-0 -left-4 text-5xl font-bold text-blue-500/20">★</span>
                        <h2 className="section-title relative text-3xl font-bold text-white md:text-4xl">Free Lesson Sample</h2>
                    </div>
                    <p className="mx-auto max-w-2xl text-gray-300">
                        Experience the quality of our curriculum with this free sample lesson. No sign-up required to preview.
                    </p>
                </div>

                {/* Sample Lesson Preview */}
                <div
                    className={`mx-auto max-w-5xl rounded-xl bg-blue-950/50 shadow-xl transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                    }`}
                >
                    {/* Video Preview Section */}
                    <div className="relative overflow-hidden rounded-t-xl">
                        <div className="absolute top-4 left-4 z-10 rounded-full bg-amber-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                            FREE PREVIEW
                        </div>
                        <div className="absolute top-4 right-4 z-10 rounded-full bg-blue-800/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            {sampleLesson.duration}
                        </div>
                        <div className="relative aspect-video w-full overflow-hidden bg-blue-950">
                            <img
                                src="/assets/images/feature-image.jpg"
                                alt={sampleLesson.title}
                                className="h-full w-full object-cover brightness-75 transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-blue-600/80 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500/90">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-10 w-10 pl-1 transition-transform duration-300 group-hover:scale-110"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-blue-950 to-transparent"></div>
                    </div>

                    {/* Lesson Info */}
                    <div className="p-6 md:p-8">
                        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">{sampleLesson.title}</h3>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-full bg-blue-700"></div>
                                        <span className="text-sm text-gray-300">{sampleLesson.instructor}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
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
                                                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                            />
                                        </svg>
                                        <span>{sampleLesson.level}</span>
                                    </div>
                                    <div className="rounded-full bg-blue-900/80 px-3 py-1 text-xs font-medium text-blue-300">
                                        {sampleLesson.category}
                                    </div>
                                </div>
                            </div>
                            <Button className="mt-4 bg-blue-600 shadow-md hover:bg-blue-500 md:mt-0" asChild>
                                <Link href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="mr-2 h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Unlock Full Course
                                </Link>
                            </Button>
                        </div>

                        {/* Tab Navigation */}
                        <div className="mb-6 border-b border-blue-800/60">
                            <div className="no-scrollbar flex overflow-x-auto">
                                <button
                                    onClick={() => setActiveTab(0)}
                                    className={`border-b-2 px-4 py-2 text-sm font-medium transition-all ${
                                        activeTab === 0
                                            ? 'border-blue-500 text-blue-300'
                                            : 'border-transparent text-gray-400 hover:border-blue-800 hover:text-gray-300'
                                    }`}
                                >
                                    Lesson Content
                                </button>
                                <button
                                    onClick={() => setActiveTab(1)}
                                    className={`border-b-2 px-4 py-2 text-sm font-medium transition-all ${
                                        activeTab === 1
                                            ? 'border-blue-500 text-blue-300'
                                            : 'border-transparent text-gray-400 hover:border-blue-800 hover:text-gray-300'
                                    }`}
                                >
                                    Key Benefits
                                </button>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="overflow-hidden">
                            {/* Lesson Content Tab */}
                            <div
                                className={`transition-all duration-500 ${
                                    activeTab === 0 ? 'translate-x-0 opacity-100' : 'absolute translate-x-full opacity-0'
                                }`}
                            >
                                <div className="grid gap-6 md:grid-cols-2">
                                    {sampleLesson.sections.map((section, index) => (
                                        <div
                                            key={index}
                                            className={`rounded-lg bg-blue-900/20 p-5 transition-all duration-300 delay-${index * 100} hover:bg-blue-900/30 ${
                                                isVisible && activeTab === 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                            }`}
                                            style={{
                                                transitionDelay: `${index * 100}ms`,
                                                borderLeft: index === 0 ? '3px solid rgba(59, 130, 246, 0.8)' : '',
                                            }}
                                        >
                                            <div className="mb-2 flex items-center justify-between">
                                                <h4 className="font-semibold text-white">{section.title}</h4>
                                                <span className="rounded-full bg-blue-950/80 px-2 py-1 text-xs font-medium text-blue-300">
                                                    {section.videoTime}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-300">{section.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits Tab */}
                            <div
                                className={`transition-all duration-500 ${
                                    activeTab === 1 ? 'translate-x-0 opacity-100' : 'absolute -translate-x-full opacity-0'
                                }`}
                            >
                                <div className="rounded-lg bg-blue-900/20 p-6">
                                    <h4 className="mb-4 text-lg font-semibold text-white">What You'll Learn</h4>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {sampleLesson.benefits.map((benefit, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-start gap-3 transition-all duration-300 ${
                                                    isVisible && activeTab === 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                                }`}
                                                style={{ transitionDelay: `${index * 150}ms` }}
                                            >
                                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-300">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className="mt-6 rounded-lg bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-6 transition-all delay-300 duration-500"
                                    style={{
                                        transitionDelay: '600ms',
                                        opacity: isVisible && activeTab === 1 ? 1 : 0,
                                    }}
                                >
                                    <div className="flex flex-col items-center md:flex-row md:justify-between">
                                        <div className="mb-4 md:mb-0">
                                            <h4 className="mb-1 text-lg font-semibold text-white">Ready to master the Queen's Gambit?</h4>
                                            <p className="text-sm text-gray-400">This is just a preview of our comprehensive opening course.</p>
                                        </div>
                                        <Button className="w-full bg-blue-600 shadow-md hover:bg-blue-500 md:w-auto" asChild>
                                            <Link href="#">View Full Course</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div
                    className={`mt-12 text-center transition-all delay-500 duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    <p className="mb-6 text-gray-400">Want to see more free samples? Check out our collection of free learning resources.</p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950/50 hover:text-blue-300" asChild>
                            <Link href="#">Explore Free Content</Link>
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-500" asChild>
                            <Link href="#">Get Premium Access</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
