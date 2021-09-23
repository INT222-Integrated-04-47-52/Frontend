import React from "react";
import ProductItem from "../ShopComponent//ProductItem";
import withContext from "../../withContext";

const ProductList = props => {
  const { products } = props.context;

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