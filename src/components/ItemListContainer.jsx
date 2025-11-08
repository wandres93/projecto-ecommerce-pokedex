import { Container, Card } from "react-bootstrap";

function ItemListContainer({ greeting }) {
  return (
    <Container className="text-center mt-5">
      <h2 className="mb-4">{greeting}</h2>
      <Card className="p-4 bg-light border-0 shadow-sm">
        <p>¡Atrapa a tus Pokémon favoritos y agrégalos a tu colección!</p>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
          width="100"
        />
        <p className="mt-3">Próximamente: catálogo de Pokémon disponibles ⚡</p>
      </Card>
    </Container>
  );
}

export default ItemListContainer;
