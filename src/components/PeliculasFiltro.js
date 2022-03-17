import Carousel from "./Carousel";
import "../styles/components/_Home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosPeliculas, urlBase, apiKey } from "../auxiliares/Variables";

const PeliculasFiltro = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <div className="contenedor-secciones">
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].populares}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="contenedor-carousel">
          <Carousel
            url={`${urlBase}/movie/popular?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
            tipo="movie"
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].criticas}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="contenedor-carousel">
          <Carousel
            url={`${urlBase}/movie/top_rated?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
            tipo="movie"
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].proximamente}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="contenedor-carousel">
          <Carousel
            url={`${urlBase}/movie/upcoming?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
            tipo="movie"
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].aire}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="contenedor-carousel">
          <Carousel
            url={`${urlBase}/movie/now_playing?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
            tipo="movie"
         />
        </div>
      </section>
    </div>
  );
};

export default PeliculasFiltro;
