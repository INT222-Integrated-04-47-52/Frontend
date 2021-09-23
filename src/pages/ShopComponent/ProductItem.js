import React from "react";
import image1 from "../../HTMLcomponents/img/productImage/19219152_1314937408575879_5257165121356038144_n.jpg"
const ProductItem = props => {
  const { product } = props;
{/*}
function deleter(item){
    const data = product.filter(i => i.id !== item.id)
    this.setState({data})
  }
*/}
  return (    
  <div className=" column is-half">
  <div className="box">
    <div className="media">
      <div className="media-left">
        <figure className="image w-36">
        <img className="product__item__pic set-bg " src={image1}  alt={product.name}
          />
        </figure>
      </div>
      <div className="media-content  flex flex-col justify-start items-start">
        <div className="justify-left items-start"><b style={{ textTransform: "capitalize" }}>
         Name:  {product.name}{" "} 
          
        </b></div>
        <div>Description:  {product.description}</div>
        <div>Gender: {product.gender.name}</div>
        <div>Kind: {product.kind.name}</div>   
        <div>Type: {product.type.name}</div>
        <div className="product__details__option font-semibold">
         <div className="product__details__option__color">
        <div className="flex flex-row justify-left ">
          {product.color.map(c =>
         <div key={c.id}>
         <label className="mx-2"  style={{backgroundColor : c.codeName}}> </label>
          </div>
       )}
       </div>
      
       </div>
       </div>
        {/*  style={{backgroundColor : c.codeName, border: "solid red"
                       }}*/}   {/* border: this.state.colors.map(c => c.id).includes(color.id)?"solid red": "" */}
                 
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
                amount: 1
              })
            }
          >
            Add to Cart
          </button>
          <button className="button is-small bg-red-600 ml-4 text-black   
          is-pulled-right" type="button"  >
         {/*} onClick={() => handleRemove(product.id)}
         onClick={this.deleter.bind(this, product)}*/}
        
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ProductItem;