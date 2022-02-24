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
        <HomeIcon className="icono-nav" />
        <CamaraIcon className="icono-nav" />
        <MonitorIcon className="icono-nav" />
        <Busqueda />
      </div>
    </nav>
  );
};

export default Nav;
