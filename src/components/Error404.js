import { BsEmojiSmileUpsideDownFill as Emoji } from "react-icons/bs";
import { RiHomeSmileFill as Home } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../styles/components/_Error404.scss";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosComunes } from "../auxiliares/Variables";

const Error404 = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  return (
    <section className="seccion-error">
      <Emoji className="emoji" />
      <p>{titulosComunes[lenguajeSeleccionado].error}</p>
      <Link to="/">
        <Home className="home" />
        <p>{titulosComunes[lenguajeSeleccionado].home}</p>
      </Link>
    </section>
  );
};

export default Error404;
