import CarouselPeliculas from "./CarouselPeliculas";
import "../styles/components/_Home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosPeliculas } from "../auxiliares/Variables";

const PeliculasFiltro = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <div className="contenedor-secciones">
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].populares}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselPeliculas
            url={`https://api.themoviedb.org/3/movie/popular?api_key=252843cc327f9e10875f92a24a03d130&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].criticas}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselPeliculas
            url={`https://api.themoviedb.org/3/movie/top_rated?api_key=252843cc327f9e10875f92a24a03d130&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].proximamente}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselPeliculas
            url={`https://api.themoviedb.org/3/movie/upcoming?api_key=252843cc327f9e10875f92a24a03d130&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].aire}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselPeliculas
            url={`https://api.themoviedb.org/3/movie/now_playing?api_key=252843cc327f9e10875f92a24a03d130&language=${lenguajeSeleccionado}`}
          />
        </div>
      </section>
    </div>
  );
};

export default PeliculasFiltro;
