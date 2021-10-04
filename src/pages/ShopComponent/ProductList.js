import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../../withContext";
import axios from "axios";
import {useHistory} from "react-router-dom";
// }
const ProductList = (props) => {
  const history = useHistory()
  const { products } = props.context;
  const onPostDeleteHandler = async (e, id) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/delete/${id}`);
    if(res)
    history.go(0)
    // alert("Delete product successfully")
  };
  return (
    <div>
      <div className="hero is-primary"></div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
                postDeleted={(e)=>onPostDeleteHandler(e,product.productId)}
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
