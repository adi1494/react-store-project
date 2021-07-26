import React from 'react'

export default function BuyItem({item, value}) {
    const { id, title, img, price, total, count } = item;

    return (
        <div className="row my-5 text-capitalize text-center align-items-center col-8 mx-auto">
            <div className="col-8 mx-auto col-lg-2">
                <img src={img} alt="product img" style={{ width: '5rem', height: '5rem' }} className="img-fluid" />

            </div>

            <div className="col-8 mx-auto col-lg-2">
                <span className="d-lg-none">product - </span>{title}
            </div>
            <div className="col-8 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>₹{price}
            </div>
            <div className="col-8 mx-auto col-lg-2">
                <span>qty - </span>{count}
            </div>

            {/*  */}

            <div className="col-8 mx-auto col-lg-2">
                <strong>item total : </strong>₹{total}
            </div>
        </div>
    )
}
