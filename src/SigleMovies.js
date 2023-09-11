import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { apiurl, useGlobalContext } from "./context";
import './Singlemovie.css'
const SigleMovies = () => {
  const { id } = useParams();
  const [isloading, setisloading] = useState(true);
  const [movie, setmovie] = useState('');
  const [iserror, setiserror] = useState({ show: false, msg: "" });

  const getmovie = async (url) => {
    setisloading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setisloading(false);
        setmovie(data);
      } else {
        setiserror({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {}
  };
  useEffect(() => {
    let timerout = setTimeout(() => {
      getmovie(`${apiurl}&i=${id}`);
    }, 2000);
    return () => clearTimeout(timerout);
    
  }, [id]);
  console.log(movie)
  if (isloading) {
    return (
      <div className="singlesection" >
        <div className="loading">Loading...</div>
      </div>
    );
  }
  


  return (
    <>
  <div className="contaienr">
       <div className="card mb-3" >
         <div className="row g-0">
      
      
          <div className="col-md-4 movieimg">
            <img src={movie.Poster} className="img-fluid rounded-start" alt="..." />
          </div>
           <div className="col-md-8">
             <div className="card-body">
               <h5 className="card-title">{movie.Title}</h5>
               <p className="card-text">{movie.Plot} </p>
             <p className="card-text">
               <small className="text-body-secondary">
                <p>Actors</p>
                <p>{movie.Actors}</p>
               </small>
             </p>
               </div>
         </div>
         </div>
       </div>
       <button type="button" className="btn btn-primary "><NavLink to="/" className="button">Go Back</NavLink></button>
       
       </div>
    </>
  );
};

export default SigleMovies;
