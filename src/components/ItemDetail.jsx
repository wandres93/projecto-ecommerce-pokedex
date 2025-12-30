import { useState, useContext } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ItemDetail({ id, name, img, category, description, price, stock }) {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = { id, name, price, img };
    addItem(item, quantity);
  };

  return (
    <Card className="p-3 shadow-lg border-0">
      <Row>
        <Col md={6} className="d-flex justify-content-center">
          <Card.Img
            src={img}
            alt={name}
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </Col>
        <Col md={6}>
          <Card.Body>
            <h1>{name}</h1>
            <h3>${price}</h3>
            <p>{description}</p>
            <p>Stock: {stock}</p>

            {quantityAdded > 0 ? (
              <Link to="/cart" className="btn btn-success w-100">
                Terminar compra
              </Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ItemDetail;
