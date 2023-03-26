import { Card } from "react-bootstrap";

export function Rating({stars}){
  return <Card.Text className="stars">{"★".repeat(stars) + "☆".repeat(5 - stars)}</Card.Text>
}