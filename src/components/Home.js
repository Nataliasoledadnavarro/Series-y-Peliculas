import Carousel from "./Carousel";
import "../styles/components/_Home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import Context from "../contexto/Context";
import {
  titulosSeries,
  titulosPeliculas,
  urlBase,
  apiKey,
} from "../auxiliares/Variables";

const Home = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <div className="contenedor-secciones">
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].tendencia}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="contenedor-carousel">
          <Carousel
            url={`${urlBase}/trending/movie/week?api_key=${apiKey}&language=${lenguajeSeleccionado}`} 
            tipo="movie"
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosSeries[lenguajeSeleccionado].tendencia}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="contenedor-carousel">
          <Carousel
            url={`${urlBase}/trending/tv/week?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
            tipo="tv"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
