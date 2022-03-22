import { useParams } from "react-router-dom";
import { useContext } from "react";
import Card from "../components/Card";
import "../styles/components/_Resultados.scss";
import { capitalizar } from "../auxiliares/Funciones";
import Context from "../contexto/Context";
import { titulosComunes, urlBase, apiKey } from "../auxiliares/Variables";
import useFetch from "../Hooks/useFetch";

const Generos = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  //let [paginaActual, setPaginaActual] = useState(1);
  const resultados = useFetch(
    `${urlBase}/discover/${params.tipo}?api_key=${apiKey}&language=${lenguajeSeleccionado}&with_genres=${params.id}&page=1`
  );

  return (
    <div className="contenedor-seccion">
      <section>
        <h2>
          {titulosComunes[lenguajeSeleccionado].genero}
          {params.genero}
        </h2>
        <div className="contenedor-resultados">
          {resultados.map((resultado) => (
            <Card resultado={resultado} tipo={params.tipo} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Generos;
