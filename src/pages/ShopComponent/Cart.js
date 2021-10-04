
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
                <button
                  className="button is-success"
                  onClick={props.context.checkout}
                >
                  Checkout
                </button>
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