import React from "react";

const CartItem = props => {
  const { cartItem, cartKey } = props;
  const { product, size } = cartItem;



  return (
    <div className=" column is-half">
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
          <input
                  className="border p-2 w-full h-10"
                  type="text"
                  name="name"
                  value={size} required
                  placeholder="ระบุชื่อสินค้า"
                />
       </div>
      
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