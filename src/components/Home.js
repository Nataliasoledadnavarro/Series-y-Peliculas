import CarouselPeliculas from "./CarouselPeliculas";
import CarouselSeries from "./CarouselSeries";
import "../styles/components/_Home.scss";
import { GrFormNextLink } from "react-icons/gr";

const Home = () => {
  return (
    <div className="contenedor-secciones">
      <section>
        <div className="contenedor-titulo">
          <h2>Peliculas que son tendencia</h2>
          <GrFormNextLink className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselPeliculas url="https://api.themoviedb.org/3/trending/movie/week?api_key=252843cc327f9e10875f92a24a03d130" />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>Series que son tendencia</h2>
          <GrFormNextLink className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselSeries url="https://api.themoviedb.org/3/trending/tv/week?api_key=252843cc327f9e10875f92a24a03d130" />
        </div>
      </section>
    </div>
  );
};

export default Home;
