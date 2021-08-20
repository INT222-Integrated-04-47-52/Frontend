import img1 from '../../components/cssComponent/decorate.css';
import img2 from '../../components/img/instagram/instagram-1.jpg'
import img3 from '../../components/img/instagram/instagram-2.jpg'
import img4 from '../../components/img/instagram/instagram-3.jpg'
import img5 from '../../components/img/instagram/instagram-4.jpg'
import img6 from '../../components/img/instagram/instagram-5.jpg'


function exampleImage(){
    return( 
<section class="instagram spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="instagram__pic">
                        <div class="instagram__pic__item set-bg" src={{img1}}></div>
                        <div class="instagram__pic__item set-bg" src={{img2}}></div>
                        <div class="instagram__pic__item set-bg" src={{img3}}></div>
                        <div class="instagram__pic__item set-bg" src={{img4}}></div>
                        <div class="instagram__pic__item set-bg" src={{img5}}></div>
                        <div class="instagram__pic__item set-bg" src={{img6}}></div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="instagram__text">
                        <h2>Instagram</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                        <h3>#Male_Fashion</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
    export default exampleImage;
    