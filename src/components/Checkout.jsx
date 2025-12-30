import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Container, Form, Button } from "react-bootstrap";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const order = {
        buyer: formData,
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const orderRef = collection(db, "orders");
      const orderAdded = await addDoc(orderRef, order);

      setOrderId(orderAdded.id);
      clearCart();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <Container className="text-center mt-5">
        <h1 className="text-success">¡Gracias por tu compra! 🛍️</h1>
        <h3>
          Tu número de orden es: <span className="text-primary">{orderId}</span>
        </h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2>Checkout</h2>
      <Form onSubmit={createOrder}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleChange}
            required
            placeholder="Ash Ketchum"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            onChange={handleChange}
            required
            placeholder="555-1234"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            required
            placeholder="ash@pueblopaleta.com"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={loading}
          className="w-100"
        >
          {loading ? "Generando orden..." : "Generar Orden"}
        </Button>
      </Form>
    </Container>
  );
}

export default Checkout;
