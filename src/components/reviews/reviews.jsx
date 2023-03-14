import {  Container, Row, Col } from "react-bootstrap";

export default function Reviews(data){
  const testData = data;
  
  if (testData === "undefined"){

  }
  if (testData.length >= 1){
    //console.log(data.length)
    return (
    <div>
        {testData.map((test) => (
          <Container className="mt-3 border-bottom" key={test.id}>
            <Row>
              <Col sm={8}><cite title="Source Title">{test.description}</cite></Col>
              <Col>{test.username}</Col>
              <Col>rating: {test.rating}</Col>
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