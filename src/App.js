import { Routes, Route } from "react-router-dom";
import { Home, Product, Cart, Checkout } from "./pages"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )

  
 
}

export default App;
