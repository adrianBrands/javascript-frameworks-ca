import {  Container, Row, Col } from "react-bootstrap";
import { Rating } from "../Rating/Rating";
export default function Review(data){
  const productData = data;
  
  if (productData.length >= 1){
    return (
    <div>
        {productData.map((product) => (
          <Container className="mt-3 border-bottom" key={product.id}>
            <Row>
              <Col sm={8}><cite title="Source Title">{product.description}</cite></Col>
              <Col>{product.username}</Col>
              <Col>rating: {product.rating}</Col>
              <Col><Rating stars={product.rating}/></Col>
            </Row>
          </Container>
        ))}
      </div>
    )
  } else {
    return (
      <div className="d-flex justify-content-center">There is no reviews on this item</div>
    )
  }
}