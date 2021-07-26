import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { CartButton, DefaultButton } from './Button';
// import { Button } from 'bootstrap';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2><span className="small">Model - </span>{title}</h2>
                                    <h4 className="text-title text-muted mt-2 mb-2"><span className="small text-capitalize">Manufacturer - </span>{company}</h4>
                                    <h4 className="text-green">price - <strong>₹{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">product description</p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <DefaultButton className="scale-up">
                                                back to products
                                            </DefaultButton>
                                        </Link>
                                        <CartButton className="scale-up"
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                            {inCart ? 'in cart' : 'add to cart'}
                                        </CartButton>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
