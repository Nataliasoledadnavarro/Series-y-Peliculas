import { useParams } from "react-router-dom";
import useFetchId from "../Hooks/useFetchId";
import { mostrarImagen } from "../auxiliares/Funciones";
import "../styles/components/_Info-general.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosComunes } from "../auxiliares/Variables";
import { estrellas, produccion } from "../auxiliares/Funciones";

const InfoGeneral = () => {
  const info = useFetchId();
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  console.log(info);
  console.log(info.production_companies);

  return (
    <section className="seccion-info">
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

      <div className="contenedor-info">
        <div className="poster">
          <img
            src={mostrarImagen(info, "w300")}
            alt={info.title ? info.title : info.name}
          />
        </div>
        <div className="contenedor-descripcion">
          <h3>{info.title ? info.title : info.name}</h3>
          <div className="contenedor-estrellas">
            {estrellas(Math.round(info.vote_average))}{" "}
          </div>
          <p className="descripcion">{info.overview}</p>
          <p className="item-descripcion">
            {titulosComunes[lenguajeSeleccionado].duracion} : {info.runtime} min
          </p>
          <p className="item-descripcion">
            {titulosComunes[lenguajeSeleccionado].produccion} :
            {info.production_companies.lenght > 1 ? (
              produccion(info.production_companies)
            ) : (
              <span> -</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoGeneral;
