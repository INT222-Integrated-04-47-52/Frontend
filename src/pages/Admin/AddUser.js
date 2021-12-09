// import { Link } from "react-router-dom";
import React, { Component } from "react";
import withContext from "./withContext";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import imageUser from '../../HTMLcomponents/img/PinNookNooch/brownGirl.png'

const initState = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  password: "",
  role: "",
  isPasswordShown: false
};

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  componentDidMount() {

    let user = localStorage.getItem("user");

    axios.get(`${process.env.REACT_APP_API_URL}/admin/allGenders`, { headers: { "Authorization": `${user.token}` } }).then((res) => {
      this.setState({ genders: res.data });
    });

  }
  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };
  save = async (e) => {
    e.preventDefault();
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const userId = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/max-accountId`
      , { headers: { "Authorization": `${user.token}` } }
    );


    const { fname, lname, phone, email, password, role } = this.state;

    if (fname && lname && phone && email && password && role

    ) {
     
      const id = userId.data + 1;
      let userJson = {
        accountId: id,
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        password: password,
        role: role
      }


      console.log(userJson)

      let formData = new FormData();
      var blob = new Blob([JSON.stringify(userJson)], {
        type: "application/json",
      });

      formData.append("requestAccount", blob);
     
      let user = localStorage.getItem("user");
      user = JSON.parse(user);
      axios({
        url: `${process.env.REACT_APP_API_URL}/admin/addAccount`,
        method: "POST",
        data: formData,
        headers: {
          'Authorization': user.token
        }

      }).then(res => {
        this.props.history.push('/Admin')
        this.props.history.go(0)
      })
        .catch(err => this.setState({
          flash: {
            status: "is-danger",
            msg: err.response.data.message,

          },
        }))

      console.log(formData)
     
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
    const { fname, lname, phone, email, password, role } = this.state;
    const { user } = this.props.context;
    const { isPasswordShown } = this.state;
    return (
      
      <div className="mx-5">
        <form onSubmit={this.save}>
       
          <div className=" container">
            <div className="contact__text ">
              <div className="section-title">
                <h2 >Add User</h2>
                <p >เพิ่มข้อมูลผู้ใช้</p>
              </div>
            </div>
            <div className=" flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="">
                <div className="m-4 h-full flex w-64 ">
                  <div className="user__details__pic__item ">

                    <img src={imageUser} />

                  </div>

                </div>
              </div>

         
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
                  />
                </div>

                <div className="">
              
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
                  <span className="font-semibold">role: </span>
                  <select
                    onChange={this.handleChange}
                    className="w-full h-10 border-2"
                    name="role"
                    value={role}
                  >
                   
                    {console.log("dd")}
                    {console.log(role)}
                    <option
                      value=""
                      disabled
                      selected
                      hidden
                      className="text-gray-500"
                    >
                      Please select...
                    </option>
                    <option id="role" name="role" value="ADMIN" >ADMIN</option>
                    <option id="role" name="role" value="USER" >USER</option>


                  </select>
                </div>

                <div className="">
                  
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
                 
                  <label htmlFor="type" className="font-semibold ">
                    รหัสผ่าน:
                  </label>
                  
                  <div class="flex">
                    <input
                      required
                      className="input   text-black"
                      value={password}
                      type={isPasswordShown ? "text" : "password"}
                      name="password" placeholder="*********"
                      onChange={this.handleChange}
                      placeholder="ระบุรหัสผ่าน"
                    />
                    <div className="absolute item-right right-58 mt-2 mr-5">
                      <i className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} `}
                        onClick={this.togglePasswordVisibility} />
                    </div>
                  </div>
                </div>



                {this.state.flash && (
                  <div className={`notification ${this.state.flash.status}`}>
                    {this.state.flash.msg}
                  </div>
                )}
                <div className="field is-clearfix">
                 {" "}
                  <button
                    className="primary-btn flex my-4 mx-auto justify-center"
                    type="submit"
                    onClick={this.save}
                  >
                    Submit
                  </button>
             
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    )
  }
}
export default withContext(AddUser);