import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"

const App = () =>{
  return(
    <BrowserRouter>
    <Nav/>
    {/*<Routes>
     } <Route path="/" element={<Home />}/>
      <Route path="/peliculas" element={<SeccionGeneralPeliculas />}/>
      <Route path="/peliculas/:filtroPeliculas/page/:paginaPeliculas" element={<SeccionFiltroPeliculas />}/>
      <Route path="/peliculas/:idPelicula/info" element={<InfoPelicula />}/>
      <Route path="/peliculas/:idPelicula/reparto" element={<Reparto />}/>
      <Route path="/persona/:idPelicula/info" element={<PersonaInfo />}/>
      <Route path="/persona/:idPelicula/creditos" element={<PersonaCreditos />}/>
      <Route path="/peliculas/:idPelicula/video" element={<VideoPelicula />}/>
      <Route path="/peliculas/:idPelicula/similar" element={<Similares />}/>

      <Route path="/series" element={<SeccionSeries />}/>
      <Route path="/series/:filtroSeries/page/:paginaSeries" element={<SeccionFiltroSeries />}/>
      <Route path="/series/:idSerie/info" element={<InfoSerie />}/>
      <Route path="/series/:idSerie/episodios/:temporadaSerie" element={<EpisodiosSerie />}/>
      <Route path="/series/:idSerie/reparto" element={<Reparto />}/>
      <Route path="/series/:idSerie/similares" element={<Similares />}/>

      <Route path="/busqueda/:nombreBusqueda/page/:paginaBusqueda" element={<ResultadosBusqueda />}/>
  <Route path="*" element={<Error404 />}/>
      </Routes>*/}
    </BrowserRouter>

  )
}

export default App;