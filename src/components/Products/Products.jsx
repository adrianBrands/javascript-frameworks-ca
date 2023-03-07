import { default as ApiHook } from "../../api/Hook";
import { Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";


export default function Products() {
  const { data, isLoading, isError } = ApiHook(
    "https://api.noroff.dev/api/v1/online-shop",
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  //console.log(data);

  return (
    <Container>
      <Row md={2} xs={1} lg={3} className="g-3">
      {data.map((product) => (
      
        
          <Col key={product.id}>
            <Card className="h-100">
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

