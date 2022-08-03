import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.link} />
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.subtitulo}</Card.Text>
      </Card>
    </div>
  );
}
export default Cards;
