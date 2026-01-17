export default function ItemDetailSkeleton() {
    return (
        <div className="min-h-screen bg-base-100 py-12 px-6 animate-pulse">
            <div className="max-w-7xl mx-auto">

                {/* Breadcrumb Skeleton */}
                <div className="h-4 bg-gray-200 rounded w-48 mb-8"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Side: Large Image Skeleton */}
                    <div className="rounded-3xl bg-gray-200 h-[400px] md:h-[600px] w-full"></div>

                    {/* Right Side: Content Skeleton */}
                    <div className="space-y-6">
                        {/* Category & Rating */}
                        <div className="flex justify-between items-center">
                            <div className="h-6 bg-gray-300 rounded-full w-24"></div>
                            <div className="h-6 bg-gray-200 rounded-lg w-16"></div>
                        </div>

                        {/* Title */}
                        <div className="h-10 bg-gray-300 rounded-md w-3/4"></div>

                        {/* Price */}
                        <div className="h-8 bg-gray-300 rounded-md w-32 mt-4"></div>

                        {/* Description */}
                        <div className="space-y-3 pt-4">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>

                        {/* Info Grid (Stock, Crafting Time, etc.) */}
                        <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-100">
                            <div className="space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-20"></div>
                                <div className="h-5 bg-gray-300 rounded w-24"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-20"></div>
                                <div className="h-5 bg-gray-300 rounded w-24"></div>
                            </div>
                        </div>

                        {/* Artisan Section */}
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                            <div className="w-14 h-14 rounded-full bg-gray-300"></div>
                            <div className="space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-16"></div>
                                <div className="h-5 bg-gray-300 rounded w-32"></div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6">
                            <div className="h-12 bg-gray-300 rounded-xl flex-1"></div>
                            <div className="h-12 bg-gray-200 rounded-xl w-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}