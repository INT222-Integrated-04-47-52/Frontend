import React from 'react';
import Filter from './ShopComponent/Filter';
import ProductList from './ShopComponent/ProductList';

function Shop(){
  return( 
    <section class="shop ">
        <div class="container">
            <div class="row">
            <div className="contact__text ">
                        <div style={{paddingLeft:"32px",paddingTop:"72px"}} className="section-title">
                            <h2>Products</h2>
                            <p>รายการสินค้า</p>
                        </div>
                        </div>
                   
     
            {/* <Filter /> */}
           
            <ProductList/>
          </div>
         </div> 
    </section>

  );
}
export default Shop;