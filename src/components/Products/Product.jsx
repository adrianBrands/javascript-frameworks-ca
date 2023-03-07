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

  //console.log(data);

  return (
    <Container>
      <Row md={2} xs={1} lg={2}>
        <Col className="lg-8">
          <h1>{data.title}</h1>
          <Image src={data.imageUrl} alt="Description" width="100%" height="auto" rounded />
        </Col>
        <Col className="lg-3 mt-5">
          <h2 className="border-bottom">Description:</h2>
          <p className="fw-bold mt-3">{data.description}</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ipsa, delectus corporis quas nihil esse consectetur reiciendis
             architecto magnam eius error facere voluptatum doloremque ad minima repellendus ipsam, suscipit non?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ad consequuntur magni quis, illo sunt quod est aperiam unde eveniet
             consequatur ex. Iusto sint totam accusamus harum, similique esse eum!</p>
        </Col>
      </Row>
    </Container>
    
  );
}