import React, { useEffect, useState } from "react";

const RocketFilter = ({ fetchData, rockets, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [typeOptions, setTypeOptions] = useState([]);

  useEffect(() => {
    // Extract unique type values from the rockets
    const uniqueTypes = [
      ...new Set(rockets.map((rocket) => rocket.rocket_type)),
    ];
    setTypeOptions(uniqueTypes);
  }, [rockets]);

  const handleSearch = () => {
    filterRockets();
  };

  const filterRockets = () => {
    let filteredData = rockets;

    // Filter by rocket name
    if (searchTerm.trim() !== "") {
      filteredData = filteredData.filter((rocket) =>
        rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
      if (searchTerm.trim() === "") {
          fetchData();
      }

    // Filter by rocket type
    if (selectedType) {
      filteredData = filteredData.filter(
        (rocket) => rocket.rocket_type === selectedType
      );
    }

    onFilterChange(filteredData);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleResetFilter = () => {
    setSearchTerm("");
    setSelectedType("");
    filterRockets();
  };

  return (
    <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 mb-4 mt-2">
      <div className="flex">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleSearch}
          className="px-2 py-1 ml-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        >
          Search
        </button>
        <button
          onClick={handleResetFilter}
          className="px-2 py-1 ml-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        >
          Reset
        </button>
      </div>
      <select
        value={selectedType}
        onChange={handleTypeChange}
        className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      >
        <option value="">All Types</option>
        {typeOptions.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RocketFilter;
