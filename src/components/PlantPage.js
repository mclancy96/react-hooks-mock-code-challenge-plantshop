import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const getAllPlants = async () => {
    return await fetch("http://localhost:6001/plants").then((r) => r.json());
  };
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search
        plants={plants}
        setPlants={setPlants}
        getAllPlants={getAllPlants}
      />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
