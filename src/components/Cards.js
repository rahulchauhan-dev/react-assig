import React from "react";

const Cards = ({ movie }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-lg rounded-lg">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1826&q=80"
            alt="movies"
          />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title font-bold ">{movie.name}</h2>
          <div>
            <p>⭐Rating : {movie.rating}</p>
            <p>📅Release Date : {movie.released}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
