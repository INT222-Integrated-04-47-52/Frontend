import '../../HTMLcomponents/cssComponent/decorate.css';
import {Link } from 'react-router-dom';
import banner1 from '../../HTMLcomponents/img/banner/banner-1.png'
import banner2 from '../../HTMLcomponents/img/banner/banner-2.png'
import banner3 from '../../HTMLcomponents/img/banner/banner-3.png'
function Collection(){
    return( 
<section class="banner spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 offset-lg-3">
                    <div class="banner__item">
                        <div class="banner__item__pic">
                            <img src={banner1} alt=""/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Clothing Collections 2030</h2>
                            <li> <Link to="/Shop">Shop now</Link></li>
                        </div>
                    </div>
                </div>
                {/* <div class="col-lg-5 offset-lg-3">
                    <div class="banner__item">
                        <div class="banner__item__pic">
                            <img src={banner2} alt=""/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Clothing Collections 2030</h2>
                            <li> <Link to="/Shop">Shop now</Link></li>
                        </div>
                    </div>
                </div> */}
                {/* <div class=" col-lg-7 offset-lg-3 mt-48 " style={{marginTop : "50px"}}>
                    <div class="banner__item grid grid-cols-2">
                        <div class="banner__item__pic">
                            <img src={banner2} alt=""/>
                        </div>
                        <div 
                        class="absolute right-0 banner__item__text banner__item--last text-right">
                            <h2>Silk Spring 2030</h2>
                           <li> <Link to="/Shop">Shop now</Link></li>
                        </div>
                    </div>
                    
                </div>  */}
                {/* <div class=" col-lg-5 offset-lg-3">
                    <div class="banner__item banner__item--middle">
                        <div class="banner__item__pic">
                            <img src={banner2} alt=""/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Material</h2>
                            <li> <Link to="/Shop">Shop now</Link></li>
                        </div>
                    </div>
                </div> */}
                
                    {/* <div class="col-lg-5 ">
                    <div class="banner__item banner__item--middle">
                        <div class="banner__item__pic">
                            <img src={banner2} alt=""/>
                        </div>
                        
                    </div>
                    <div class="banner__item__text">
                            <h2>Accessories</h2>
                            <li> <Link to="/Shop">Shop now</Link></li>
                        </div>
                </div> */}
                <div class=" col-lg-7 offset-lg-3">
                    <div class="banner__item banner__item--last">
                       
                        <div class="banner__item__pic">
                            <img src={banner2} alt=""/>
                        </div> <div class="banner__item__text">
                            <h2>Silk Spring 2030</h2>
                           <li> <Link to="/Shop">Shop now</Link></li>
                        </div>
                    </div>
                </div>
                <div class=" col-lg-7 offset-lg-3">
                    <div class="banner__item banner__item--last">
                        <div class="banner__item__pic">
                            <img src={banner3} alt=""/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Silk Spring 2030</h2>
                           <li> <Link to="/Shop">Shop now</Link></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Collection;