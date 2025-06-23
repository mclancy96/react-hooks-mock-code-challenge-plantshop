import { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return <PlantCard plant={plant} setPlants={setPlants} key={plant.id} />;
      })}
    </ul>
  );
}

export default PlantList;
