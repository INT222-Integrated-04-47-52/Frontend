import React from 'react';
import '../components/cssComponent/decorate.css'

function SignIn(){
  return( 
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
                         <h5 style={{textAlign: "left"}}>Username</h5>  
                                <div class="">
                                    <input type="text" placeholder="Username"/>
                                </div>
                                <h5 style={{textAlign: "left"}}>Password</h5>  
                                <div class="">

                                    <input type="password" placeholder="Password"/>
                                    <div style={{}}>
                             <i className="fa fa-eye psswrd " style={{paddingRight:"120px"}} />
                               </div> </div>
                                <div class="col-lg-12">
                                    <button type="submit" class="site-btn">SIGNIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default SignIn;