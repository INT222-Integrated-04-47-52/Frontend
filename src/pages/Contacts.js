
import '../HTMLcomponents/cssComponent/decorate.css';
import React from 'react';
import Pin from "../HTMLcomponents/img/PinNookNooch/Pin.jpg";
import Nook from "../HTMLcomponents/img/PinNookNooch/Nook.jpg";
import Nooch from "../HTMLcomponents/img/PinNookNooch/Nooch.JPG";
// const mystyle = {
//     paddingTop:"20px",
//     color: "black",
//     fontWeight: "bold"
//   };
function Contacts(){
  return( 
  
    <section className="contact contactPosition">
        <div  className="container " >
            {/* <div className="row"> */}
                <div className="" >
                    <div className="contact__text">
                        <div style={{paddingLeft:"32px"}} className="section-title">
                            <h2>Contact Us</h2>
                            <p>KMUTT | School of Information Technology</p>
                        </div>
                        <div className="grid-cols-3" style={{columnCount: "3"}}>
                        <ul>
                           <div> <li>
                                <img style={{height:"280px" }} src={Pin} alt=""/>
                                <h4 style={{paddingTop:"20px"}}>62130500004</h4>
                                <p>Khorapin Gadpu <br />Khorapin.pingadpu@mail.kmutt.ac.th</p>
                            </li></div>
                            <div> <li>
                            <img style={{height:"280px" }} src={Nooch} alt=""/>
                                <h4 style={{paddingTop:"20px"}}>62130500047</h4>
                                <p>Noochajee Phonbooncharoenchai <br />Noochajee.nn@mail.kmutt.ac.th</p>
                            </li>
                            </div>
                            <div>
                            <li>
                            <img style={{height:"280px" ,marginBottom:"5px" }} src={Nook} alt=""/>
                                <h4 style={{marginTop:"2px"}}>62130500052</h4>
                                <p>Prapaporn Sila <br />Prapaporn.1412@mail.kmutt.ac.th</p>
                            </li>
                            </div>
                        </ul>
                        </div>
                    </div>
                </div>
            {/* </div> */}
          
        </div>
        
    </section>

    );
  };
    
  export default Contacts;