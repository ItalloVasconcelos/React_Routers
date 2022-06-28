import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/home/Home';
import About from './pages/about/About';



function App() {
  return (
    <div className="App">
      <h1>React Routers</h1>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
