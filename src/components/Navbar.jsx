import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <div className="test">
      <nav className="navigation">
          <a href="/">
            <img className="logo" src="../Imagenes/picwish.png" alt="logo" />
          </a>
              <select name="productos" id="productos" className="botones">
                <option value="">PRODUCTOS</option>
                <option value="/products" href="/products">
                  All the products
                </option>
                <option value="Adept"><a href="/products/adept">ADEPT</a></option>
                <option value="Cardiatis">CARDIATIS</option>
                <option value="Desechable">FUNGIBLE</option>
              </select>
              <button href="/aboutus" className="botones">
                <NavLink className="links" to={"/aboutus"}>
                  ABOUT US
                </NavLink>
              </button>
              <button className="botones">
                <NavLink className="links" to={"/contact"}>
                  CONTACT US
                </NavLink>
              </button>
              <button className="botones">
                <NavLink className="links" id="faq" to={"/faq"}>
                  FAQ
                </NavLink>
              </button>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
