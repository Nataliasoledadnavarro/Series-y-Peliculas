import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_Carousel.scss";
import Card from "./Card";
import { cantidadTarjetas } from "../auxiliares/Funciones";
import useFetch from "../Hooks/useFetch";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const Carousel = ({ url, tipo,categoria, titulo }) => {
  const { resultados, pagina, totalPaginas,data, cast } = useFetch(url);

  const settings = {
    className: "carousel",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: cantidadTarjetas(),
    slidesToScroll: cantidadTarjetas(),
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
      <div className="contenedor-titulo">
        <h2>{titulo}</h2>
        <Link to={`/${tipo}/${categoria}/page/${pagina}`}>
          <AiOutlineArrowRight className="icono-flecha" />
        </Link>
      </div>
      <div className="contenedor-carousel">
        <Slider {...settings}>
          {resultados.map((resultado) => (
            <Card resultado={resultado} tipo={tipo} key={resultado.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
