import "../styles/components/_Header-detalle.scss";
import { Link } from "react-router-dom";
import { mostrarImagen } from "../auxiliares/Funciones";
import { useParams } from "react-router-dom";
import useFetchId from "../Hooks/useFetchId";
import { titulosComunes } from "../auxiliares/Variables";
import { useContext } from "react";
import Context from "../contexto/Context";

const HeaderDetalle = () => {
  const info = useFetchId();
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <section>
      <div className="header-info">
        <img
          src={mostrarImagen(info, "original")}
          alt={info.title ? info.title : info.name}
        />
      </div>

      <div className="contenedor-links">
        <Link to={`/${params.tipo}/${info.id}/info`}>
          <h3>{titulosComunes[lenguajeSeleccionado].info}</h3>
        </Link>

        <Link to={`/${params.tipo}/${info.id}/reparto`}>
          <h3>{titulosComunes[lenguajeSeleccionado].reparto}</h3>
        </Link>

        {params.tipo === "tv" ? (
          <Link to={`/tv/${info.id}/temporada/1`}>
            <h3>{titulosComunes[lenguajeSeleccionado].episodios}</h3>
          </Link>
        ) : (
          <Link to={`/movie/${info.id}/videos`}>
            <h3>{titulosComunes[lenguajeSeleccionado].videos}</h3>
          </Link>
        )}

        <Link to={`/${params.tipo}/${info.id}/similares`}>
          <h3>{titulosComunes[lenguajeSeleccionado].similares}</h3>
        </Link>
      </div>
    </section>
  );
};

export default HeaderDetalle;