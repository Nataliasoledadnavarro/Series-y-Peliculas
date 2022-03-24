import { useParams } from "react-router-dom";
import useFetchId from "../Hooks/useFetchId";
import { mostrarImagen } from "../auxiliares/Funciones";
import "../styles/components/_Info-general.scss";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosComunes } from "../auxiliares/Variables";
import { estrellas, produccion, generos } from "../auxiliares/Funciones";
import Redes from "../components/Redes";
import HeaderDetalle from "./HeaderDetalle";

const InfoGeneral = () => {
  const info = useFetchId();
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <section className="seccion-detalle">
      <HeaderDetalle/>
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
            {info.runtime &&
              `${titulosComunes[lenguajeSeleccionado].duracion} ${info.runtime} min.`}
          </p>

          <ul className="item-descripcion">
            {titulosComunes[lenguajeSeleccionado].produccion}
            {info.production_companies && produccion(info.production_companies)}
          </ul>

          <ul className="lista-generos">
            {titulosComunes[lenguajeSeleccionado].genero}
            {info.genres && generos(info.genres, params.tipo)}
          </ul>
          <Redes homePage={info.homepage} />
        </div>
      </div>
    </section>
  );
};

export default InfoGeneral;
