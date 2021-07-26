import React from 'react';
import BuyItem from './BuyItem';

export default function BuyList({value}) {

    const { cart } = value;
    console.log(value, cart);

    return (
        <div className="container-fluid">
            {cart.map(item => {
                return (
                    <BuyItem key={item.id} item={item} value={value}></BuyItem>
                )
            })}
        </div>
    )
}
