import "./Footer.css";

function Footer() {
  return (
      <>
    <div className="Footer">
      <div className="map">
        <br />
        <ul className="list">
        <br />
          <a className="links" href="/">Home</a> <br />
          <a className="links" href="/products">Products</a><br />
          <li>
            <ul>
              <a className="links" href="/products/adept">Adept</a><br />
              <a className="links" href="/products/cardiatis">Cardiatis</a><br />
              <a className="links" href="/products/fungible">Fungible</a>
            </ul>
          </li>
        </ul>
        </div>
        <div className="map2">
          <ul className="list2">
           <a className="links" href="/contact">Contact</a><br />
            <a className="links" href="/aboutus">About us</a><br />
            <a className="links" href="/Faq">FAQ</a>
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

      <p>Created by: Alejandro blanco <a href="https://alejandro--portfolio.herokuapp.com/">🧑🏻‍💻</a></p>
      <p>All rights reserved 2022</p>

    </>
  );
}

export default Footer;
