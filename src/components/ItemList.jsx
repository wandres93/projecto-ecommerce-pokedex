import Item from "./Item";
import { Row } from "react-bootstrap";

function ItemList({ products }) {
  return (
    <Row>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </Row>
  );
}

export default ItemList;
