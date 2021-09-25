import React from "react";
import ProductItem from "../ShopComponent//ProductItem";
import withContext from "../../withContext";
import axios from "axios";

const ProductList = props => {
  const { products} = props.context;
 {/*const  onPostDeleteHandler = (e,id) = >{
    e.stopPropagation();
    if(window.confirm('R U Sure?')){
      axios.delete(`${process.env.REACT_APP_API_URL}/delete/${id}`)

    }.them(response=> {
      this.getPosts();
    })

  }*/}

  return (
    <div>
      <div className="hero is-primary">
    
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
             /*    postDeleted={this.onPostDeleteHandler.bind(this.getPosts,product.id)}*/
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

};

export default withContext(ProductList);