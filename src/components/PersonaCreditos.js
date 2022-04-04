import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../Hooks/useFetch";

import { useContext } from "react";
import Context from "../contexto/Context";
import { urlBase, apiKey, titulosComunes } from "../auxiliares/Variables";

const PersonaCreditos = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const { cast } = useFetch(
    `${urlBase}/person/${params.id}/combined_credits?api_key=${apiKey}&language=${lenguajeSeleccionado}`
  );

  return (
    <section>
      <div className="contenedor-links">
        <Link to={`/person/${params.id}/info`}>
          <h3>{titulosComunes[lenguajeSeleccionado].informacion}</h3>
        </Link>

        <Link to={`/person/${params.id}/creditos`}>
          <h3>{titulosComunes[lenguajeSeleccionado].creditos}</h3>
        </Link>
      </div>
      <div className="contenedor-seccion">
        <section>
          <div className="contenedor-resultados">
            {cast.map((resultado) => (
              <Card
                resultado={resultado}
                tipo={resultado.media_type}
                key={resultado.id}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default PersonaCreditos;
