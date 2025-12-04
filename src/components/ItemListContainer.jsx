import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categotyId } = useParams();

  useEffect(() => {
    setLoading(true);

    const asyncFunc = categotyId ? getProductsByCategory : getProducts;

    asyncFunc(categotyId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categotyId]);

  return (
    <Container className="text-center mt-5">
      <h2 className="text-center mb-4">
        {greeting}{" "}
        <span style={{ textTransform: "capitalize" }}>{categotyId}</span>{" "}
      </h2>
      {loading ? (
        <p className="text-center">Cargando Pokémon...</p>
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
}

export default ItemListContainer;
