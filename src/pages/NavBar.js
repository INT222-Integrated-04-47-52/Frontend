import {Link } from 'react-router-dom';

function Navbar(){
    return( 
    <header className="header">

    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3">
                <div className="header__logo">
                   <b> <a style={{color: "black"}} href="./index.html">MONGKOLTHORN</a>
                   </b>   </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <nav className="header__menu mobile-menu">
                    <ul>
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/Contacts">Contacts</Link></li>
                    </ul>

                </nav>
            </div>
            <div className="col-lg-3 col-md-3">
                <div className="header__nav__option">
                    <a href="../public/index.html" className="search-switch"><img src="img/icon/search.png" alt=""/></a>
                    <a href="./index.html"><img src="img/icon/heart.png" alt=""/></a>
                   <a href="./index.html">Sign in</a>
                   
                </div>
              
            </div>
        </div>
        <div className="canvas__open"><i className="fa fa-bars"></i></div>
    </div>
</header>

    );
}
export default Navbar;


