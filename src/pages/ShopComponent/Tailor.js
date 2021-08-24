import '../../components/cssComponent/decorate.css';
import {Link } from 'react-router-dom';
import productImage from '../../components/img/shop-details/product-big-2.png'   
function Tailor(){
    return( 
        <div className="flex  px-72 place-items-center">
         <div className="">
                    <div className="row">
       
                <div className="product__details__pic__item pl-48 ">
                    <img  src={productImage}/>
                </div>

            </div>
        </div>
        
        <div className="product__details__text  pl-72 font-semibold">
        <div className="product__details__option text-left">
            <span >ชื่อสินค้า: </span>
            <input className="border p-2 ml-6  w-9/12" type="text" placeholder="ชื่อสินค้า" />
            </div>
            <div className="product__details__option text-left">
            <span >รายละเอียดสินค้า: </span>
            <textarea className="border p-2 w-full"  cols="30" rows="3" placeholder="ชื่อสินค้า" />
            </div>
            <div className="product__details__option text-left">
            <span >สไตล์: </span>
            <input className="border p-2 ml-12  w-9/12" type="text" placeholder="ชื่อสินค้า" />
            </div>
            <div className="product__details__option text-left">
              
            <span >ชนิดสินค้า: </span>
            <input className="border p-2 ml-4  w-9/12" type="text" placeholder="ชื่อสินค้า" />
            </div> 
            <div className="product__details__option text-left">
            <span >ประเภทสินค้า: </span>
            </div>
            <div className="product__details__option -ml-10 ">
                <div className="product__details__option__color">
                    <span>Color:</span>
                     <label className="c-1" for="sp-1">
                        <input type="radio" id="sp-1"/>
                      </label>
                      <label className="c-2" for="sp-2">
                         <input type="radio" id="sp-2"/>
                       </label>
                       <label className="c-3" for="sp-3">
                        <input type="radio" id="sp-3"/>
                        </label>
                        <label className="c-4" for="sp-4">
                        <input type="radio" id="sp-4"/>
                        </label>
                         <label className="c-5" for="sp-5">
                        <input type="radio" id="sp-5"/>
                        </label>
                        <label className="c-7" for="sp-7">
                        <input type="radio" id="sp-7"/>
                        </label>
                        <label className="c-8" for="sp-8">
                        <input type="radio" id="sp-8"/>
                        </label>
                        
                 </div>
            </div>
            <Link to="/Shop" className="primary-btn m-4">ยืนยันการสั่งตัด<span className="button mt-12"></span></Link>
        </div>
        </div>
   
      );
}
export default Tailor;
