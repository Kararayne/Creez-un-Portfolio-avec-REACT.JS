import Card from "react-bootstrap/Card";
import "../index.css";

function ServiceCard (props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.Src}/>
      <Card.Body>
        <Card.Title> {props.CardTitle}</Card.Title>
        <Card.Text>
          {props.CardText}
        </Card.Text>
       
      
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;