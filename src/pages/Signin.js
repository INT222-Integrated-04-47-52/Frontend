import React, { Component } from "react";
import "../components/cssComponent/decorate.css";

class SignIn extends Component {
  state = { isPasswordShown: false };
  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };
  render = () => {
    const { isPasswordShown } = this.state;
    return (
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
                <form action="#">
                  <div class="row">
                    <h5 style={{ textAlign: "left" }}>Email</h5>
                   
                    <div class="">
                      <input type="text" placeholder="inputyour_email@mail.com" />
                    </div>
                    <h5 style={{ textAlign: "left" }}>Password</h5>
                    <div class="flex">
                      <input
                        type={isPasswordShown ? "text" : "password"}
                        name="pass"
                        placeholder="Password"
                      />

                      <i
                        className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} `}
                        style={{
                          marginLeft: "-28px",
                          marginTop: "18px",
                          cursor: "pointer",
                          color: "gray",
                        }}
                        onClick={this.togglePasswordVisibility}
                      />
                    </div>
                    <div class="col-lg-12">
                      <button type="submit" class="site-btn">
                        SIGNIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
}
export default SignIn;
