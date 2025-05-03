// LiveClasses.tsx
import Footer from '@/components/landing/footer';
import Navbar from '@/components/landing/navbar';
import { Button } from '@/components/ui/button';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';

export default function LiveClasses() {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [selectedDay, setSelectedDay] = useState('monday');
    const [selectedClass, setSelectedClass] = useState<any>(null);

    const weekDays = [
        { id: 'monday', name: 'Monday', date: '6' },
        { id: 'tuesday', name: 'Tuesday', date: '7' },
        { id: 'wednesday', name: 'Wednesday', date: '8' },
        { id: 'thursday', name: 'Thursday', date: '9' },
        { id: 'friday', name: 'Friday', date: '10' },
        { id: 'saturday', name: 'Saturday', date: '11' },
        { id: 'sunday', name: 'Sunday', date: '12' },
    ];

    type ClassType = {
        id: number;
        title: string;
        instructor: string;
        time: string;
        level: string;
        duration: string;
        spots: number;
        totalSpots: number;
        description: string;
        instructorBio: string;
        image: string;
    };

    type ClassesType = {
        [key: string]: ClassType[];
    };

    const classes: ClassesType = {
        monday: [
            {
                id: 1,
                title: 'Opening Theory: The Sicilian Defense',
                instructor: 'GM Alexandra Botez',
                time: '10:00 AM - 11:30 AM',
                level: 'Intermediate',
                duration: '90 minutes',
                spots: 15,
                totalSpots: 20,
                description: 'Deep dive into the Sicilian Defense, covering the main variations and typical middlegame plans.',
                instructorBio: "FIDE Women's Grandmaster with 15+ years experience. Specializes in opening theory and strategic play.",
                image: '/assets/images/feature-image.jpg',
            },
            {
                id: 2,
                title: 'Endgame Mastery: Rook Endings',
                instructor: 'IM Daniel Rensch',
                time: '2:00 PM - 3:30 PM',
                level: 'Advanced',
                duration: '90 minutes',
                spots: 8,
                totalSpots: 15,
                description: 'Master the most common endgame type in chess. Learn theoretical positions and practical techniques.',
                instructorBio: 'International Master with focus on endgame technique. Has trained multiple national champions.',
                image: '/assets/images/feature-image.jpg',
            },
        ],
        tuesday: [
            {
                id: 3,
                title: 'Tactical Patterns for Beginners',
                instructor: 'FM Rebecca Harris',
                time: '9:00 AM - 10:30 AM',
                level: 'Beginner',
                duration: '90 minutes',
                spots: 25,
                totalSpots: 30,
                description: 'Learn fundamental tactical patterns including pins, forks, and discovered attacks.',
                instructorBio: 'FIDE Master specializing in teaching beginners. Author of "Chess Tactics for Kids".',
                image: '/assets/images/feature-image.jpg',
            },
        ],
        // Add more days as needed
    };

    const pastClasses = [
        {
            id: 101,
            title: 'Strategic Planning in the Middlegame',
            instructor: 'GM Hikaru Nakamura',
            date: 'May 5, 2025',
            duration: '120 minutes',
            level: 'Advanced',
            recording: true,
            image: '/assets/images/feature-image.jpg',
        },
        {
            id: 102,
            title: 'Chess Opening Principles',
            instructor: 'IM Daniel Rensch',
            date: 'May 4, 2025',
            duration: '90 minutes',
            level: 'Beginner',
            recording: true,
            image: '/assets/images/feature-image.jpg',
        },
        // Add more past classes
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#05101f] to-[#071428] text-white">
            <Navbar />

            <div className="pt-20">
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold">Live Chess Classes</h1>
                        <p className="mx-auto max-w-2xl text-gray-300">
                            Join our interactive live sessions with world-class chess instructors. Learn, ask questions, and improve your game in
                            real-time.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 flex justify-center">
                        <div className="inline-flex rounded-lg bg-blue-900/30 p-1">
                            <button
                                onClick={() => setActiveTab('upcoming')}
                                className={`rounded-lg px-6 py-2 transition-all ${
                                    activeTab === 'upcoming' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                Upcoming Classes
                            </button>
                            <button
                                onClick={() => setActiveTab('past')}
                                className={`rounded-lg px-6 py-2 transition-all ${
                                    activeTab === 'past' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                Past Classes
                            </button>
                        </div>
                    </div>

                    {activeTab === 'upcoming' ? (
                        <>
                            {/* Calendar Week View */}
                            <div className="mb-8">
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">May 6-12, 2025</h2>
                                    <div className="flex gap-2">
                                        <button className="rounded-lg bg-blue-900/30 p-2 hover:bg-blue-900/50">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button className="rounded-lg bg-blue-900/30 p-2 hover:bg-blue-900/50">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-7">
                                    {weekDays.map((day) => (
                                        <button
                                            key={day.id}
                                            onClick={() => setSelectedDay(day.id)}
                                            className={`rounded-lg p-4 text-center transition-all ${
                                                selectedDay === day.id ? 'bg-blue-600 text-white' : 'bg-blue-900/30 hover:bg-blue-900/50'
                                            }`}
                                        >
                                            <div className="font-bold">{day.name}</div>
                                            <div className="text-sm">May {day.date}</div>
                                            {classes[day.id]?.length > 0 && (
                                                <div className="mt-2">
                                                    <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                                                    <span className="ml-1 text-xs">{classes[day.id].length} classes</span>
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Selected Day Classes */}
                            <div className="space-y-4">
                                <h3 className="mb-4 text-xl font-bold">{weekDays.find((d) => d.id === selectedDay)?.name}'s Classes</h3>

                                {classes[selectedDay]?.map(
                                    (classItem: {
                                        id: Key | null | undefined;
                                        image: string | undefined;
                                        title:
                                            | string
                                            | number
                                            | bigint
                                            | boolean
                                            | ReactElement<unknown, string | JSXElementConstructor<any>>
                                            | Iterable<ReactNode>
                                            | Promise<
                                                  | string
                                                  | number
                                                  | bigint
                                                  | boolean
                                                  | ReactPortal
                                                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                                                  | Iterable<ReactNode>
                                                  | null
                                                  | undefined
                                              >
                                            | null
                                            | undefined;
                                        time:
                                            | string
                                            | number
                                            | bigint
                                            | boolean
                                            | ReactElement<unknown, string | JSXElementConstructor<any>>
                                            | Iterable<ReactNode>
                                            | ReactPortal
                                            | Promise<
                                                  | string
                                                  | number
                                                  | bigint
                                                  | boolean
                                                  | ReactPortal
                                                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                                                  | Iterable<ReactNode>
                                                  | null
                                                  | undefined
                                              >
                                            | null
                                            | undefined;
                                        duration:
                                            | string
                                            | number
                                            | bigint
                                            | boolean
                                            | ReactElement<unknown, string | JSXElementConstructor<any>>
                                            | Iterable<ReactNode>
                                            | ReactPortal
                                            | Promise<
                                                  | string
                                                  | number
                                                  | bigint
                                                  | boolean
                                                  | ReactPortal
                                                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                                                  | Iterable<ReactNode>
                                                  | null
                                                  | undefined
                                              >
                                            | null
                                            | undefined;
                                        level:
                                            | string
                                            | number
                                            | bigint
                                            | boolean
                                            | ReactElement<unknown, string | JSXElementConstructor<any>>
                                            | Iterable<ReactNode>
                                            | Promise<
                                                  | string
                                                  | number
                                                  | bigint
                                                  | boolean
                                                  | ReactPortal
                                                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                                                  | Iterable<ReactNode>
                                                  | null
                                                  | undefined
                                              >
                                            | null
                                            | undefined;
                                        description:
                                            | string
                                            | number
                                            | bigint
                                            | boolean
                                            | ReactElement<unknown, string | JSXElementConstructor<any>>
                                            | Iterable<ReactNode>
                                            | ReactPortal
                                            | Promise<
                                                  | string
                                                  | number
                                                  | bigint
                                                  | boolean
                                                  | ReactPortal
                                                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                                                  | Iterable<ReactNode>
                                                  | null
                                                  | undefined
                                              >
                                            | null
                                            | undefined;
                                        instructor:
                                            | string
                                            | number
                                            | bigint
                                            | boolean
                                            | ReactElement<unknown, string | JSXElementConstructor<any>>
                                            | Iterable<ReactNode>
                                            | ReactPortal
                                            | Promise<
                                                  | string
                                                  | number
                                                  | bigint
                                                  | boolean
                                                  | ReactPortal
                                                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                                                  | Iterable<ReactNode>
                                                  | null
                                                  | undefined
                                              >
                                            | null
                                            | undefined;
                                        spots:
                                            | string
                                            | number
                                            | bigint
                                            | boolean
                                            | ReactElement<unknown, string | JSXElementConstructor<any>>
                                            | Iterable<ReactNode>
                                            | ReactPortal
                                            | Promise<
                                                  | string
                                                  | number
                                                  | bigint
                                                  | boolean
                                                  | ReactPortal
                                                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                                                  | Iterable<ReactNode>
                                                  | null
                                                  | undefined
                                              >
                                            | null
                                            | undefined;
                                        totalSpots:
                                            | string
                                            | number
                                            | bigint
                                            | boolean
                                            | ReactElement<unknown, string | JSXElementConstructor<any>>
                                            | Iterable<ReactNode>
                                            | ReactPortal
                                            | Promise<
                                                  | string
                                                  | number
                                                  | bigint
                                                  | boolean
                                                  | ReactPortal
                                                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                                                  | Iterable<ReactNode>
                                                  | null
                                                  | undefined
                                              >
                                            | null
                                            | undefined;
                                    }) => (
                                        <div
                                            key={classItem.id}
                                            className="overflow-hidden rounded-lg bg-blue-900/20 transition-all hover:bg-blue-900/30"
                                        >
                                            <div className="md:flex">
                                                <div className="md:w-1/3">
                                                    <img
                                                        src={classItem.image}
                                                        alt={String(classItem.title)}
                                                        className="h-48 w-full object-cover md:h-full"
                                                    />
                                                </div>
                                                <div className="p-6 md:w-2/3">
                                                    <div className="mb-4 flex items-start justify-between">
                                                        <div>
                                                            <h4 className="mb-2 text-xl font-bold">{classItem.title}</h4>
                                                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                                                <span className="flex items-center">
                                                                    <svg
                                                                        className="mr-1 h-4 w-4"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                        />
                                                                    </svg>
                                                                    {classItem.time}
                                                                </span>
                                                                <span className="flex items-center">
                                                                    <svg
                                                                        className="mr-1 h-4 w-4"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                        />
                                                                    </svg>
                                                                    {classItem.duration}
                                                                </span>
                                                                <span
                                                                    className={`rounded-full px-2 py-1 text-xs ${
                                                                        classItem.level === 'Beginner'
                                                                            ? 'bg-green-600'
                                                                            : classItem.level === 'Intermediate'
                                                                              ? 'bg-yellow-600'
                                                                              : 'bg-red-600'
                                                                    }`}
                                                                >
                                                                    {classItem.level}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Button onClick={() => setSelectedClass(classItem)} className="bg-blue-600 hover:bg-blue-500">
                                                            View Details
                                                        </Button>
                                                    </div>

                                                    <p className="mb-4 text-gray-300">{classItem.description}</p>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="mr-3 h-10 w-10 rounded-full bg-blue-700"></div>
                                                            <div>
                                                                <div className="font-medium">{classItem.instructor}</div>
                                                                <div className="text-sm text-gray-400">Chess Instructor</div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-sm text-gray-400">Available Spots</div>
                                                            <div className="font-bold">
                                                                {classItem.spots}/{classItem.totalSpots}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ),
                                )}

                                {!classes[selectedDay]?.length && (
                                    <div className="rounded-lg bg-blue-900/20 py-12 text-center">
                                        <svg className="mx-auto mb-4 h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <p className="text-gray-400">No classes scheduled for this day</p>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        /* Past Classes Archive */
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {pastClasses.map((classItem) => (
                                <div key={classItem.id} className="overflow-hidden rounded-lg bg-blue-900/20 transition-all hover:bg-blue-900/30">
                                    <div className="relative">
                                        <img src={classItem.image} alt={classItem.title} className="h-48 w-full object-cover" />
                                        {classItem.recording && (
                                            <div className="absolute top-2 right-2 rounded-full bg-green-600 px-2 py-1 text-xs text-white">
                                                Recording Available
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h4 className="mb-2 font-bold">{classItem.title}</h4>
                                        <div className="mb-4 text-sm text-gray-400">
                                            <div>{classItem.instructor}</div>
                                            <div>
                                                {classItem.date} • {classItem.duration}
                                            </div>
                                            <div className="mt-2">
                                                <span
                                                    className={`rounded-full px-2 py-1 text-xs ${
                                                        classItem.level === 'Beginner'
                                                            ? 'bg-green-600'
                                                            : classItem.level === 'Intermediate'
                                                              ? 'bg-yellow-600'
                                                              : 'bg-red-600'
                                                    }`}
                                                >
                                                    {classItem.level}
                                                </span>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full border-blue-600 text-blue-400 hover:bg-blue-950/50">
                                            Watch Recording
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Class Detail Modal */}
            {selectedClass && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="w-full max-w-3xl rounded-lg bg-blue-950/90">
                        <div className="flex items-center justify-between border-b border-blue-800 p-6">
                            <h2 className="text-2xl font-bold">{selectedClass.title}</h2>
                            <button onClick={() => setSelectedClass(null)} className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <img src={selectedClass.image} alt={selectedClass.title} className="mb-4 h-64 w-full rounded-lg object-cover" />
                                    <h3 className="mb-2 font-bold">About the Instructor</h3>
                                    <div className="mb-4 flex items-center">
                                        <div className="mr-4 h-16 w-16 rounded-full bg-blue-700"></div>
                                        <div>
                                            <div className="font-bold">{selectedClass.instructor}</div>
                                            <div className="text-sm text-gray-400">{selectedClass.instructorBio}</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-4 font-bold">Class Details</h3>
                                    <div className="mb-6 space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Date & Time</span>
                                            <span>{selectedClass.time}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Duration</span>
                                            <span>{selectedClass.duration}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Level</span>
                                            <span>{selectedClass.level}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Available Spots</span>
                                            <span>
                                                {selectedClass.spots}/{selectedClass.totalSpots}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="mb-2 font-bold">Description</h3>
                                    <p className="mb-6 text-gray-300">{selectedClass.description}</p>

                                    <Button className="w-full bg-blue-600 hover:bg-blue-500">Register for Class</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
