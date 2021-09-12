import '../../HTMLcomponents/cssComponent/decorate.css';
import { Link } from 'react-router-dom';
import productImage from '../../HTMLcomponents/img/shop-details/product-big-2.png'   
import React, { Component } from "react";
import withContext from "../../withContext";
import { Redirect } from "react-router-dom";
import axios from 'axios';

const initState = {
    name: "",
    price: "",
    stock: "",
    shortDesc: "",
    description: ""
  };
  class AddProduct extends Component {
    constructor(props) {
      super(props);
      this.state = initState;
    }

    save = async (e) => {
        e.preventDefault();
        const { name, price, stock, shortDesc, description } = this.state;
    
        if (name && price) {
          const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    
          await axios.post(
            'http://localhost:3001/products',
            { id, name, price, stock, shortDesc, description },
          )
    
          this.props.context.addProduct(
            {
              name,
              price,
              shortDesc,
              description,
              stock: stock || 0
            },
            () => this.setState(initState)
          );
          this.setState(
            { flash: { status: 'is-success', msg: 'Product created successfully' }}
          );
    
        } else {
          this.setState(
            { flash: { status: 'is-danger', msg: 'Please enter name and price' }}
          );
        }
      };

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  
  render() {
    const { name, price, stock, shortDesc, description } = this.state;
    const { user } = this.props.context;

    return !(user && user.accessLevel < 1) ? (
      <Redirect to="/" />
    ) : (
    <form onSubmit={this.save}>
        <h1>เพิ่มสินค้า</h1>
    <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
        
        <div className="">
        <div className="m-4 h-full">
            {/* <div className="product__details__pic__item pl-48"> */}
            <div className="">
                {/* <img src={productImage}/> */}
            </div>
            <label class="text-left block font-semibold" >รูปภาพสินค้า: </label>
           {/*  <input type="file" class="w-1/2 md:w-80 mt-4 focus:outline-none"/> */}
        </div>
        </div>
        
        {/* <div className="product__details__text  pl-72 font-semibold"> */}
        <div className="text-left space-y-4">
           
            <div className="">
            {/* <div className="product__details__option text-left"> */}
            <span className="font-semibold" >ชื่อสินค้า: </span><br />
            <input className="border p-2 w-full h-10" type="text"  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required placeholder="ระบุชื่อสินค้า" />
            </div>
            
            <div className="">
            {/* <div className="product__details__option text-left"> */}
            <span className="font-semibold">รายละเอียดสินค้า: </span>
            <textarea type="text"
                  rows="2"
                  style={{ resize: "none" }}
                  name="description"
                  value={description}
                  onChange={this.handleChange} className="border p-2 w-full h-20" placeholder="ระบุรายละเอียดสินค้า" />
            </div>
            
            <div className="">
            {/* <div className="product__details__option text-left"> */}
            <span className="font-semibold">สไตล์: </span>
            <div className="space-x-4">
                <input type="radio" id="men" value="men" />
                <label>Men</label>
                <input type="radio" id="women" value="women" />
                <label>Women</label>
            </div>
            </div>
            
            <div className="">  
            {/* <div className="product__details__option text-left"> */}
            <span className="font-semibold">ชนิดสินค้า: </span>
            <div className="">
                <div className="space-x-4 ">
                <input type="radio" id="shirt" value="shirt" />
                <label>เสื้อ</label>
                </div>
                <div className="space-x-4 ">
                <input type="radio" id="pants" value="pants" />
                <label>กางเกง</label>
                </div>
                <div className="space-x-4 ">
                <input type="radio" id="skirt" value="skirt" />
                <label>กระโปรง</label>
                </div>
                <div className="space-x-4 ">
                <input type="radio" id="clothes" value="clothes" />
                <label>ชุด</label>
                </div>
            </div>            
            </div> 
            
            <div className="">
            {/* <div className="product__details__option text-left"> */}
            <label for="types" className="font-semibold ">ประเภทสินค้า:</label>
            <div className="">
            <select className="w-full h-10 border-2" name="types" id="types">
                <option value="">ผ้าไหมพื้นเรียบ</option>
                <option value="">ไหมลายไทย(ลายมัดหมี่)</option>
                <option value="">ไหมสามตะกร้า</option>
                <option value="">ผ้าฝ้ายพื้นเรียบ</option>
                <option value="">ฝ้ายมัดหมี่</option>
                <option value="">ฝ้ายย้อมสีธรรมชาติ</option>
                <option value="">ผ้าฝ้ายหมักโคลน</option>
            </select>
            </div>   
            </div>
           {/* 
            <div className="product__details__option font-semibold">
                <div className="product__details__option__color">
                    <span>Color:</span><br/>
                     <label className="c-1" >
                        <input type="radio" id="sp-1"/>
                      </label>
                      <label className="c-2" >
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
                        <label className="c-6" for="sp-7">
                        <input type="radio" id="sp-7"/>
                        </label>
                        <label className="c-7" for="sp-8">
                        <input type="radio" id="sp-8"/>
                        </label>       
                        <label className="c-8" for="sp-8">
                        <input type="radio" id="sp-8"/>
                        </label>  
                        <label className="c-9" for="sp-8">
                        <input type="radio" id="sp-8"/>
                        </label>  

                 </div>
            </div>
           */}
            {this.state.flash && (
                <div className={`notification ${this.state.flash.status}`}>
                  {this.state.flash.msg}
                </div>
              )}  
              <div className="field is-clearfix">
              <button
                className="button is-primary is-outlined is-pulled-right"
                type="submit"
                onClick={this.save}
              >
                Submit
              </button>
            </div>
            <div>
            {/* <Link to="/Shop" className="primary-btn m-4">เพิ่มสินค้า<span className="button mt-12"></span></Link> */}
            <Link to="/Shop" className="primary-btn flex justify-center">เพิ่มสินค้า</Link>
            </div>
        
        </div>
    </div>
    </form>
   );
}
}
export default withContext(AddProduct);