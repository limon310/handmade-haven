import ItemCardSkeleton from '@/component/skeelton/ItemCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <ItemCardSkeleton key={i} />
            ))}
        </div>
    );
};

export default loading;