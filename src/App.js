import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import PeliculasGeneral from "./components/PeliculasGeneral";
import PeliculasFiltro  from "./components/PeliculasFiltro";
import InfoPelicula from "./components/InfoPelicula";
import Reparto from "./components/Reparto";
import PersonaInfo from "./components/PersonaInfo";
import PersonaCreditos from "./components/PersonaCreditos";
import VideoPelicula from "./components/VideoPelicula";
import Similares from "./components/Similares";
import SeccionSeries from "./components/SeccionSeries";
import SeriesFiltro from "./components/SeriesFiltro";
import InfoSerie from "./components/InfoSerie";
import EpisodiosSerie from "./components/EpisodiosSerie";
import ResultadosBusqueda from "./components/ResultadosBusqueda";
import Error404 from "./components/Error404";


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<PeliculasGeneral />} />
        <Route
          path="/peliculas/:filtroPeliculas/page/:paginaPeliculas"
          element={<PeliculasFiltro />}
        />
        <Route path="/peliculas/:idPelicula/info" element={<InfoPelicula />} />
        <Route path="/peliculas/:idPelicula/reparto" element={<Reparto />} />
        <Route path="/persona/:idPelicula/info" element={<PersonaInfo />} />
        <Route
          path="/persona/:idPelicula/creditos"
          element={<PersonaCreditos />}
        />
        <Route
          path="/peliculas/:idPelicula/video"
          element={<VideoPelicula />}
        />
        <Route path="/peliculas/:idPelicula/similar" element={<Similares />} />
        <Route path="/series" element={<SeccionSeries />} />
        <Route
          path="/series/:filtroSeries/page/:paginaSeries"
          element={<SeriesFiltro />}
        />
        <Route path="/series/:idSerie/info" element={<InfoSerie />} />
        <Route
          path="/series/:idSerie/episodios/:temporadaSerie"
          element={<EpisodiosSerie />}
        />
        <Route path="/series/:idSerie/reparto" element={<Reparto />} />
        <Route path="/series/:idSerie/similares" element={<Similares />} />
        <Route
          path="/busqueda/:nombreBusqueda/page/:paginaBusqueda"
          element={<ResultadosBusqueda />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
