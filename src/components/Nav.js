import { Link } from "react-router-dom";
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
      <ul className="contenedor-iconos">
        <Link to="/">
          <li>
            <HomeIcon className="icono-nav" />
          </li>
        </Link>
        <Link to="/peliculas/:filtroPeliculas/page/:paginaPeliculas">
          <li>
            <CamaraIcon className="icono-nav" />
          </li>
        </Link>
        <Link to="/series/:filtroSeries/page/:paginaSeries">
          <li>
            <MonitorIcon className="icono-nav" />
          </li>
        </Link>
        <Busqueda />
      </ul>
    </nav>
  );
};

export default Nav;
