import { Link} from "react-router-dom";
import "../styles/components/_Nav.scss";
import {
  BsHouseDoor as HomeIcon,
  BsCameraVideo as CamaraIcon,
} from "react-icons/bs";
import { FiMonitor as MonitorIcon } from "react-icons/fi";
import Busqueda from "./Busqueda";

const Nav = () => {
  return (
    <nav>
      <div className="contenedor-iconos">
        <Link to="/"><HomeIcon className="icono-nav" /></Link>
        <Link to="/peliculas/:filtroPeliculas/page/:paginaPeliculas"><CamaraIcon className="icono-nav" /></Link>
        <Link to="/series/:filtroSeries/page/:paginaSeries"><MonitorIcon className="icono-nav" /></Link>
        <Busqueda />
      </div>
    </nav>
  );
};

export default Nav;
