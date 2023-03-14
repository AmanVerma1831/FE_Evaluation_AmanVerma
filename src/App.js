import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Feed from './components/Feed';
import Auth from './components/Auth';



function App() {
  return (
    <div className="App">
      <header className="App-header container flex-col">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
