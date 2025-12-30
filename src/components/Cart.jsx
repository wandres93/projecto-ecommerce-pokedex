import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, clearCart, totalQuantity, total, removeItem } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <Container className="text-center mt-5">
        <h1>No hay items en el carrito 🛒</h1>
        <Link to="/" className="btn btn-primary mt-3">
          Volver a Productos
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Tu Carrito</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cant</th>
            <th>Precio Unit</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>${p.price}</td>
              <td>${p.price * p.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => removeItem(p.id)}>
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Total: ${total}</h3>
      <div className="d-flex justify-content-between mt-4">
        <Button variant="outline-danger" onClick={() => clearCart()}>
          Limpiar Carrito
        </Button>
        <Link to="/checkout" className="btn btn-success">
          Finalizar Compra
        </Link>
      </div>
    </Container>
  );
}

export default Cart;
