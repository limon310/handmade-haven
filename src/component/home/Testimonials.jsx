export default function Testimonials() {
    const reviews = [
        {
            name: "Anika Rahman",
            role: "Home Decor Enthusiast",
            comment: "The Nakshi Kantha wall art I received is breathtaking! You can literally feel the hours of hard work and love in every stitch.",
            image: "https://i.pravatar.cc/150?u=anika",
            rating: 5
        },
        {
            name: "Zayan Ahmed",
            role: "Satisfied Buyer",
            comment: "I ordered a Rickshaw Art trunk. The colors are so vibrant! It’s a piece of Bangladesh right here in my living room.",
            image: "https://i.pravatar.cc/150?u=zayan",
            rating: 5
        },
        {
            name: "Sumi Akter",
            role: "Gift Shopper",
            comment: "Directly supporting artisans while getting such high-quality products is a win-win. The packaging was also very eco-friendly!",
            image: "https://i.pravatar.cc/150?u=sumi",
            rating: 4
        }
    ];

    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-secondary mb-4">
                        Voices of Our <span className="text-primary italic">Community</span>
                    </h2>
                    <p className="text-neutral/60 max-w-lg mx-auto">
                        Hear from those who have brought a piece of heritage into their homes.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev, index) => (
                        <div
                            key={index}
                            className="p-8 bg-base-100 rounded-2xl relative border border-brand-accent/10 hover:shadow-lg transition-shadow"
                        >
                            {/* Quotation Icon */}
                            <span className="text-6xl text-primary/10 absolute top-4 left-4 font-serif leading-none">“</span>

                            <div className="relative z-10">
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(rev.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-sm">★</span>
                                    ))}
                                </div>

                                <p className="text-neutral/70 italic mb-8 leading-relaxed">
                                    "{rev.comment}"
                                </p>

                                {/* User Info */}
                                <div className="flex items-center gap-4 border-t border-brand-accent/10 pt-6">
                                    <div className="avatar">
                                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={rev.image} alt={rev.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary text-sm">{rev.name}</h4>
                                        <p className="text-[10px] uppercase tracking-widest text-neutral/40 font-semibold">{rev.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}