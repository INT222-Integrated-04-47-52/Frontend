import React from 'react';
import Filter from './ShopComponent/Filter';
import ProductList from './ShopComponent/ProductList';

function Shop(){
  return( 
    <section class="shop ">
        <div class="container">
            <div class="row">
            <div className="contact__text -mt-24">
                        <div style={{paddingLeft:"32px",paddingTop:"40px"}} className="section-title">
                            <h2>Products</h2>
                            <p>รายการสินค้า</p>
                        </div>
                        </div>
                   
       <div className="shop__sidebar__search " style={{paddingLeft:"46px"}}>
          <form action="#">
            <input type="text" placeholder="Search..."  onChange={(e) => console.log(e.target.value)} />
            <button type="submit">
              <span className="icon_search"></span>
            </button>
          </form>
        </div>
            <Filter />
           
            <ProductList/>
          </div>
         </div> 
    </section>

  );
}
export default Shop;