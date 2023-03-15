import { Routes, Route } from "react-router-dom";
import { Home, Cart, Checkout, Contact } from "./pages";
import { Navbar, Footer } from "./components";
import { Product } from "./components";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";



function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </ShoppingCartProvider>
  )

  
 
}

export default App;
