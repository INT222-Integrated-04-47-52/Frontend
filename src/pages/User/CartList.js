
// import React, { useState, useEffect } from "react";
// import CartItem from "../User/CartItem";
// import withContext from "../../withContext";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import "../../HTMLcomponents/cssComponent/decorate.css";
// import { Link } from "react-router-dom";
// import Collapse from "react-bootstrap/Collapse";
// const CartList = (props) => {
//   const history = useHistory();
//   const { products } = props.context;
  

//   const onPostDeleteHandler = async (e, id) => {
//     let user = localStorage.getItem("user");
//     user= JSON.parse(user);
//     const res = await axios.delete(
//       `${process.env.REACT_APP_API_URL}/admin/delete/${id}`
//       ,{ headers: {"Authorization" : `${user.token}`} }
//     );
//     if (res) history.go(0);
//     // alert("Delete product successfully")
//   };

//   const [searchTerm, setSearchTerm] = useState("");
//   const [open, setOpen] = useState(false);
//   const [filterType, setFilterType] = useState(["all"])
//   const [filterGender, setFilterGender] = useState(["all"])
//   const [filterKind, setFilterKind] = useState(["all"])
//   console.log(products)
// // const handleFilterChange = (e, filterType) => {
// //   setFilterType(filterType);

// // }


// useEffect(()=>{
 
// },[])
//   return (
//     <div>
     
//       <div className="hero is-primary"></div>
//       <br />
//       <div className="container">
//         <div className="column columns is-multiline">
//           {products && products.length ? (
//             products
//               .filter((product) => {
               
//              return product;

//               })
//               // .map((product, index) => (
//               //   <ProductItem
//               //     product={product}
//               //     key={index}
//               //     addToCart={props.context.addToCart}
//               //     postDeleted={(e) => onPostDeleteHandler(e, product.productId)}
//               //   />
//               // )).filter((product)=>{
//               //   if(filterType=="all"||filterType == product.gender.genderName){
//               //     return product;
//               //   }
//               // })
//               .map((product, index) => (
//                 <CartItem
//                   product={product}
//                   key={index}
//                   addToCart={props.context.addToCart}
//                   postDeleted={(e) => onPostDeleteHandler(e, product.productId)}
//                 />
//               ))
//           ) : (
//             <div className="column">
//               <span className="title has-text-grey-light">
//                 No products found!
//               </span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default withContext(CartList);


import React from "react";
import withContext from "../../withContext";
import CartItem from "./CartItem";

const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <div>
       <div className="contact__text -mt-24">
                        <div style={{paddingLeft:"32px",paddingTop:"40px"}} className="section-title">
                            <h2 className="pt-24 pl-24 m-1.5">Closet</h2>
                            <p className="pl-24 m-1.5">ตู้เสื้อผ้าสินค้า</p>
                        </div>
                        </div>
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
                />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  Clear closet
                </button>{" "}
               
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">No item in closet!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withContext(Cart);