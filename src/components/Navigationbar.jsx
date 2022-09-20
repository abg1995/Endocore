import { NavLink } from "react-router-dom";
import "./Navigationbar.css";
import logo from './picwish.png'
import {Navbar, NavbarBrand} from 'reactstrap'


function Navigationbar() {
  return (
    <>
    <div className="test">
      <Navbar className="navigation">
      <NavbarBrand href="/">
    <img src={logo}  alt="logo" height="80" width="100" padding-right="1000"/> 
  </NavbarBrand>
          
          <div className="dropdown">
             <button className="dropbtn">PRODUCTOS</button>
             <div className="dropdown-content">
                 <a href="/products">ALL PRODUCTS</a>
                 <a href="/products/adept">ADEPT</a>
                 <a href="/products/cardiatis">CARDIATIS</a>
                 <a href="/products/fungible">FUNGIBLE</a>
             </div>
             </div>
              <a href="/aboutus" className="link-nav">
                <NavLink className="links" to={"/aboutus"}>
                  ABOUT US
                </NavLink>
              </a>
              <a href="/contact" className="link-nav">
                <NavLink className="links" to={"/contact"}>
                  CONTACT US
                </NavLink>
              </a>
              <a href="/Faq" className="link-nav">
                <NavLink className="links" id="faq" to={"/faq"}>
                  FAQ
                </NavLink>
              </a>
      </Navbar>
      </div>
    </>
  );
}

export default Navigationbar;
