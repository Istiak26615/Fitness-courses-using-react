import "./MenuBar.css";
import logo from "../../images/logo/studio_logo_96D5307CEF8D8C.png";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="MenuBar-container menubar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2">
            <div className="logo-img">
              <img className="w-75" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end ">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
                <Link to="/services" className="items">
                  <li>Services</li>
                </Link>
                <Link to="/trainer" className="items">
                  <li>Trainer Details</li>
                </Link>
                <Link to="/login" className="items join-button">
                  <li className="join-text">Join Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;