import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/components/_Resultados-busqueda.scss";
import { capitalizar } from "../auxiliares/Funciones";

const ResultadosBusqueda = () => {
  const params = useParams();
  const [resultados, setResultados] = useState([]);
  //let [paginaActual, setPaginaActual] = useState(1);

  {
    /*
    1. Hacer el fetch para buscar coincidencias utilizando el params.nomnbreBusqueda 
    2. guardar la info en una variable de estado
    3. Retornar tarjetas con la info de data
    4. Retornar el paginado. 
    5. Se puede modificar el search params segun la pagina donde esta el usuario?
*/
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=252843cc327f9e10875f92a24a03d130&language=es-US&query=${params.nombreBusqueda}&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setResultados(data.results);
      });
  }, []);

  return (
    <div className="contenedor-seccion">
      <section>
        <h2>Resultados busqueda : {capitalizar(params.nombreBusqueda)}</h2>
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
