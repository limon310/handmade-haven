import { categoryItems } from "@/actions/server/items";
import ItemCard from "../cart/ItemsCart";
import Link from "next/link";
export default async function Trending() {
    const items = await categoryItems();
    return (
        <section className="py-20 bg-base-100 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Title */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-10 h-[2px] bg-primary"></span>
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Most Loved</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
                            Trending <span className="italic text-primary">Masterpieces</span>
                        </h2>
                    </div>

                    <Link href={"/items"} className="btn btn-outline btn-secondary rounded-full px-8 hover:bg-secondary">
                        View All Collection
                    </Link>
                </div>

                {/* Trending Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <ItemCard key={item._id} item={item} />
                    ))}
                </div>

                {/* Bottom Trust Badge */}
                <div className="mt-16 p-8 bg-white rounded-3xl border border-brand-accent/20 flex flex-wrap justify-center gap-12 items-center opacity-80">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🌿</span>
                        <span className="text-sm font-semibold text-secondary">Eco-Friendly Materials</span>
                    </div>
                    <div className="flex items-center gap-3 border-x border-brand-accent/20 px-12">
                        <span className="text-3xl">🎨</span>
                        <span className="text-sm font-semibold text-secondary">100% Hand-Stitched</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🤝</span>
                        <span className="text-sm font-semibold text-secondary">Fair Trade Certified</span>
                    </div>
                </div>
            </div>
        </section>
    );
}