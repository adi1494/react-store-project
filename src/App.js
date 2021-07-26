// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Switch, Route } from 'react-router-dom';
// import reactDom from "react-dom";

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
// import Product from './components/Product';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
import Buy from './components/Buy';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/buy" component={Buy}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
