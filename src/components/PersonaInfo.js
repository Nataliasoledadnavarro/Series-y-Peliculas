import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mostrarImagen } from "../auxiliares/Funciones";
import Context from "../contexto/Context";
import Redes from "../components/Redes";
import { urlBase, apiKey, titulosComunes } from "../auxiliares/Variables";
import "../styles/components/_PersonaInfo.scss";

const PersonaInfo = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    fetch(
      `${urlBase}/person/${params.id}?api_key=${apiKey}&language=${lenguajeSeleccionado}`
    )
      .then((res) => res.json())
      .then((data) => setResultado(data));
  }, [lenguajeSeleccionado, resultado, params.id]);

  return (
    <section className="info-persona">
      <div className="contenedor-links">
        <Link to={`/person/${params.id}/info`}>
          <h3>{titulosComunes[lenguajeSeleccionado].informacion}</h3>
        </Link>

        <Link to={`/person/${params.id}/creditos`}>
          <h3>{titulosComunes[lenguajeSeleccionado].creditos}</h3>
        </Link>
      </div>
      <div className="contenedor-info">
        <div className="poster">
          <img
            src={mostrarImagen(resultado, "w300")}
            alt={resultado.title ? resultado.title : resultado.name}
          />
        </div>
        <div className="contenedor-descripcion">
          <h3>{resultado.title ? resultado.title : resultado.name}</h3>

          <p className="descripcion">{resultado.biography}</p>
          {resultado.birthday && (
            <p className="item-descripcion">
              {titulosComunes[lenguajeSeleccionado].fecha} {resultado.birthday}
            </p>
          )}
          {resultado.place_of_birth && (
            <p className="item-descripcion">
              {titulosComunes[lenguajeSeleccionado].lugar}{" "}
              {resultado.place_of_birth}
            </p>
          )}
          <Redes homePage={resultado.homepage} tipo="person" />
        </div>
      </div>
    </section>
  );
};

export default PersonaInfo;
