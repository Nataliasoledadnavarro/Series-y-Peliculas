import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import Card from "../components/Card";
import "../styles/components/_Resultados-busqueda.scss";
import { capitalizar } from "../auxiliares/Funciones";
import Context from "../contexto/Context";
import { titulosComunes, urlBase, apiKey } from "../auxiliares/Variables";
import useFetch from "../Hooks/useFetch";

const ResultadosBusqueda = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  //let [paginaActual, setPaginaActual] = useState(1);

  const resultados = useFetch(
    `${urlBase}/search/multi?api_key=${apiKey}&language=${lenguajeSeleccionado}&query=${params.nombreBusqueda}&page=1`
  );

  return (
    <div className="contenedor-seccion">
      <section>
        <h2>
          {titulosComunes[lenguajeSeleccionado].resultados}
          {capitalizar(params.nombreBusqueda)}
        </h2>
        <div className="contenedor-resultados">
          {resultados.map((resultado) => (
            <Card resultado={resultado} tipo={resultado.media_type} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResultadosBusqueda;
