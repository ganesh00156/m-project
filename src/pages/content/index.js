import React, { useEffect, useState } from "react";
import "./style.css";
import RocketFilter from "./RocketFilter";
import Pagination from "./Pagination";

const Rockets = () => {
  const [rockets, setRockets] = useState([]);
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rocketsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost/react-api/api.php");
      const jsonData = await response.json();
      setRockets(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterRockets();
  }, [rockets, currentPage]);

  const filterRockets = () => {
    const indexOfLastRocket = currentPage * rocketsPerPage;
    const indexOfFirstRocket = indexOfLastRocket - rocketsPerPage;
    const currentRockets = rockets.slice(indexOfFirstRocket, indexOfLastRocket);
    setFilteredRockets(currentRockets);
  };

  const handleFilterChange = (filteredData) => {
    setRockets(filteredData);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <RocketFilter
            fetchData={fetchData}
            rockets={rockets}
            onFilterChange={handleFilterChange}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRockets.map((rocket) => (
              <div key={rocket.id} className="bg-white p-4 shadow my-2 sm:my-0">
                <h3 className="text-lg font-bold mb-2">{rocket.rocket_name}</h3>
                {rocket.flickr_images.length > 0 && (
                  <img
                    src={rocket.flickr_images[0]}
                    alt="Rocket"
                    className="w-full h-48 object-cover"
                  />
                )}
                <p className="mb-2 mt-2">{rocket.description}</p>
              </div>
            ))}
          </div>

          <Pagination
            rocketsPerPage={rocketsPerPage}
            totalRockets={rockets.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default Rockets;
