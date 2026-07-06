import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import OurCafe from "./pages/OurCafe/OurCafe";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {

  // Cart State
  const [cart, setCart] = useState({});

  function handleClearCart() {
    setCart({});
  }

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/menu"
          element={
            <Menu
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onUpdateCart={setCart}
              onClearCart={handleClearCart}
            />
          }
        />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/our-cafe" element={<OurCafe />} />

        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;