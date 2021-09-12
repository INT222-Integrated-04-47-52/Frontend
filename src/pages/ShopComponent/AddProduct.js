import "../../HTMLcomponents/cssComponent/decorate.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import withContext from "../../withContext";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { NavItem } from "reactstrap";

const initState = {
  name: "",
  description: "",
  kind: "",
  type:"",
  color:[],
  gender:null,
  colors:[],
  types:[],
  kinds:[],
  genders:[]
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  async componentDidMount() {
    
    await axios.get('http://localhost:3001/genders').then(res=>
    {
      this.setState({ genders: res.data });
    });
    await axios.get('http://localhost:3001/kinds').then(res=>
    {
      this.setState({ kinds: res.data });
    });
    await axios.get('http://localhost:3001/types').then(res=>
    {
      this.setState({ types: res.data });
    });
    await axios.get('http://localhost:3001/colors').then(res=>
    {
      this.setState({ colors: res.data });
    });
    
}


  save = async (e) => {
    e.preventDefault();
    const { name, description, gender, 
      kind,type, color } = this.state;

    if (name) {
      const id =
        Math.random().toString(36).substring(2) + Date.now().toString(36);

      await axios.post("http://localhost:3001/products", {
        id,
        name,
        description,
        gender,
        kind,
        type,
        color
      });

      this.props.context.addProduct(
        {
          name,
          description,
          gender,
          kind,
          type,
          color
        },
        () => this.setState(initState)
      );
      this.setState({
        flash: { status: "is-success", msg: "Product created successfully" },
      });
    } else {
      this.setState({
        flash: { status: "is-danger", msg: "Please enter name" },
      });
    }
  };

  handleChange = (e) =>
  { this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value)}
    
  render() {
    const { name, description, gender ,kind,type, color } = this.state;
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
              <div className="">{/* <img src={productImage}/> */}</div>
              <label class="text-left block font-semibold">
                รูปภาพสินค้า:{" "}
              </label>
  
             <input type="file" class="w-1/2 md:w-80 mt-4 focus:outline-none" id="image" onChange={this.handleChange} multiple />
            </div>
          </div>
        

          {/* <div className="product__details__text  pl-72 font-semibold"> */}
          <div className="text-left space-y-4">
            <div className="">
              {/* <div className="product__details__option text-left"> */}
              <span className="font-semibold">ชื่อสินค้า: </span>
              <br />
            
              <input
                className="border p-2 w-full h-10"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
                placeholder="ระบุชื่อสินค้า"
              />
            </div>

            <div className="">
              {/* <div className="product__details__option text-left"> */}
              <span className="font-semibold">รายละเอียดสินค้า: </span>
              <textarea
                type="text"
                rows="2"
                style={{ resize: "none" }}
                name="description"
                value={description}
                onChange={this.handleChange}
                className="border p-2 w-full h-20"
                placeholder="ระบุรายละเอียดสินค้า"
              />
            </div>

            <div className="">
              {/* <div className="product__details__option text-left"> */}
              <span className="font-semibold">สไตล์: </span>
              <div className=" ">
                {this.state.genders.map((g) =><div className="mx-2">
                <input
                key={g}
                type="radio"
                id="gender"
                name="gender"
                value={gender}
                onChange={this.handleChange}/>{g.name}
                </div>
                     
                )}
            
           
                </div>
               
            </div>

            <div className="">
              {/* <div className="product__details__option text-left"> */}
              <span className="font-semibold">ชนิดสินค้า: </span>
              <div className="">
                <div className=" ">
                {this.state.kinds.map(k =><div className="mx-2">
                <input
                type="radio"
                id="kind"
                value={k.name}
                name="kind"
                onChange={this.handleChange}/>{k.name}</div>)}
                </div>
              </div>
            </div>

            <div className="">
              {/* <div className="product__details__option text-left"> */}
              <label for="type" className="font-semibold ">
                ประเภทสินค้า:
              </label>
              <div className="">
              <select  onChange={this.handleChange}
                  className="w-full h-10 border-2"
                  name="type"
                  id="type" value={type}>
                    {this.state.types.map(t =><option value={t.name}>{t.name}</option>)}
                  </select> 
               <div>{type}</div>
              
              </div>
            </div>

            <div className="product__details__option font-semibold">
              <div className="product__details__option__color">
                <span>Color:</span>
                <br />
                <div className=" " >
                  {/*className={{'border-red-600': this.state.colors.map(c => c.id).includes(color.id)}} */}
                {this.state.colors.map(c =>
               
                <label className="mx-2"  style={{backgroundColor : c.codeName}}
               >
                       {/*  style={{backgroundColor : c.codeName, border: "solid red"
                       }}*/}
                  
                   {/* border: this.state.colors.map(c => c.id).includes(color.id)?"solid red": "" */}
                <input
                type="radio" 
                id="color" 
                name="color"
                value={c} onChange={this.handleChange}/></label>
               )}
                </div>
                    {/*  {this.state.colors.map(color => color.id).includes(color.id)} 
              */}
              </div>
            </div>

            {this.state.flash && (
              <div className={`notification ${this.state.flash.status}`}>
                {this.state.flash.msg}
              </div>
            )}
            <div className="field is-clearfix">
              <Link to="/Shop">
                {" "}
                <button
                  className="primary-btn flex justify-center"
                  type="submit"
                  onClick={this.save}
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default withContext(AddProduct);
