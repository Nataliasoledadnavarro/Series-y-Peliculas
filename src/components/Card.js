import "../styles/components/_Card.scss";
import img from "../img/imagen-no-encontrada.jpg";

const Card = ({ resultado }) => {
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
    <div Key={resultado.id} className="tarjeta">
      <div className="contenedor-img">
        <img src={mostrarImagen(resultado)}></img>
      </div>
      <h3 className="titulo-resultado">
        {resultado.title ? resultado.title : resultado.name}
      </h3>
    </div>
  );
};

export default Card;
