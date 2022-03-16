import "../styles/components/_Footer.scss";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosPeliculas } from "../auxiliares/Variables";

const Footer = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  
  return (
    <div className="footer">
      <p>{titulosPeliculas[lenguajeSeleccionado].footer}</p>
      <a href="https://www.linkedin.com/in/nataliasoledadnavarro/">
        Naty Navarro
      </a>
    </div>
  );
};

export default Footer;
