import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../api/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  //A snippet of code which runs based on condition variable
  useEffect(() => {
    /**blank [] = run once when row loads and never again
        [movies] = every time movies variable changes, it changes*/
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (moviename) => {
    console.log(moviename);
    if (trailerURL != "") {
      setTrailerURL("");
    }
    else
    {
        movieTrailer(moviename)
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => 
                handleClick(movie.name || movie.title || movie.original_name)
            }
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerURL != "" && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
