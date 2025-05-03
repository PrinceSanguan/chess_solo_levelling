// Coaching.tsx
import Footer from '@/components/landing/footer';
import Navbar from '@/components/landing/navbar';
import { Button } from '@/components/ui/button';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';

export default function Coaching() {
    const [selectedSpecialty, setSelectedSpecialty] = useState('all');
    const [selectedRating, setSelectedRating] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');
    const [selectedAvailability, setSelectedAvailability] = useState('all');
    const [selectedCoach, setSelectedCoach] = useState<any>(null);
    const [showBooking, setShowBooking] = useState(false);

    const coaches = [
        {
            id: 1,
            name: 'FM Deniel Causo',
            photo: '/assets/images/coach-daniel.jpg',
            rating: 2224, // Latest FIDE rating as of August 2024
            title: 'FIDE Master',
            specialties: ['Opening Theory', 'Positional Play', 'Youth Development'],
            experience: '15+ years teaching experience',
            philosophy: 'I believe in developing strong fundamentals and helping students understand the "why" behind every move.',
            area: 'Bangkok, Thailand',
            rates: {
                online: 100,
                faceToFace: 150,
            },
            availability: 'Weekdays, Weekends',
            credentials: 'Most Outstanding Player, NCAA Season 82; Coached IM Prin Laohawirapap',
            students: '500+',
            successStories: 'Coached Thailand’s top-rated player to International Master title',
        },
        {
            id: 2,
            name: 'IM Daniel Rensch',
            photo: '/assets/images/coach-2.jpg',
            rating: 2480,
            title: 'International Master',
            specialties: ['Tactical Patterns', 'Endgame Theory', 'Junior Development'],
            experience: '12+ years teaching experience',
            philosophy: 'Chess is 99% tactics. I focus on pattern recognition and calculation skills.',
            area: 'New York, NY',
            rates: {
                online: 100,
                faceToFace: 150,
            },
            availability: 'Weekdays, Evenings',
            credentials: 'Former US Junior Champion, Author of 3 chess books',
            students: '800+',
            successStories: '25 students won national tournaments',
        },
        {
            id: 3,
            name: 'FM Rebecca Harris',
            photo: '/assets/images/coach-3.jpg',
            rating: 2240,
            title: 'FIDE Master',
            specialties: ['Beginner Chess', 'Youth Development', 'Online Teaching'],
            experience: '8+ years teaching experience',
            philosophy: 'Making chess fun and accessible for everyone, especially young learners.',
            area: 'Chicago, IL',
            rates: {
                online: 80,
                faceToFace: 120,
            },
            availability: 'Weekends, Mornings',
            credentials: 'FIDE Trainer Certificate, Elementary School Coach',
            students: '300+',
            successStories: 'Developed award-winning youth program',
        },
    ];

    const specialties = [
        'All Specialties',
        'Opening Theory',
        'Middlegame Strategy',
        'Endgame Theory',
        'Tactical Patterns',
        'Positional Play',
        'Youth Development',
    ];
    const ratings = ['All Ratings', 'GM (2500+)', 'IM (2400-2499)', 'FM (2300-2399)', 'Expert (2200-2299)'];
    const priceRanges = ['All Prices', 'Under $50/hr', '$50-100/hr', '$100-150/hr', '$150+/hr'];
    const availabilities = ['All Availability', 'Weekdays', 'Weekends', 'Evenings', 'Mornings'];

    const filteredCoaches = coaches.filter((coach) => {
        // Add filtering logic here based on selected filters
        return true; // For now, return all coaches
    });

    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState('');

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#05101f] to-[#071428] text-white">
            <Navbar />

            <div className="pt-20">
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold">Chess Coaching Directory</h1>
                        <p className="mx-auto max-w-2xl text-gray-300">
                            Find the perfect chess coach to help you reach your goals. Our expert instructors offer personalized training for all
                            levels.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="mb-8 rounded-lg bg-blue-900/20 p-6">
                        <h2 className="mb-4 text-xl font-bold">Find Your Coach</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium">Specialty</label>
                                <select
                                    className="w-full rounded-lg border border-blue-800 bg-blue-950/50 px-4 py-2"
                                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                                >
                                    {specialties.map((specialty) => (
                                        <option key={specialty} value={specialty.toLowerCase().replace(' ', '-')}>
                                            {specialty}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">Rating</label>
                                <select
                                    className="w-full rounded-lg border border-blue-800 bg-blue-950/50 px-4 py-2"
                                    onChange={(e) => setSelectedRating(e.target.value)}
                                >
                                    {ratings.map((rating) => (
                                        <option key={rating} value={rating.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                                            {rating}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">Price Range</label>
                                <select
                                    className="w-full rounded-lg border border-blue-800 bg-blue-950/50 px-4 py-2"
                                    onChange={(e) => setSelectedPrice(e.target.value)}
                                >
                                    {priceRanges.map((price) => (
                                        <option key={price} value={price.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                                            {price}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">Availability</label>
                                <select
                                    className="w-full rounded-lg border border-blue-800 bg-blue-950/50 px-4 py-2"
                                    onChange={(e) => setSelectedAvailability(e.target.value)}
                                >
                                    {availabilities.map((availability) => (
                                        <option key={availability} value={availability.toLowerCase().replace(' ', '-')}>
                                            {availability}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Coaches Grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredCoaches.map((coach) => (
                            <div key={coach.id} className="overflow-hidden rounded-lg bg-blue-900/20 transition-all hover:bg-blue-900/30">
                                <div className="p-6">
                                    <div className="mb-4 flex items-center">
                                        <img
                                            src={coach.photo}
                                            alt={coach.name}
                                            className="h-24 w-24 rounded-full border-4 border-blue-600 object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = '/assets/images/avatar-placeholder.jpg';
                                            }}
                                        />
                                        <div className="ml-4">
                                            <h3 className="text-xl font-bold">{coach.name}</h3>
                                            <div className="text-blue-400">{coach.title}</div>
                                            <div className="text-sm text-gray-400">Rating: {coach.rating}</div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="mb-2 font-semibold">Specialties</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {coach.specialties.map((specialty, index) => (
                                                <span key={index} className="rounded-full bg-blue-800/50 px-2 py-1 text-xs">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-sm text-gray-400">{coach.experience}</div>
                                        <div className="text-sm text-gray-400">📍 {coach.area}</div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="mb-1 font-semibold">Rates</h4>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <div className="rounded bg-blue-950/50 p-2">
                                                <div className="text-gray-400">Online</div>
                                                <div className="font-bold">${coach.rates.online}/hr</div>
                                            </div>
                                            <div className="rounded bg-blue-950/50 p-2">
                                                <div className="text-gray-400">Face-to-face</div>
                                                <div className="font-bold">${coach.rates.faceToFace}/hr</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button onClick={() => setSelectedCoach(coach)} className="flex-1 bg-blue-600 hover:bg-blue-500">
                                            View Profile
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setSelectedCoach(coach);
                                                setShowBooking(true);
                                            }}
                                            variant="outline"
                                            className="flex-1 border-blue-600 text-blue-400 hover:bg-blue-950/50"
                                        >
                                            Book Session
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Coach Profile Modal */}
            {selectedCoach && !showBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-blue-950/90">
                        <div className="p-6">
                            <div className="mb-6 flex items-start justify-between">
                                <div className="flex items-center">
                                    <img
                                        src={selectedCoach.photo}
                                        alt={selectedCoach.name}
                                        className="h-32 w-32 rounded-full border-4 border-blue-600 object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/assets/images/avatar-placeholder.jpg';
                                        }}
                                    />
                                    <div className="ml-6">
                                        <h2 className="text-2xl font-bold">{selectedCoach.name}</h2>
                                        <div className="text-lg text-blue-400">{selectedCoach.title}</div>
                                        <div className="text-gray-400">FIDE Rating: {selectedCoach.rating}</div>
                                        <div className="text-gray-400">📍 {selectedCoach.area}</div>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedCoach(null)} className="text-gray-400 hover:text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-3 text-lg font-bold">Credentials & Experience</h3>
                                    <div className="mb-6 space-y-2">
                                        <p>{selectedCoach.credentials}</p>
                                        <p>{selectedCoach.experience}</p>
                                        <p>👥 {selectedCoach.students} students taught</p>
                                        <p>🏆 {selectedCoach.successStories}</p>
                                    </div>

                                    <h3 className="mb-3 text-lg font-bold">Teaching Philosophy</h3>
                                    <p className="mb-6 text-gray-300">"{selectedCoach.philosophy}"</p>

                                    <h3 className="mb-3 text-lg font-bold">Specialization Areas</h3>
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {selectedCoach.specialties.map(
                                            (
                                                specialty:
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
                                                    | undefined,
                                                index: Key | null | undefined,
                                            ) => (
                                                <span key={index} className="rounded-full bg-blue-800/50 px-3 py-1">
                                                    {specialty}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-lg font-bold">Rates & Availability</h3>
                                    <div className="mb-6 rounded-lg bg-blue-900/30 p-4">
                                        <div className="mb-4 grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-gray-400">Online Sessions</div>
                                                <div className="text-2xl font-bold">${selectedCoach.rates.online}/hr</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-400">Face-to-face</div>
                                                <div className="text-2xl font-bold">${selectedCoach.rates.faceToFace}/hr</div>
                                            </div>
                                        </div>
                                        <div className="text-gray-400">Available: {selectedCoach.availability}</div>
                                    </div>

                                    <Button onClick={() => setShowBooking(true)} className="w-full bg-blue-600 hover:bg-blue-500">
                                        Book a Session
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Booking Modal */}
            {selectedCoach && showBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="w-full max-w-3xl rounded-lg bg-blue-950/90">
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-2xl font-bold">Book a Session with {selectedCoach.name}</h2>
                                <button
                                    onClick={() => {
                                        setShowBooking(false);
                                        setSelectedCoach(null);
                                    }}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-3 font-bold">Select Date</h3>
                                    <div className="mb-4 rounded-lg bg-blue-900/30 p-4">
                                        {/* Simple calendar implementation */}
                                        <input
                                            type="date"
                                            className="w-full rounded border border-blue-800 bg-blue-950/50 px-3 py-2"
                                            onChange={(e) => setSelectedDate(new Date(e.target.value))}
                                        />
                                    </div>

                                    <h3 className="mb-3 font-bold">Session Type</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="radio" name="sessionType" value="online" className="mr-2" defaultChecked />
                                            Online Session (${selectedCoach.rates.online}/hr)
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="sessionType" value="faceToFace" className="mr-2" />
                                            Face-to-face (${selectedCoach.rates.faceToFace}/hr)
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-3 font-bold">Available Time Slots</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`rounded p-2 text-sm ${
                                                    selectedTime === time ? 'bg-blue-600 text-white' : 'bg-blue-900/30 hover:bg-blue-900/50'
                                                }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="mb-3 font-bold">Additional Notes</h3>
                                <textarea
                                    className="h-24 w-full rounded-lg border border-blue-800 bg-blue-950/50 px-4 py-2"
                                    placeholder="Any specific topics you'd like to cover or questions you have..."
                                />
                            </div>

                            <div className="mt-6 flex gap-4">
                                <Button
                                    className="flex-1 bg-blue-600 hover:bg-blue-500"
                                    onClick={() => {
                                        // Handle booking submission
                                        alert('Booking submitted successfully!');
                                        setShowBooking(false);
                                        setSelectedCoach(null);
                                    }}
                                >
                                    Confirm Booking
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1 border-blue-600 text-blue-400 hover:bg-blue-950/50"
                                    onClick={() => setShowBooking(false)}
                                >
                                    Back to Profile
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
