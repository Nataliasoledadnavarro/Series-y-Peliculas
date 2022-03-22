import { useParams } from "react-router-dom";
import useFetchId from "../Hooks/useFetchId";
import { mostrarImagen } from "../auxiliares/Funciones";
import "../styles/components/_Info-general.scss";
import { Link } from "react-router-dom";
import "../styles/components/_Info-general.scss";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosComunes } from "../auxiliares/Variables";

const InfoGeneral = () => {
  const info = useFetchId();
  const params = useParams();
  const src = mostrarImagen(info, "original");

  return (
    <section className="seccion-info">
      <div className="header-info">
        <img src={src} alt={info.title ? info.title : info.name} />
      </div>

      <div className="contenedor-links">
        <Link to={`/${params.tipo}/${info.id}/info`}>
          <h3>Info</h3>
        </Link>

        <Link to={`/${params.tipo}/${info.id}/reparto`}>
          <h3>Reparto</h3>
        </Link>

        {params.tipo === "tv" ? (
          <Link to={`/tv/${info.id}/temporada/1`}>
            <h3>Episodios</h3>
          </Link>
        ) : (
          <Link to={`/movie/${info.id}/videos`}>
            <h3>Videos</h3>
          </Link>
        )}

        <Link to={`/${params.tipo}/${info.id}/similares`}>
          <h3>Similares</h3>
        </Link>
      </div>
    </section>
  );
};

export default InfoGeneral;
