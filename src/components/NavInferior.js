import { Link } from "react-router-dom";
import "../styles/components/_NavInferior.scss";
import "../styles/utilidades/_Variables.scss";
import {
  BsHouseDoor as HomeIcon,
  BsCameraVideo as CamaraIcon,
} from "react-icons/bs";
import { FiMonitor as MonitorIcon } from "react-icons/fi";

const NavInferior = () => {
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  );
};
export default NavInferior;
