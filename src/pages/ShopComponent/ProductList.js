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
    let user = localStorage.getItem("user");
    user= JSON.parse(user);
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/admin/delete/${id}`
      ,{ headers: {"Authorization" : `${user.token}`} }
    );
    if (res) history.go(0);
    // alert("Delete product successfully")
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [filterType, setFilterType] = useState(["all"])
  const [filterGender, setFilterGender] = useState(["all"])
  const [filterKind, setFilterKind] = useState(["all"])
  console.log(products)
// const handleFilterChange = (e, filterType) => {
//   setFilterType(filterType);

// }


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

<div className="justify-center my-4 lg:flex lg:flex-row md:flex md:flex-row lg:space-x-24 md:space-x-14 lg:space-x-8">
      <div className="border-1 border-gray-300 px-4 py-2">
      <select  onChange={(e) => {
      setFilterGender(e.target.value);
      console.log("e" + e.target.value)
      console.log("filter" +filterType)
       }}
  
       className="custom-select"
       aria-label="Filter By Gender">
        <option value="all">Filter By Gender</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        </select>
        <span className="focus"></span>
    </div>

    <div className="border-1 border-gray-300 px-4 py-2">
      <select  onChange={(e) => {
      setFilterKind(e.target.value);
      console.log("e" + e.target.value)
      console.log("filter" +filterKind)
       }}
  
       className="custom-select"
       aria-label="Filter By Kind">
         <option value="all">Filter By Kind</option>
        <option value="shirt">shirt</option>
        <option value="pants">pants</option>
        <option value="skirt">skirt</option>
        <option value="clothes">clothes</option>
        </select>
        <span className="focus"></span>
    </div>
      
      <div className="border-1 border-gray-300 px-4 py-2">
      <select  onChange={(e) => {
      setFilterType(e.target.value);
      console.log("e" + e.target.value)
      console.log("filter" +filterType)
       }}
  
       className="custom-select"
       aria-label="Filter By Type">
        <option value="all">Filter By Type</option>
        <option value="plain silk">plain silk</option>
        <option value="thai silk">thai silk</option>
        <option value="three baskets of silk">three baskets of silk</option>
        <option value="plain cotton">plain cotton</option>
        <option value="mudmee cotton">mudmee cotton</option>
        <option value="natural dyed cotton">natural dyed cotton</option>
        <option value="mud fermented cotton">mud fermented cotton</option>
        </select>
        <span className="focus"></span>
    </div>
    
    </div>
      </div>
 

<div class="relative min-h-screen flex flex-col items-center justify-center "> 
    <div class="grid mt-8  gap-8 sm:gap- sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
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
                if(filterGender=="all"||filterGender == product.gender.genderName){
                  return product;
                }
              }).filter((product)=>{
                if(filterKind=="all"||filterKind == product.kind.kindName){
                  return product;
                }
              }).filter((product)=>{
                if(filterType=="all"||filterType == product.type.typeName){
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
