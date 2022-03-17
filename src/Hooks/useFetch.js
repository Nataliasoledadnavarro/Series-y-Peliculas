import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../contexto/Context";

const useFetch = (url) => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const [peliculas, setPeliculas] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [lenguajeSeleccionado, params.nombreBusqueda]);

  return peliculas;
};

export default useFetch;
