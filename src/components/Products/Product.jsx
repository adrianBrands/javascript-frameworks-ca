//import { default as ApiHook } from "../../api/Hook";
import { useParams } from "react-router-dom";
import { Container, Button, Card, Image, Row, Col, Stack} from "react-bootstrap";
import React, { useEffect, useState } from 'react';

import {default as Reviews} from "../Reviews/Reviews";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Product() {
  const {getProductQuantity, addProductQuantity} = useShoppingCart();
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

 
  const ProductReviews = Reviews(data.reviews);

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
                <div><Card.Text>{data.price === data.discountedPrice ? `${data.price},-` : null}</Card.Text></div>
                <div className="text-decoration-line-through text-muted">{data.price !== data.discountedPrice ? `${data.price},-` : null}</div>
                <div className="text-success">{data.price !== data.discountedPrice ? data.discountedPrice : null}</div>
                <div className="ms-auto text-success">{data.price !== data.discountedPrice ? `${Math.round(((data.price - data.discountedPrice) / data.price) * 100) }% ` : null}</div>
              </Stack>
            </Card.Body>
          </Card>
          <Card  className="mt-3">
          <Card.Header  className="text-center" as="h4">Reviews</Card.Header>
            <Card.Body>
            {ProductReviews}
            </Card.Body>
          </Card>
          <Stack gap={2} className="col-md-5 mx-auto mt-5">
            <Button className="mb-5"  onClick={() => addProductQuantity(data.id)} variant="outline-primary" size="lg">Add to Cart</Button>
          </Stack>
        </Col>
      </Row>
    </Container>
    
  );

}
