//import { default as ApiHook } from "../../api/Hook";
import { useParams } from "react-router-dom";
import { Container, Button, Card, Image, Row, Col, Stack} from "react-bootstrap";
import React, { useEffect, useState } from 'react';

import {default as Reviews} from "../reviews/reviews";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Product() {
  const {getProductQuantity, addProductQuantity, cartItems} = useShoppingCart();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

 
  const test = Reviews(data.reviews);
  
  
  const quantity = getProductQuantity(data.id)
  
  cartItems.map(item => ( 
    console.log(item)
  ))

  return (
    <Container>
      <Row md={2} xs={1} lg={2}>
        <Col className="lg-8">
          <h1 className="fw-lighter">{data.title}</h1>
          <Image className="shadow" src={data.imageUrl} alt="Description" width="100%" height="auto" rounded />
        </Col>
        <Col className="lg-3 mt-5">
          <div>
            <h2 className="border-bottom">Description:</h2>
            <p className="fw-bold mt-3">{data.description}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsa, delectus corporis quas nihil esse consectetur reiciendis
               architecto magnam eius error facere voluptatum doloremque ad minima repellendus ipsam, suscipit non?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ad consequuntur magni quis, illo sunt quod est aperiam unde eveniet
               consequatur ex. Iusto sint totam accusamus harum, similique esse eum!</p>
          </div>
          <Card>
            <Card.Body>
              <Stack direction="horizontal" gap={3}>
                <div><Card.Text>{data.price},-</Card.Text></div>
                <div>{data.discountedPrice},-</div>
                <div></div>
                <div className="ms-auto">10%,-</div>
              </Stack>
            </Card.Body>
          </Card>
          <Card  className="mt-3">
          <Card.Header  className="text-center" as="h4">Reviews</Card.Header>
            <Card.Body>
            {test}
            </Card.Body>
          </Card>
          <Stack gap={2} className="col-md-5 mx-auto mt-5">
            <Button onClick={() => addProductQuantity(data.id)} variant="outline-warning" size="lg">Add to Cart</Button>
            <p>{quantity}</p>
          </Stack>
        </Col>
      </Row>
    </Container>
    
  );

}















/*export default function Product() {
  let { id } = useParams();
  const { data, isLoading, isError } = ApiHook(
    `https://api.noroff.dev/api/v1/online-shop/${id}`);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }


  

 

  //const test = Reviews(data.reviews);
  


  return (
    <Container>
      <Row md={2} xs={1} lg={2}>
        <Col className="lg-8">
          <h1 className="fw-lighter">{data.title}</h1>
          <Image className="shadow" src={data.imageUrl} alt="Description" width="100%" height="auto" rounded />
        </Col>
        <Col className="lg-3 mt-5">
          <div>
            <h2 className="border-bottom">Description:</h2>
            <p className="fw-bold mt-3">{data.description}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsa, delectus corporis quas nihil esse consectetur reiciendis
               architecto magnam eius error facere voluptatum doloremque ad minima repellendus ipsam, suscipit non?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ad consequuntur magni quis, illo sunt quod est aperiam unde eveniet
               consequatur ex. Iusto sint totam accusamus harum, similique esse eum!</p>
          </div>
          <Card>
            <Card.Body>
              <Stack direction="horizontal" gap={3}>
                <div><Card.Text>{data.price},-</Card.Text></div>
                <div>{data.discountedPrice},-</div>
                <div className="ms-auto"><Button variant="outline-warning" size="sm">Add to cart</Button></div>
              </Stack>
              <div>{test}</div>
              </Card.Body>
              
          </Card>
          
        </Col>
      </Row>
    </Container>
    
  );

  
}*/