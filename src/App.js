import { Routes, Route } from "react-router-dom";
import { Home, Product, Cart, Checkout } from "./pages";
import { Navbar, Footer } from "./components";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </>
  )

  
 
}

export default App;
