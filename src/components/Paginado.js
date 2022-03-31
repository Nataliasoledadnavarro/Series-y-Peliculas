import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

const Paginado = ({
  handleClickPrimeraPagina,
  handleClickUltimaPagina,
  handleClickPaginaAnterior,
  handleClickProximaPagina,
  pagina,
  paginasTotales,
}) => {
  return (
    <div className="contenedor-paginado">
      <button
        onclick={handleClickPrimeraPagina}
        disabled={pagina === 1}
        ariaLabel="Primera página"
      >
        <FaAngleDoubleLeft />
      </button>

      <button
        onclick={handleClickPaginaAnterior}
        disabled={pagina === 1}
        ariaLabel="Página Anterior"
      >
        <FaAngleLeft />
      </button>
      <p className="pagina-actual"> Página {pagina}</p>
      <button
        onclick={handleClickProximaPagina(
          paginasTotales > 500 ? 500 : paginasTotales
        )}
        disabled={
          paginasTotales > 500 ? pagina === 500 : pagina == paginasTotales
        }
        ariaLabel="Próxima página"
      >
        <FaAngleRight />
      </button>

      <button
        onclick={handleClickUltimaPagina}
        disabled={
          paginasTotales > 500 ? pagina === 500 : pagina == paginasTotales
        }
        ariaLabel="Última página"
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Paginado;
