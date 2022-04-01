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
  return (
    <div className="contenedor-paginado">
      <button
        onClick={handleClickPrimeraPagina}
        disabled={pagina === 1}
        aria-label="Primera página"
      >
        <FaAngleDoubleLeft />
      </button>

      <button
        onClick={handleClickPaginaAnterior}
        disabled={pagina == 1}
        aria-label="Página Anterior"
      >
        <FaAngleLeft />
      </button>
      <p className="pagina-actual">
        {titulosComunes[lenguajeSeleccionado].pagina} {pagina}
      </p>
      <button
        onClick={handleClickProximaPagina}
        disabled={
          paginasTotales > 500 ? pagina == 500 : pagina == paginasTotales
        }
        aria-label="Próxima página"
      >
        <FaAngleRight />
      </button>

      <button
        onClick={() =>
          handleClickUltimaPagina(paginasTotales > 500 ? 500 : paginasTotales)
        }
        disabled={
          paginasTotales > 500 ? pagina == 500 : pagina == paginasTotales
        }
        aria-label="Última página"
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Paginado;
