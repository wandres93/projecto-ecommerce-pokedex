const products = [
  {
    id: "1",
    name: "Pikachu",
    price: 1000,
    category: "electrico",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    stock: 25,
    description:
      "Pikachu es un Pokémon de tipo eléctrico. Almacena electricidad en sus mejillas.",
  },
  {
    id: "2",
    name: "Charmander",
    price: 800,
    category: "fuego",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    stock: 10,
    description:
      "La llama en la punta de su cola indica su estado de salud y ánimo.",
  },
  {
    id: "3",
    name: "Squirtle",
    price: 1200,
    category: "agua",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    stock: 15,
    description:
      "Cuando se siente amenazado, se retrae dentro de su caparazón y lanza agua.",
  },
  {
    id: "4",
    name: "Bulbasaur",
    price: 900,
    category: "planta",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    stock: 8,
    description:
      "Lleva una semilla en su lomo desde que nace, la cual crece con él.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
