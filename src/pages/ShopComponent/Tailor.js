import '../../HTMLcomponents/cssComponent/decorate.css';
import {Link } from 'react-router-dom';

import AddSize from '../ShopComponent/AddSize';

function Tailor(){
    return( 
        <div>
 
        <AddSize/>
        <Link to="/AddSize" className="primary-btn m-4">ยืนยันการสั่งตัด</Link>
        </div>
    );
}
export default Tailor;
