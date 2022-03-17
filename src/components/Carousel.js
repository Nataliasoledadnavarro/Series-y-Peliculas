import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_Carousel.scss";
import Card from "./Card";
import { cantidadTarjetas } from "../auxiliares/Funciones";
import useFetch from "../Hooks/useFetch";

const CarouselPeliculas = ({ url }) => {
  const peliculas = useFetch(url);

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
    <Slider {...settings}>
      {peliculas.map((pelicula) => (
        <Card resultado={pelicula} />
      ))}
    </Slider>
  );
};

export default CarouselPeliculas;
