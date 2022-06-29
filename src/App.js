import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/navbar/Navbar';
import Products from './pages/products/Products';



function App() {
  return (
    <div className="App">
      <h1>React Routers</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
