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
  roleEnter: ""
};


class EditUser extends Component {
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
      `${process.env.REACT_APP_API_URL}/admin/account/${this.state.accountId}`  
      ,{ headers: {"Authorization" : `${user.token}`} }
    );
    console.log(accId);


    const { fname,lname,phone,email,role } = this.state;


    if (this.state.accountId) {
      const id = this.state.accountId;
      // const id = accountId.data;
    console.log("role"+role)
      let accountJson = {
        accountId: id,
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
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
        url: `${process.env.REACT_APP_API_URL}/admin/editAccount`,
        headers: {"Authorization" : `${user.token}`} ,
        method: "PUT",
        data: formData,

      })
        .then((res) => {
          if (res.data.status === 200) {
            this.props.history.replace("/Admin");
            
          } else {
          }
        })
        .catch((err) =>  this.setState({
          flash: {
            status: "is-danger",
            msg: err.response.data.message,
            
          },
        }));
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
    const { fname, lname, phone, email,role } = this.state;
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
            <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
     

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <div className="contact__text">
                <div
                  style={{ paddingLeft: "32px", paddingTop: "40px" }}
                  className="section-title"
                >
                  <h2 className="">Edit User</h2>
                  <p className="">แก้ไขข้อมูลผู้ใช้</p>
                </div>
              </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div class="md:col-span-2">
                <label for="fname">Firstname</label>
                <input type="text" name="fname" id="fname" 
               
                    value={fname}
                    onChange={this.handleChange}
                    required
                    placeholder="ระบุชื่อจริง" />
              </div>

              <div class="md:col-span-2">
                <label for="lname">Lastname</label>
                <input type="text" name="lname" id="lname" 
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                 value="" placeholder="" />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
              </div>

             

              <div class="md:col-span-2">
                <label for="country">Country / region</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="state">State / province</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-1">
                <label for="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
              </div>

              <div class="md:col-span-5">
                <div class="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                  <label for="billing_same" class="ml-2">My billing fname is different than above.</label>
                </div>
              </div>

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</div>
              {/* <div style={{paddingLeft:"32px"}} className="text-left  font-black  text-5xl">
                            <h1 className="font-bold mt-4 ml-28">Add Product</h1>
                           </div> */}
      
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
export default withContext(EditUser);
{/* <div
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
      //         <div className="contact__text">
      //           <div
      //             style={{ paddingLeft: "32px", paddingTop: "40px" }}
      //             className="section-title"
      //           >
      //             <h2 className="pt-24 pl-24 m-1.5">Edit User</h2>
      //             <p className="pl-24 m-1.5">แก้ไขข้อมูลผู้ใช้</p>
      //           </div>
      //         </div>
      //         <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
      //           <div className="">
      //             {/* <div className="product__details__text  pl-72 font-semibold"> */}
      //             <div className="text-left space-y-4">
      //               <div className="">
      //                 <span className="font-semibold">ชื่อจริง: </span>
      //                 <br />
      //                 <input
      //                   className="border p-2 w-full h-10"
      //                   type="text"
      //                   name="fname"
      //                   value={fname}
      //                   onChange={this.handleChange}
      //                   required
      //                   placeholder="ระบุชื่อจริง"
      //                 />{" "}
      //                 <span className="font-semibold">ชื่อนามสกุล: </span>
      //                 <input
      //                   className="border p-2 w-full h-10"
      //                   type="text"
      //                   name="lname"
      //                   value={lname}
      //                   onChange={this.handleChange}
      //                   required
      //                   placeholder="ระบุชื่อนามสกุล"
      //                 />
      //                 <span className="font-semibold">ชื่อเบอร์โทรศัพท์: </span>
      //                 <input
      //                   className="border p-2 w-full h-10"
      //                   type="text"
      //                   name="phone"
      //                   value={phone}
      //                   onChange={this.handleChange}
      //                   required
      //                   placeholder="ระบุเบอร์โทรศัพท์"
      //                 />
      //                 <span className="font-semibold">อีเมลล์: </span>
      //                 <input
      //                   className="border p-2 w-full h-10"
      //                   type="text"
      //                   name="email"
      //                   value={email}
      //                   onChange={this.handleChange}
      //                   required
      //                   placeholder="ระบุชื่ออีเมลล์"
      //                 />
      //                    <span className="font-semibold">Role: </span>
      //                    <div className="">
      //             <select
      //               onChange={this.handleChange}
      //               className="w-full h-10 border-2"
      //               name="roleEnter"
      //               value={this.state.roleEnter}
      //             >
      //                 {/* <option
      //                       id="role"
      //                       key={r.role}
      //                       name="role"
      //                       value={r.role}
      //                       defaultValue={this.state.role}
      //                     >
      //                       {r.role}
      //                     </option> */}
      //                     {console.log("dd")}
      //                   {console.log(this.state.roleEnter)}

      //                 <option  id="roleEnter" name="role" value="ADMIN"  defaultValue={this.state.roleEnter}>ADMIN</option>
      //                <option  id="roleEnter" name="role" value="USER"     >USER</option>
                 
                  
      //             </select>
      //           </div>
      //               </div>
      //               <br></br>
      //             </div>

      //             {this.state.flash && (
      //               <div className={`notification ${this.state.flash.status}`}>
      //                 {this.state.flash.msg}
      //               </div>
      //             )}
      //             <div className="field is-clearfix">
      //               {/* <Link to="/Shop">  */}{" "}
      //               <button
      //                 className="primary-btn flex my-4 mx-auto justify-center"
      //                 type="submit"
      //                 onClick={this.save}
      //               >
      //                 Submit
      //               </button>
      //               {/* </Link>  */}
      //             </div>
      //           </div>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div> */}