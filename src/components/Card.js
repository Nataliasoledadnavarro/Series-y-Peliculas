import "../styles/components/_Card.scss";
import { mostrarImagen } from "../auxiliares/Funciones";
import { Link } from "react-router-dom";

const Card = ({ resultado, tipo}) => {
  const src= mostrarImagen(resultado,"w300")
  
  return (
    <Link to={`/${tipo}/${resultado.id}/info`} key={resultado.id} aria-label="Más info">
      <article  className="tarjeta">
        <div className="contenedor-img">
          <img
            src={src}
            alt={resultado.title ? resultado.title : resultado.name}
          ></img>
        </div>
        <h3 className="titulo-resultado">
          {resultado.title ? resultado.title : resultado.name}
        </h3>
      </article>
    </Link>
  );
};

export default Card;
