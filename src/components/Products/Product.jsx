import { default as ApiHook } from "../../api/Hook";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";


export default function Product() {
  let { id } = useParams();
  const { data, isLoading, isError } = ApiHook(
    `https://api.noroff.dev/api/v1/online-shop/${id}`);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <Container>
      <Row>
        <Col className="lg-8">
          <h1>{data.title}</h1>
          <Image src={data.imageUrl} alt="Description" width="100%" height="auto" rounded />
        </Col>
        <Col className="lg-3">
        </Col>
      </Row>
    </Container>
    
  );
}