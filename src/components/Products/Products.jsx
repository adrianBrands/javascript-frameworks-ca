import { default as ApiHook } from "../../api/Hook";
import { Button, Container, Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const { data, isLoading, isError } = ApiHook("https://api.noroff.dev/api/v1/online-shop",[]);
  const [search, setSearch ] = useState("");
 
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  
  const handleSubmit = (e) => setSearch(e.target.value);
  
  const filter = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  
  function DropDownSuggestions(){
    if(search === ""){
      return null
    } else {
      return (<div>{filter.map((product) => ( 
                <ul key={product.id} className="list-group">
                  <Link className="productLink" to={`/product/${product.id}`}>
                  <Button className="rounded list-group-item list-group-item-action">{product.title}</Button>
                  </Link>
                </ul>
              ))}
              </div>) 
    }
  }

  return (
    <Container className="mb-5">
      <Form className="" >
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 searchForm"
          aria-label="Search"
          onChange={handleSubmit}
          value={search}
        />
        <DropDownSuggestions/>
      </Form>
      <Row md={2} xs={1} lg={3} className="g-3 mt-3">
        {filter.map((product) => (
        <Col key={product.id}>
          <Link className="productLink" to={`/product/${product.id}`}>
            <Card className="productCard h-100 shadow-sm">
              <Card.Img className="cardImg" style={{width: "100%", height: "40vh", objectFit: "cover"}} variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="border-bottom">{product.description}</Card.Text>
                <Card.Text>{product.price === product.discountedPrice ? `${product.price},-` : null}</Card.Text>
                <Card.Text className="text-decoration-line-through text-muted">{product.price !== product.discountedPrice ? `before: ${product.price},-` : null}</Card.Text>
                <Card.Text className="text-success">{product.price !== product.discountedPrice ? `${product.discountedPrice},-` : null}</Card.Text>
                <Card.Text className="percentage text-success">{product.price !== product.discountedPrice ? `${Math.round(((product.price - product.discountedPrice) / product.price) * 100) }% ` : null}</Card.Text>
                <Card.Text>rating: {product.rating}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center align-items-center bg-primary">
              <Card.Text className="productsLink" href={`/product/${product.id}`}>Buy now</Card.Text>
              </Card.Footer>
            </Card>
          </Link>
        </Col>
        ))}
      </Row>
    </Container>
  );
}

