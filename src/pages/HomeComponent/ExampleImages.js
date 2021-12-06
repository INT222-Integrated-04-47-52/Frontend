import '../../HTMLcomponents/cssComponent/decorate.css';
import img2 from '../../HTMLcomponents/img/instagram/instagram-1.jpg'
import img3 from '../../HTMLcomponents/img/instagram/instagram-2.jpg'
import img4 from '../../HTMLcomponents/img/instagram/instagram-3.jpg'
import img5 from '../../HTMLcomponents/img/instagram/instagram-4.jpg'
import img6 from '../../HTMLcomponents/img/instagram/instagram-5.jpg'
import img1 from '../../HTMLcomponents/img/instagram/instagram-6.jpg'


function ExampleImage(){
    return( 
<section className="instagram spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="instagram__pic">
                        <img className="instagram__pic__item set-bg" alt="1" src={img1}/>
                        <img className="instagram__pic__item set-bg" alt="12" src={img2}/>
                        <img className="instagram__pic__item set-bg" alt="134" src={img3}/>
                        <img className="instagram__pic__item set-bg" alt="132" src={img4}/>
                        <img className="instagram__pic__item set-bg" alt="12w" src={img5}/>
                        <img className="instagram__pic__item set-bg" alt="1234" src={img6}/>
                        
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="instagram__text">
                        <h2>Instagram</h2>
                        <p>
                        GENDER-NEUTRAL TEXTILE LABEL; TO EVOKE A SENSE OF INDIVIDUALITY; EXPERIMENTAL, SIZE-FRIENDLY & TIMELESS. THESE PIECES ARE KEPT MINIMAL IN TERMS OF STYLE & ARE PERFECT FOR ALL SEASON & TRAVEL. IT FOLLOWS THE PRINCIPLES OF SLOW DESIGN & ZERO WASTE LEAVING NO CARBON FOOTPRINT & POSITIVE IMPACT TO THE ENVIRONMENT.HANDWOVEN WITH LOVE FROM ASSAM.
                        </p>
                        <h3>#Mongkoltorn</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
    export default ExampleImage;
    