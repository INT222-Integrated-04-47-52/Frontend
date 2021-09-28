import "../../HTMLcomponents/cssComponent/decorate.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function Fliter() {
  const [open, setOpen] = useState(false);
  return (
 
    <div className="col-lg-3">
      <div className="shop__sidebar">
        <div className="shop__sidebar__search">
          <form action="#">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <span className="icon_search"></span>
            </button>
          </form>
        </div>
        <div className="shop__sidebar__accordion">
          <div className="accordion" id="accordionExample">
            <div id="example-collapse-text"></div>

            <div className="">
              <div className="card-heading">
                <div
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}>
                  Categories
                </div>
              </div>
              <Collapse in={open}>
                <div className="card-body">
                  <div className="shop__sidebar__categories">
                    <ul className="nice-scroll">
                      <li>
                        <Link to="/Shop">เสื้อ (20)</Link>
                      </li>
                      <li>
                        <Link to="/Shop">กระโปรง (20)</Link>
                      </li>
                      <li>
                        <Link to="/Shop">กางเกง (20)</Link>
                      </li>
                      <li>
                        <Link to="/Shop">ชุด (20)</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Collapse>
            </div>
            <div className="">
              <div className="card-heading">
                <div onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}>
                  Branding
                </div>
              </div>
              <div
               
              >
                    <Collapse in={open}>
                <div className="card-body">
                  <div className="shop__sidebar__brand">
                    <ul>
                      <li>
                        <Link to="/Shop">สำหรับผู้หญิง</Link>
                      </li>
                      <li>
                        <Link to="/Shop">สำหรับผู้ชาย</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}
export default Fliter;
