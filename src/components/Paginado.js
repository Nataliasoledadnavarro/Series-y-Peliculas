import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import "../styles/components/_Paginado.scss";
import Context from "../contexto/Context";
import { useContext } from "react";
import { titulosComunes } from "../auxiliares/Variables";

const Paginado = ({
  handleClickPrimeraPagina,
  handleClickUltimaPagina,
  handleClickPaginaAnterior,
  handleClickProximaPagina,
  pagina,
  paginasTotales,
}) => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const paginaActual = Number(pagina);
  const totalDePaginas = Number(paginasTotales);

  return (
    <div className="contenedor-paginado">
      <button
        onClick={handleClickPrimeraPagina}
        disabled={paginaActual === 1}
        aria-label="Primera página"
      >
        <FaAngleDoubleLeft />
      </button>

      <button
        onClick={handleClickPaginaAnterior}
        disabled={paginaActual === 1}
        aria-label="Página Anterior"
      >
        <FaAngleLeft />
      </button>
      <p className="pagina-actual">
        {titulosComunes[lenguajeSeleccionado].pagina} {paginaActual}
      </p>
      <button
        onClick={handleClickProximaPagina}
        disabled={
          totalDePaginas > 500
            ? paginaActual === 500
            : paginaActual === totalDePaginas
        }
        aria-label="Próxima página"
      >
        <FaAngleRight />
      </button>

      <button
        onClick={() =>
          handleClickUltimaPagina(totalDePaginas > 500 ? 500 : totalDePaginas)
        }
        disabled={
          totalDePaginas > 500
            ? paginaActual === 500
            : paginaActual === totalDePaginas
        }
        aria-label="Última página"
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Paginado;
