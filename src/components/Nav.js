import { Link } from "react-router-dom";
import "../styles/components/_Nav.scss";
import "../styles/utilidades/_Variables.scss";
import {
  BsHouseDoor as HomeIcon,
  BsCameraVideo as CamaraIcon,
} from "react-icons/bs";
import { FiMonitor as MonitorIcon } from "react-icons/fi";
import Busqueda from "./Busqueda";
import { useContext } from "react"
import Context from "../contexto/Context";

const Nav = () => {
  const contexto = useContext(Context)

  const handleChangeLenguaje = (e) => {
   contexto.setLenguaje(e.target.value)
  };


  return (
    <nav>
      <ul className="contenedor-iconos">
        <Link to="/" className="link-nav">
          <li>
            <HomeIcon className="icono-nav" />
          </li>
        </Link>
        <Link
          to="/movie"
          className="link-nav"
        >
          <li>
            <CamaraIcon className="icono-nav" />
          </li>
        </Link>
        <Link
          to="/tv"
          className="link-nav"
        >
          <li>
            <MonitorIcon className="icono-nav" />
          </li>
        </Link>
        <Busqueda />
      </ul>
      <select className="select-lenguaje"   onChange={handleChangeLenguaje}>
        <option value="es">Español</option>
        <option value="in">Ingles</option>
        <option value="ja">日本語</option>
        <option value="la">Latin</option>
        <option value="fr">Français</option>
        <option value="pt">Português</option>
      </select>
    </nav>
  );
};

export default Nav;
