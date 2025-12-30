import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/config"; // Tu archivo de config

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">{greeting}</h2>
      {loading ? <p>Cargando...</p> : <ItemList products={products} />}
    </Container>
  );
}

export default ItemListContainer;
