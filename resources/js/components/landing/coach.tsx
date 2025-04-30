import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function Coach() {
    const coachRef = useRef<HTMLDivElement>(null);
    const [activeCoach, setActiveCoach] = useState(0);

    const coaches = [
        {
            id: 1,
            name: 'GM Alexandra Botez',
            title: "Women's Grandmaster",
            rating: 2325,
            specialty: 'Opening Theory',
            bio: "FIDE Women's Grandmaster with over 15 years of competitive experience and specializing in dynamic opening preparation.",
            students: '2,300+',
            experience: '12+ years',
            badges: ['Positional Play', 'Openings', 'Streaming'],
            availability: 'Mon, Wed, Fri',
        },
        {
            id: 2,
            name: 'IM Daniel Rensch',
            title: 'International Master',
            rating: 2480,
            specialty: 'Tactical Combinations',
            bio: 'Renowned chess instructor who has trained multiple national champions and specializes in middle game tactical patterns.',
            students: '4,100+',
            experience: '15+ years',
            badges: ['Tactics', 'Analysis', 'Teaching'],
            availability: 'Tue, Thu, Sat',
        },
        {
            id: 3,
            name: 'GM Hikaru Nakamura',
            title: 'Grandmaster',
            rating: 2760,
            specialty: 'Rapid & Blitz Chess',
            bio: "Five-time U.S. Chess Champion and one of the world's leading speed chess players with expertise in modern opening theory.",
            students: '3,800+',
            experience: '20+ years',
            badges: ['Speed Chess', 'Calculation', 'Psychology'],
            availability: 'Thu, Sat, Sun',
        },
    ];

    const handleNextCoach = () => {
        setActiveCoach((prev) => (prev + 1) % coaches.length);
    };

    const handlePrevCoach = () => {
        setActiveCoach((prev) => (prev - 1 + coaches.length) % coaches.length);
    };

    return (
        <div
            ref={coachRef}
            className="py-16 md:py-20"
            style={{
                background: 'linear-gradient(to bottom, #071428 0%, #05101f 100%)',
                color: '#fff',
                borderTop: '1px solid rgba(59, 130, 246, 0.1)',
            }}
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <div className="relative mb-4 inline-block">
                        <span className="absolute top-0 -left-4 text-5xl font-bold text-blue-500/20">★</span>
                        <h2 className="section-title relative text-3xl font-bold text-white md:text-4xl">Coach Spotlight</h2>
                    </div>
                    <p className="mx-auto max-w-2xl text-gray-300">
                        Learn from world-class chess masters who provide personalized training tailored to your skill level and goals.
                    </p>
                </div>

                {/* Coaches Display */}
                <div className="relative mx-auto max-w-5xl">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 left-0 z-10 flex w-full -translate-y-1/2 justify-between">
                        <button
                            onClick={handlePrevCoach}
                            className="flex h-10 w-10 -translate-x-5 items-center justify-center rounded-full bg-blue-800/80 text-white shadow-md backdrop-blur-sm transition-transform hover:scale-110 hover:bg-blue-700/90 md:h-12 md:w-12 md:-translate-x-6"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5 md:h-6 md:w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNextCoach}
                            className="flex h-10 w-10 translate-x-5 items-center justify-center rounded-full bg-blue-800/80 text-white shadow-md backdrop-blur-sm transition-transform hover:scale-110 hover:bg-blue-700/90 md:h-12 md:w-12 md:translate-x-6"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5 md:h-6 md:w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Coach Card */}
                    <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-950/90 via-blue-900/50 to-blue-950/90 shadow-xl transition-all duration-300 hover:shadow-blue-700/20">
                        <div className="flex flex-col md:flex-row">
                            {/* Coach Image */}
                            <div className="relative w-full md:w-2/5">
                                <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                                    FEATURED
                                </div>
                                <div className="absolute right-0 bottom-0 left-0 h-1/2 bg-gradient-to-t from-blue-950/90 to-transparent md:hidden"></div>
                                <div className="aspect-[3/4] h-full w-full overflow-hidden bg-blue-950">
                                    <img
                                        src={`/assets/images/coach-${coaches[activeCoach].id}.jpg`}
                                        alt={coaches[activeCoach].name}
                                        className="h-full w-full object-cover brightness-90 transition-transform duration-700 hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/assets/images/feature-image.jpg';
                                        }}
                                    />
                                </div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 md:hidden">
                                    <div className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                                        {coaches[activeCoach].rating}
                                    </div>
                                    <div className="rounded-full bg-blue-800/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                                        {coaches[activeCoach].title}
                                    </div>
                                </div>
                            </div>

                            {/* Coach Info */}
                            <div className="flex w-full flex-col justify-between p-6 md:w-3/5 md:p-8">
                                <div>
                                    <div className="mb-1 flex flex-wrap items-center gap-2 md:hidden">
                                        {coaches[activeCoach].badges.map((badge, index) => (
                                            <span
                                                key={index}
                                                className="inline-block rounded-full bg-blue-900/80 px-2 py-1 text-xs font-medium text-blue-300"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="mb-1 text-2xl font-bold text-white md:text-3xl">{coaches[activeCoach].name}</h3>

                                    <div className="mb-4 hidden items-center gap-2 md:flex">
                                        <div className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                                            {coaches[activeCoach].rating}
                                        </div>
                                        <div className="rounded-full bg-blue-800/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                                            {coaches[activeCoach].title}
                                        </div>
                                    </div>

                                    <div className="mb-4 hidden flex-wrap items-center gap-2 md:flex">
                                        {coaches[activeCoach].badges.map((badge, index) => (
                                            <span
                                                key={index}
                                                className="inline-block rounded-full bg-blue-900/80 px-2 py-1 text-xs font-medium text-blue-300"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mb-4 flex items-center gap-1 text-sm text-blue-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                                            />
                                        </svg>
                                        Specializes in <span className="font-semibold">{coaches[activeCoach].specialty}</span>
                                    </div>

                                    <p className="mb-6 text-gray-300">{coaches[activeCoach].bio}</p>

                                    <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                                        <div className="rounded-lg bg-blue-900/40 p-3 text-center">
                                            <div className="text-lg font-bold text-blue-300">{coaches[activeCoach].students}</div>
                                            <div className="text-xs text-gray-400">STUDENTS</div>
                                        </div>
                                        <div className="rounded-lg bg-blue-900/40 p-3 text-center">
                                            <div className="text-lg font-bold text-blue-300">{coaches[activeCoach].experience}</div>
                                            <div className="text-xs text-gray-400">EXPERIENCE</div>
                                        </div>
                                        <div className="col-span-2 rounded-lg bg-blue-900/40 p-3 text-center sm:col-span-1">
                                            <div className="text-sm font-medium text-blue-300">{coaches[activeCoach].availability}</div>
                                            <div className="text-xs text-gray-400">AVAILABILITY</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Button className="flex-1 bg-blue-600 shadow-md hover:bg-blue-500" asChild>
                                        <Link href="#">Schedule Lesson</Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="flex-1 border-blue-600 text-blue-400 hover:bg-blue-950/50 hover:text-blue-300"
                                        asChild
                                    >
                                        <Link href="#">View Profile</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coach Selector Dots */}
                    <div className="mt-6 flex justify-center gap-2">
                        {coaches.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCoach(index)}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                    activeCoach === index ? 'w-6 bg-blue-500' : 'bg-blue-800 hover:bg-blue-700'
                                }`}
                                aria-label={`Select coach ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <p className="mb-6 text-gray-400">Want to see all of our chess instructors? Explore our complete roster of chess masters.</p>
                    <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950/50 hover:text-blue-300" asChild>
                        <Link href="#">View All Coaches</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
