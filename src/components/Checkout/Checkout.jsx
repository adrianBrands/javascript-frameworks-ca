import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Checkout(){
  return (
    <Container>
      <h1 className="border-bottom">Checkout</h1>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <h2>Thank you for your purchase</h2>
        <p>Your order number is: <mark className="highlight">7383023484672619804</mark></p>
        <Link to="/"><Button variant="outline-primary">Continue Shopping</Button></Link>
      </div>
    </Container>
  )
}