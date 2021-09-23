import React from 'react';
import Fliter from './ShopComponent/Fliter';
import ProductList from './ShopComponent/ProductList';

function Shop(){
  return( 
    <section class="shop spad">
        <div class="container">
            <div class="row">
            <Fliter />
     
            <ProductList/>
          </div>
         </div> 
    </section>

  );
}
export default Shop;