import '../../components/cssComponent/decorate.css';
import {Link } from 'react-router-dom';
function Fliter(){
    return( 
        <div className="col-lg-3">
        <div className="shop__sidebar">                     
            <div className="shop__sidebar__search">
                <form action="#">
                    <input type="text" placeholder="Search..."/>
                    <button type="submit"><span className="icon_search"></span></button>
                </form>
            </div>
            <div className="shop__sidebar__accordion">
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-heading">
                            <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                        </div>
                        <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                            <div className="card-body">
                                <div className="shop__sidebar__categories">
                                    <ul className="nice-scroll">
                                        <li><Link to="/Shop">เสื้อ (20)</Link></li>
                                        <li><Link to="/Shop">กระโปรง (20)</Link></li>
                                        <li><Link to="/Shop">กางเกง (20)</Link></li>
                                        <li><Link to="/Shop">ชุด (20)</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-heading">
                            <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
                        </div>
                        <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                            <div className="card-body">
                                <div className="shop__sidebar__brand">
                                    <ul>
                                        <li><Link to="/Shop">สำหรับผู้หญิง</Link></li>
                                        <li><Link to="/Shop">สำหรับผู้ชาย</Link></li>
                              
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    </div>
                       
      );
}
export default Fliter;
