import { useParams } from "react-router-dom";
import { useContext } from "react";
import Card from "../components/Card";
import "../styles/components/_Resultados.scss";
import Context from "../contexto/Context";
import { titulosComunes, urlBase, apiKey } from "../auxiliares/Variables";
import useFetch from "../Hooks/useFetch";
import Paginado from "../components/Paginado";
import usePaginado from "../Hooks/UsePaginado";

const Generos = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const {
    handleClickPrimeraPagina,
    handleClickUltimaPagina,
    handleClickPaginaAnterior,
    handleClickProximaPagina,
  } = usePaginado();

  const { resultados, paginasTotales } = useFetch(
    `${urlBase}/discover/${params.tipo}?api_key=${apiKey}&language=${lenguajeSeleccionado}&with_genres=${params.id}&page=${params.pagina}`
  );

  return (
    <div className="contenedor-seccion">
      <section>
        <h2>
          {titulosComunes[lenguajeSeleccionado].genero}
          {params.genero}
        </h2>
        <div className="contenedor-resultados">
          {resultados.map((resultado) => (
            <Card resultado={resultado} tipo={params.tipo} key={resultado.id} />
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

export default Generos;
