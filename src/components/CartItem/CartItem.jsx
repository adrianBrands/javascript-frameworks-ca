import React from "react";
import { Button, Col, Row  } from "react-bootstrap";
import { default as ApiHook } from "../../api/Hook";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function CartItem({id, quantity}) {
  const {removeFromCart} = useShoppingCart()
  const { data, isLoading, isError } = ApiHook("https://api.noroff.dev/api/v1/online-shop",[]);
  
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  
  const product = data.find(i => i.id === id)
  if(product == null) return null
  
  return (
  <Row className="mt-3 d-flex align-items-center">
    <Col sm>
      <img alt=""  src={product.imageUrl} style={{width: "300px", height: "150px", objectFit:"cover"}}/>
    </Col>
    <Col sm>
      <p className="fw-bold">{product.title}</p>
      <p className="text-muted">{product.discountedPrice},-</p>
      {quantity > 1 && ( <p className="text-muted">{quantity}x</p>) }
    </Col>
    <Col sm><div  className="d-flex justify-content-between align-items-center">
      {product.discountedPrice * quantity},-{" "}<span><Button variant="outline-danger"  onClick={() => removeFromCart(product.id)}>&times;</Button></span></div></Col>
  </Row>
  )
}

