import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import './Movies.css'
const Movies = () => {
  const { movie } = useGlobalContext();

  return (
    <div>

     <div className="container">

      {movie.map((arrelem) => {
        const { imdbID, Title, Poster } = arrelem;
        return (
         <NavLink to={`movie/${imdbID}`} key={imdbID} style={{textDecoration:'none'}}>
           
           <div className="cards">
            <p>{Title}</p>
            <img src={Poster} alt={imdbID}/>
           </div>

         </NavLink>
        );
      })}
      </div>
    </div>
  );
};

export default Movies;
