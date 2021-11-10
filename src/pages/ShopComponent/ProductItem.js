import React,{useState,useEffect} from "react";
export default function ProductItem(props){
  const { product } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    const userLocal = localStorage.getItem("user");
    setUser(userLocal);
    console.log(user);
  });

  return (
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
          <div className="media-content text-left flex flex-col justify-start items-start">
            <div className="justify-left items-start ">
              <b style={{ textTransform: "capitalize" }}>
                Name: {product.name}
              </b>
            </div>
            <div className="text-left">Description: {product.description}</div>
            <div>Gender: {product.gender.genderName}</div>
            <div>Kind: {product.kind.kindName}</div>
            <div>Type: {product.type.typeName}</div>
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
          
          {user  ? (     
          <div className="is-clearfix flex bl-12 justify-center mt-20">
              <button
                className="button is-small bg-black text-white   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1,
                  })
                }
              >
                Add to Closet
              </button>
              <button
                className="button is-small bg-red-600 ml-4 text-gray-400   
          is-pulled-right"
                type="submit"  onClick={props.postDeleted}
              >
                {" "}
                Remove
              </button>
            </div>
          ) :(<div></div>)
         }  
          </div>
        </div>
      </div>
    </div>
  );
};