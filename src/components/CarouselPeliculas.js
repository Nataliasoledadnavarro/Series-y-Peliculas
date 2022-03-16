import { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_Carousel.scss";
import Card from "./Card";
import { cantidadTarjetas } from "../auxiliares/Funciones";
import Context from "../contexto/Context";

const CarouselPeliculas = ({ tipo, categoria }) => {
  const [peliculas, setPeliculas] = useState([]);
  const contexto = useContext(Context);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${categoria}/${tipo}/week?api_key=252843cc327f9e10875f92a24a03d130&language=${contexto.lenguaje}`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, [contexto.lenguaje]);

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
