import {Link } from 'react-router-dom';

function Navbar(){
    return( 
    <header className="header">

    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3">
                <div className="header__logo">
                   <b> <Link to="/" style={{color: "black"}}> MONGKOLTHORN </Link>
                   </b>   
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <nav className="header__menu mobile-menu">
                    <ul>
                        <li className="active"><Link to="/">Home</Link></li>
                        <li ><Link to="/Shop">Shop</Link></li>
                        <li ><Link to="/Contacts">Contacts</Link></li>
                    </ul>

                </nav>
            </div>
            <div className="col-lg-3 col-md-3">
                <div className="header__nav__option">
   
               <Link to="/Signin" style={{color: "black" }}>Sign in</Link>
                   
                </div>
              
            </div>
        </div>
        <div className="canvas__open"><i className="fa fa-bars"></i></div>
    </div>
</header>

    );
}
export default Navbar;


