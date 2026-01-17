export default function ItemCardSkeleton() {
    return (
        <div className="card bg-white shadow-md border border-brand-accent/10 animate-pulse">
            {/* Image Section Skeleton */}
            <div className="relative h-64 bg-gray-200 overflow-hidden">
                {/* Category Badge Placeholder */}
                <div className="absolute top-3 left-3 w-20 h-6 bg-gray-300 rounded-full"></div>
                {/* Rating Placeholder */}
                <div className="absolute bottom-3 right-3 w-12 h-6 bg-gray-300 rounded-lg"></div>
            </div>

            {/* Content Section Skeleton */}
            <div className="card-body p-5">
                {/* Title Placeholder */}
                <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-4"></div>

                {/* Description Placeholder */}
                <div className="space-y-2 mb-6">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>

                {/* Artisan Info Skeleton */}
                <div className="flex items-center gap-2 mb-4 border-y border-brand-accent/10 py-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <div className="space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-10"></div>
                        <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                    <div className="ml-auto flex flex-col items-end space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-12"></div>
                        <div className="h-3 bg-gray-300 rounded w-14"></div>
                    </div>
                </div>

                {/* Pricing & Action Skeleton */}
                <div className="flex justify-between items-center mt-auto">
                    <div className="space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-8"></div>
                        <div className="h-6 bg-gray-300 rounded w-20"></div>
                    </div>
                    <div className="h-8 bg-gray-300 rounded-md w-24"></div>
                </div>
            </div>
        </div>
    );
}