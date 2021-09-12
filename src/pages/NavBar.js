import { NavLink } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo">
              <b>
                {" "}
                <NavLink to="/" style={{ color: "black" }}>
                  {" "}
                  MONGKOLTHORN{" "}
                </NavLink>
              </b>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header__menu mobile-menu">
              <div className="flex flex-row pl-36 ">
                <div>
                  <NavLink
                    exact
                    className="main-nav"
                    activeClassName="main-nav-active"
                    to="/">
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/Shop"
                    className="main-nav"
                    activeClassName="main-nav-active">
                    Shop
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/Contacts"
                    className="main-nav"
                    activeClassName="main-nav-active">
                    Contacts
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <div className="canvas__open">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
