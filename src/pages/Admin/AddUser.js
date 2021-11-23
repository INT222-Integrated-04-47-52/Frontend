// import { Link } from "react-router-dom";
import React, { Component } from "react";
import withContext from "./withContext";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {useHistory} from "react-router-dom";
const initState = {
  fname: "",
  lname:"",
  phone:"",
  email:"",
  password:""
};

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  componentDidMount() {
  //http://13.76.45.147:5000/
  //`${process.env.REACT_APP_API_URL}/allKinds`

    axios.get(`${process.env.REACT_APP_API_URL}/allGenders`).then((res) => {
      this.setState({ genders: res.data });
    });
   
  }

  save = async (e) => {
    e.preventDefault();

    const userId = await axios.get(
      `${process.env.REACT_APP_API_URL}/max-accountId`
    );


    const {fname,lname,phone,email,password } = this.state;

   if (fname&&lname&&phone&&email&&password
    //  fname
     ) {
      // const id = userId.data + 1;

      // let imgName = this.state.imageName;
      // console.log(imgName);
      // console.log("gender")
      // console.log(genderObject)
      // console.log(gender)
      // console.log("kind")
      // console.log(kindObject)
      // console.log(kind)
      // console.log("type")
      // console.log(typeObject)
      // console.log(type)
const id = userId.data + 1;
      let userJson ={ 
        accountId: id,
        fname: fname,
        lname: lname,
        phone: phone,
        email:email,
        password:password
      }
   
   
     console.log(userJson)
    //   console.log(file)
      let formData = new FormData();
      var blob = new Blob([JSON.stringify(userJson)],{
        type: "application/json",
      });
      // console.log(userJson);
        formData.append("newAccount",blob);
    /* url: `${process.env.REACT_APP_API_URL}/addUser/image`, */
    // {`http://13.76.45.147:5000/image/${user.image}`}
    //http://13.76.45.147:5000/
        axios({ 
        url: `${process.env.REACT_APP_API_URL}/addAccount`,
        method: "POST",
        data: formData
        
      }).then(res=>this.props.history.replace("/Admin"))
       .catch(err=>err)
     
console.log(formData)
// for (var value of formData.values()) {
//   console.log(value); 
// }
      // this.props.context.addUser(
      //   { 
      //     id,
      //     fname,
      //     lname,
      //     phone,
      //     email,
      //     password,
      //   },
      //   () => this.setState(initState)
      // );
      this.setState({
      
        flash: { status: "is-success", msg: "user created successfully" },
        
      });
    } else {
      this.setState({
        flash: { status: "is-danger", msg: "Please enter all required information" },
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { fname,lname,phone,email,password} = this.state;
    const { user } = this.props.context;

    return (
   /*!(user && user.accessLevel < 1) ? (*/
    //   <Redirect to="/" />
    // ) : (
      <div className="mx-5">
      <form onSubmit={this.save}>
      {/* <div style={{paddingLeft:"32px"}} className="text-left  font-black  text-5xl">
                            <h1 className="font-bold mt-4 ml-28">Add user</h1>
                           </div> */}
 <div className="contact__text -mt-24">
                        <div style={{paddingLeft:"32px",paddingTop:"40px"}} className="section-title">
                            <h2 className="pt-24 pl-24 m-1.5">Add user</h2>
                            <p className="pl-24 m-1.5">เพิ่มรายการสินค้า</p>
                        </div>
                        </div>
        <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="">
            <div className="m-4 h-full">
              {/* <div className="user__details__pic__item pl-48"> */}
              <div className="">{/* <img src={userImage}/> */}</div>
            

           
            </div>
          </div>

          {/* <div className="user__details__text  pl-72 font-semibold"> */}
          <div className="text-left space-y-4">
            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <span className="font-semibold">ชื่อจริง: </span>
              <br />

              <input
                className="border p-2 w-full h-10"
                type="text"
                name="fname"
                value={fname}
                onChange={this.handleChange}
                required
                placeholder="ระบุชื่อจริง"
              />
            </div>

            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <span className="font-semibold">นามสกุล: </span>
              <input
                className="border p-2 w-full h-10"
                type="text"
                name="lname"
                value={lname}
                onChange={this.handleChange}
                required
                placeholder="ระบุนามสกุล"
              />
            </div>

            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <span className="font-semibold">เบอร์โทรศัพท์: </span>
              <div className=" ">
              <input
                className="border p-2 w-full h-10"
                type="text"
                name="phone"
                value={phone}
                onChange={this.handleChange}
                required
                placeholder="ระบุเบอร์โทรศัพท์"
              />
              </div>
            </div>

            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <span className="font-semibold">อีเมลล์: </span>
              <div className="">
              <input
                className="border p-2 w-full h-10"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
                placeholder="ระบุอีเมลล์"
              />
              </div>
            </div>

            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <label htmlFor="type" className="font-semibold ">
                รหัสผ่าน:
              </label>
              <input
                className="border p-2 w-full h-10"
                type="text"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
                placeholder="ระบุรหัสผ่าน"
              />
            </div>

          

            {this.state.flash && (
              <div className={`notification ${this.state.flash.status}`}>
                {this.state.flash.msg}
              </div>
            )}
            <div className="field is-clearfix">
              {/* <Link to="/Shop">  */}{" "}
              <button
                className="primary-btn flex my-4 mx-auto justify-center"
                type="submit"
                onClick={this.save}
              >
                Submit
              </button>
              {/* </Link>  */}
            </div>
          </div>
        </div>
      </form>
      </div>
    )
  }
}
export default withContext(AddUser);