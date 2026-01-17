import Image from "next/image";
import Link from "next/link";

export default function ItemCard({ item }) {
    return (
        <div className="card bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-brand-accent/10 group">
            {/* Image Section */}
            <figure className="relative h-64 overflow-hidden">
                {/* <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}
                <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={300}
                    height={180}
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className="badge badge-secondary text-xs py-3 px-4 shadow-lg">
                        {item.category}
                    </span>
                </div>
                {/* Rating Overlay */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-xs font-bold text-secondary">{item.rating}</span>
                </div>
            </figure>

            {/* Content Section */}
            <div className="card-body p-5">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="card-title text-secondary font-serif text-lg leading-tight">
                        {item.name}
                    </h2>
                </div>

                <p className="text-neutral/70 text-sm line-clamp-2 mb-4">
                    {item.description}
                </p>

                {/* Artisan Info & Crafting Time */}
                <div className="flex items-center gap-2 mb-4 border-y border-brand-accent/10 py-2">
                    <div className="avatar placeholder">
                        <div className="bg-brand-accent/20 text-secondary rounded-full w-8">
                            <span className="text-xs font-bold">{item.artisan[0]}</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-neutral/50 leading-none">Artisan</p>
                        <p className="text-xs font-semibold text-secondary">{item.artisan}</p>
                    </div>
                    <div className="ml-auto text-right">
                        <p className="text-[10px] uppercase tracking-widest text-neutral/50 leading-none">Craft Time</p>
                        <p className="text-xs font-medium text-primary">{item.craftingTime}</p>
                    </div>
                </div>

                {/* Pricing & Action */}
                <div className="card-actions justify-between items-center mt-auto">
                    <div>
                        <span className="text-sm text-neutral/50">Price</span>
                        <p className="text-xl font-bold text-secondary">৳{item.price}</p>
                    </div>
                    <Link href={`/items/${item._id}`} className="btn btn-primary btn-sm px-6 rounded-md">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}