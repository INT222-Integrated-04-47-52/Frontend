import '../../HTMLcomponents/cssComponent/decorate.css';
import {Link } from 'react-router-dom';
import banner1 from '../../HTMLcomponents/img/banner/banner-1.jpg'
import banner2 from '../../HTMLcomponents/img/banner/banner-2.jpg'
import banner3 from '../../HTMLcomponents/img/banner/banner-3.jpg'
function Collection(){
    return( 
<section class="banner span">
        <div class="flex item-center justify-center">
            <div class="grid grid-cols-1 gap-4">
                <div class="p-5 object-contain">
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
                <div class="p-5 object-contain">
                    <div class="banner__item banner__item--middle">
                        <div class="banner__item__pic">
                            <img src={banner2} alt=""/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Accessories</h2>
                            <li> <Link to="/Shop">Shop now</Link></li>
                        </div>
                    </div>
                </div>
                <div class="p-5 object-contain">
                    <div class="banner__item banner__item--last">
                        <div class="banner__item__pic">
                            <img src={banner3} alt=""/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Shoes Spring 2030</h2>
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
