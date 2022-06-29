import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/navbar/Navbar';
import Products from './pages/products/Products';
import Info from './pages/info/Info';
import NotFound from './pages/notFound/NotFound';
import SearchForm from './components/searchForm/SearchForm';
import Search from './pages/search/Search';



function App() {
  return (
    <div className="App">
      <h1>React Routers</h1>
      <BrowserRouter>
      <Navbar />
      <SearchForm />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/products/:id/info" element={<Info />} />
            <Route path="*" element={<NotFound />} />     
            <Route path="/search" element={<Search />}/>
            <Route path="/company" element={<Navigate to="/about"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
