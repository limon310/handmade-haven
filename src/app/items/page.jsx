import React from 'react';
import { getItems } from '@/actions/server/items';
import ItemCard from '@/component/cart/ItemsCart';
const itemsPage = async () => {
    const items = await getItems();
    // console.log(items);
    return (
        <div className="bg-base-100 min-h-screen">
            {/* 1. Page Header/Banner */}
            <div className="bg-secondary py-16 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                    The <span className="text-primary">Artisan</span> Collection
                </h1>
                <p className="text-brand-accent text-base-100 max-w-2xl mx-auto opacity-90">
                    Discover unique, hand-stitched, and hand-molded treasures from the
                    heart of Bangladesh. Each piece supports a rural family.
                </p>
            </div>

            {/* 2. Main Content Container */}
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Filters/Summary bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 border-b border-brand-accent/20 pb-6">
                    <p className="text-secondary font-medium">
                        Showing <span className="text-primary font-bold">{items.length}</span> authentic crafts
                    </p>

                    <div className="flex gap-4">
                        {/* Mock Filter Buttons for UI Vibe */}
                        <select className="select select-bordered select-sm bg-white border-brand-accent/30 text-secondary">
                            <option disabled selected>Category</option>
                            <option>Nakshi Kantha</option>
                            <option>Pottery</option>
                        </select>
                        <select className="select select-bordered select-sm bg-white border-brand-accent/30 text-secondary">
                            <option disabled selected>Price Range</option>
                            <option>Low to High</option>
                            <option>High to Low</option>
                        </select>
                    </div>
                </div>

                {/* 3. The Grid System */}
                {items.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {items.map((item) => (
                            <ItemCard key={item._id} item={item} />
                        ))}
                    </div>
                ) : (
                    /* Empty State - jodi database-e kono item na thake */
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-brand-accent/30">
                        <div className="text-6xl mb-4">🏺</div>
                        <h3 className="text-2xl font-bold text-secondary">No Crafts Found</h3>
                        <p className="text-neutral/50">Our artisans are currently crafting new items.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default itemsPage;