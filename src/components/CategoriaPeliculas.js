import { useState, useEffect } from "react";
import Carousel from "../components/Carousel"

const CategoriaPeliculas = ({ url }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch( url )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  console.log(peliculas);

  return (
    <Carousel data={peliculas}/>
  );
};

export default CategoriaPeliculas;
