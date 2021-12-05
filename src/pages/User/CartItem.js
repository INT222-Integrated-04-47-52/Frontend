import React , { useState} from "react";

const CartItem = props => {
  const { cartItem, cartKey } = props;
  const { product } = cartItem;

  let [numInput, setNumInput] = useState('');
  let [dateInput, setDateInput] = useState('');
 
  const onChangeInt = (event) => {
    
    setNumInput(event.target.value);
    console.log(event.target.value)
  };

  const onChangeDate = (event) => {
    setDateInput(event.target.value);
    console.log(event.target.value)
  };
// const productJSON = {
//   productId: product.productId,
//   name: product.name,
//   image: product.image,
//   description: product.description,
//   kind: product.kind,
//   gender: product.gender,
//   type: product.type,
//   productHasColors: product.productHasColors,

// }

  return (
    <div className=" column is-half">
               {/* <div>Size value: {numInput}</div> */}
 
      <div className="box h-48">
        <div className="media">
   
          <div className="media-left">
            <figure className="image is-64x64">
              <img className="h-5/6"
                 src={`${process.env.REACT_APP_API_URL}/image/${product.image}`}
                alt={product.image}
              />
              {/*   <img className="product__item__pic set-bg "  alt={product.image}/>
        */}
            </figure>
          </div>
          
          <div className="media-content ">
            
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              {/* <span className="tag is-primary bg-black"> <small className="bg-black">{`${amount} in closet`}</small></span> */}
            </b>
            <div>{product.description}</div>
            <div className="product__details__option font-semibold">
         <div className="product__details__option__color">
         <div className="flex flex-row justify-left ">
          {product.productHasColors.map(c =>
         <div key={c.colors.colorId}>
         <label className="mx-2"  style={{backgroundColor : c.colors.colorCode}}> </label>
          </div>
       )}
          {/* <input
                  className="border p-2 w-full h-10"
                  type="text"
                  name="name"
               
                  value={size} required
                  placeholder="ระบุชื่อสินค้า"
                /> */}
              
       </div>

{/* <input  className="border p-2 w-full h-10" type="number" value={numInput} onChange={onChangeInt} />
<div>Date value: {dateInput}</div>
  <input  type="date" className="border p-2 w-full h-10" value={dateInput} onChange={onChangeDate} /> */}

       </div>
       </div>
          </div>
          <div
            className="media-right"
            onClick={() => props.removeFromCart(cartKey)}
          >
            <span className="delete is-large"></span>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default CartItem;
