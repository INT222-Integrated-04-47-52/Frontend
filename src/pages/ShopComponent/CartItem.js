import React from "react";

const CartItem = props => {
  const { cartItem, cartKey } = props;
  const { product, amount } = cartItem;
  return (
    <div className=" column is-half">
      <div className="box h-48">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img className="h-5/6"
                 src={`http://13.76.45.147:5000/image/${product.image}`}
                alt={product.image}
              />
              {/*   <img className="product__item__pic set-bg "  alt={product.image}/>
        */}
            </figure>
          </div>
          <div className="media-content ">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary bg-black"> <small className="bg-black">{`${amount} in cart`}</small></span>
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