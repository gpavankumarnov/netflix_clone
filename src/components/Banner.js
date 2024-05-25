import React, { useEffect, useState } from "react";
import instance from "../api/axios";
import requests from "../request";
import './Banner.css'
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    //We just want one api data object to showcase in header of netflix.
    const fetchApiData = async () => {
      const response = await instance.get(requests.fetchNetflixOriginals);
      //Math.random - returns number below -> 0 to 1
      console.log(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      ); // this return [{}, {}, {}]
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };
    fetchApiData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {/* title */}

      {/* div > 2 buttons */}
      {/* description */}
      <div class="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">{movie?.overview}</h1>
        </div>
      </div>
    </header>
  );
};

export default Banner;
