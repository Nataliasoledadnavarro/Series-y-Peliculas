import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_Carousel.scss";
import Card from "../components/Card";

const CategoriaPeliculas = ({ url }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch( url )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  const settings = {
    className: "carousel",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
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

export default CategoriaPeliculas;
