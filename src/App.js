import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";
import React, { Component } from "react";
import "./App.css";
import Tailor from "./pages/ShopComponent/Tailor";
import AddProduct from "./pages/ShopComponent/AddProduct";
import AddSize from "./pages/ShopComponent/AddSize";
import Cart from "./pages/ShopComponent/Cart";
import Login from "./pages/ShopComponent/Login";
import ProductList from "./pages/ShopComponent/ProductList";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Context from "./Context";
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { browserHistory, IndexRoute } from 'react-router';
// import reduxThunk from 'redux-thunk';
// import { AUTHENTICATE_THE_USER } from './actions/types';
// import RequireAuth from './components/auth/require_auth';
// import reducers from './reducers';
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
/*Cookies */
// const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk))(createStore);
// const store = createStoreWithMiddleware(reducers);
  addToCart = (cartItem) => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };
  removeFromCart = (cartItemId) => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };
  /* async login  (_email, _password) {
    const response = await axios
      .post("http://localhost:3001/login", { email: _email, password: _password })
      .catch((err) => {
        return { status: 401, message: "Unauthorized" };
      });

    if (response.status === 200) {
      const {email, accessToken} = response.data
      const user = {
        email,
        token: accessToken,
        accessLevel: email === "admin@example.com" ? 0 : 1,
      };
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };*/

  login = async (email, password) => {
    const res = await axios.post(
      `http://localhost:3001/login`,
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
    
    if(res.status === 200) {
      const { email } = jwt_decode(res.data.accessToken)
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === 'admin@example.com' ? 0 : 1
      }

      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  checkout = () => {
     if (!this.state.user) {
      this.routerRef.current.history.push("/login");
      return;
    }
    const cart = this.state.cart;
    const products = this.state.products.map((p) => {
      if (cart[p.name]) {
        axios.put(`http://localhost:3001/products/${p.id}`, { ...p });
      }
      return p;
    });

    this.setState({ products });
    this.clearCart();
  };
   logout = (e) => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };
  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products }, () => callback && callback());
  };

  async componentDidMount() {
    let user = localStorage.getItem("user");
    let cart = localStorage.getItem("cart");

    const products = await axios.get(`${process.env.REACT_APP_API_URL}/allProducts`);
    console.log(products);
    user = user ? JSON.parse(user) : null;
    cart = cart ? JSON.parse(cart) : {};
    this.setState({ user, products: products.data, cart });
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
          checkout: this.checkout,
        }}>
        <Router ref={this.routerRef}>
          <div className="App">
          <nav
            className="navbar container "
            role="navigation"
            aria-label="main navigation"
          >  
                <div className="navbar-brand">
                  
                        <NavLink className="my-3 font-semibold text-lg" to="/" style={{ color: "black" }}>
                    
                          MONGKOLTORN
                        </NavLink>
                        <label
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                      </a>
                      </label>
                     </div>
         
                        <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active absolute right-0 top-0 z-20" : ""
                }`} >
                  <div className="nav-menu ">
                    <div className=" md:flex md:mx-auto md:px-8 md:pt-3">
                      <div className="nav-item">
                        <NavLink
                          exact
                          className="main-nav md:px-8 navbar-item"
                          activeClassName="main-nav-active "
                          to="/"
                        >
                          Home
                        </NavLink>
                      </div>
                      <div className="nav-item">
                        <NavLink
                          to="/Shop"
                          className=" main-nav md:px-8 navbar-item"
                          activeClassName="main-nav-active "
                        >
                          Shop
                        </NavLink>
                      </div>
                      <div className="nav-item">
                        <NavLink
                          to="/Contacts"
                          className="main-nav md:px-8 navbar-item"
                          activeClassName="main-nav-active"
                        >
                          Contacts
                        </NavLink>
                      </div>
                      
                      <div className="nav-item ">
                        {/*    {this.state.user && this.state.user.accessLevel < 1  (
                  <NavLink to="/AddProduct"     className="main-nav md:px-8 navbar-item"
                  activeClassName="main-nav-active ">
                    Add Product
                  </NavLink>
          )}{" "} */}
                      {this.state.user  && (
                  <NavLink to="/AddProduct"     className="main-nav md:px-8 navbar-item"
                  activeClassName="main-nav-active ">
                    Add Product
                  </NavLink>
          )}{" "}
                      
                      </div>
                      <div className="nav-item">
                        <NavLink
                          to="/Cart"
                          className="main-nav md:px-8 navbar-item"
                          activeClassName="main-nav-active"
                        >
                          Closet
                          <span className="tag is-primary md:pl-2" style={{}}>
                            {Object.keys(this.state.cart).length}
                          </span>
                        </NavLink>
                      </div>
                      <div className="nav-item">
                      {!this.state.user ? (
                  <NavLink to="/LogIn" className="main-nav md:px-8 navbar-item"
                  activeClassName="main-nav-active">
                    Log In
                  </NavLink>
                ) : (
                  <NavLink to="/" onClick={this.logout} className="main-nav md:px-8 navbar-item"
                  activeClassName="main-nav-active">
                    Logout
                  </NavLink>
                )} </div>
                      </div>
                   
                  
                    </div>
                  </div>
               
              {/* <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`} >  */}
           </nav>
           {/* {this.state.user && this.state.user.accessLevel < 1 && (
                  <NavLink to="/AddProduct"     className="main-nav md:px-8 navbar-item"
                  activeClassName="main-nav-active ">
                    Add Product
                  </NavLink>
          )}{" "} */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/LogIn" component={Login} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Products" component={ProductList} />
              <Route path="/Shop" component={Shop} />
              <Route path="/Contacts" component={Contacts} />
              <Route path="/Tailor" component={Tailor} />
              {this.state.user  && ( 
              <Route path="/AddProduct" component={AddProduct} />
             )}{" "}
   <Route path="/AddProduct" component={Login} />
            
              <Route path="/AddSize" component={AddSize} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Context.Provider>
    );
  }
}