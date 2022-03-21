import Carousel from "./Carousel";
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
    <section className="contenedor-carousels">
      <Carousel
        url={`${urlBase}/trending/movie/week?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
        tipo="movie"
        titulo={titulosPeliculas[lenguajeSeleccionado].tendencia}
      />

      <Carousel
        url={`${urlBase}/trending/tv/week?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
        tipo="tv"
        titulo={titulosSeries[lenguajeSeleccionado].tendencia}
      />
    </section>
  );
};

export default Home;
