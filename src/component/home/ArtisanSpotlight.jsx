import Image from "next/image";
import Link from "next/link";

export default function ArtisanSpotlight() {
    const artisans = [
        {
            name: "Begum Rokeya",
            craft: "Nakshi Kantha Specialist",
            location: "Jamalpur",
            image: "https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?q=80&w=400",
            quote: "Every stitch I make is a part of my soul and our century-old tradition."
        },
        {
            name: "Bijoy Pal",
            craft: "Master Potter",
            location: "Dhamrai",
            image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=400",
            quote: "The clay speaks to me. It's not just pottery; it's our identity."
        }
    ];

    return (
        <section className="py-20 bg-secondary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Meet the <span className="text-accent">Masters</span>
                    </h2>
                    <p className="text-brand-accent/70 max-w-2xl mx-auto">
                        Our artisans are the heart of Handmade Haven. By bringing their work to your home,
                        you are helping preserve the rich heritage of Bangladesh.
                    </p>
                </div>

                {/* Artisan Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {artisans.map((artisan, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row items-center gap-8 bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                        >
                            {/* Image with Decorative Border */}
                            <div className="relative shrink-0">
                                <div className="absolute inset-0 border-2 border-accent rounded-full -m-2 group-hover:rotate-12 transition-transform duration-500"></div>
                                <img
                                    src={artisan.image}
                                    alt={artisan.name}
                                    className="w-40 h-40 object-cover rounded-full border-4 border-secondary shadow-2xl"
                                />
                            </div>

                            {/* Content */}
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-serif font-bold text-accent">{artisan.name}</h3>
                                <p className="text-sm font-medium opacity-60 mb-4">{artisan.craft} • {artisan.location}</p>

                                <div className="relative">
                                    <span className="text-4xl font-serif text-accent/30 absolute -top-4 -left-2">“</span>
                                    <p className="italic text-brand-accent/90 relative z-10 pl-4">
                                        {artisan.quote}
                                    </p>
                                </div>

                                <Link href={"/items"} className="mt-6 text-sm font-bold text-accent border-b border-accent/30 hover:border-accent transition-all pb-1 uppercase tracking-widest">
                                    View Her Work
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}