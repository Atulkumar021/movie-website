import React, { useContext, useEffect, useState } from "react";

export const apiurl=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setquery] = useState("titanic");
  const [isloading, setisloading] = useState(true);
  const [movie, setmovie] = useState([]);
  const [iserror, setiserror] = useState({ show: false, msg: "" });

  const getmovie = async (url) => {
   
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setisloading(false);
        setmovie(data.Search);
      } else {
        setiserror({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {}
  };
  useEffect(() => {
    // let timerout =setTimeout(()=>{
      getmovie(`${apiurl}&s=${query}`);
    // },2000)

    // return ()=>clearTimeout(timerout)
  }, [query]);
  
      console.log(movie)
  return (
    <AppContext.Provider value={{ isloading, setiserror, movie,query, setquery ,apiurl}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
