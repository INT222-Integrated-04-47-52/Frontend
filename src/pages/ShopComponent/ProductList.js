import React, { useState } from "react";
import ProductItem from "./ProductItem";
import withContext from "../../withContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ProductList = (props) => {
  const history = useHistory();
  const { products } = props.context;
  const onPostDeleteHandler = async (e, id) => {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/delete/${id}`
    );
    if (res) history.go(0);
    // alert("Delete product successfully")
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {/*  <div className="shop__sidebar__search " style={{paddingLeft:"46px"}}>
          <form action="#">
            <input type="text" placeholder="Search..."  onChange={(e) => console.log(e.target.value)} />
            <button type="submit">
              <span className="icon_search"></span>
            </button>
          </form>
        </div> */}
      <div className="shop__sidebar__search pl-10 ">
        {/*(e) => console.log(e.target.value) */}

        <form>
          <input
            className=""
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button type="submit">
            <span className="icon_search"></span>
          </button>
        </form>
      </div>
      <div className="hero is-primary"></div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products
              .filter((product) => {
                if (searchTerm == "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product, index) => (
                <ProductItem
                  product={product}
                  key={index}
                  addToCart={props.context.addToCart}
                  postDeleted={(e) => onPostDeleteHandler(e, product.productId)}
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
