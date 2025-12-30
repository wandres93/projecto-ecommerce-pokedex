import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { Button } from "react-bootstrap";

const newProducts = [
  // --- FUEGO ---
  {
    name: "Vulpix",
    price: 600,
    category: "fuego",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    stock: 15,
    description: "Al nacer, Vulpix solo tiene una cola.",
  },
  {
    name: "Arcanine",
    price: 1500,
    category: "fuego",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    stock: 5,
    description: "Un Pokémon legendario en China.",
  },
  // --- AGUA ---
  {
    name: "Psyduck",
    price: 700,
    category: "agua",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    stock: 20,
    description: "Sufre de dolores de cabeza constantes.",
  },
  {
    name: "Gyarados",
    price: 2500,
    category: "agua",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    stock: 3,
    description: "Poco común en la naturaleza. Enorme y agresivo.",
  },
  // --- PLANTA ---
  {
    name: "Oddish",
    price: 450,
    category: "planta",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    stock: 25,
    description: "Durante el día entierra su cara en el suelo.",
  },
  {
    name: "Sceptile",
    price: 1400,
    category: "planta",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
    stock: 8,
    description: "Las hojas que le crecen en el cuerpo están muy afiladas.",
  },
  // --- ELECTRICO ---
  {
    name: "Jolteon",
    price: 1100,
    category: "electrico",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    stock: 12,
    description: "Acumula iones negativos en la atmósfera.",
  },
];

export const UploadData = () => {
  const upload = async () => {
    const productsCollection = collection(db, "products");
    for (const product of newProducts) {
      await addDoc(productsCollection, product);
    }
    alert("¡Todos los Pokémon han sido subidos a Firebase!");
  };
};
