import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';
// import { storeProducts, detailProduct } from './data_new';
// import { storeProducts, detailProduct } from './data_old';

const ProductContext = React.createContext();
// context object has 2 components - provider, consumer

export default class ProductProvider extends Component {
    state = {
        // to copy the products and not get them by reference
        products: [],
        // products: storeProducts,
        detailProduct: detailProduct,

        cart: [],
        // to get the cart object by reference
        // cart: storeProducts,


        // modal properties
        modalOpen: false,
        modalProduct: detailProduct,

        // properties for cart
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }

    componentDidMount() {
        this.setProducts();
    }

    // loop through the data array and display all products
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    //utility method that gets the id
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    // sets detailproduct to the current product
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            // set detailproduct to the required product
            return { detailProduct: product }
        })
    }

    // add to cart button function
    addToCart = (id) => {
        let tempProducts = [...this.state.products];

        // get index of the object with id "id"
        const index = tempProducts.indexOf(this.getItem(id));

        // get product at index position "index"
        const product = tempProducts[index];

        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        // change values in the actual state
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product],
            };
        }, () => {
            this.addTotals();
        })
    }

    // modal methods
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }

    closeModal = (id) => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }

    // cart methods - increment, decrement, remove item, clear cart
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(
            () => {
                return {
                    cart: [...tempCart]
                }
            },
            () => {
                this.addTotals();
            }
        );
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(
                () => {
                    return {
                        cart: [...tempCart]
                    }
                },
                () => {
                    this.addTotals();
                }
            );
        }        
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                    products: [...tempProducts]
                }
            },
            () => {
                this.addTotals();
            }
        );
    }

    clearCart = () => {
        this.setState(
            () => {
                return { cart: [] }
            },
            () => {
                this.setProducts();
                this.addTotals();
            }
        );
    }

    addTotals = () => {
        let subtotal = 0;
        this.state.cart.map(item => (subtotal += item.total));
        let temptax = subtotal * 0.01;
        if (temptax >= 500) temptax = 500;
        if (temptax <= 50) temptax = 50;

        const tax = parseFloat(temptax.toFixed(2));
        const total = subtotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subtotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
