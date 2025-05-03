// Learn.tsx
import Footer from '@/components/landing/footer';
import Navbar from '@/components/landing/navbar';
import { useState } from 'react';

export default function Learn() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [showFreeOnly, setShowFreeOnly] = useState(false);
    const [sortBy, setSortBy] = useState('popular');
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    const categories = [
        { id: 'all', name: 'All Content', icon: '♟️' },
        { id: 'opening', name: 'Opening Theory', icon: '🏁' },
        { id: 'middlegame', name: 'Middlegame Strategies', icon: '⚔️' },
        { id: 'endgame', name: 'Endgame Technique', icon: '👑' },
        { id: 'tactics', name: 'Tactical Patterns', icon: '💥' },
        { id: 'strategy', name: 'Strategic Concepts', icon: '🧠' },
        { id: 'analysis', name: 'Analysis Methods', icon: '📊' },
    ];

    const videos = [
        {
            id: 1,
            title: 'Sicilian Dragon: Complete Guide',
            instructor: 'GM Alexandra Botez',
            duration: '45:20',
            category: 'opening',
            level: 'Advanced',
            isFree: false,
            thumbnail: '/assets/images/feature-image.jpg',
            views: '15.2K',
            rating: 4.9,
        },
        {
            id: 2,
            title: 'Essential Pawn Structures',
            instructor: 'IM Daniel Rensch',
            duration: '32:15',
            category: 'middlegame',
            level: 'Intermediate',
            isFree: true,
            thumbnail: '/assets/images/feature-image.jpg',
            views: '8.7K',
            rating: 4.7,
        },
        // Add more video objects as needed
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#05101f] to-[#071428] text-white">
            <Navbar />

            <div className="pt-20">
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="mb-4 text-4xl font-bold">Chess Learning Center</h1>
                        <p className="mx-auto max-w-2xl text-gray-300">
                            Master chess with our comprehensive video library. From openings to endgames, we've got you covered.
                        </p>
                    </div>

                    {/* Free Content Toggle */}
                    <div className="mb-8 flex justify-center">
                        <button
                            onClick={() => setShowFreeOnly(!showFreeOnly)}
                            className={`flex items-center gap-2 rounded-full px-6 py-3 transition-all ${
                                showFreeOnly ? 'bg-green-600 text-white' : 'bg-blue-900/30 text-gray-300'
                            }`}
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        showFreeOnly
                                            ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            : 'M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z'
                                    }
                                />
                            </svg>
                            Show Free Content Only
                        </button>
                    </div>

                    {/* Categories */}
                    <div className="mb-8 flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`rounded-lg px-4 py-2 transition-all ${
                                    activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-blue-900/30 text-gray-300 hover:bg-blue-900/50'
                                }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="mb-8 flex flex-wrap justify-center gap-4 md:justify-start">
                        <select
                            className="rounded-lg border border-blue-800 bg-blue-900/30 px-4 py-2 text-white"
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="popular">Most Popular</option>
                            <option value="newest">Newest First</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                        <select className="rounded-lg border border-blue-800 bg-blue-900/30 px-4 py-2 text-white">
                            <option value="">All Levels</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                        <select className="rounded-lg border border-blue-800 bg-blue-900/30 px-4 py-2 text-white">
                            <option value="">All Instructors</option>
                            <option value="alexandra">GM Alexandra Botez</option>
                            <option value="daniel">IM Daniel Rensch</option>
                        </select>
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {videos
                            .filter((video) => (showFreeOnly ? video.isFree : true))
                            .filter((video) => activeCategory === 'all' || video.category === activeCategory)
                            .map((video) => (
                                <div
                                    key={video.id}
                                    className="cursor-pointer overflow-hidden rounded-lg bg-blue-900/20 transition-all hover:bg-blue-900/30"
                                    onClick={() => setSelectedVideo(video)}
                                >
                                    <div className="relative">
                                        <img src={video.thumbnail} alt={video.title} className="aspect-video w-full object-cover" />
                                        <div className="absolute top-2 right-2">
                                            {video.isFree ? (
                                                <span className="rounded-full bg-green-600 px-2 py-1 text-xs text-white">FREE</span>
                                            ) : (
                                                <span className="rounded-full bg-blue-600 px-2 py-1 text-xs text-white">PREMIUM</span>
                                            )}
                                        </div>
                                        <div className="absolute right-2 bottom-2 rounded bg-black/80 px-2 py-1 text-xs text-white">
                                            {video.duration}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="mb-2 font-semibold">{video.title}</h3>
                                        <div className="flex items-center justify-between text-sm text-gray-400">
                                            <span>{video.instructor}</span>
                                            <span>{video.level}</span>
                                        </div>
                                        <div className="mt-2 flex items-center justify-between text-sm">
                                            <span className="text-gray-400">{video.views} views</span>
                                            <div className="flex items-center">
                                                <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span className="ml-1 text-gray-300">{video.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Video Player Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="w-full max-w-6xl rounded-lg bg-blue-950/90">
                        <div className="flex items-center justify-between border-b border-blue-800 p-4">
                            <h2 className="text-xl font-bold">{selectedVideo.title}</h2>
                            <button onClick={() => setSelectedVideo(null)} className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="grid gap-4 p-4 md:grid-cols-3">
                            <div className="md:col-span-2">
                                <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-black">
                                    {/* Video player placeholder */}
                                    <div className="flex h-full w-full items-center justify-center">
                                        <button className="rounded-full bg-blue-600 px-6 py-3 text-white">Play Video</button>
                                    </div>
                                </div>
                                <div className="mb-4 flex gap-4">
                                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">0:00</button>
                                    <input type="range" className="flex-1" />
                                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">{selectedVideo.duration}</button>
                                </div>
                            </div>
                            <div className="rounded-lg bg-blue-900/30 p-4">
                                <h3 className="mb-4 font-semibold">Video Notes</h3>
                                <textarea
                                    className="h-64 w-full resize-none rounded-lg bg-blue-950/50 p-3 text-white"
                                    placeholder="Take notes while watching..."
                                />
                                <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white">Save Notes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
