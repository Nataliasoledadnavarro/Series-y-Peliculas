import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_Carousel.scss";
import img from "../img/imagen-no-encontrada.jpg";

const Carousel = ({ data }) => {
  const settings = {
    className: "carousel",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 4000,
  };
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
    <Slider {...settings}>
      {data.map((resultado) => (
        <div Key={resultado.id} className="tarjeta">
          <div className="contenedor-img">
            <img src={mostrarImagen(resultado)}></img>
          </div>
          <h3 className="titulo-resultado">
            {resultado.title ? resultado.title : resultado.name}
          </h3>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
