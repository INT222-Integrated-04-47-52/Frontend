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
  useEffect(() => {
    // Update the document title using the browser API
    const userLocal = localStorage.getItem("user");
    const user = JSON.parse(userLocal);
    setUser(user);

    // console.log("user")
    // console.log(userLocal);
    // console.log(user.accessLevel)
  }, []);

  return (
    <>
      {isInput && (
        <EditProduct product={product} close={() => setIsIn(false)} />
      )}

      <div class="flex flex-col ">
        <div class="bg-gray-50 p-4">
          <div class="flex-none lg:flex">
            <div class="flex justify-center h-full w-full lg:h-60 lg:w-48 md:h-56 lg:mb-0 mb-3 ">
              <img
                src={`${process.env.REACT_APP_API_URL}/image/${product.image}`}
                alt={product.image}
                className=" w-full  object-scale-down lg:object-cover lg:h-60 md:h-56"
              />
            </div>
            <div class="flex-auto ml-3 justify-evenly py-2 text-left">
              <div class="flex flex-wrap ">
                <h2 class="text-blue font-bold flex-auto text-xl font-semibold">
                  {" "}
                  {product.name}
                </h2>
              </div>
              <div className="flex text-left w-10/12">
                <h4 class="w-full flex-none text-sm font-medium text-gray-500 mt-2 ">
                  {product.description}
                </h4>{" "}
              </div>

              <div className="lg:flex lg:space-x-4 py-4  text-sm text-black">

                <div className="flex inline-flex items-center">
                  <b className="mr-2"> Gender: </b> {product.gender.genderName}
                </div>

                <div className="flex items-center lg:inline-flex">{" "}
                  <b className="mr-2"> Kind: </b>{product.kind.kindName}
                </div>

                <div className="flex items-center lg:inline-flex">{" "}
                  <b className="mr-2"> Type: </b>{product.type.typeName}
                </div>

              </div>

              <div className="-mt-2 product__details__option ">
                <div className="product__details__option__color">
                  <div className="flex">
                    <p className="mr-2 font-black"> Color: </p>{" "}
                    <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3">
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
              </div>
              <div class="flex p-4 pb-2 border-t border-gray-200 mt-4"></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3">
                  {user && user.accessLevel < 1 ? (
                    <div className="">
                      <button
                        className="transition font-medium delay-150 duration-300 ease-in-out w-20 mb-2 border md:mb-0 bg-red-400  py-2 tracking-wider text-black hover:bg-red-200"
                        type="submit"
                        onClick={props.postDeleted}>{" "}
                        Remove
                      </button>
                      <button
                        className="transition font-medium delay-150 duration-300 ease-in-out w-20 mb-2 lg:ml-2 md:mb-0 bg-gray-200 border py-2 tracking-wider text-black hover:bg-gray-50"
                        type="submit"
                        onClick={() => setIsIn(true)}>{" "}
                        Edit
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                {user && user.accessLevel == 1 ? (
                <button
                  class="transition delay-150 duration-300 ease-in-out mb-2 md:mb-0 bg-gray-900 px-5 py-2 tracking-wider border text-white hover:opacity-75"
                  type="button"
                  aria-label="like"
                  onClick={() =>
                    props.addToCart({
                      id: product.name,
                      product,
                    })
                  }
                >
                  + Add to Closet
                </button>
    ) : (
      <div></div>
    )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
