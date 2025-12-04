import { Col, Card, Button, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ id, name, img, price, category }) {
  return (
    <Col md={4} lg={3} className="mb-4">
      <Card className="h-100 shadow-sm card-hover">
        <Card.Img
          variant="top"
          src={img}
          className="p-3"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Categiría: {category} <br />
            Precio: ${price}
          </Card.Text>
          <Link to={`/item/${id}`} className="mt-auto">
            <Button variant="primart" className="w-100">
              Ver Detalle
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
