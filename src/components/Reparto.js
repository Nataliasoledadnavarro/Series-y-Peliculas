import { useParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../Hooks/useFetch";
import "../styles/components/_Resultados.scss";
import { useContext } from "react";
import Context from "../contexto/Context";
import { urlBase, apiKey, titulosComunes } from "../auxiliares/Variables";
import HeaderDetalle from "./HeaderDetalle";


const Reparto = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const { resultados,page,totalPages,cast } = useFetch(`${urlBase}/${params.tipo}/${params.id}/credits?api_key=${apiKey}&language=${lenguajeSeleccionado}&page=1`);
console.log(cast)
  return (
    <>
      <HeaderDetalle />
      <div className="contenedor-seccion">
        <section>
          <div className="contenedor-resultados">
          {cast.length === 0 && (
          <h3 className="no-disponible">{titulosComunes[lenguajeSeleccionado].noDisponible}</h3>
        )}
            {cast.map((resultado) => (
              <Card resultado={resultado} tipo="person" key={resultado.id}/>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Reparto;
