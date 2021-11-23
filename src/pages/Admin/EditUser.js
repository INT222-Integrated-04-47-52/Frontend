import "../../HTMLcomponents/cssComponent/decorate.css";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
import withContext from "../../withContext";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initState = {
  accountId: null,
  fname: "",
  lname: "",
  phone: "",
  email: "",
  position: [],
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
    });
    console.log("accountThatClick");
    console.log(this.props.person.accountId);
    console.log(this.props.person.fname);
    console.log(this.props.person.lname);
    console.log(this.props.person.phone);
    console.log(this.props.person.email);
  }

  save = async (e) => {
    e.preventDefault();

    const accId = await axios.get(
      `${process.env.REACT_APP_API_URL}/account/${this.state.accountId}`
    );
    console.log(accId);


    const { fname,lname,phone,email } = this.state;


    if (this.state.accountId) {
      const id = this.state.accountId;
      // const id = accountId.data;

      let accountJson = {
        accountId: id,
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        password: "f"
      };
      let formData = new FormData();
      var blob = new Blob([JSON.stringify(accountJson)], {
        type: "application/json",
      });
      console.log(accountJson);

      formData.append("editAccount", blob);
      axios({
        url: `${process.env.REACT_APP_API_URL}/editAccount`,
        method: "PUT",
        data: formData,
      })
        .then((res) => {
          if (res.data.status === 200) {
            this.props.history.replace("/Admin");
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
    console.log(e.target.name);
  };

  render() {
    const { fname, lname, phone, email } = this.state;
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
              <div className="contact__text -mt-24">
                <div
                  style={{ paddingLeft: "32px", paddingTop: "40px" }}
                  className="section-title"
                >
                  <h2 className="pt-24 pl-24 m-1.5">Edit Product</h2>
                  <p className="pl-24 m-1.5">แก้ไขข้อมูลผู้ใช้</p>
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
