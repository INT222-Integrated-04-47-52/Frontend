
import footerLogo from '../components/img/footer-logo.jpg'
import {Link } from 'react-router-dom';
function Footer(){
    return( 
<footer class="footer" style={{ backgroundColor: "#040506"}}>
<div class="container">
                <div class="footer__logo">
                   <img style={{width: "160px"}} src={footerLogo} alt=""/>
                </div>

    <div class="row">
        <div class="col-lg-12 text-center">
            <div class="footer__copyright__text">
                <p>Copyright ©
                     2021 INT222 Integrated Project. Proudly by Khorapin, Noochajee and Prapaporn
                </p>
            </div>
        </div>
    </div>
</div>
</footer>
);
  };
export default Footer;