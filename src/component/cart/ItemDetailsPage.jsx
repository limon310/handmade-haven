"use client";
import Image from 'next/image';
import React from 'react';

export default function ItemDetailsPage({ item }) {

    return (
        <div className="min-h-screen bg-base-100 py-12 px-6">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-brand-accent/10 overflow-hidden">
                <div className="flex flex-col lg:flex-row">

                    {/* Left Side: Product Image */}
                    <div className="lg:w-1/2 relative">
                        <Image
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[500px] lg:h-full object-cover"
                            width={500}
                            height={500}
                        />
                        <div className="absolute top-5 left-5">
                            <span className="badge badge-secondary p-4 text-white font-medium tracking-wide">
                                {item.category}
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Product Details */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-1 text-yellow-500">
                                <span>★</span>
                                <span className="text-secondary font-bold">{item.rating}</span>
                                <span className="text-neutral/40 text-sm ml-1">(24 Reviews)</span>
                            </div>
                            <span className={`text-sm font-semibold ${item.stock > 0 ? 'text-success' : 'text-error'}`}>
                                {item.stock > 0 ? `In Stock (${item.stock})` : 'Out of Stock'}
                            </span>
                        </div>

                        <h1 className="text-4xl font-serif font-bold text-secondary mb-4 leading-tight">
                            {item.name}
                        </h1>

                        <p className="text-3xl font-bold text-primary mb-6">৳{item.price}</p>

                        <div className="divider"></div>

                        <p className="text-neutral/70 leading-relaxed mb-8">
                            {item.description}
                        </p>

                        {/* Artisan Spotlight Box */}
                        <div className="bg-base-100 p-6 rounded-2xl border border-brand-accent/20 mb-8 flex items-center gap-4">
                            <div className="avatar placeholder">
                                <div className="bg-secondary text-white rounded-full w-14">
                                    <span className="text-xl font-serif">{item.artisan[0]}</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-secondary">Crafted by {item.artisan}</h4>
                                <p className="text-sm text-neutral/50">Master Artisan from Jamalpur</p>
                                <div className="flex gap-4 mt-2">
                                    <span className="text-xs font-medium px-2 py-1 bg-white rounded border border-brand-accent/30 text-primary">
                                        ⏱ {item.craftingTime} of work
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <button className="btn btn-primary flex-1 btn-lg shadow-lg text-white">
                                Add to Cart
                            </button>
                            <button className="btn btn-outline btn-secondary flex-1 btn-lg">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info Section (Optional) */}
            <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <h5 className="font-bold text-secondary mb-2">Organic Materials</h5>
                    <p className="text-sm text-neutral/60">Made with 100% locally sourced cotton and natural dyes.</p>
                </div>
                <div className="text-center p-6 border-x border-brand-accent/20">
                    <h5 className="font-bold text-secondary mb-2">Fair Trade</h5>
                    <p className="text-sm text-neutral/60">Every purchase directly supports the artisan's family.</p>
                </div>
                <div className="text-center p-6">
                    <h5 className="font-bold text-secondary mb-2">Tradition</h5>
                    <p className="text-sm text-neutral/60">Preserving 200 years of Bangladeshi weaving heritage.</p>
                </div>
            </div>
        </div>
    );
}