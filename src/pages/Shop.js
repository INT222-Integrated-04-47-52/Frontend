import React from 'react';
import Categories from './ShopComponent/Categories';
import Fliter from './ShopComponent/Fliter';
import AddProduct from './ShopComponent/AddProduct';
import {Link} from 'react-router-dom';

function Shop(){
  return( 
    <section class="shop spad">
        <div class="container">
            <div class="row">
            <Link to="/AddProduct" className="primary-btn m-4">เพิ่มสินค้าจ้า</Link>
            <Fliter />
            <Categories/>
          
          </div>
         </div> 
    </section>

  );
}
export default Shop;