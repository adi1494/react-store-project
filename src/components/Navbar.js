import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import logo from '../logo.svg';
import logo2 from '../iconfinder-icon.svg';
import styled from 'styled-components';
import { CartButton } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                    <Link to='/'>
                        <img src={logo2} alt="store" className="navbar-brand scale-up-more" />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to='/' className="nav-link scale-up-more">
                                products
                            </Link>
                        </li>
                    </ul>
                    <Link to='/cart' className="ml-auto scale-up-more">
                        <CartButton head>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus"></i>
                            </span>
                            cart
                        </CartButton>
                    </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    // background: var(--mainblue);
    background: var(--color-primary);
    .nav-link {
        color: var(--mainwhite)!important;
        font-size:1.5rem;
        text-transform: capitalize;
        transition: all 0.2s ease-in-out;
        &:hover {
            // color: var(--lightblue)!important;
            // color: var(--color-secondary)!important;
        }
    }
`