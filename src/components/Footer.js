import "../styles/components/_Footer.scss";
import { useContext } from "react";
import Context from "../contexto/Context";
import { titulosComunes } from "../auxiliares/Variables";

const Footer = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  
  return (
    <footer className="footer">
      <p>{titulosComunes[lenguajeSeleccionado].footer}</p>
      <a href="https://www.linkedin.com/in/nataliasoledadnavarro/" aria-label="Ir a mi linkedin">
        Naty Navarro
      </a>
    </footer>
  );
};

export default Footer;
