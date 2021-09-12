import '../../HTMLcomponents/cssComponent/decorate.css';
import bannerImage from '../../HTMLcomponents/img/hero/hero-1.jpg'
import {Link } from 'react-router-dom';
function Banner(){
    return( 

        <section className="hero">
        <div className="hero__slider owl-carousel">
          <div className="hero__items set-bg" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-7 col-md-8">
                            <div className="hero__text"  >
                                <h2>Mongkoltorn</h2>
                                <h6>ร้านมงคลธรผ้าไหมไทย</h6>
                                <p>รับสั่งตัดและออกแบบชุด โดยใช้ผ้าไหมไทย หรือผ้าฝ้ายชนิดต่างๆ</p>
                                <Link to="/Shop" className="primary-btn">Shop now <span className="arrow_right"></span></Link>
                        
                            </div>
                        </div>
                    </div>
                </div>
           
           </div>
        </div>
    </section>
                       
      );
}
export default Banner;
