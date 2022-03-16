import CarouselSeries from "./CarouselSeries";
import "../styles/components/_Home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosSeries } from "../auxiliares/Variables";

const SeriesFiltro = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <div className="contenedor-secciones">
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosSeries[lenguajeSeleccionado].populares}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselSeries
            url={`https://api.themoviedb.org/3/tv/popular?api_key=252843cc327f9e10875f92a24a03d130&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosSeries[lenguajeSeleccionado].criticas}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselSeries
            url={`https://api.themoviedb.org/3/tv/top_rated?api_key=252843cc327f9e10875f92a24a03d130&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosSeries[lenguajeSeleccionado].aire}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselSeries
            url={`https://api.themoviedb.org/3/tv/on_the_air?api_key=252843cc327f9e10875f92a24a03d130&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
    </div>
  );
};

export default SeriesFiltro;
