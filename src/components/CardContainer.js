import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const CardContainer = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get("/api/movies");

    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container w-[70%] mx-auto m-5 mt-10">
      {movies.map((movie) => (
        <Cards movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default CardContainer;
