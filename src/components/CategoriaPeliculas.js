import { useState, useEffect } from "react";

const CategoriaPeliculas = ({ url }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch( url )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  console.log(peliculas);

  return (
    <div>
      <h3>titulo</h3>
      <div>peliculas</div>
    </div>
  );
};

export default CategoriaPeliculas;
