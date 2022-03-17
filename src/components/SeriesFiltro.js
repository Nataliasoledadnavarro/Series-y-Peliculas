import Carousel from "./Carousel";
import "../styles/components/_Home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import Context from "../contexto/Context";
import { apiKey, titulosSeries, urlBase } from "../auxiliares/Variables";

const SeriesFiltro = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <div className="contenedor-secciones">
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosSeries[lenguajeSeleccionado].populares}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="contenedor-carousel">
          <Carousel
            url={`${urlBase}/tv/popular?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosSeries[lenguajeSeleccionado].criticas}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="contenedor-carousel">
          <Carousel
            url={`${urlBase}/tv/top_rated?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosSeries[lenguajeSeleccionado].aire}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="contenedor-carousel">
          <Carousel
            url={`${urlBase}/tv/on_the_air?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
    </div>
  );
};

export default SeriesFiltro;
