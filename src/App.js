import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/*Components*/
import Navbar from './components/Nabvar/Navbar';
import Home from "./components/Home/Home"
import Shop from './components/Checkout/Shop';
import Cart from "./components/Cart/Cart"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from "./components/Footer/Footer"

/*Context*/ 
import { CartProvider } from './Context/Context';




export default function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/checkout" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      </div>
    </CartProvider>
    </BrowserRouter>
  );
}


