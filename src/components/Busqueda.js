import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsSearch as LupaIcon } from "react-icons/bs";
import "../styles/components/_Formulario.scss";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosComunes } from "../auxiliares/Variables";

const Busqueda = () => {
  const navigate = useNavigate();
  const [valorDelInput, setValorDelInput] = useState("");
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      valorDelInput !== "" && navigate(`/busqueda/${valorDelInput}/page/1`);
    }
  };

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="boton-buscar" aria-label="Buscar">
        <LupaIcon className="icono-nav" />
      </button>
      <input
        type="text"
        placeholder={titulosComunes[lenguajeSeleccionado].buscar}
        value={valorDelInput}
        onChange={handleChange}
      />
    </form>
  );
};

export default Busqueda;
