import React from 'react';
import { getSingleItems } from '@/actions/server/items';
import ItemDetailsPage from '@/component/cart/ItemDetailsPage';
const page = async({params}) => {
    const {id}  = await params
    // console.log(id)
    const item = await getSingleItems(id);
    // console.log(item)
    return (
        <div>
            <ItemDetailsPage item={item} />
        </div>
    );
};

export default page;