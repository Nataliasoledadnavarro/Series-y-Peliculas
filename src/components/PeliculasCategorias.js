import Carousel from "./Carousel";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosPeliculas, urlBase, apiKey } from "../auxiliares/Variables";

const PeliculasCategorias = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <section className="contenedor-carousels">
      <Carousel
        url={`${urlBase}/movie/popular?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
        tipo="movie"
        categoria="popular"
        titulo={titulosPeliculas[lenguajeSeleccionado].populares}
      />

      <Carousel
        url={`${urlBase}/movie/top_rated?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
        tipo="movie"
        categoria="top_rated"
        titulo={titulosPeliculas[lenguajeSeleccionado].criticas}
      />

      <Carousel
        url={`${urlBase}/movie/upcoming?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
        tipo="movie"
        categoria="upcoming"
        titulo={titulosPeliculas[lenguajeSeleccionado].proximamente}
      />

      <Carousel
        url={`${urlBase}/movie/now_playing?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
        tipo="movie"
        categoria="now_playing"
        titulo={titulosPeliculas[lenguajeSeleccionado].aire}
      />
    </section>
  );
};

export default PeliculasCategorias;
