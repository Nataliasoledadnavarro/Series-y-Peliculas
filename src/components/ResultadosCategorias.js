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
  const url = () => {
    if (params.categoria === "trending") {
      return `${urlBase}/trending/${params.tipo}/week?api_key=${apiKey}&language=${lenguajeSeleccionado}`;
    } else {
      return `${urlBase}/${params.tipo}/${params.categoria}?api_key=${apiKey}&language=${lenguajeSeleccionado}`;
    }
  };
  const { resultados, page, totalPages, cast } = useFetch(url());

  return (
    <div className="contenedor-seccion">
      <section>
        <h2></h2>
        <div className="contenedor-resultados">
          {resultados.map((resultado) => (
            <Card resultado={resultado} tipo={resultado.media_type} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResultadosCategorias;
