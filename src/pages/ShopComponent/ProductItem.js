import axios from "axios";
import React, { useState, useEffect } from "react";
import EditProduct from "./EditProduct";

export default function ProductItem(props) {
  const { product } = props;
  const [user, setUser] = useState(null);
  const [isInput, setIsIn] = useState(false);
  // const [updatedAt, setUpdatedAt] = useState(null);
  // const [isEdit , setIsEdit] = useState(false);
  //   const todo = {
  //     id: 10,
  //     title: 'go to gym',
  //     body: 'practicing sport is very important',
  //     userId: 2,
  // };
  function handleChange(event) {
    console.log(event.target.value);
  }
  useEffect(
    () => {
      // Update the document title using the browser API
      const userLocal = localStorage.getItem("user");
      const user  = JSON.parse(userLocal)
      setUser(user);
      
      // console.log("user")
      // console.log(userLocal);

      // console.log(user.accessLevel)
    }
    
     ,[]
  );

  return (
    <> 
    { isInput && <EditProduct  product={product} close={() => setIsIn(false)}/>}
    
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image w-36">
              <img
                className="product__item__pic set-bg"
                src={`${process.env.REACT_APP_API_URL}/image/${product.image}`}
                alt={product.image}
              />
            </figure>
          </div>
          <div className=" text-left flex flex-col justify-left items-left">
          <div className="flex justify-left" style={{ textTransform: "capitalize" }}> 
           <b>   Name:</b>
             </div>
             {product.name}
             
           

           
             <div className="flex justify-left " style={{ textTransform: "capitalize" }}> 
           <b> Description:
              </b>
              
              </div><div className="w-8/12">{product.description}</div>
         
          
          
               <div className="flex justify-left" style={{ textTransform: "capitalize" }}> 
           <b>  Gender:{" "}
            </b></div>
           {product.gender.genderName}
           
           <div className="flex justify-left" style={{ textTransform: "capitalize" }}> 
           <b>Kind: </b>
             {product.kind.kindName}</div>

             <div className="flex justify-left" style={{ textTransform: "capitalize" }}>  
             <b> Type:  </b>
          {product.type.typeName}</div>
           
            <div className="product__details__option font-semibold">
              <div className="product__details__option__color">
                <div className="flex flex-row justify-left ">
                
                  {product.productHasColors.map((c) => (
                    <div key={c.colors.colorId}>
                      <label
                        className="mx-2"
                        style={{ backgroundColor: c.colors.colorCode }}
                      >
                        {" "}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
              <button
              className="button is-small w-6/12 mt-4 bg-black text-white   is-pulled-right"
              onClick={() =>
                props.addToCart({
                  id: product.name,
                  product,
           
                })
              }
            >
              Add to Closet
            </button>
              
                { user && user.accessLevel<1 ? (

              <div className=" ">
            
                     <button
                  className="button is-small bg-red-600 ml-4 text-gray-400   
          is-pulled-right"
                  style={{ backgroundColor: "red", color: "white" }}
                  type="submit"
                  onClick={props.postDeleted}
                >
                  {" "}
                  Remove
                </button>
              <button
                  className="button is-small bg-green-600 ml-4 text-gray-400   
          is-pulled-right"
                  style={{ backgroundColor: "green", color: "white" }}
                  type="submit"
                  onClick={() => setIsIn(true)}
                >
                  {" "}
                  Edit
                </button> 
            
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
