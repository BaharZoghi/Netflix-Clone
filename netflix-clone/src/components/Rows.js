import React, { useState, useEffect } from "react";
import "../styles/row.css";
import axios from "../util/axios";

const movie_url = "https://image.tmdb.org/t/p/original";

function Rows({ title, fetchURL, isLargeRow }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovie(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  return (
    <div className="rows">
      <h1>{title}</h1>
      <div className="posters_container">
        {movie.map(
          (items) =>
            ((isLargeRow && items.poster_path) ||
              (!isLargeRow && items.backdrop_path)) && (
              <img
                key={items.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${movie_url}${
                  isLargeRow ? items.poster_path : items.backdrop_path
                }`}
                alt={items.name}
              ></img>
            )
        )}
      </div>
    </div>
  );
}

export default Rows;
