import { Card, Row, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail({ id, name, img, category, description, price, stock }) {
  return (
    <Card className="p-3 shadow-lg border-0">
      <Row>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Card.Img
            src={img}
            alt={name}
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </Col>
        <Col md={6}>
          <Card.Body>
            <h1 className="display-5">{name}</h1>
            <h3 className="text-muted text-capitalize">{category}</h3>
            <p className="lead mt-4">{description}</p>
            <h2 className="text-danger my-4">${price}</h2>

            <p>Stock disponible: {stock}</p>

            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}
            />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ItemDetail;
