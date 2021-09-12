import "../../HTMLcomponents/cssComponent/decorate.css";
import { Link } from "react-router-dom";
import productImage from "../../HTMLcomponents/img/product/product-1.jpg";
import { stockData } from "../../data";
export const Categories = () => {
  return (
    <div> {stockData.map((data, key) => {
        return (
            <div key={key}>
        <div className="col-lg-9">
                    <div className="row">
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                            <img className="product__item__pic set-bg" src={productImage} alt="productimage"/>                        
                                <div className="product__item__text">
                                    <h6>{data.company}</h6>
                                    <Link to="/Tailor">สั่งตัด</Link>
                                     <div className="product__color__select">
                                        <label for="pc-4">
                                            <input type="radio" id="pc-4"/>
                                        </label>
                                        <label className="" for="pc-5">
                                            <input type="radio" id="pc-5"/>
                                        </label>
                                        <label className="grey" for="pc-6">
                                            <input type="radio" id="pc-6"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
                </div>
   );
})}
    </div>
  );
};
export default Categories;
