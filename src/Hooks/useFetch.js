import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../contexto/Context";

const useFetch = (url) => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const [resultados, setResultados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [paginasTotales, setPaginasTotales] = useState(1);
  const [cast, setCast] = useState([]);
  const [episodios, setEpisodios] = useState([]);
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResultados(data.results);
        setPaginasTotales(data.total_pages);
        setPagina(data.page);
        setCast(data.cast);
        setEpisodios(data.episodes);
        setData(data);
      });
  }, [lenguajeSeleccionado, params.nombreBusqueda, url]);

  return {
    resultados: resultados,
    pagina: pagina,
    paginasTotales: paginasTotales,
    cast: cast,
    episodios: episodios,
    data: data,
  };
};

export default useFetch;
