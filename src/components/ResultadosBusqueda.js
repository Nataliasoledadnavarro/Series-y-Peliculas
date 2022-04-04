import { useParams } from "react-router-dom";
import { useContext } from "react";
import Card from "../components/Card";
import "../styles/components/_Resultados.scss";
import { capitalizar } from "../auxiliares/Funciones";
import Context from "../contexto/Context";
import { titulosComunes, urlBase, apiKey } from "../auxiliares/Variables";
import useFetch from "../Hooks/useFetch";
import Paginado from "../components/Paginado";
import usePaginado from "../Hooks/UsePaginado";

const ResultadosBusqueda = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const {
    handleClickPrimeraPagina,
    handleClickUltimaPagina,
    handleClickPaginaAnterior,
    handleClickProximaPagina,
  } = usePaginado();

  const { resultados, paginasTotales } = useFetch(
    `${urlBase}/search/multi?api_key=${apiKey}&language=${lenguajeSeleccionado}&query=${params.nombreBusqueda}&page=${params.pagina}`
  );

  return (
    <div className="contenedor-seccion">
      <section>
        <h2>
          {titulosComunes[lenguajeSeleccionado].resultados}
          {capitalizar(params.nombreBusqueda)}
        </h2>
        <div className="contenedor-resultados">
          {resultados.length === 0 && (
            <h3 className="no-disponible">
              {titulosComunes[lenguajeSeleccionado].noDisponible}
            </h3>
          )}
          {resultados.map((resultado) => (
            <Card
              resultado={resultado}
              tipo={resultado.media_type}
              key={resultado.id}
            />
          ))}
        </div>
        {paginasTotales > 0 && (
          <Paginado
            handleClickPrimeraPagina={handleClickPrimeraPagina}
            handleClickUltimaPagina={handleClickUltimaPagina}
            handleClickPaginaAnterior={handleClickPaginaAnterior}
            handleClickProximaPagina={handleClickProximaPagina}
            pagina={params.pagina}
            paginasTotales={paginasTotales}
          />
        )}
      </section>
    </div>
  );
};

export default ResultadosBusqueda;
