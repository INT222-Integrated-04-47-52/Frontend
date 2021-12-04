import "../../HTMLcomponents/cssComponent/decorate.css";
// import { Link } from "react-router-dom";
import React, { Component,useState, useCallback  } from "react";
import withContext from "../../withContext";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Drawer from 'react-drag-drawer';

const initState = {
  accountId: null,
  fname: "",
  lname: "",
  phone: "",
  email: "",
  position: [],
  roleEnter: "",
  password:""
};


class EditAccount extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  componentDidMount() {
    //http://13.76.45.147:5000/
    //`${process.env.REACT_APP_API_URL}/allKinds`

    this.setState({
      accountId: this.props.person.accountId,
      fname: this.props.person.fname,
      lname: this.props.person.lname,
      phone: this.props.person.phone,
      email: this.props.person.email,
      roleEnter: this.props.person.role,
      
    });
    console.log("accountThatClick");
    console.log(this.props.person.accountId);
    console.log(this.props.person.fname);
    console.log(this.props.person.lname);
    console.log(this.props.person.phone);
    console.log(this.props.person.email);
    console.log(this.props.person.role);
    console.log("role")
   
  }

  save = async (e) => {
    e.preventDefault();
    let user = localStorage.getItem("user");
    user= JSON.parse(user);
    const accId = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/account/${this.state.accountId}`  
      ,{ headers: {"Authorization" : `${user.token}`} }
    );
    console.log(accId);


    const { fname,lname,phone,email,role,password } = this.state;


    if (this.state.accountId) {
      const id = this.state.accountId;
      // const id = accountId.data;
    console.log("role"+role)
    console.log("password" + password)
      let accountJson = {
        accountId: id,
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        password:password,
        role: this.state.roleEnter
      };
      console.log("accountJson");
      console.log(accountJson);
console.log(this.state.roleEnter)
      let formData = new FormData();
      var blob = new Blob([JSON.stringify(accountJson)], {
        type: "application/json",
      });
      console.log(accountJson);

      formData.append("requestAccount", blob);
      let user = localStorage.getItem("user");
      user= JSON.parse(user);
      axios({
        url: `${process.env.REACT_APP_API_URL}/user/editAccount`,
        headers: {"Authorization" : `${user.token}`} ,
        method: "PUT",
        data: formData,

      })
        .then((res) => {
          if (res.data.status === 200) {
            this.props.history.replace("/Account");
          } else {
          }
        })
        .catch((err) => err);
      console.log("formData");
      console.log(formData);

      this.setState({
        flash: { status: "is-success", msg: "Product created successfully" },
      });
    } else {
      this.setState({
        flash: {
          status: "is-danger",
          msg: "Please enter all required information",
        },
      });
    }
  };



  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("etargetr")
    console.log(e.target.value);
    console.log(this.state.role)
  };
  
  
  render() {
    const { fname, lname, phone, email,role,password } = this.state;
    const { person } = this.props.context;

    return (
      /*!(user && user.accessLevel < 1) ? (*/
      //   <Redirect to="/" />
      // ) : (
  
      
      <div
        className="bg-black bg-opacity-50 "
        style={{
          position: "absolute",
          zIndex: "5",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="bg-white h-1/12" style={{ opacity: "1" }}>
          <div className="mx-5">
            <div onClick={this.props.close}>
              <span className="material-icons text-5xl  ">close</span>
            </div>
            <form onSubmit={this.save}>
              {/* <div style={{paddingLeft:"32px"}} className="text-left  font-black  text-5xl">
                            <h1 className="font-bold mt-4 ml-28">Add Product</h1>
                           </div> */}
              <div className="contact__text">
                <div
                  style={{ paddingLeft: "32px", paddingTop: "40px" }}
                  className="section-title"
                >
                  <h2 className="pt-24 pl-24 m-1.5">Account</h2>
                  <p className="pl-24 m-1.5">ข้อมูลผู้ใช้</p>
                </div>
              </div>
              <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="">
                  {/* <div className="product__details__text  pl-72 font-semibold"> */}
                  <div className="text-left space-y-4">
                    <div className="">
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
                      />{" "}
                      <span className="font-semibold">ชื่อนามสกุล: </span>
                      <input
                        className="border p-2 w-full h-10"
                        type="text"
                        name="lname"
                        value={lname}
                        onChange={this.handleChange}
                        required
                        placeholder="ระบุชื่อนามสกุล"
                      />
                      <span className="font-semibold">ชื่อเบอร์โทรศัพท์: </span>
                      <input
                        className="border p-2 w-full h-10"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                        required
                        placeholder="ระบุเบอร์โทรศัพท์"
                      />
                      <span className="font-semibold">อีเมลล์: </span>
                      <input
                        className="border p-2 w-full h-10"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                        placeholder="ระบุชื่ออีเมลล์"
                      />

<span className="font-semibold">รหัสผ่าน: </span>
                      <input
                        className="border p-2 w-full h-10"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                        placeholder="ระบุรหัสผ่าน"
                      />

                       

                         <span className="font-semibold">Role: </span>
                         <div className="">
                             
                  <select
                    onChange={this.handleChange}
                    className="w-full h-10 border-2"
                    name="roleEnter"
                    value={this.state.roleEnter}
                  >
                      {/* <option
                            id="role"
                            key={r.role}
                            name="role"
                            value={r.role}
                            defaultValue={this.state.role}
                          >
                            {r.role}
                          </option> */}
                          {console.log("dd")}
                        {console.log(this.state.roleEnter)}

                      <option  id="roleEnter" name="role" value="ADMIN"  defaultValue={this.state.roleEnter}>ADMIN</option>
                     <option  id="roleEnter" name="role" value="USER"     >USER</option>
                 
                  
                  </select>
                </div>
                    </div>
                    <br></br>
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
        </div>
      </div>

    );
  }
}
export default withContext(EditAccount);
