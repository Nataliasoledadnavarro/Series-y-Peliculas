import { BsSearch as LupaIcon } from "react-icons/bs";
import "../styles/components/_Busqueda.scss"

const Busqueda = () => {
  return (
    <form>
      <button className="boton-buscar">
        <LupaIcon className="icono-nav" />
      </button>
      <input type="text" placeholder="Search" />
    </form>
  );
};

export default Busqueda;
