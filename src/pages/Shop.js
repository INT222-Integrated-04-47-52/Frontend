import React from 'react';
import Filter from './ShopComponent/Filter';
import ProductList from './ShopComponent/ProductList';

function Shop(){
  return( 
    <section class="shop spad">
        <div class="container">
            <div class="row">
      
            <Filter />
            <ProductList/>
          </div>
         </div> 
    </section>

  );
}
export default Shop;