import CategoriaPeliculas from "./CategoriaPeliculas";
import CategoriasSeries from "./CategoriasSeries";

const Home = () =>{
    return(
        <>
        <CategoriaPeliculas url="https://api.themoviedb.org/3/trending/movie/week?api_key=252843cc327f9e10875f92a24a03d130"/>
        <CategoriasSeries url="https://api.themoviedb.org/3/trending/tv/week?api_key=252843cc327f9e10875f92a24a03d130"/>
        </>
    )
}

export default Home;