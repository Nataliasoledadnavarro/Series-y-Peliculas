import { useNavigate} from "react-router-dom"
import {useState} from "react"
import { BsSearch as LupaIcon } from "react-icons/bs";
import "../styles/components/_Busqueda.scss"

const Busqueda = () => {
  const navigate = useNavigate();
  const [valorDelInput, setValorDelInput] = useState("")
  const [paginaActual, setPaginaActual] = useState(1)


  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/busqueda/${valorDelInput}/page/${paginaActual}`)
  }

  const handleChange = (e) => {
    setValorDelInput(e.target.value)
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <button className="boton-buscar" aria-label="Boton buscar" >
        <LupaIcon className="icono-nav" />
      </button>
      <input type="text" placeholder="Search" value={valorDelInput} onChange={handleChange}/>
    </form>
  );
};

export default Busqueda;
