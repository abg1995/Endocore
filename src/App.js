import './App.css';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home';
import Adept from './pages/Adept';
import AboutUs from './pages/AboutUs';
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Products from './pages/Products';
import Cardiatis from './pages/Cardiatis';
import Fungible from './pages/Fungible';




function App() {
  return (
    <div className="App">

      <Navbar />
          

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/adept' element={<Adept />} />
        <Route path='/products/cardiatis' element={<Cardiatis/>} />
        <Route path='/products/fungible' element={<Fungible />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
