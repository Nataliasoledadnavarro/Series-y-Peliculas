import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss"
import Nav from "./components/Nav";
import Home from "./components/Home";
import PeliculasCategorias  from "./components/PeliculasCategorias";
import InfoGeneral from "./components/InfoGeneral";
import Reparto from "./components/Reparto";
import PersonaInfo from "./components/PersonaInfo";
import PersonaCreditos from "./components/PersonaCreditos";
import VideoPelicula from "./components/VideoPelicula";
import Similares from "./components/Similares";
import SeriesPorCategorias from "./components/SeriesCategorias";
import EpisodiosSerie from "./components/EpisodiosSerie";
import ResultadosBusqueda from "./components/ResultadosBusqueda";
import Error404 from "./components/Error404";
import NavInferior from "./components/NavInferior";
import Footer from "./components/Footer"
import Context from "./contexto/Context"
import SeriesCategorias from "./components/SeriesCategorias";
import Generos from "./components/Generos";




{/*252843cc327f9e10875f92a24a03d130*/}
{/* Una pelicula (https://api.themoviedb.org/3/movie/550?api_key=252843cc327f9e10875f92a24a03d130)*/}
const App = () => {

  const [lenguaje, setLenguaje] = useState("es")

  const contexto = {
    lenguaje: lenguaje,
    setLenguaje: setLenguaje,
  }

  return (
    <BrowserRouter>
    <Context.Provider value={contexto}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>{/*muestra series y peliculas que son tendencia.*/}

        <Route path="/movie" element={<PeliculasCategorias />} />{/*muestra peliculas: populares/mejores criticas/ a estrenarse/ en cine.*/}
        <Route path="/:tipo/:id/info" element={<InfoGeneral />} /> {/*Detalle info de la pelicula/serie elegida*/}
        <Route path="/tv" element={<SeriesPorCategorias />}/> {/*muestra series: populares/mejores criticas/ al aire*/}
        <Route path="/:tipo/:id/info" element={<InfoGeneral />} /> {/*Detalle info de la pelicula/serie elegida*/}
        <Route path="/busqueda/:nombreBusqueda/page/:paginaBusqueda" element={<ResultadosBusqueda />}/> {/*Redirecciona a los resultados de la busqueda. */}
        <Route path="/:tipo/:id/reparto" element={<Reparto />} /> {/*Reparto de la serie/pelicula*/}
        <Route path="/:tipo/:id/similares" element={<Similares />} /> {/*Peliculas/Series similares de la pelicula elegida*/}
        <Route path="/tv/:id/temporada/1" element={<EpisodiosSerie />}/> {/*Episodios de la serie elegida*/}
        <Route path="/movie/:id/videos" element={<VideoPelicula />}/> {/*Videos de la pelicula elegida*/}
        <Route path="/:tipo/:genero/:id/page/1" element={<Generos />} /> {/*Reparto de la serie/pelicula*/}
        <Route path="/person/:id/info" element={<PersonaInfo />} /> {/*Detalle del actor/actriz seleccionado*/}
        
        
        <Route path="/peliculas/:filtroPeliculas/page/:paginaPeliculas"element={<PeliculasCategorias />}/>{/*muestra todas las peliculas disponible segun el parametro elegido.*/}
        
        
        

        <Route path="/persona/:idPelicula/creditos"element={<PersonaCreditos />}/> {/*Creditos del actor/actriz seleccionado*/}
        <Route path="/series/:filtroSeries/page/:paginaSeries" element={<SeriesCategorias />}/> {/*muestra todas las series disponibles segun el parametro elegido.*/}
        
        <Route path="/series/:idSerie/similares" element={<Similares />} />{/*Reparto de la serie/pelicula*/}

        <Route path="*" element={<Error404 />} />
      </Routes>
      {window.innerWidth <= 500 && <NavInferior/>}
      <Footer/>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
