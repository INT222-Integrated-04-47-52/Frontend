import React from 'react';
import ProductList from './ShopComponent/ProductList';

function Shop(){
  return( 
    <section class="shop">
        <div class="container">
            <div class="row">
            <div className="contact__text ">
                        <div className="section-title ">
                            <h2>Products</h2>
                            <p>รายการสินค้า</p>
                        </div>
                        </div>
           
            <ProductList/>
          </div>
         </div> 
    </section>

  );
}
export default Shop;