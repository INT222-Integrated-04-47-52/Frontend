import React, { useState } from "react";
import axios from "axios";
const CartItem = (props) => {
  const { cartItem, cartKey } = props;
  const { product } = cartItem;

  let [shoulderInput, setShoulderInput] = useState("");
  let [bustInput, setBustInput] = useState("");
  let [waistInput, setWaistInput] = useState("");
  let [hipsInput, setHipsInput] = useState("");
  let [dateInput, setDateInput] = useState("");

  let [colorInput, setColorInput] = useState([]);
  let [flash, showFlash] = useState({});
  let [cart, setCartClear] = useState({});
  let [selectColorId,setColorloop] = useState("");
  let [colorSelect, setColorselect] = useState({});
  const onChangeShoulder = (event) => {
    setShoulderInput(event.target.value);

    console.log(event.target.value);
  };
  const onChangeBust = (event) => {
    setBustInput(event.target.value);

    console.log(event.target.value);
  };
  const onChangeWaist = (event) => {
    setWaistInput(event.target.value);
    console.log(event.target.value);
  };
  const onChangeHips = (event) => {
    setHipsInput(event.target.value);
    console.log(event.target.value);
  };
  const onChangeDate = (event) => {
    setDateInput(event.target.value);
    console.log(event.target.value);
  };
  const handleChange = (event) => {
    setColorselect(event.target.value);
    console.log(event.target.value);
    console.log("colorHandle")
    console.log(colorSelect)
  };
  const checkout = async () => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    console.log(user);
    const getUser = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/account/${user.accountId}`,
      { headers: { Authorization: `${user.token}` } }
    );
    const maxClosetId = await axios.get(
      `${process.env.REACT_APP_API_URL}/max-closetId`,
      { headers: { Authorization: `${user.token}` } }
    );
    
    if (user.accessLevel != 1 && !user.accessLevel != 0) {
      console.log("Not pass"); 
      return;
    }

    var colorObject = product.productHasColors.find(
      (c) => c.colors.colorId === parseInt(colorSelect)
    );
    console.log(colorObject)
    if (
      product.name != null &&
      product.description != null &&
      product.kind != null &&
      product.gender != null &&
      product.type != null &&
      colorObject!=null
    ) {
      
      const a = getUser.data;
      const closet_Id = maxClosetId.data;
     

      let productJson = {
        closetId: closet_Id + 1,
        account: {
          accountId: a.accountId,
          fname: a.fname,
          lname: a.lname,
          phone: a.phone,
          email: a.email,
          role: a.role,
        },
        product: {
          productId: product.productId,
          name: product.name,
          image: product.image,
          description: product.description,
          kind: product.kind,
          gender: product.gender,
          type: product.type,
          productHasColors: product.productHasColors,
        },
        color: colorObject.colors,
        size: [
          {
            sizeId: 700001,
            sizeName: "Shoulder",
            proportion: shoulderInput,
          },
          {
            sizeId: 700002,
            sizeName: "Bust",
            proportion: bustInput,
          },
          {
            sizeId: 700003,
            sizeName: "Waist",
            proportion: waistInput,
          },
          {
            sizeId: 700004,
            sizeName: "Hips",
            proportion: hipsInput,
          },
        ],
        pickUpDate: dateInput,
      };

      let formData = new FormData();
      var blob = new Blob([JSON.stringify(productJson)], {
        type: "application/json",
      });
      console.log("productJson");
      console.log(productJson);
      formData.append("newCloset",blob);
      axios({
        url: `${process.env.REACT_APP_API_URL}/user/addCloset`,
        method: "POST",
        data: formData,
        headers: { Authorization: `${user.token}` },
      })
        .then((res) =>{  
          alert("Order Product is successfully")
          showFlash({
            flash: {
              status: "is-success",
              msg: "Order product is successful",
            },
          })
          
          let cart = {};
          localStorage.removeItem("cart");
          window.location.reload()
          
        }
      
         
        )
        .catch((err) =>
        showFlash({
          flash: {
            status: "is-danger",
            msg: "Please enter all required information",
          },
        })
         
        );
      
      return product;
     
    } else {
      showFlash({
        flash: {
          status: "is-danger",
          msg: "Please enter all required information",
        },
      })

    }
    
  };
 

  return (
    <div className=" column is-half h-auto">
     
      <div className="container w-full border-1 rounded-lg p-4 h-auto">
        <div className="container md:w-56 lg:flex">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                className="h-5/6"
                src={`${process.env.REACT_APP_API_URL}/image/${product.image}`}
                alt={product.image}
              />
              
            </figure>
          </div>

          <div className="text-left mt-10">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              
            </b>
            <div>{product.description}</div>
            <div className="product__details__option font-semibold">
              

                <div className="product__details__option__color flex">
                <div className="mb-2">Choose 1 color</div>
      
                <div className="mb-4 grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-1">
                
                  {product.productHasColors.map((c) => (
                    
                     <div className="">
                    <input  className="absolute mr-10 px-2 mt-2"
                              key={c.colors.colorId}
                              type="checkbox"
                              id={c.colors.colorId}
                              name="color"
                              value={c.colors.colorId}
                              checked={
                                
                                 colorSelect == c.colors.colorId 
                              }
                              onChange={handleChange}
                            />
                          
                      <label
                        className="mx-4 "
                        style={{ backgroundColor: c.colors.colorCode }}
                      >
                        {" "}
                      </label>
                       
                    </div>
                  ))}
                  
                </div>
                </div>

                <div className="flex items-center mb-2">
                  Shoulder:
                  <input
                    className="border mx-2 p-2 w-full h-7"
                    type="number"
                    min="0"
                    value={shoulderInput}
                    onChange={onChangeShoulder}
                  />
                  inch.
                </div>
                <div className="flex items-center mb-2">
                  Bust:
                  <input
                    className="border mx-2 p-2 w-full h-7"
                    type="number"
                    min="0"
                    value={bustInput}
                    onChange={onChangeBust}
                  />
                  inch.
                </div>
                <div className="flex items-center mb-2">
                  Waist:
                  <input
                    className="border mx-2 p-2 w-full h-7"
                    type="number"
                    min="0"
                    value={waistInput}
                    onChange={onChangeWaist}
                  />
                  inch.
                </div>
                <div className="flex items-center mb-2">
                  Hips:
                  <input
                    className="border mx-2 p-2 w-full h-7"
                    type="number"
                    min="0"
                    value={hipsInput}
                    onChange={onChangeHips}
                  />
                  inch.
                </div>

                <div className="flex items-center mb-2">
                  Pick-Up date: {dateInput}
                <input
                  type="date"
                  className="border mx-2 p-2 w-44 h-7"
                  value={dateInput}
                  onChange={onChangeDate}
                />
                </div>
                <div>
                <p>*กรุณาเลือกวันรับสินค้ามากกว่า 15 วันนับจากวันที่สั่งตัด</p>
                </div>
                
                <div className="flex justify-center">
                <button className="button is-success mt-5 mb-2" onClick={() => checkout()}>Checkout</button>
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
      
      <div className="md:col-span-5 font-semibold">
  
  {flash.flash && (
    <div class={`notification ${flash.flash.status}`}>{flash.flash.msg}</div>
  )}
</div>
      
    </div>
  );
};

export default CartItem;
