import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setMovie(response.data.data);
        console.log("data="+ response.data.data)
      } catch (error) {
        console.log("Error fetching movie:", error);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div>
        <center>
        <h1>Movie Details</h1>
      {movie ? (
        <div>
          <h2>
            {movie.first_name} {movie.last_name}
          </h2>
          <p>Email: {movie.email}</p>
          <p>
            Avatar: <img src={movie.avatar} alt={movie.first_name} />
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
        </center>
     
    </div>
  );
}

export default MovieDetails;
