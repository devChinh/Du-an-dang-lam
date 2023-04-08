import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Wish from "./pages/Wish";
import Cart from "./pages/Cart";
import ProductScreen from "./pages/ProductScreen";
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
