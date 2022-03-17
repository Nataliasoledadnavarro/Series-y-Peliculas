import "../styles/components/_Card.scss";
import img from "../img/imagen-no-encontrada.jpg";
import { Link } from "react-router-dom";

const Card = ({ resultado, tipo}) => {
  const mostrarImagen = (resultado) => {
    if (resultado.profile_path) {
      return `https://image.tmdb.org/t/p/w300/${resultado.profile_path}`;
    } else if (resultado.poster_path) {
      return `https://image.tmdb.org/t/p/w300/${resultado.poster_path}`;
    } else {
      return img;
    }
  };

  return (
    <Link to={`/${tipo}/${resultado.id}/info`}>
      <article key={resultado.id} className="tarjeta">
        <div className="contenedor-img">
          <img
            src={mostrarImagen(resultado)}
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
