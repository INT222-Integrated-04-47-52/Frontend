import '../../HTMLcomponents/cssComponent/decorate.css';
import {Link } from 'react-router-dom';
import banner1 from '../../HTMLcomponents/img/banner/banner-1.png'
import banner2 from '../../HTMLcomponents/img/banner/banner-2.jpg'
import banner3 from '../../HTMLcomponents/img/banner/banner-3.png'
function Collection(){
    return( 
<section class="banner spad">
        <div class="container">
            <div class="row">
                <div class="bg-red-400 col-lg-7 offset-lg-3">
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
                <div class="bg-green-800 col-lg-7 offset-lg-3">
                    <div class="banner__item banner__item--middle">
                        <div class="banner__item__pic">
                            <img src={banner2} alt=""/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Material</h2>
                            <li> <Link to="/Shop">Shop now</Link></li>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-500 col-lg-7 offset-lg-3">
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
