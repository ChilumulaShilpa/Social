import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
//import Products from './components/Products';
import ProductsList from './components/ProductsList';
import Navbar from './components/Navbar';
import Laptops from './components/Laptops';
function App() {
  return (
    <div className="App">
         <Navbar/>
     {/* <Products/> */}
     {/* <ProductsList/> */}
     <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> */}
        <Route path="/ProductsList" element={<ProductsList />} />
        <Route path="/laptops" element={<Laptops />} />
        {/* <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:x" element={<SingleProduct />} /> 
        <Route path="*" element={<Notfound />} />*/}
      </Routes>
    </div>
  );
}

export default App;
