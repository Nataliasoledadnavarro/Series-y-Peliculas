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

{/*252843cc327f9e10875f92a24a03d130*/}
{/* Una pelicula (https://api.themoviedb.org/3/movie/550?api_key=252843cc327f9e10875f92a24a03d130)*/}
const App = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>{/*muestra series y peliculas que son tendencia.*/}

        <Route path="/peliculas" element={<PeliculasGeneral />} />{/*muestra peliculas: populares/mejores criticas/ a estrenarse/ en cine.*/}
        <Route path="/peliculas/:filtroPeliculas/page/:paginaPeliculas"element={<PeliculasFiltro />}/>{/*muestra todas las peliculas disponible segun el parametro elegido.*/}
        <Route path="/peliculas/:idPelicula/info" element={<InfoPelicula />} /> {/*Detalle info de la pelicula elegida*/}
        <Route path="/peliculas/:idPelicula/video" element={<VideoPelicula />}/> {/*Videos de la pelicula elegida*/}
        <Route path="/peliculas/:idPelicula/similar" element={<Similares />} /> {/*Peliculas/Series similares de la pelicula elegida*/}
        <Route path="/peliculas/:idPelicula/reparto" element={<Reparto />} /> {/*Reparto de la serie/pelicula*/}
        <Route path="/persona/:idPelicula/info" element={<PersonaInfo />} /> {/*Detalle del actor/actriz seleccionado*/}
        <Route path="/persona/:idPelicula/creditos"element={<PersonaCreditos />}/> {/*Creditos del actor/actriz seleccionado*/}

        <Route path="/series" element={<SeccionSeries />}/> {/*muestra series: populares/mejores criticas/ al aire*/}
        <Route path="/series/:filtroSeries/page/:paginaSeries" element={<SeriesFiltro />}/> {/*muestra todas las series disponibles segun el parametro elegido.*/}
        <Route path="/series/:idSerie/info" element={<InfoSerie />} />  {/*Detalle info de la serie elegida*/}
        <Route path="/series/:idSerie/episodios/:temporadaSerie" element={<EpisodiosSerie />}/> {/*Episodios de la serie elegida*/}
        <Route path="/series/:idSerie/reparto" element={<Reparto />} />{/*Reparto de la serie/pelicula*/}
        <Route path="/series/:idSerie/similares" element={<Similares />} />{/*Reparto de la serie/pelicula*/}

        <Route path="/busqueda/:nombreBusqueda/page/:paginaBusqueda" element={<ResultadosBusqueda />}/> {/*Redirecciona a los resultados de la busqueda. */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
