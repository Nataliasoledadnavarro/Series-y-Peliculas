import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import "../styles/components/_Resultados-busqueda.scss";

const ResultadosBusqueda = () => {
  const params = useParams();
  console.log(params.nombreBusqueda);
  console.log(params.paginaBusqueda);
  const [resultado, setResultado] = useState([]);
  let [paginaActual, setPaginaActual] = useState(2);

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
      `https://api.themoviedb.org/3/search/multi?api_key=252843cc327f9e10875f92a24a03d130&language=es-US&query=${params.nombreBusqueda}&page=${paginaActual}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResultado(data.results);
        setPaginaActual = data.page;
        console.log(data.results);
        console.log(data);
      });
  }, []);

  return (
    <div className="contenedor-sección">
      <section>
        <h2>Resultados busqueda : {params.nombreBusqueda}</h2>
        <div className="resultados-busqueda">
          <Cards data={resultado} />
        </div>
      </section>
    </div>
  );
};

export default ResultadosBusqueda;
