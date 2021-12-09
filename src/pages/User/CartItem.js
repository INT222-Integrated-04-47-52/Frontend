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
  // const handleColor = (ce) => {
  //   let getColor = [...product.productHasColors, parseInt(ce.target.value)];
  //   if (
  //     product.productHasColors.findIndex(
  //       (x) => x === parseInt(ce.target.value)
  //     ) !== -1
  //   ) {
  //     getColor = getColor.filter((x) => x !== parseInt(ce.target.value));
  //   }
  //   setColorInput({ productHasColors: getColor });
  //   console.log(product.productHasColors);
  // };

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
      console.log("Not pass"); // this.routerRef.current.history.push("/login");
      return;
    }

    // let user = localStorage.getItem("user");
    // user= JSON.parse(user);
    // var colorIds = colorSelect;
    // console.log(colorIds)
    // var colorObject = product.productHasColors.colors.map((im) =>
    // colorIds.find((cf) => cf === im.colorId)
    // );
    // var colorIds = product.productHasColors.map((g) => parseInt(g));
    // var colorObject = colorIds.map((im) =>
    //   this.state.colors.find((cf) => cf.colorId === im)
    // );
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
      product.productHasColors != null
    ) {
      //  let thisuser  ;
      // axios.get(
      //       `${process.env.REACT_APP_API_URL}/user/account/${this.state.user.accountId}`
      //       ,{ headers: {"Authorization" : `${this.state.user.token}`} }
      //     ).then((response) => {
      //       this.setState({ getUser: response.data });
      //      })

      // console.log("getUser")
      // console.log(thisuser)
      const a = getUser.data;
      const closet_Id = maxClosetId.data;
      // var colorIds = colorSelect.map((g) => parseInt(g));
      // var colorObject = 
      //  product.productHasColors.colors.map((c)=>
      //  this.state.colors.find((cf) => cf.colorId === im)
      //  if(c.colorId==color ){
      //   let colo
      //  } 
      // )
      // colorIds.map((im) =>
      //   product.productHasColors.colors.find((cf) => cf.colorId === im)
      // );

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
      formData.append("newCloset", blob);
      axios({
        url: `${process.env.REACT_APP_API_URL}/user/addCloset`,
        method: "POST",
        data: formData,
        headers: { Authorization: `${user.token}` },
      })
        .then((res) =>
        props.clearCart(cartKey),
        // alert("Order Product is successfully"),
        // window.location.reload()
        // console.log(res),
          showFlash({
            flash: {
              status: "is-success",
              msg: "Order product is successful",
            },
          })
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
      //  axios.post(`${process.env.REACT_APP_API_URL}/admin/addProduct/image`, { ...p },
      //       { headers: {"Authorization" : `${user.token}`} });
    } else {
    }
    // if (cart[p.name]) {
    //   axios.post(`${process.env.REACT_APP_API_URL}/allProducts/${p.id}`, { ...p },
    //   { headers: {"Authorization" : `${user.token}`} });
    // }
    // console.log(products)

    // product = { products };
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
    <div className=" column is-half h-auto">
      {/* <div>Size value: {numInput}</div> */}

      {/* <div className="box h-auto"> */}
      <div className="container w-full border-1 rounded-lg p-4 h-auto">
        <div className="container md:w-56 lg:flex">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                className="h-5/6"
                src={`${process.env.REACT_APP_API_URL}/image/${product.image}`}
                alt={product.image}
              />
              {/*   
              <img className="product__item__pic set-bg "  alt={product.image}/>
        */}
            </figure>
          </div>

          <div className="text-left mt-10">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              {/* <span className="tag is-primary bg-black"> <small className="bg-black">{`${amount} in closet`}</small></span> */}
            </b>
            <div>{product.description}</div>
            <div className="product__details__option font-semibold">
              {/* <div className="product__details__option__color">
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
                </div> */}

                <div className="product__details__option__color flex">
                <div className="mb-2">Choose 1 color</div>
      
                <div className="mb-4 grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-1">
                {/* <select
                        onChange={handleChange}
                        className="w-full h-10 border-2"
                        name="typeEnter"
                        value={color}
                      > */}
                  {product.productHasColors.map((c) => (
                    
                     <div className="">
                    <input  className="absolute mr-10 px-2 mt-2"
                              key={c.colors.colorId}
                              type="checkbox"
                              id={c.colors.colorId}
                              name="color"
                              value={c.colors.colorId}
                              checked={
                                // c.colors
                                 colorSelect == c.colors.colorId 
                              // product.productHasColors.indexOf(
                              //   c.colors.colorId
                              //   ) !== -1
                              }
                              onChange={handleChange}
                            />
                            {/* [selectColorId,setColorloop] = useState(""); */}
                      <label
                        className="mx-4 "
                        style={{ backgroundColor: c.colors.colorCode }}
                      >
                        {" "}
                      </label>
                       
                    </div>
                  ))}
                   {/* </select> */}
                </div>
                </div>

                <div className="flex items-center mb-2">
                  Shoulder:
                  <input
                    className="border mx-2 p-2 w-full h-7"
                    type="number"
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
