import CarouselPeliculas from "./CarouselPeliculas";
import CarouselSeries from "./CarouselSeries";
import "../styles/components/_Home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosSeries, titulosPeliculas } from "../auxiliares/Variables";


const Home = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <div className="contenedor-secciones">
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosPeliculas[lenguajeSeleccionado].tendencia}</h2>
          <AiOutlineArrowRight className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselPeliculas url={`https://api.themoviedb.org/3/trending/movie/week?api_key=252843cc327f9e10875f92a24a03d130&language=${lenguajeSeleccionado}`}/>
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosSeries[lenguajeSeleccionado].tendencia}</h2>
          <AiOutlineArrowRight className="icono-flecha"  />
        </div>

        <div className="resultados-busqueda">
          <CarouselSeries url={`https://api.themoviedb.org/3/trending/tv/week?api_key=252843cc327f9e10875f92a24a03d130&language=${lenguajeSeleccionado}`}/>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
