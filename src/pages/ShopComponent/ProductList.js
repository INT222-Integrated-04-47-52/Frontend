import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import withContext from "../../withContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../HTMLcomponents/cssComponent/decorate.css";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
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
  const [open, setOpen] = useState(false);
  const [filterParam, setFilterParam] = useState(["all"])
   
  console.log(products)
// const handleFilterChange = (e, filterType) => {
//   setFilterParam(filterType);

// }
function fil(products){
  // return products.filter((product)=>{
  //   if(product.typ)
  // })
}

useEffect(()=>{
 
},[])
  return (
    <div>
      <div className="shop__sidebar__search pl-10 ">

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
        <div className="col-lg-3">
      <select  onChange={(e) => {
      setFilterParam(e.target.value);
      console.log("e" + e.target.value)
      console.log("filter" +filterParam)
       }}
  
       className="custom-select"
       aria-label="Filter Countries By Region">
        <option value="all">Filter By Type</option>
        <option value="shirt">shirt</option>
        <option value="pants">pants</option>
        <option value="skirt">skirt</option>
        <option value="clothes">clothes</option>
        </select>
        <span className="focus"></span>
    </div>
      </div>
      <div className="hero is-primary"></div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products
              .filter((product) => {
                // 
                if (searchTerm == "") {
                  return product;
                  
                } else if (
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                
                  return product;
                }

              }).filter((product)=>{
                if(filterParam=="all"||filterParam == product.kind.kindName){
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
