import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductListPage, ProductDetailsPage } from "./pages/index"
import { Navbar } from "./components/index"
import { StorefrontContextProvider } from "./contexts/StorefrontContext"
import React from 'react';


function App() {
  return (
    <div className='container'>
      <StorefrontContextProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" exact element={<ProductListPage/>} />
            <Route path="/product/:productId" element={<ProductDetailsPage/>} />
          </Routes>
        </Router>
      </StorefrontContextProvider>
    </div>
  );
}

export default App;
