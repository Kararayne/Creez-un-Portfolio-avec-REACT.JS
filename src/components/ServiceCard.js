import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../index.css";

function ServiceCard(props) {
  return (
    <Card className="card-Shadow" style={{ width: "100%" }}>
      <Card.Img
        className={props.cssStyle}
        variant="top"
        src={props.Src}
        alt={props.alt}
      />
      <Card.Body>
        <Card.Title> {props.CardTitle}</Card.Title>
        <Card.Text>{props.CardText}</Card.Text>

        {props.Button ? (
          <Button variant="primary">
            Voir le site
          </Button>
        ) : null}
      </Card.Body>

      {props.CardFooter ? (
        <Card.Footer className="CardColor">
          {props.CardFooter}
        </Card.Footer>
      ) : null}
    </Card>
  );
}

export default ServiceCard;
