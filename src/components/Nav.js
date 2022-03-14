import { Link } from "react-router-dom";
import "../styles/components/_Nav.scss";
import "../styles/utilidades/_Variables.scss";
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
        <Link to="/" className="link-nav">
          <li>
            <HomeIcon className="icono-nav" />
          </li>
        </Link>
        <Link
          to="/peliculas/:filtroPeliculas/page/:paginaPeliculas"
          className="link-nav"
        >
          <li>
            <CamaraIcon className="icono-nav" />
          </li>
        </Link>
        <Link
          to="/series/:filtroSeries/page/:paginaSeries"
          className="link-nav"
        >
          <li>
            <MonitorIcon className="icono-nav" />
          </li>
        </Link>
        <Busqueda />
      </ul>
      <select className="select-lenguaje">
        <option value="español">Español</option>
        <option value="ingles">Ingles</option>
      </select>
    </nav>
  );
};

export default Nav;
