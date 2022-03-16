import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import "../styles/components/_Resultados-busqueda.scss";
import { capitalizar } from "../auxiliares/Funciones";
import Context from "../contexto/Context";
import { titulosPeliculas } from "../auxiliares/Variables";

const ResultadosBusqueda = () => {
  const params = useParams();
  const [resultados, setResultados] = useState([]);
  //let [paginaActual, setPaginaActual] = useState(1);
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=252843cc327f9e10875f92a24a03d130&language=es-US&query=${params.nombreBusqueda}&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setResultados(data.results);
      });
  }, [params.nombreBusqueda]);

  return (
    <div className="contenedor-seccion">
      <section>
        <h2>
          {titulosPeliculas[lenguajeSeleccionado].busqueda}{" "}
          {capitalizar(params.nombreBusqueda)}
        </h2>
        <div className="resultados-busqueda">
          {resultados.map((resultado) => (
            <Card resultado={resultado} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResultadosBusqueda;
