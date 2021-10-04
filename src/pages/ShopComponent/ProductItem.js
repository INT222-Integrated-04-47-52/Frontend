// import axios from "axios";
import React from "react";
// import image1 from "../../HTMLcomponents/img/productImage/19219152_1314937408575879_5257165121356038144_n.jpg"
export default function ProductItem(props){
  const { product } = props;
  console.log(product);
  
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image w-36">
              <img
                className="product__item__pic set-bg "
                src={`http://13.76.45.147:5000/image/${product.image}`}
                alt={product.image}
              />
            </figure>
          </div>
          <div className="media-content  flex flex-col justify-start items-start">
            <div className="justify-left items-start">
              <b style={{ textTransform: "capitalize" }}>
                Name: {product.name}{" "}
              </b>
            </div>
            <div>Description: {product.description}</div>
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
            {/*  style={{backgroundColor : c.codeName, border: "solid red"
                       }}*/}{" "}
            {/* border: this.state.colors.map(c => c.id).includes(color.id)?"solid red": "" */}
            {/*     
         <div className=" " >
             {this.state.colors.map(c =>
                <label className="mx-2"  style={{backgroundColor : c.codeName}}> 
                <input key={c.id}
                type="checkbox"  
                id={c.id}
                name="colorEnter"
                value={c.id} onChange={this.handleColor}/>
                </label>
                )}
             </div> 
             */}
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
                className="button is-small bg-red-600 ml-4 text-black   
          is-pulled-right"
                type="submit"  onClick={props.postDeleted}
              >
                {" "}
                Remove
              </button>
              {/* {e => this.removeProduct(e, product)} */}
              {/*} onClick={() => handleRemove(product.id) onClick={() => props.onRemove(product.id)}}
         onClick={this.deleter.bind(this, product)}*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



// var deleteProduct = async (pid) => {
//   try {
//     await fetch(
//       `${process.env.REACT_APP_API_URL}/delete` + pid /*"http://localhost:6001/"+"delete/"+productId*/,
//       {
//         method: "DELETE",
//       }
//     );
//     this.icecreams = this.icecreams.filter((i) => product.productId !== pid);
//     /*  this.icecreams = this.icecreams.filter(icecream => {
//       console.log("ending");

//     })*/
//   } catch (error) {
//     console.log(error);
//   }
// }

/* uploadImg(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    this.image = { url: "" };
    reader.onload = (e) => {
      this.image.url = e.target.result;
    };
    reader.readAsDataURL(file);
    this.imageFile = file;
    this.image.name = file.name;
  }*/
/*var handleRemove = product => {
    const url = `http://localhost:3001/products/${product.id}`;

    axios.delete(product.id)
      .then(res => {
        this.setState(previousState => {
          return {
            products: previousState.products.filter(p => p.id !== product.id)
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

 var removeProduct = (e, product) => {
    e.preventDefault();

    if (this.props.removeClick) {
      this.removeClick(product);
    }
  };

  
  // ...

{/*}
function deleter(item){
    const data = product.filter(i => i.id !== item.id)
    this.setState({data})
  }
  delete = async (pid) => {
	pid.preventDefault();
	axios.delete(`${process.env.REACT_APP_API_URL}/delete` + pid)
	.then(res => console.log(res.data));
}
*/
