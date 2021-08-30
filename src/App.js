import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Shop  from './pages/Shop';
import Contacts from './pages/Contacts';
import Footer from './pages/Footer';
import React, { Component } from "react";
import Navbar from './pages/NavBar';
import './App.css';
import SignIn from './pages/Signin';
import Tailor from './pages/ShopComponent/Tailor';
import AddProduct from './pages/Admin/AddProduct';
import AddSize from './pages/ShopComponent/AddSize';
import Cart from './pages/ShopComponent/Cart';
import Login from './pages/ShopComponent/Login';
import ProductList from './pages/ShopComponent/ProductList';
import Context from "./Context";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: []
    };
    this.routerRef = React.createRef();
  }
  render() {
    return (
    <Context.Provider
    value={{
      ...this.state,
      removeFromCart: this.removeFromCart,
      addToCart: this.addToCart,
      login: this.login,
      addProduct: this.addProduct,
      clearCart: this.clearCart,
      checkout: this.checkout
    }}
  >
     <Router ref={this.routerRef}>
    <div className="App">
      <Navbar/>
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/Shop" component={Shop}/>
       <Route path="/Contacts" component={Contacts}/>
       <Route path="/SignIn" component={SignIn}/>
       <Route path="/Tailor" component={Tailor}/>
       <Route path="/AddProduct" component={AddProduct}/>
       <Route path="/AddSize" component={AddSize}/>
      </Switch>
      <Footer />
    </div>
    </Router>
    </Context.Provider>
  ); 
  }
}

