import React from 'react';
import Categories from './ShopComponent/Categories';
import Fliter from './ShopComponent/Fliter';

function Shop(){
  return( 
    <section class="shop spad">
        <div class="container">
            <div class="row">
            <Fliter />
            <Categories/>
          
          </div>
         </div> 
    </section>

  );
}
export default Shop;