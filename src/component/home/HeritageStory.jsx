import Link from "next/link";

export default function HeritageStory() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Image with Decorative Frames */}
                    <div className="lg:w-1/2 relative">
                        {/* Background Decorative Box */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent/20 rounded-2xl -z-10"></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=800"
                                alt="Traditional Weaver"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-primary text-white p-6 rounded-xl shadow-xl max-w-[200px]">
                                <p className="text-3xl font-serif font-bold">200+</p>
                                <p className="text-xs uppercase tracking-widest opacity-80">Years of Weaving Tradition</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Our Story</span>
                            <div className="h-[1px] w-12 bg-primary"></div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight">
                            Reviving the <span className="text-primary">Golden Fiber</span> & Ancient Stitches
                        </h2>

                        <p className="text-neutral/70 text-lg leading-relaxed">
                            In every corner of rural Bangladesh, there lies a hidden masterpiece. From the intricate geometry of <strong>Jamdani</strong> to the soulful stories stitched into <strong>Nakshi Kantha</strong>, our heritage is woven with love and resilience.
                        </p>

                        <p className="text-neutral/70 text-lg leading-relaxed">
                            Handmade Haven isn't just a marketplace; it's a bridge. We connect the timeless skill of our village artisans with modern homes, ensuring that these ancient crafts don't just survive, but thrive in the new era.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div>
                                <h4 className="text-secondary font-bold text-xl mb-1">Authentic</h4>
                                <p className="text-sm text-neutral/50">Directly sourced from the roots of Bengal.</p>
                            </div>
                            <div>
                                <h4 className="text-secondary font-bold text-xl mb-1">Sustainable</h4>
                                <p className="text-sm text-neutral/50">Eco-friendly materials and ethical practices.</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Link href={"/items"} className="btn btn-primary px-10 rounded-full shadow-lg">
                                Explore Our Journey
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}