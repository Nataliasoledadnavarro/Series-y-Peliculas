import CarouselPeliculas from "./CarouselPeliculas";
import CarouselSeries from "./CarouselSeries";
import "../styles/components/_Home.scss";
import { GrFormNextLink } from "react-icons/gr";
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
          <GrFormNextLink className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselPeliculas categoria="trending" tipo="movie" />
        </div>
      </section>
      <section>
        <div className="contenedor-titulo">
          <h2>{titulosSeries[lenguajeSeleccionado].tendencia}</h2>
          <GrFormNextLink className="icono-flecha" />
        </div>

        <div className="resultados-busqueda">
          <CarouselSeries categoria="trending" tipo="movie" />
        </div>
      </section>
    </div>
  );
};

export default Home;
