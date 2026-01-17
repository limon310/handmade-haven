import { categoryItems } from "@/actions/server/items";
import Image from "next/image";
import Link from "next/link";
export default async function FeaturedCategories() {
    const items = await categoryItems();
    // console.log(items)
    // const categories = [
    //     {
    //         name: "Nakshi Kantha",
    //         image: "https://images.unsplash.com/photo-1610116303244-6239f893fb7a?q=80&w=400",
    //         items: "120+ Items",
    //     },
    //     {
    //         name: "Clay Pottery",
    //         image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=400",
    //         items: "85+ Items",
    //     },
    //     {
    //         name: "Jute Crafts",
    //         image: "https://images.unsplash.com/photo-1544816153-12ad5d7133a2?q=80&w=400",
    //         items: "50+ Items",
    //     },
    //     {
    //         name: "Jamdani Weaving",
    //         image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=400",
    //         items: "40+ Items",
    //     },
    // ];

    return (
        <section className="py-20 bg-white px-6">
            <Link href={"/items"}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-secondary mb-4">
                        Explore Our <span className="text-primary">Heritage</span>
                    </h2>
                    <p className="text-neutral/70 max-w-lg mx-auto">
                        Discover the finest handcrafted treasures, each telling a story of
                        Bangladeshi tradition and craftsmanship.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((cat, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer relative overflow-hidden rounded-box shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="h-80 w-full relative">
                                {/* <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    width={400}
                                    height={350}
                                /> */}
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                            </div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <p className="text-sm font-medium text-accent mb-1">{cat.stock} stack</p>
                                <h3 className="text-2xl font-bold font-serif">{cat.name}</h3>
                                <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300 mt-2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </Link>
        </section>
    );
}