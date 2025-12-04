import { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="mb-2">
        <Button variant="outline-secondary" onClick={decrement}>
          -
        </Button>
        <span className="mx-3 fs-4">{quantity}</span>
        <Button variant="outline-secondary" onClick={increment}>
          +
        </Button>
      </div>
      <Button
        variant="primary"
        onClick={() => onAdd(quantity)}
        disabled={!stock}
        className="w-100"
      >
        Agregar al Carrito
      </Button>
    </div>
  );
}

export default ItemCount;
