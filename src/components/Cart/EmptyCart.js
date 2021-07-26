import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DefaultButton } from '../Button';

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>your cart is currently empty</h1>
                    </div>

                </div>
                <div className="col-10 mx-auto col-md-6 col-sm-4 px-auto my-3">
                    <Link to="/">
                        <div className="mx-auto text-center">
                            <DefaultButton className="scale-up">
                                back to products
                            </DefaultButton>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
