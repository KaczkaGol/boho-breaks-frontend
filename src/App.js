import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Trasy from "./Components/Trasy";
import Vylety from "./Components/Vylety";
import DegustaceNav from './Components/DegustaceNav';
import Navbar from './Components/Navbar';
import ONas from './Components/ONas';
import Kontakt from './Components/Kontakt';
import Footer from './Components/Footer';
import Rezervovat from './Components/Rezervovat';
import RezervarceForm from './Components/RezervarceForm';
import BeerTour from './Components/BeerTour';
import WineTour from './Components/WineTour';
import './embla.css'





function App() {
  return (
    <Router>
      <div className="App"
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
      
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/nabidka/zazitkove-trasy" element={<Trasy />} />
          <Route path="/nabidka/tematicke-balicky" element={<Vylety />} />
          <Route path="/nabidka/degustacni-trasy" element={<DegustaceNav />} />
          <Route path="/nabidka/degustacni-trasy/beer-tour" element={<BeerTour />} />
          <Route path="/nabidka/degustacni-trasy/wine-tour" element={<WineTour />} />
          <Route path="/onas" element={<ONas />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/rezervovat" element={<Rezervovat />} />
          <Route path="/rezervace" element={<RezervarceForm />} />
        </Routes>
        </div>

        <Footer />
      </div>
      
    </Router>
   
  );
}

export default App;
