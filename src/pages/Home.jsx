import {Carousel} from 'react-bootstrap'
import './Home.css'


function Home() {


    return (
        <>
        <br />
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Imagenes/adept/Captura de pantalla 2022-09-15 a las 13.55.38.png"
          alt="First slide"
        />
        <br /><br /><br />
        <Carousel.Caption>
          <h3 className='titles'>Adept medical</h3>
          <p className='p-carousel'>Soportes clinicos de imagen</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Imagenes/cardiatis/CARDIATIS FOTO 2.png"
          alt="Cardiatis"
        />
        <br /><br /><br /><br />
        <Carousel.Caption>
          <h3 className='titles'>Cardiatis</h3>
          <p className='p-carousel'>Endoprotesis cardiovasculares</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id='third-img'
          className="d-block w-100"
          src="../Imagenes/fungible/REF_4000103B-1024x683.jpeg"
          alt="Third slide"
        />
        <br /><br /><br /><br ></br>
        <Carousel.Caption>
          <h3 className='titles'>Productos Fungibles</h3>
          <p className='p-carousel'></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <br /><br /><br />

        <hr className='separador'/>
        <br />
        <h2>Endocore</h2>
        <br />

        <p className='texto-inicial'>Somos Endocore, un negocio español de ventas de Productos
        medicos para hospitales tanto en españa como en el resto de Europa.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tellus sit amet neque mattis scelerisque. 
        Donec vitae purus lacinia, laoreet eros non, vestibulum libero. Praesent interdum id diam eu finibus. Suspendisse in pulvinar sapien. Aliquam 
        eleifend iaculis pulvinar. Duis vitae lacus cursus ipsum dictum aliquam eu eu nibh. Phasellus vitae magna vehicula ante efficitur tempor. Cras 
        faucibus est interdum orci ultricies tristique. Proin vulputate erat nec nulla pretium efficitur. Nulla porta purus et ex scelerisque tincidunt. 
        </p>
        
        <br /><br />







        </>
    )
}

export default Home;