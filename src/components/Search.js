function Search({ setPlants, getAllPlants }) {
  const updateSearchResults = (e) => {
    getAllPlants().then((allPlants) => {
      const filteredPlants = allPlants.filter(
        (plant) =>
          plant.name.toLowerCase().includes(e.target.value) ||
          e.target.value === "",
      );
      setPlants(filteredPlants);
    });
  };
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={updateSearchResults}
      />
    </div>
  );
}

export default Search;
