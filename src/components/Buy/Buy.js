import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import Purchase from './Purchase';
import BuyList from './BuyList';

export default class Buy extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    return (
                        <React.Fragment>
                            <Purchase value={value}></Purchase>
                            <BuyList value={value}></BuyList>
                            {/* <Purchase value={value} /> */}
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
        )
    }
}
