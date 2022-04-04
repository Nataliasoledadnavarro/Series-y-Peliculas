import "../styles/components/_Header-detalle.scss";
import useFetchId from "../Hooks/useFetchId";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { titulosComunes } from "../auxiliares/Variables";
import { useContext } from "react";
import Context from "../contexto/Context";
import { mostrarImagen } from "../auxiliares/Funciones";

const HeaderDetalle = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const info = useFetchId();

  return (
    <section>
      <div className="header-info">
        <img
          src={
            info.backdrop_path
              ? `https://image.tmdb.org/t/p/original${info.backdrop_path}`
              : mostrarImagen(info, "original")
          }
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
