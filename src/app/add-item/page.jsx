"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { addItems } from '@/actions/server/items';

export default function AddItemPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const newItem = {
            name: form.name.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            image: form.image.value,
            category: form.category.value,
            artisan: form.artisan.value,
            craftingTime: form.craftingTime.value,
            stock: parseInt(form.stock.value),
            rating: 5.0, // Default rating for new items
        };

        try {
            // call add item function
            addItems(newItem)
            setTimeout(() => {
                toast.success('Product added to Handmade Haven!');
                setLoading(false);
                form.reset();

                // Redirect to items page after success
                setTimeout(() => router.push('/items'), 2000);
            }, 1500);

        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-100 py-12 px-6">
            <Toaster position="top-right" />

            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-accent/20">
                <div className="mb-10">
                    <h1 className="text-3xl font-serif font-bold text-secondary">List a New Masterpiece</h1>
                    <p className="text-neutral/50 mt-2">Fill in the details to showcase your craft to the world.</p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Product Name */}
                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold text-secondary">Product Name</label>
                        <input name="name" type="text" placeholder="e.g. Dhakai Jamdani Saree" className="input input-bordered focus:border-primary outline-none" required />
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label className="label font-semibold text-secondary">Category</label>
                        <select name="category" className="select select-bordered focus:border-primary outline-none" required>
                            <option disabled selected>Select Category</option>
                            <option>Home Decor</option>
                            <option>Clothing</option>
                            <option>Kitchenware</option>
                            <option>Accessories</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label font-semibold text-secondary">Price (BDT)</label>
                        <input name="price" type="number" placeholder="2500" className="input input-bordered focus:border-primary outline-none" required />
                    </div>

                    {/* Image URL */}
                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold text-secondary">Image URL</label>
                        <input name="image" type="url" placeholder="https://unsplash.com/photo-..." className="input input-bordered focus:border-primary outline-none" required />
                    </div>

                    {/* Artisan Name */}
                    <div className="form-control">
                        <label className="label font-semibold text-secondary">Artisan Name</label>
                        <input name="artisan" type="text" placeholder="Your Name" className="input input-bordered focus:border-primary outline-none" required />
                    </div>

                    {/* Crafting Time */}
                    <div className="form-control">
                        <label className="label font-semibold text-secondary">Crafting Time</label>
                        <input name="craftingTime" type="text" placeholder="e.g. 5 Days" className="input input-bordered focus:border-primary outline-none" required />
                    </div>

                    {/* Description */}
                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold text-secondary">Product Description</label>
                        <textarea name="description" className="textarea textarea-bordered h-32 focus:border-primary outline-none" placeholder="Tell the story behind this craft..." required></textarea>
                    </div>

                    {/* Stock */}
                    <div className="form-control">
                        <label className="label font-semibold text-secondary">Initial Stock</label>
                        <input name="stock" type="number" placeholder="5" className="input input-bordered focus:border-primary outline-none" required />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-6">
                        <button type="submit" disabled={loading} className={`btn btn-primary w-full text-white text-lg ${loading ? 'loading' : ''}`}>
                            {loading ? 'Adding Craft...' : 'Publish Product'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}