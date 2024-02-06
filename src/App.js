import './App.css';
import HomePage from './pages/HomePage';
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
