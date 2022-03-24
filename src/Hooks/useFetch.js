import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../contexto/Context";

const useFetch = (url) => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const [resultado, setResultado] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResultado(data.results));
  }, [lenguajeSeleccionado, params.nombreBusqueda]);

  return resultado;
};

export default useFetch;
