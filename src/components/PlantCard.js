import { useState } from "react";

function PlantCard({ plant, setPlants }) {
  const [inStock, setInStock] = useState(true);
  const toggleInStock = () => {
    setInStock((curr) => !curr);
  };
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price.toFixed(2)}</p>
      {inStock ? (
        <button className="primary" onClick={toggleInStock}>
          In Stock
        </button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
