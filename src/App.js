import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import CarpetCleaning from './pages/CarpetCleaning';
import UpholsteryCleaning from './pages/UpholsteryCleaning';
import LeatherCleaning from './pages/LeatherCleaning';
import TileGroutFloorCleaning from './pages/TileGroutFloorCleaning';
import HardwoodFloorCleaning from './pages/HardwoodFloorCleaning';
import InhomeAreasRugCleaning from './pages/InhomeAreasRugCleaning';
import StoneCleaning from './pages/StoneCleaning';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/carpetCleaning" element={<CarpetCleaning/>} />
          <Route path="/UpholsteryCleaning" element={<UpholsteryCleaning/>} />
          <Route path="/LeatherCleaning" element={<LeatherCleaning/>} />
          <Route path="/TileGroutFloorCleaning" element={<TileGroutFloorCleaning/>} />
          <Route path="/HardwoodFloorCleaning" element={<HardwoodFloorCleaning/>} />
          <Route path="/InhomeAreasRugCleaning" element={<InhomeAreasRugCleaning/>} />
          <Route path="/StoneCleaning" element={<StoneCleaning/>} />
        </Routes>
      </Router>
      <a href="https://api.whatsapp.com/send?phone=1234567890" class="whatsapp-chat" target="_blank">
        <img src="whatsapp-white-icon.webp" alt="WhatsApp Icon" class="whatsapp-icon" />
      </a>
      <Footer />
    </div>
  );
}

export default App;