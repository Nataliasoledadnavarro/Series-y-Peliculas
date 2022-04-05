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
    <nav className="nav-inferior">
      <ul>
        <Link to="/" aria-label="Ir a Home">
          <li>
            <HomeIcon className="icono-nav" />
          </li>
        </Link>
        <Link to="/movie" aria-label="Ir a películas">
          <li>
            <CamaraIcon className="icono-nav" />
          </li>
        </Link>
        <Link to="/tv" aria-label="Ir a series">
          <li>
            <MonitorIcon className="icono-nav" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default NavInferior;
