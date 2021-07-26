import React from 'react'
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;

    return (
        <React.Fragment>
            <div className="container my-5 my-lg-2 mr-lg-3">
                <div className="row mx-auto d-flex mt-5 justify-content-end text-center">
                    {/* <div className="col-10 mt-2 ml-sm-5 ml-lg-10 ml-md-auto col-sm-11 text-capitalzie text-right"> */}
                    {/* <div className="col-9 ml-sm-2 col-md-8 col-lg-12 text-capitalzie text-right"> */}
                    <div className="d-block mx-auto text-capitalzie text-right mr-lg-0">
                        <div className="text-center">
                            <Link to="/Buy">
                                <button className="btn btn-success text-uppercase mb-3 px-5 scale-up" style={{ width: "15rem" }} type="button">checkout</button>
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link to="/">
                                <button className="btn btn-danger text-uppercase mb-3 px-5 scale-up" style={{ width: "15rem" }} type="button" onClick={() => clearCart()}>clear cart</button>
                            </Link>
                        </div>

                        <h5>
                            <div className="text-title d-flex justify-content-between">
                                <span className="small pr-5">subtotal</span>
                                <span className="">₹ {cartSubtotal}</span>
                            </div>
                        </h5>
                        {/* <h5>
                            <div className="text-title d-flex justify-content-between">
                                <span>tax</span>
                                <span>₹ {cartTax}</span>
                            </div>
                        </h5> */}
                        <h5>
                            <div className="text-title d-flex justify-content-between">
                                <span className="small pr-5">Delivery Charge</span>
                                <spans className="">₹ {cartTax}</spans>
                            </div>
                        </h5>
                        <h5>
                            <div className="text-title d-flex justify-content-between">
                                <div className="small pr-5">total</div>
                                <div className="">₹ {cartTotal}</div>
                            </div>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
