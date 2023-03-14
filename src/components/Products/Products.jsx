import { default as ApiHook } from "../../api/Hook";
import { Container, Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { useState } from "react";
//import DiscountedPrice from "../DiscountedPrice/DiscountedPrice";

export default function Products() {
  const { data, isLoading, isError } = ApiHook("https://api.noroff.dev/api/v1/online-shop",[]);
  const [search, setSearch ] = useState("");
  
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  console.log(data)
  
  const handleSubmit = (e) => setSearch(e.target.value);
  
  const filter = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <Form className="d-flex mb-3" >
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 searchForm"
          aria-label="Search"
          onChange={handleSubmit}
          value={search}
        />
      </Form>
      <Row md={2} xs={1} lg={3} className="g-3">
        {filter.map((product) => (
        <Col key={product.id}>
          <Card className="h-100 shadow-sm">
            <Card.Img style={{width: "100%", height: "40vh", objectFit: "cover"}} variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.discountedPrice}</Card.Text>
              <Card.Text>{product.price}</Card.Text>
              <Card.Text>{product.rating}</Card.Text>
              <Link to={`/product/${product.id}`}>product id</Link>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
}

