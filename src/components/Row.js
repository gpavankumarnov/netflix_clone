import instance from "../api/axios";
import React, {useState, useEffect} from "react";
import './Row.css'


const Row = ({title, fetchUrl, isLargeRow}) => {

 let baseURL = "https://image.tmdb.org/t/p/original/"

  const [movies, setMovies] = useState([]);

  /**A snippet of code which runs based on a specific condition/variable */
  useEffect(() => {
  const fetchApiData = async() => {
    //this axios request will be - www.google.com(baseURL)/fetchURl
       const response = await instance.get(fetchUrl);
       console.log("response", response)
       setMovies(response.data.results)
  }
  fetchApiData()
},[fetchUrl]);

console.table("movies", movies)

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* container - carousel posters */}
      <div className="row__posters">

{movies.map(movie => (
  <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseURL}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
))}

      </div>

    </div>
  );
};

export default Row;
