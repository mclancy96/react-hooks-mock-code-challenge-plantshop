import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search plants={plants} setPlants={setPlants} />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
