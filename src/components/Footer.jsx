import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
      <>
    <div className="Footer">
      <div className="map">
        <ul className="list">
          <li>Home</li>
          <li>Products</li>
          <li>
            <ul>
              <li>Adept</li>
              <li>Cardiatis</li>
              <li>Fungible</li>
            </ul>
          </li>
        </ul>
        </div>
        <div className="map2">
          <ul className="list2">
           <li>Contact</li>
            <li>About us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="logos-main">
        <ul className="logos">
            <li><img src="../Imagenes/LOGO VECTORIAL..jpg"/></li>
            <li><img src="../Imagenes/LOGO ISO 9001-2015.png"/></li>
        </ul>
        <ul className="logos2">
            <li><img src="../Imagenes/logo-adept2.png"/></li>
            <li><img src="../Imagenes/LOGO CARDIATIS.png"/></li>
        </ul>
    </div>
      </div>

      <p>Created by: Alejandro blanco</p>

    </>
  );
}

export default Footer;
