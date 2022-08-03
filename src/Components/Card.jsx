import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <div id="tarjetas">
      <Card style={{ width: "16rem", textAlign: "center", margin: "0 0 4px 0"}}>
        <Card.Img variant="top" src={props.link} />
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.subtitulo}</Card.Text>
      </Card>
    </div>
  );
}
export default Cards;
