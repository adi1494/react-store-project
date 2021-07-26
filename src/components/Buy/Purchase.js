import React from 'react'

export default function Purchase({ value }) {
    const { cartTotal, cartSubtotal, cartTax, clearCart } = value;

    return (
        console.log(`the total payable amount is : ${cartTotal}`),
        <div className="container pt-5">
            <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h4>Total payable amount : <span className="text-blue">${cartTotal}</span></h4>
                        <h6>Subtotal : ₹{cartSubtotal}</h6>
                        <h6>Delivery Charge : ₹{cartTax}</h6>
                    </div>
                </div>
        </div>
    )
}

