import React from 'react';
import './App.css';
import Header from './component/Header'; // Correctly import the Header component

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './page/Home';
import Shop from './page/Shop';
import Footer from './component/Footer';
import Breadcrumb from './page/Breadcrumb';
import Contact from './page/Contact';
import ProductDetail from './page/ProductDetail';


function App() {
  return (
    <BrowserRouter>
     <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:productId" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
</Routes>


    <Footer />
  </BrowserRouter>
    
  );
}

export default App;
