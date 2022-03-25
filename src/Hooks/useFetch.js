import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../contexto/Context";

const useFetch = (url) => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const [resultados, setResultados] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const [cast, setCast] = useState([])
  const params = useParams();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        setResultados(data.results);
        setTotalPages(data.total_pages)
        setPage(data.page);
        setCast(data.cast)
      });
  }, [lenguajeSeleccionado, params.nombreBusqueda]);

  return {
    resultados: resultados,
    page: page,
    totalPages:totalPages,
    cast: cast,
  }
};

export default useFetch;
