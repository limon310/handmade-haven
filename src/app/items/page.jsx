import React from 'react';
import { getItems } from '@/actions/server/items';
import ItemCard from '@/component/cart/ItemsCart';
const itemsPage = async () => {
    const items = await getItems();
    // console.log(items);
    return (
        <div className='max-w-7xl mx-auto'>
            <p>Items page {items.length}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default itemsPage;