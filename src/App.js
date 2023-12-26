import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
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
    </div>
  );
}

export default App;
