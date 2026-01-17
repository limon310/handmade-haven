import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center px-6">
            <div className="max-w-2xl text-center">

                {/* 1. Visual Illustration */}
                <div className="relative flex justify-center mb-12">
                    {/* Big Background Number */}
                    <h1 className="text-[12rem] md:text-[18rem] font-serif font-bold text-brand-accent/10 select-none">
                        404
                    </h1>

                    {/* Floating Broken Craft Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl md:text-9xl animate-bounce">
                            🏺
                        </div>
                        {/* Decorative Sparkles */}
                        <span className="absolute top-1/4 right-1/3 text-primary animate-pulse">✦</span>
                        <span className="absolute bottom-1/4 left-1/3 text-secondary animate-pulse">✦</span>
                    </div>
                </div>

                {/* 2. Text Content */}
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6">
                    Oops! This Masterpiece is <span className="text-primary italic">Missing</span>
                </h2>

                <p className="text-neutral/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    It seems the craft you are looking for hasn't been created yet or has moved to a different gallery.
                </p>

                {/* 3. Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="btn btn-primary px-10 rounded-full text-white shadow-lg hover:scale-105 transition-transform"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/items"
                        className="btn btn-outline btn-secondary px-10 rounded-full hover:bg-secondary"
                    >
                        Explore Collections
                    </Link>
                </div>

                {/* 4. Support Link */}
                <p className="mt-12 text-sm text-neutral/40 mb-5">
                    Need help? <Link href="/contact" className="text-primary underline">Contact our curators</Link>
                </p>
            </div>
        </div>
    );
}