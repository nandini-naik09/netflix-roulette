import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MovieSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?search=${query}`
        );
        setResults(response.data.data);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    }
  };

  const handleViewDetails = (id) => {
    navigate("/movie/" + id);
    // navigate(`/movie/${id}`);
    console.log(id);
  };

  return (
    <div>
      <center>
        <h1>Movie Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search movies..."
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {results.map((result) => (
            <li key={result.id} onClick={() => handleViewDetails(result.id)}>
              {result.first_name} {result.last_name}
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
}

export default MovieSearch;
