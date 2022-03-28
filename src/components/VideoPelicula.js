import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import "../styles/components/_Info-general.scss";
import { useContext } from "react";
import Context from "../contexto/Context";
import { apiKey, urlBase, titulosComunes } from "../auxiliares/Variables";
import HeaderDetalle from "./HeaderDetalle";
import CardVideo from "./CardVideo";
import "../styles/components/_Card-video.scss";

const VideoPelicula = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const { resultados, page, totalPages, cast } = useFetch(
    `${urlBase}/movie/${params.id}/videos?api_key=${apiKey}&language=${lenguajeSeleccionado}`
  );

  console.log(resultados);
  return (
    <section className="seccion-videos">
      <HeaderDetalle />
      <div className="contenedor-videos">
        {resultados.length === 0 && (
          <h3>{titulosComunes[lenguajeSeleccionado].noDisponible}</h3>
        )}
        {resultados.map((video) => (
          <CardVideo video={video} key={video.id} />
        ))}
      </div>
    </section>
  );
};

export default VideoPelicula;
