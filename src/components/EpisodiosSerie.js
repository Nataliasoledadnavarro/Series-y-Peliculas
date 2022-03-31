import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import useFetchId from "../Hooks/useFetchId";
import "../styles/components/_Seccion-episodios.scss";
import { useContext, useState } from "react";
import Context from "../contexto/Context";
import { apiKey, urlBase, titulosComunes } from "../auxiliares/Variables";
import { opciones } from "../auxiliares/Funciones";
import HeaderDetalle from "./HeaderDetalle";
import CardEpisodio from "./CardEpisodio";

const EpisodiosSerie = () => {
  const [temporada, setTemporada] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  const lenguajeSeleccionado = useContext(Context).lenguaje;

  const handleChangeTemporada = (e) => {
    setTemporada(e.target.value);
    navigate(`/${params.tipo}/${params.id}/temporada/${e.target.value}`);
  };

  const {episodios, data } = useFetch(
    `${urlBase}/tv/${params.id}/season/${temporada}?api_key=${apiKey}&language=${lenguajeSeleccionado}`
  );
  const cantidadDeTemporadas = useFetchId().number_of_seasons;

  return (
    <section className="seccion-episodios">
      <HeaderDetalle />
      <select className="select-temporadas" onChange={handleChangeTemporada}>
        {opciones(
          cantidadDeTemporadas,
          titulosComunes[lenguajeSeleccionado].temporada
        )}
      </select>
      <div className="contenedor-episodios">
        {episodios.length === 0 && (
          <h3>{titulosComunes[lenguajeSeleccionado].noDisponible}</h3>
        )}
        {episodios.map((episodio) => (
          <CardEpisodio
            episodio={episodio}
            img={data.poster_path}
            key={episodio.id}
          />
        ))}
      </div>
    </section>
  );
};

export default EpisodiosSerie;
