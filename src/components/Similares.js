import { useParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../Hooks/useFetch";
import "../styles/components/_Resultados.scss";
import { useContext } from "react";
import Context from "../contexto/Context";
import { urlBase, apiKey } from "../auxiliares/Variables";
import HeaderDetalle from "./HeaderDetalle";
import "../styles/components/_Resultados.scss";

const Similares = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  const { resultados } = useFetch(
    `${urlBase}/${params.tipo}/${params.id}/similar?api_key=${apiKey}&language=${lenguajeSeleccionado}&page=1`
  );

  return (
    <>
      <HeaderDetalle />
      <div className="contenedor-seccion">
        <section>
          <div className="contenedor-resultados">
            {resultados.map((resultado) => (
              <Card
                resultado={resultado}
                tipo={params.tipo}
                key={resultado.id}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Similares;
