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
import SeriesCategorias from "./components/SeriesCategorias";
import EpisodiosSerie from "./components/EpisodiosSerie";
import ResultadosBusqueda from "./components/ResultadosBusqueda";
import Error404 from "./components/Error404";
import NavInferior from "./components/NavInferior";
import Footer from "./components/Footer"
import Context from "./contexto/Context"
import Generos from "./components/Generos";
import ResultadosCategorias from "./components/ResultadosCategorias";

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
        <Route path="/" element={<Home />}/>{/*Muestra series y peliculas que son tendencia.*/}
        <Route path="/movie" element={<PeliculasCategorias />} />{/*muestra peliculas: populares/mejores criticas/ a estrenarse/ en cine.*/}
        <Route path="/tv" element={<SeriesCategorias />}/> {/*muestra series: populares/mejores criticas/ al aire*/}
        <Route path="/:tipo/:id/info" element={<InfoGeneral />} /> {/*Detalle info de la pelicula/serie elegida*/}
        <Route path="/:tipo/:id/reparto" element={<Reparto />} /> {/*Reparto de la serie/pelicula*/}
        <Route path="/:tipo/:id/similares" element={<Similares />} /> {/*Peliculas/Series similares a la elegida*/}
        <Route path="/:tipo/:genero/:id/page/:pagina" element={<Generos />} /> {/*Resultados según género.*/}
        <Route path="/person/:id/info" element={<PersonaInfo />} /> {/*Detalle del actor/actriz seleccionado*/}
        <Route path="/person/:id/creditos"element={<PersonaCreditos />}/> {/*Creditos del actor/actriz seleccionado*/}
        <Route path="/:tipo/:id/videos" element={<VideoPelicula />}/> {/*Videos de la pelicula elegida*/}
        <Route path="/:tipo/:id/temporada/:numeroTemporada" element={<EpisodiosSerie />}/> {/*Episodios de la serie elegida*/}
        <Route path="/:tipo/:categoria/page/:pagina"element={<ResultadosCategorias />}/>{/*Muestra todas las peliculas/series disponible segun el categoría elegida.*/}
        <Route path="/busqueda/:nombreBusqueda/page/:pagina" element={<ResultadosBusqueda />}/> {/*Redirecciona a los resultados de la busqueda. */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      {window.innerWidth <= 600 && <NavInferior/>}
      <Footer/>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
