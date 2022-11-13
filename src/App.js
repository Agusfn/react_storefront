import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import ProductListPage from "./pages/ProductListPage/ProductListPage"
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage"

import Test from "./components/Test"


function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<ProductListPage/>} />
          <Route path="/product/:productId" element={<ProductDetailsPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
