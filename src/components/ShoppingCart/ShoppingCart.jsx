import { Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { default as ApiHook } from "../../api/Hook";

export default function ShoppingCart() {
  const { cartItems, removeFromCart, decreaseProductQuantity } = useShoppingCart();
  const { data, isLoading, isError } = ApiHook("https://api.noroff.dev/api/v1/online-shop",[]);
  
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

 const id = cartItems.map(id => (id.id))
 //const product = data.find(i => i.id === id)
 console.log(id)
 //console.log(data.map(id => (id.id)))
 
  return (
  <Container className="mt-5">
    <h1 className="border-bottom">Cart items</h1>
    {cartItems.map(item => (
    <CartItem key={item.id} {...item}/>
    ))}
    <div className="d-flex flex-wrap justify-content-between align-items-center" >
      <p className="fw-regular fs-4 mt-3">Total: {cartItems.reduce((total, cartItem) => {
        const product = data.find(i => i.id === cartItem.id)
        return Math.round(total + (product?.discountedPrice || 0) * cartItem.quantity)
        }, 0)},-</p>
        <Link ><Button onClick={() => decreaseProductQuantity} size="lg" variant="outline-primary">checkout</Button></Link>
    </div>
  </Container>
  )
}