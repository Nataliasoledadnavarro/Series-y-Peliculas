import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import Card from "../components/Card";
import "../styles/components/_Resultados-busqueda.scss";
import { capitalizar } from "../auxiliares/Funciones";
import Context from "../contexto/Context";
import { titulosPeliculas, urlBase, apiKey } from "../auxiliares/Variables";
import useFetch from "../Hooks/useFetch";

const ResultadosBusqueda = () => {
  const params = useParams();
  const resultados = useFetch(
    `${urlBase}/search/multi?api_key=${apiKey}&language=es-US&query=${params.nombreBusqueda}&page=1`
  );
  //let [paginaActual, setPaginaActual] = useState(1);
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  return (
    <div className="contenedor-seccion">
      <section>
        <h2>
          {titulosPeliculas[lenguajeSeleccionado].busqueda}{" "}
          {capitalizar(params.nombreBusqueda)}
        </h2>
        <div className="contenedor-resultados">
          {resultados.map((resultado) => (
            <Card resultado={resultado} tipo={resultado.media_type}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResultadosBusqueda;
