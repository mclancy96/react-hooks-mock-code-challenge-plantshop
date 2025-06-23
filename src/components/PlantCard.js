import { useState } from "react";

function PlantCard({ plant, setPlants }) {
  const [inStock, setInStock] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);
  const toggleInStock = () => {
    setInStock((curr) => !curr);
  };
  const toggleEditing = () => {
    setIsEditing((curr) => !curr);
  };
  const updateNewPrice = (e) => {
    setNewPrice(parseFloat(e.target.value));
  };

  const handleSubmit = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      body: JSON.stringify({ price: parseFloat(newPrice) }),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((updatedPlant) => {
        setPlants((plants) =>
          plants.map((p) => (p.id === plant.id ? updatedPlant : p)),
        );
        toggleEditing();
      });
  };

  const editPriceForm = (
    <span>
      <input
        type="number"
        onChange={updateNewPrice}
        value={newPrice}
        step={0.01}
      />
      <button onClick={handleSubmit}>Save</button>
    </span>
  );
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <div>
        Price:{" "}
        {isEditing ? editPriceForm : <span>{plant.price.toFixed(2)}</span>}
      </div>
      <div>
        {inStock ? (
          <button className="primary" onClick={toggleInStock}>
            In Stock
          </button>
        ) : (
          <button onClick={toggleInStock}>Out of Stock</button>
        )}
        <button onClick={toggleEditing}>
          {isEditing ? "Cancel Edit" : "Edit Price"}
        </button>
      </div>
    </li>
  );
}

export default PlantCard;
