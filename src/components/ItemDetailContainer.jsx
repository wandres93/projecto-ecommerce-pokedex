import { useState, useEffect } from "react";
import { getProductById } from "../asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <Container className="mt-5">
      {loading ? (
        <p className="text-center">Cargando detalle...</p>
      ) : (
        <ItemDetail {...product} />
      )}
    </Container>
  );
}

export default ItemDetailContainer;
