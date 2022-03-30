import { useParams } from "react-router-dom";
import { useContext } from "react";
import Card from "../components/Card";
import "../styles/components/_Resultados.scss";
import Context from "../contexto/Context";
import {
  titulosSeries,
  titulosPeliculas,
  urlBase,
  apiKey,
} from "../auxiliares/Variables";
import useFetch from "../Hooks/useFetch";

const ResultadosCategorias = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  //Función que retorna url correspondiente a la categoría seleccionada. Si es trending el orden del endpoint está invertido.
  const url = () => {
    if (params.categoria === "trending") {
      return `${urlBase}/trending/${params.tipo}/week?api_key=${apiKey}&language=${lenguajeSeleccionado}`;
    } else {
      return `${urlBase}/${params.tipo}/${params.categoria}?api_key=${apiKey}&language=${lenguajeSeleccionado}`;
    }
  };

  // Función que retorna los titulos segun el tipo en el que se encuentre actualmente.
  const titulos = (tipo) => {
    if (tipo === "tv") {
      return titulosSeries;
    } else {
      return titulosPeliculas;
    }
  };

  /* Función que retorna le título final teniendo en cuenta el listado de títulos correspondiente y 
  filtrando por el lenguaje que muestra el contexto.*/

  const tituloResultados = (titulos, categoria) => {
    if (categoria === "trending") {
      return titulos[lenguajeSeleccionado].tendencia;
    } else if (categoria === "popular") {
      return titulos[lenguajeSeleccionado].populares;
    } else if (categoria === "top_rated") {
      return titulos[lenguajeSeleccionado].criticas;
    } else if (categoria === "upcoming") {
      return titulos[lenguajeSeleccionado].proximamente;
    } else if (categoria === "now_playing" || categoria === "on_the_air") {
      return titulos[lenguajeSeleccionado].aire;
    }
  };

  const { resultados, page, totalPages, cast } = useFetch(url());

  return (
    <div className="contenedor-seccion">
      <section>
        <h2>{tituloResultados(titulos(params.tipo), params.categoria)}</h2>
        <div className="contenedor-resultados">
          {resultados.map((resultado) => (
            <Card resultado={resultado} tipo={params.tipo} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResultadosCategorias;
