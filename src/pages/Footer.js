import footerLogo from "../HTMLcomponents/img/footer-logo.jpg";
// import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer h-64 -mt-24" style={{ backgroundColor: "#040506" }}>
      <div className="container">
        <div className="footer__logo">
          <img className="-mt-8"
            style={{
              width: "130px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={footerLogo}
            alt=""
          />
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="footer__copyright__text">
              <p>
                Copyright © 2021 INT222 Integrated Project. Proudly by Khorapin,
                Noochajee and Prapaporn
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
