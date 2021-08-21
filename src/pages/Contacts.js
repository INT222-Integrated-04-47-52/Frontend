import '../components/cssComponent/decorate.css';
import React from 'react';
import Pin from '../../img/PinNookNooch/Pin.jpg'
function Contacts(){
  return( 
<section ClassName="contact spad">
<div ClassName="container">
    <div ClassName="row">
        <div ClassName="col-lg-6 col-md-6">
            <div ClassName="contact__text">
                <div ClassName="section-title">
                    <span>Information</span>
                    <h2>Contact Us</h2>
                    <p>KMUTT | School of Information Technology</p>
                </div>
                <ul>
                    <li>
                        <img src={Pin}/>
                    <h4>62130500004</h4>
                                <p>Khorapin Gadpu <br />Khorapin.pingadpu@mail.kmutt.ac.th</p>
                          </li>
                    <li>
                    <h4>62130500047</h4>
                                <p>Noochajee Phonbooncharoenchai <br />Noochajee.nn@mail.kmutt.ac.th</p>
                             </li>
                             <li>
                                <h4>62130500052</h4>
                                <p>Prapaporn Sila <br />Prapaporn.1412@mail.kmutt.ac.th</p>
                            </li>
                </ul>
            </div>
        </div>
        <div ClassName="col-lg-6 col-md-6">
            <div ClassName="contact__form">
                <form action="#">
                    <div ClassName="row">
                        <div ClassName="col-lg-6">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div ClassName="col-lg-6">
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div ClassName="col-lg-12">
                            <textarea placeholder="Message"></textarea>
                            <button type="submit" ClassName="site-btn">Send Message</button>
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
    
  export default Contacts;
  