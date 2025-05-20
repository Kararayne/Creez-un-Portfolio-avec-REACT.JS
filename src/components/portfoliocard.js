
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
       
        <Button variant="primary">Voir le site</Button>
      </Card.Body>
      { props.CardFooter ?  <Card.Footer className="CardColor">{props.CardFooter} 
      </Card.Footer> : null }
    </Card>
  );
}

export default ServiceCard;