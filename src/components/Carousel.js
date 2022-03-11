import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_Carousel.scss";
import Cards from "../components/Cards";

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="contenedor-carousel">
      <Slider {...settings}>
        <Cards data={data} />
      </Slider>
    </div>
  );
};

export default Carousel;
