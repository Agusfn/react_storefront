import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductListPage, ProductDetailsPage } from "./pages/index"
import { Navbar } from "./components/index"
import { CartContextProvider } from "./contexts/CartContext"

function App() {
  return (
    <div className='container'>
      <CartContextProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" exact element={<ProductListPage/>} />
            <Route path="/product/:productId" element={<ProductDetailsPage/>} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
