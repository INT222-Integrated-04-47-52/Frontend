import '../components/cssComponent/decorate.css';
import React from 'react';

function Contacts(){
  return( 
  
    <section className="contact contactPosition">
        <div  className="container" >
            {/* <div className="row"> */}
                <div className="col-lg-6 col-md-6">
                    <div className="contact__text">
                        <div className="section-title">
                            <h2>Contact Us</h2>
                            <p>KMUTT | School of Information Technology</p>
                        </div>
                        <ul>
                            <li>
                                <h4>62130500004</h4>
                                <p>Khorapin Gadpu <br />Khorapin.pingadpu@mail.kmutt.ac.th</p>
                            </li>
                            <li>
                                <h4>62130500047</h4>
                                <p>Noochajee Phonbooncharoenchai <br />Noochajee.nn@mail.kmutt.ac.th</p>
                            </li>
                            <li>
                                <h4>62130500052</h4>
                                <p>Prapaporn Sira <br />Prapaporn.1412@mail.kmutt.ac.th</p>
                            </li>
                        </ul>
                    </div>
                </div>
            {/* </div> */}
        </div>
    </section>

    );
  };
    
  export default Contacts;
  