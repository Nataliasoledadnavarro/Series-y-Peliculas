import Carousel from "./Carousel";
import { useContext } from "react";
import Context from "../contexto/Context";
import { apiKey, titulosSeries, urlBase } from "../auxiliares/Variables";

const SeriesCategorias = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <section className="contenedor-carousels">
      <Carousel
        url={`${urlBase}/tv/popular?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
        tipo="tv"
        categoria="popular"
        titulo={titulosSeries[lenguajeSeleccionado].populares}
      />

      <Carousel
        url={`${urlBase}/tv/top_rated?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
        tipo="tv"
        categoria="top_rated"
        titulo={titulosSeries[lenguajeSeleccionado].criticas}
      />

      <Carousel
        url={`${urlBase}/tv/on_the_air?api_key=${apiKey}&language=${lenguajeSeleccionado}`}
        tipo="tv"
        categoria="on_the_air"
        titulo={titulosSeries[lenguajeSeleccionado].aire}
      />
    </section>
  );
};

export default SeriesCategorias;
