import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import withContext from "../../withContext";
import "../../HTMLcomponents/cssComponent/decorate.css";

class Login extends Component {
  
  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isPasswordShown: false
    };
  }  
  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password)
      .then((loggedIn) => {
        if (!loggedIn) {
          this.setState({ error: "Invalid Credentails" });
        }
      })     
  };
  

  render = () => {
    const { isPasswordShown } = this.state;
    return !this.props.context.user ? (
      <section class="contact spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="contact__text">
              <div class="section-title">
                <span>ร้านมงคลธรผ้าไหมไทย</span>
                <h2>Mongkolthorn</h2>
                <p>กรุณาล็อกอินเมื่อต้องการที่จะบันทึกไซส์ตัวและสั่งตัดชุด</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="contact__form">
               <form onSubmit={this.login}>
                   <div class="row">
                    <h5 style={{ textAlign: "left" }}>Email</h5>
                     <div>
                       <input 
                          className="input text-black"
                          type="email"
                          name="username"
                          placeholder="inputyour_email@mail.com"
                         onChange={this.handleChange}
                     /></div>
                   </div>
                  
              <h5 style={{ textAlign: "left" }}>Password</h5>
              <div class="flex">
                <input 
                  className="input  text-black" 
                  type={isPasswordShown ? "text" : "password"}
                  name="password" placeholder="*********"
                  onChange={this.handleChange}
                />
                 <div className="absolute item-right right-0 mt-2 mr-5"><i className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} `}
                      onClick={this.togglePasswordVisibility}/>
            </div>
              </div> {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix ">
              <button type="submit" class="site-btn">
                        SIGNIN
                      </button>
              </div>
        </form>
        </div>
        </div>
        </div>
        </div>
      </section>
    ) : (
      <Redirect to="/Shop" />
    );
  }
}

export default withContext(Login);