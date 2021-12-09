import React from "react";
import withContext from "../../withContext";
import CartItem from "./CartItem";

const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <div>
      <div className="container">
       <div className="contact__text ">
                        <div className="section-title">
                            <h2 >Closet</h2>
                            <p >ตู้เสื้อผ้าสินค้า</p>
                        </div>
                        </div>
     
      
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