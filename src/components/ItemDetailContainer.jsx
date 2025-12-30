import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <Container className="mt-5">
      {loading ? <p>Cargando detalle...</p> : <ItemDetail {...product} />}
    </Container>
  );
}

export default ItemDetailContainer;
