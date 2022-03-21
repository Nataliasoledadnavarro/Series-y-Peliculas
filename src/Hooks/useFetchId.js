import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../contexto/Context";
import { urlBase, apiKey } from "../auxiliares/Variables";

const useFetchId = () => {
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const [resultado, setResultado] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${urlBase}/${params.tipo}/${params.id}?api_key=${apiKey}&language=${lenguajeSeleccionado}`)
      .then((res) => res.json())
      .then((data) => setResultado(data));
  }, [lenguajeSeleccionado, params.id, params.tipo]);

  return resultado
};

export default useFetchId;
